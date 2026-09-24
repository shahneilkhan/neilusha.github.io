/* NeilUsha V2 - frontend simulation (no backend). One script for all pages. */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const LANGS={en:'English',bn:'বাংলা',hi:'हिन्दी',es:'Español',ar:'العربية',ja:'日本語'};

/* ---------- UI text (en / bn / hi) ---------- */
const T={
en:{tagline:'Speak your language. Everyone hears theirs.',sub:'NeilUsha is a meeting room where each person talks in their native language and listens in the one they choose.',start:'Start a meeting',dash:'Dashboard',create:'Create meeting',join:'Join meeting',title:'Meeting title',code:'Meeting code',go:'Join',recent:'Recent meetings',none:'No meetings yet',chat:'Chat',people:'People',scenes:'Backgrounds',send:'Send',msg:'Type a message',settings:'Settings',name:'Your name',speak:'I speak',lang:'I hear',notif:'Notifications',caps:'Live captions',hear:'You hear',copied:'Link copied',f1:'Live translation',f2:'Custom backgrounds',f3:'Screen sharing',upload:'Upload image',demo:'Demo mode: video and translation are simulated',joined:'joined the meeting',sharing:'You are sharing your screen',stopped:'Screen sharing stopped',badcode:'Enter a valid meeting code',leaveq:'Leave this meeting?',blur:'Blur',bgset:'Background updated',login:'Log in',email:'Email',cont:'Continue',guest:'Continue as guest',fbnote:'Real sign-in will be added with Firebase later.',ready:'Ready to join?',joinnow:'Join now',camdenied:'Camera not allowed',hand:'raised a hand',notfound:'Page not found',notfoundsub:'Please check the link.',back:'Back to dashboard'},
bn:{tagline:'নিজের ভাষায় বলুন। সবাই নিজের ভাষায় শুনুন।',sub:'নীলউষা এমন একটি মিটিং রুম, যেখানে প্রত্যেকে মাতৃভাষায় কথা বলে এবং নিজের পছন্দের ভাষায় শোনে।',start:'মিটিং শুরু করুন',dash:'ড্যাশবোর্ড',create:'মিটিং তৈরি করুন',join:'মিটিংয়ে যোগ দিন',title:'মিটিংয়ের নাম',code:'মিটিং কোড',go:'যোগ দিন',recent:'সাম্প্রতিক মিটিং',none:'এখনো কোনো মিটিং নেই',chat:'চ্যাট',people:'অংশগ্রহণকারী',scenes:'ব্যাকগ্রাউন্ড',send:'পাঠান',msg:'বার্তা লিখুন',settings:'সেটিংস',name:'আপনার নাম',speak:'আমি বলি',lang:'আমি শুনি',notif:'নোটিফিকেশন',caps:'লাইভ ক্যাপশন',hear:'আপনি শুনছেন',copied:'লিংক কপি হয়েছে',f1:'লাইভ অনুবাদ',f2:'পছন্দমতো ব্যাকগ্রাউন্ড',f3:'স্ক্রিন শেয়ার',upload:'ছবি আপলোড করুন',demo:'ডেমো মোড: ভিডিও ও অনুবাদ নকল করে দেখানো হচ্ছে',joined:'মিটিংয়ে যোগ দিয়েছেন',sharing:'আপনি স্ক্রিন শেয়ার করছেন',stopped:'স্ক্রিন শেয়ার বন্ধ হয়েছে',badcode:'সঠিক মিটিং কোড দিন',leaveq:'মিটিং ছেড়ে যাবেন?',blur:'ব্লার',bgset:'ব্যাকগ্রাউন্ড বদলেছে',login:'লগ ইন',email:'ইমেইল',cont:'চালিয়ে যান',guest:'অতিথি হিসেবে চালিয়ে যান',fbnote:'আসল সাইন-ইন পরে Firebase দিয়ে যোগ হবে।',ready:'যোগ দিতে প্রস্তুত?',joinnow:'এখনই যোগ দিন',camdenied:'ক্যামেরার অনুমতি নেই',hand:'হাত তুলেছেন',notfound:'পেজটি পাওয়া যায়নি',notfoundsub:'লিংকটি ঠিক আছে কি না দেখুন।',back:'ড্যাশবোর্ডে ফিরুন'},
hi:{tagline:'अपनी भाषा में बोलिए। सब अपनी भाषा में सुनें।',sub:'नीलउषा ऐसा मीटिंग रूम है जहाँ हर कोई अपनी मातृभाषा में बोलता है और अपनी पसंद की भाषा में सुनता है।',start:'मीटिंग शुरू करें',dash:'डैशबोर्ड',create:'मीटिंग बनाएँ',join:'मीटिंग से जुड़ें',title:'मीटिंग का नाम',code:'मीटिंग कोड',go:'जुड़ें',recent:'हाल की मीटिंग',none:'अभी कोई मीटिंग नहीं',chat:'चैट',people:'प्रतिभागी',scenes:'बैकग्राउंड',send:'भेजें',msg:'संदेश लिखें',settings:'सेटिंग्स',name:'आपका नाम',speak:'मैं बोलता/बोलती हूँ',lang:'मैं सुनता/सुनती हूँ',notif:'नोटिफिकेशन',caps:'लाइव कैप्शन',hear:'आप सुन रहे हैं',copied:'लिंक कॉपी हो गया',f1:'लाइव अनुवाद',f2:'अपनी पसंद का बैकग्राउंड',f3:'स्क्रीन शेयरिंग',upload:'तस्वीर अपलोड करें',demo:'डेमो मोड: वीडियो और अनुवाद नकली हैं',joined:'मीटिंग में शामिल हुए',sharing:'आप स्क्रीन शेयर कर रहे हैं',stopped:'स्क्रीन शेयरिंग बंद हुई',badcode:'सही मीटिंग कोड दें',leaveq:'मीटिंग छोड़ें?',blur:'ब्लर',bgset:'बैकग्राउंड बदल गया',login:'लॉग इन',email:'ईमेल',cont:'जारी रखें',guest:'अतिथि के रूप में जारी रखें',fbnote:'असली साइन-इन बाद में Firebase से जुड़ेगा।',ready:'जुड़ने के लिए तैयार?',joinnow:'अभी जुड़ें',camdenied:'कैमरे की अनुमति नहीं',hand:'ने हाथ उठाया',notfound:'पेज नहीं मिला',notfoundsub:'लिंक सही है या नहीं जाँचें।',back:'डैशबोर्ड पर लौटें'}
};
const t=k=>(T[S.lang]||T.en)[k]||T.en[k]||k;

/* ---------- Settings (saved in this browser) ---------- */
const store={
  get(k,d){try{const v=localStorage.getItem('nu_'+k);return v===null?d:JSON.parse(v)}catch{return d}},
  set(k,v){try{localStorage.setItem('nu_'+k,JSON.stringify(v))}catch{}}
};
const S={name:store.get('name','You'),native:store.get('native','bn'),lang:store.get('lang','en'),notif:store.get('notif',true),caps:store.get('caps',true)};
function save(){['name','native','lang','notif','caps'].forEach(k=>store.set(k,S[k]));}

function toast(msg,force){
  if(!S.notif&&!force) return;
  const d=document.createElement('div'); d.className='toast'; d.textContent=msg;
  $('#toasts').appendChild(d); setTimeout(()=>d.remove(),3500);
}
function applyLang(){
  document.documentElement.lang=S.lang;
  $$('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
  $$('[data-ph]').forEach(e=>e.placeholder=t(e.dataset.ph));
  $$('[data-lang-select]').forEach(s=>s.value=S.lang);
  if($('#hearLang')) $('#hearLang').textContent=LANGS[S.lang];
}
function injectUI(){
  const opts=Object.entries(LANGS).map(([c,n])=>`<option value="${c}">${n}</option>`).join('');
  document.body.insertAdjacentHTML('beforeend',`<div id="toasts" aria-live="polite"></div>
  <dialog id="set"><form method="dialog" class="setbox"><h3>⚙️ <span data-i18n="settings"></span></h3>
  <label><span data-i18n="name"></span><input id="sName" maxlength="24"></label>
  <label><span data-i18n="speak"></span><select id="sNative">${opts}</select></label>
  <label><span data-i18n="lang"></span><select id="sLang">${opts}</select></label>
  <label class="row"><input type="checkbox" id="sNotif"><span data-i18n="notif"></span></label>
  <label class="row"><input type="checkbox" id="sCaps"><span data-i18n="caps"></span></label>
  <button class="btn">OK</button></form></dialog>`);
  $$('[data-lang-select]').forEach(s=>{s.innerHTML=opts;s.onchange=()=>setLang(s.value);});
  $('#sName').value=S.name; $('#sNative').value=S.native; $('#sLang').value=S.lang;
  $('#sNotif').checked=S.notif; $('#sCaps').checked=S.caps;
  $('#sName').oninput=e=>{S.name=e.target.value.trim()||'You';changed();};
  $('#sNative').onchange=e=>{S.native=e.target.value;changed();};
  $('#sLang').onchange=e=>setLang(e.target.value);
  $('#sNotif').onchange=e=>{S.notif=e.target.checked;changed();};
  $('#sCaps').onchange=e=>{S.caps=e.target.checked;changed();};
  $$('[data-open-settings]').forEach(b=>b.onclick=()=>$('#set').showModal());
}
function setLang(l){
  S.lang=l; if($('#sLang'))$('#sLang').value=l; changed();
  toast('🌍 '+LANGS[l]);
}
function changed(){save();applyLang();document.dispatchEvent(new Event('nu:change'));}

/* ---------- Dashboard ---------- */
function dashboard(){
  const gen=()=>{const r=n=>Array.from({length:n},()=>'abcdefghijkmnpqrstuvwxyz'[Math.random()*24|0]).join('');return r(3)+'-'+r(4)+'-'+r(3)};
  const go=(code,title)=>{
    const list=store.get('recent',[]).filter(x=>x.code!==code);
    list.unshift({code,title,t:Date.now()}); store.set('recent',list.slice(0,5));
    location.href='lobby.html?room='+encodeURIComponent(code);
  };
  $('#create').onclick=()=>go(gen(),$('#mtitle').value.trim()||'Untitled');
  $('#joinForm').onsubmit=e=>{
    e.preventDefault();
    const c=$('#jcode').value.trim().toLowerCase();
    if(c.length<5) return toast('⚠️ '+t('badcode'),true);
    go(c,c);
  };
  const list=store.get('recent',[]);
  $('#recent').innerHTML=list.length?list.map(x=>`<li><span>${x.title.replace(/</g,'&lt;')}<br><small>${x.code.replace(/</g,'&lt;')}</small></span><a class="btn line" href="lobby.html?room=${encodeURIComponent(x.code)}">${t('go')}</a></li>`).join(''):`<li><small>${t('none')}</small></li>`;
  document.addEventListener('nu:change',()=>dashboard.render&&0);
}

/* ---------- Meeting room (simulation) ---------- */
const SCENES={
  none:'linear-gradient(135deg,#14503c,#0b3b2c)',
  beach:'linear-gradient(#8fd3f4,#e8d9a8 70%,#f1c27d)',
  forest:'linear-gradient(#2d6a4f,#95d5b2)',
  office:'linear-gradient(135deg,#dfe7e2,#b8c5bd)',
  night:'linear-gradient(#0f2027,#2c5364)',
  sunset:'linear-gradient(#ff8a5b,#7a3e9d)'
};
const BLURBASE='repeating-linear-gradient(90deg,#c9d6cf 0 24px,#9fb2a7 24px 48px)';
const LINES={
  bn:[{o:'সবাইকে শুভ সকাল, শুরু করা যাক।',en:"Good morning everyone, let's begin.",hi:'सभी को सुप्रभात, शुरू करते हैं।'},{o:'আমি স্ক্রিনটা শেয়ার করছি।',en:"I'm sharing my screen.",hi:'मैं स्क्रीन शेयर कर रही हूँ।'}],
  ja:[{o:'資料をご確認ください。',en:'Please check the document.',bn:'নথিটি দেখে নিন।',hi:'कृपया दस्तावेज़ देखें।'},{o:'質問はありますか？',en:'Any questions?',bn:'কোনো প্রশ্ন আছে?',hi:'कोई सवाल है?'}],
  es:[{o:'Me parece una gran idea.',en:"I think it's a great idea.",bn:'আমার কাছে এটা দারুণ আইডিয়া মনে হচ্ছে।',hi:'मुझे यह बहुत अच्छा विचार लगता है।'},{o:'Podemos verlo mañana.',en:'We can look at it tomorrow.',bn:'আমরা এটা আগামীকাল দেখতে পারি।',hi:'हम इसे कल देख सकते हैं।'}]
};
function meeting(){
  const room=new URLSearchParams(location.search).get('room')||'demo-room-000';
  $('#roomCode').textContent=room;
  let mic=store.get('mic',true),cam=store.get('cam',true),myHand=false,sharing=false,scene='none',blur=false,customBg=null,unread=0,panelTab=null,spk=0;
  const others=[{id:'a',name:'Ayesha',native:'bn',bg:SCENES.forest},{id:'k',name:'Kenji',native:'ja',bg:SCENES.night},{id:'s',name:'Sofia',native:'es',bg:SCENES.sunset}];
  let people=[{id:'me',name:S.name,native:S.native,me:true}];

  const myBg=()=>blur?BLURBASE:customBg?`center/cover url(${customBg})`:SCENES[scene];
  function render(){
    people[0].name=S.name; people[0].native=S.native; people[0].hand=myHand;
    $('#grid').innerHTML=people.map(p=>{
      const isMe=p.me, on=isMe?cam:true, m=isMe?mic:true;
      return `<div class="tile ${on?'':'camoff'}" data-id="${p.id}">
        <div class="bg ${isMe&&blur?'blur':''}" style="background:${isMe?myBg():p.bg}"></div>
        <div class="avatar">${on?p.name[0].toUpperCase():'📷'}</div>${p.hand?'<span class="hand">✋</span>':''}
        <span class="tag">${m?'🎤':'🔇'} ${isMe?p.name+' ('+t('hear').split(' ')[0]+')':p.name}</span>
        <span class="lchip">🗣️ ${LANGS[p.native]}${isMe?'':' → '+LANGS[S.lang]}</span></div>`;
    }).join('');
    $('#tab-people').innerHTML=people.map(p=>`<div>${p.me?'⭐ ':''}${p.name} · ${LANGS[p.native]} ${p.me?(mic?'🎤':'🔇'):'🎤'}</div>`).join('');
    $('#mic').classList.toggle('off',!mic); $('#mic').textContent=mic?'🎤':'🔇';
    $('#cam').classList.toggle('off',!cam);
    $('#ccBtn').classList.toggle('on',S.caps);
    if(!S.caps) $('#caption').hidden=true;
  }

  /* controls */
  $('#mic').onclick=()=>{mic=!mic;render();};
  $('#cam').onclick=()=>{cam=!cam;render();};
  function fly(e){const d=document.createElement('div');d.className='fly';d.textContent=e;d.style.left=(15+Math.random()*70)+'%';$('#fly').appendChild(d);setTimeout(()=>d.remove(),2300);}
  $('#handBtn').onclick=()=>{myHand=!myHand;$('#handBtn').classList.toggle('on',myHand);render();};
  $('#reactBtn').onclick=()=>{$('#reacts').hidden=!$('#reacts').hidden;};
  $$('#reacts button').forEach(b=>b.onclick=()=>{fly(b.textContent);$('#reacts').hidden=true;});
  $('#ccBtn').onclick=()=>{S.caps=!S.caps;changed();};
  $('#shareBtn').onclick=()=>{
    sharing=!sharing;
    $('#share').hidden=!sharing; $('#stage').classList.toggle('sharing',sharing);
    $('#shareBtn').classList.toggle('on',sharing);
    toast('🖥️ '+t(sharing?'sharing':'stopped'));
  };
  $('#copy').onclick=async()=>{try{await navigator.clipboard.writeText(location.href);}catch{} toast('🔗 '+t('copied'),true);};
  $('#leave').onclick=()=>{if(confirm(t('leaveq')))location.href='dashboard.html';};

  /* side panel: chat / people / backgrounds */
  function openPanel(tab){
    if(panelTab===tab){panelTab=null;$('#panel').hidden=true;return;}
    panelTab=tab; $('#panel').hidden=false;
    $$('[data-tab]').forEach(b=>b.classList.toggle('on',b.dataset.tab===tab));
    $$('[data-body]').forEach(b=>b.hidden=b.dataset.body!==tab);
    if(tab==='chat'){unread=0;$('#badge').hidden=true;}
  }
  $$('[data-open]').forEach(b=>b.onclick=()=>openPanel(b.dataset.open));
  $$('[data-tab]').forEach(b=>b.onclick=()=>{panelTab=null;openPanel(b.dataset.tab);});

  /* backgrounds */
  function buildScenes(){
    $('#scenes').innerHTML=Object.keys(SCENES).map(k=>`<button data-s="${k}" class="${!blur&&!customBg&&scene===k?'on':''}" style="background:${SCENES[k]}">${k}</button>`).join('')
      +`<button data-s="blur" class="${blur?'on':''}" style="background:${BLURBASE};filter:blur(.5px)">${t('blur')}</button>`;
    $$('#scenes button').forEach(b=>b.onclick=()=>{
      const k=b.dataset.s; customBg=null;
      blur=k==='blur'; if(!blur)scene=k;
      buildScenes(); render(); toast('🎨 '+t('bgset'));
    });
  }
  $('#bgFile').onchange=e=>{
    const f=e.target.files[0]; if(!f) return;
    customBg=URL.createObjectURL(f); blur=false; buildScenes(); render(); toast('🎨 '+t('bgset'));
  };

  /* chat */
  function addMsg(from,text,note,me){
    const d=document.createElement('div'); d.className='msg'+(me?' me':'');
    d.innerHTML='<b></b><p></p><small></small>';
    d.children[0].textContent=from; d.children[1].textContent=text; d.children[2].textContent=note||'';
    $('#msgs').appendChild(d); $('#msgs').scrollTop=1e6;
    if(!me&&panelTab!=='chat'){unread++;$('#badge').textContent=unread;$('#badge').hidden=false;toast('✉️ '+from);}
  }
  const tr=(line,p)=>p.native===S.lang?{text:line.o,note:''}:{text:line[S.lang]||line.en,note:'🌍 '+LANGS[p.native]+' → '+LANGS[S.lang]+(line[S.lang]?'':' (EN)')};
  $('#chatForm').onsubmit=e=>{
    e.preventDefault();
    const v=$('#chatIn').value.trim(); if(!v) return;
    addMsg(S.name,v,'',true); $('#chatIn').value='';
    setTimeout(()=>{
      const p=people.filter(x=>!x.me); if(!p.length) return;
      const who=p[Math.random()*p.length|0], line=LINES[who.native][Math.random()*2|0], r=tr(line,who);
      addMsg(who.name,r.text,r.note);
    },1600);
  };

  /* simulated join, speaking and live captions */
  others.forEach((p,i)=>setTimeout(()=>{people.push(p);render();toast('👋 '+p.name+' '+t('joined'));},1200*(i+1)));
  setInterval(()=>{
    const p=people.filter(x=>!x.me); if(!p.length) return;
    const who=p[spk++%p.length], line=LINES[who.native][Math.random()*2|0], r=tr(line,who);
    const tile=$(`[data-id="${who.id}"]`); if(tile){tile.classList.add('speaking');setTimeout(()=>tile.classList.remove('speaking'),3000);}
    if(S.caps){
      const c=$('#caption'); c.hidden=false;
      c.innerHTML=`<small></small><div class="o"></div><div class="tr"></div>`;
      c.children[0].textContent=who.name+' · 🗣️ '+LANGS[who.native];
      c.children[1].textContent=r.note?line.o:'';
      c.children[2].textContent=(r.note?'🌍 ':'')+r.text;
      setTimeout(()=>{c.hidden=true;},3600);
    }
  },5000);

  /* simulated hand raises and reactions from others */
  setInterval(()=>{
    const p=people.filter(x=>!x.me); if(!p.length) return;
    const w=p[Math.random()*p.length|0];
    if(Math.random()<.5){w.hand=!w.hand;render();if(w.hand)toast('✋ '+w.name+' '+t('hand'));}
    else fly(['👍','👏','😄','🎉'][Math.random()*4|0]);
  },9000);

  /* timer */
  const t0=Date.now();
  setInterval(()=>{const s=(Date.now()-t0)/1000|0;$('#timer').textContent=String(s/60|0).padStart(2,'0')+':'+String(s%60).padStart(2,'0');},1000);

  document.addEventListener('nu:change',render);
  buildScenes(); render();
  addMsg('NeilUsha','👋 '+room,'');
}

/* ---------- Login (frontend only, Firebase later) ---------- */
function login(){
  $('#lname2').value=store.get('user',{}).name||'';
  $('#loginForm').onsubmit=e=>{
    e.preventDefault();
    const n=$('#lname2').value.trim(); if(!n) return;
    S.name=n; save(); store.set('user',{name:n,email:$('#lemail').value.trim()});
    location.href='dashboard.html';
  };
  $('#guest').onclick=()=>{location.href='dashboard.html';};
}

/* ---------- Lobby: camera preview before joining ---------- */
function lobby(){
  const room=new URLSearchParams(location.search).get('room')||'demo-room-000';
  $('#lcode').textContent=room;
  let mic=store.get('mic',true),cam=store.get('cam',true),stream=null;
  const v=$('#lv');
  function paint(){
    $('#lmic').textContent=mic?'🎤':'🔇'; $('#lmic').classList.toggle('off',!mic);
    $('#lcam').classList.toggle('off',!cam);
    v.hidden=!cam; $('#lav').hidden=cam; $('#lav').textContent=(S.name[0]||'?').toUpperCase();
  }
  async function startCam(){
    if(stream){stream.getTracks().forEach(x=>x.stop());stream=null;}
    v.srcObject=null;
    if(cam){
      try{stream=await navigator.mediaDevices.getUserMedia({video:true});v.srcObject=stream;}
      catch{cam=false;toast('📷 '+t('camdenied'),true);}
    }
    paint();
  }
  $('#lmic').onclick=()=>{mic=!mic;paint();};
  $('#lcam').onclick=()=>{cam=!cam;startCam();};
  $('#lname').value=S.name;
  $('#lname').oninput=e=>{S.name=e.target.value.trim()||'You';save();paint();};
  $('#ljoin').onclick=()=>{
    store.set('mic',mic); store.set('cam',cam);
    if(stream)stream.getTracks().forEach(x=>x.stop());
    location.href='meeting.html?room='+encodeURIComponent(room);
  };
  startCam();
}

/* ---------- Boot ---------- */
const themeApply=()=>{document.documentElement.dataset.theme=store.get('theme','light');};
themeApply();
injectUI(); applyLang();
if($('#themeBtn'))$('#themeBtn').onclick=()=>{store.set('theme',store.get('theme','light')==='light'?'dark':'light');themeApply();};
const page=document.body.dataset.page;
if(page==='dashboard') dashboard();
if(page==='meeting') meeting();
if(page==='lobby') lobby();
if(page==='login') login();
