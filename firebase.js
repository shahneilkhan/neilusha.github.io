/* NeilUsha — Firebase layer (Auth + Firestore). Loaded after firebase-config.js. */
(function(){
  const cfg = window.NEILUSHA_FIREBASE_CONFIG || {};
  const ready = cfg.apiKey && cfg.apiKey !== "REPLACE_ME";
  window.NU_FB_READY = ready;
  if(!ready){
    console.warn("NeilUsha: Firebase config not filled in yet (firebase-config.js). Running in local-only demo mode.");
    window.nuAuth = null; window.nuDb = null;
    return;
  }
  firebase.initializeApp(cfg);
  const auth = firebase.auth();
  const db = firebase.firestore();
  window.nuAuth = auth;
  window.nuDb = db;

  window.nuSignInGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  window.nuSignInGuest = (name) => auth.signInAnonymously().then(cred=>{
    return cred.user.updateProfile({displayName:name}).then(()=>cred);
  });
  window.nuSignOut = () => auth.signOut();
  window.nuOnAuth = (cb) => auth.onAuthStateChanged(cb);

  /* Rooms */
  window.nuCreateRoom = async (code,title,uid)=>{
    await db.collection('rooms').doc(code).set({
      title, createdBy: uid, createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }, {merge:true});
    return code;
  };
  window.nuRoomExists = async (code)=>{
    const d = await db.collection('rooms').doc(code).get();
    return d.exists;
  };

  /* Presence: one doc per participant, refreshed every 20s, removed on leave */
  window.nuJoinRoom = (roomId,uid,data)=>{
    const ref = db.collection('rooms').doc(roomId).collection('participants').doc(uid);
    ref.set({...data, lastSeen: firebase.firestore.FieldValue.serverTimestamp()}, {merge:true});
    const t = setInterval(()=>ref.set({lastSeen: firebase.firestore.FieldValue.serverTimestamp()}, {merge:true}), 20000);
    window.addEventListener('beforeunload', ()=>ref.delete());
    return { ref, stop:()=>{clearInterval(t); ref.delete();} };
  };
  window.nuWatchParticipants = (roomId,cb)=>{
    return db.collection('rooms').doc(roomId).collection('participants')
      .onSnapshot(snap=>{
        const now = Date.now();
        const list = snap.docs.map(d=>({id:d.id,...d.data()}))
          .filter(p=>!p.lastSeen || now - p.lastSeen.toMillis() < 40000); // drop stale (>40s silent)
        cb(list);
      });
  };
  window.nuSetPresenceField = (roomId,uid,fields)=>{
    db.collection('rooms').doc(roomId).collection('participants').doc(uid).set(fields,{merge:true});
  };

  /* Chat */
  window.nuSendMessage = (roomId,uid,name,text)=>{
    return db.collection('rooms').doc(roomId).collection('messages').add({
      uid, name, text, at: firebase.firestore.FieldValue.serverTimestamp()
    });
  };
  window.nuWatchMessages = (roomId,cb)=>{
    return db.collection('rooms').doc(roomId).collection('messages')
      .orderBy('at','asc').limitToLast(100)
      .onSnapshot(snap=>{
        cb(snap.docChanges().filter(c=>c.type==='added').map(c=>({id:c.doc.id,...c.doc.data()})));
      });
  };
})();
