/* NeilUsha V2 - frontend simulation (no backend). One script for all pages. */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const LANGS={en:'English',bn:'বাংলা',hi:'हिन्दी',es:'Español',ar:'العربية',ja:'日本語'};

/* ---------- UI text (en / bn / hi) ---------- */
const T={
en:{tagline:'Speak your language. Everyone hears theirs.',sub:'NeilUsha is a meeting room where each person talks in their native language and listens in the one they choose.',start:'Start a meeting',dash:'Dashboard',create:'Create meeting',join:'Join meeting',title:'Meeting title',code:'Meeting code',go:'Join',recent:'Recent meetings',none:'No meetings yet',chat:'Chat',people:'People',scenes:'Backgrounds',send:'Send',msg:'Type a message',settings:'Settings',name:'Your name',speak:'I speak',lang:'I hear',notif:'Notifications',caps:'Live captions',hear:'You hear',copied:'Link copied',f1:'Live translation',f2:'Custom backgrounds',f3:'Screen sharing',upload:'Upload image',demo:'Demo mode: video and translation are simulated',joined:'joined the meeting',sharing:'You are sharing your screen',stopped:'Screen sharing stopped',badcode:'Enter a valid meeting code',leaveq:'Leave this meeting?',blur:'Blur',bgset:'Background updated',login:'Log in',email:'Email',cont:'Continue',guest:'Continue as guest',fbnote:'Real sign-in will be added with Firebase later.',ready:'Ready to join?',joinnow:'Join now',camdenied:'Camera not allowed',hand:'raised a hand',notfound:'Page not found',notfoundsub:'Please check the link.',back:'Back to dashboard'},
bn:{tagline:'নিজের ভাষায় বলুন। সবাই নিজের ভাষায় শুনুন।',sub:'নীলউষা এমন একটি মিটিং রুম, যেখানে প্রত্যেকে মাতৃভাষায় কথা বলে এবং নিজের পছন্দের ভাষায় শোনে।',start:'মিটিং শুরু করুন',dash:'ড্যাশবোর্ড',create:'মিটিং তৈরি করুন',join:'মিটিংয়ে যোগ দিন',title:'মিটিংয়ের নাম',code:'মিটিং কোড',go:'যোগ দিন',recent:'সাম্প্রতিক মিটিং',none:'এখনো কোনো মিটিং নেই',chat:'চ্যাট',people:'অংশগ্রহণকারী',scenes:'ব্যাকগ্রাউন্ড',send:'পাঠান',msg:'বার্তা লিখুন',settings:'সেটিংস',name:'আপনার নাম',speak:'আমি বলি',lang:'আমি শুনি',notif:'নোটিফিকেশন',caps:'লাইভ ক্যাপশন',hear:'আপনি শুনছেন',copied:'লিংক কপি হয়েছে',f1:'লাইভ অনুবাদ',f2:'পছন্দমতো ব্যাকগ্রাউন্ড',f3:'স্ক্রিন শেয়ার',upload:'ছবি আপলোড করুন',demo:'ডেমো মোড: ভিডিও ও অনুবাদ নকল করে দেখানো হচ্ছে',joined:'মিটিংয়ে যোগ দিয়েছেন',sharing:'আপনি স্ক্রিন শেয়ার করছেন',stopped:'স্ক্রিন শেয়ার বন্ধ হয়েছে',badcode:'সঠিক মিটিং কোড দিন',leaveq:'মিটিং ছেড়ে যাবেন?',blur:'ব্লার',bgset:'ব্যাকগ্রাউন্ড বদলেছে',login:'লগ ইন',email:'ইমেইল',cont:'চালিয়ে যান',guest:'অতিথি হিসেবে চালিয়ে যান',fbnote:'আসল সাইন-ইন পরে Firebase দিয়ে যোগ হবে।',ready:'যোগ দিতে প্রস্তুত?',joinnow:'এখনই যোগ দিন',camdenied:'ক্যামেরার অনুমতি নেই',hand:'হাত তুলেছেন',notfound:'পেজটি পাওয়া যায়নি',notfoundsub:'লিংকটি ঠিক আছে কি না দেখুন।',back:'ড্যাশবোর্ডে ফিরুন'},
hi:{tagline:'अपनी भाषा में बोलिए। सब अपनी भाषा में सुनें।',sub:'नीलउषा ऐसा मीटिंग रूम है जहाँ हर कोई अपनी मातृभाषा में बोलता है और अपनी पसंद की भाषा में सुनता है।',start:'मीटिंग शुरू करें',dash:'डैशबोर्ड',create:'मीटिंग बनाएँ',join:'मीटिंग से जुड़ें',title:'मीटिंग का नाम',code:'मीटिंग कोड',go:'जुड़ें',recent:'हाल की मीटिंग',none:'अभी कोई मीटिंग नहीं',chat:'चैट',people:'प्रतिभागी',scenes:'बैकग्राउंड',send:'भेजें',msg:'संदेश लिखें',settings:'सेटिंग्स',name:'आपका नाम',speak:'मैं बोलता/बोलती हूँ',lang:'मैं सुनता/सुनती हूँ',notif:'नोटिफिकेशन',caps:'लाइव कैप्शन',hear:'आप सुन रहे हैं',copied:'लिंक कॉपी हो गया',f1:'लाइव अनुवाद',f2:'अपनी पसंद का बैकग्राउंड',f3:'स्क्रीन शेयरिंग',upload:'तस्वीर अपलोड करें',demo:'डेमो मोड: वीडियो और अनुवाद नकली हैं',joined:'मीटिंग में शामिल हुए',sharing:'आप स्क्रीन शेयर कर रहे हैं',stopped:'स्क्रीन शेयरिंग बंद हुई',badcode:'सही मीटिंग कोड दें',leaveq:'मीटिंग छोड़ें?',blur:'ब्लर',bgset:'बैकग्राउंड बदल गया',login:'लॉग इन',email:'ईमेल',cont:'जारी रखें',guest:'अतिथि के रूप में जारी रखें',fbnote:'असली साइन-इन बाद में Firebase से जुड़ेगा।',ready:'जुड़ने के लिए तैयार?',joinnow:'अभी जुड़ें',camdenied:'कैमरे की अनुमति नहीं',hand:'ने हाथ उठाया',notfound:'पेज नहीं मिला',notfoundsub:'लिंक सही है या नहीं जाँचें।',back:'डैशबोर्ड पर लौटें'}
,
es:{tagline:'Habla tu idioma. Todos escuchan el suyo.',sub:'NeilUsha es una sala de reuniones donde cada persona habla en su idioma natal y escucha en el que elija.',start:'Iniciar una reunión',dash:'Panel',create:'Crear reunión',join:'Unirse a reunión',title:'Título de la reunión',code:'Código de reunión',go:'Unirse',recent:'Reuniones recientes',none:'Aún no hay reuniones',chat:'Chat',people:'Participantes',scenes:'Fondos',send:'Enviar',msg:'Escribe un mensaje',settings:'Configuración',name:'Tu nombre',speak:'Yo hablo',lang:'Yo escucho',notif:'Notificaciones',caps:'Subtítulos en vivo',hear:'Estás escuchando',copied:'Enlace copiado',f1:'Traducción en vivo',f2:'Fondos personalizados',f3:'Compartir pantalla',upload:'Subir imagen',demo:'Modo demo: video y traducción son simulados',joined:'se unió a la reunión',sharing:'Estás compartiendo tu pantalla',stopped:'Se detuvo el uso compartido',badcode:'Ingresa un código válido',leaveq:'¿Salir de esta reunión?',blur:'Desenfoque',bgset:'Fondo actualizado',login:'Iniciar sesión',email:'Correo',cont:'Continuar',guest:'Continuar como invitado',fbnote:'El inicio de sesión real se añadirá con Firebase más adelante.',ready:'¿Listo para unirte?',joinnow:'Unirse ahora',camdenied:'Cámara no permitida',hand:'levantó la mano',notfound:'Página no encontrada',notfoundsub:'Por favor revisa el enlace.',back:'Volver al panel'},
ar:{tagline:'تحدث بلغتك. الجميع يستمع بلغته.',sub:'نيل أوشا غرفة اجتماعات يتحدث فيها كل شخص بلغته الأم ويستمع باللغة التي يختارها.',start:'ابدأ اجتماعًا',dash:'لوحة التحكم',create:'إنشاء اجتماع',join:'الانضمام إلى اجتماع',title:'عنوان الاجتماع',code:'رمز الاجتماع',go:'انضمام',recent:'الاجتماعات الأخيرة',none:'لا توجد اجتماعات بعد',chat:'الدردشة',people:'المشاركون',scenes:'الخلفيات',send:'إرسال',msg:'اكتب رسالة',settings:'الإعدادات',name:'اسمك',speak:'أنا أتحدث',lang:'أنا أستمع',notif:'الإشعارات',caps:'ترجمة نصية مباشرة',hear:'أنت تستمع',copied:'تم نسخ الرابط',f1:'ترجمة فورية',f2:'خلفيات مخصصة',f3:'مشاركة الشاشة',upload:'رفع صورة',demo:'وضع تجريبي: الفيديو والترجمة محاكاة',joined:'انضم إلى الاجتماع',sharing:'أنت تشارك شاشتك',stopped:'توقفت مشاركة الشاشة',badcode:'أدخل رمز اجتماع صحيح',leaveq:'مغادرة هذا الاجتماع؟',blur:'ضبابية',bgset:'تم تحديث الخلفية',login:'تسجيل الدخول',email:'البريد الإلكتروني',cont:'متابعة',guest:'المتابعة كضيف',fbnote:'سيتم إضافة تسجيل الدخول الحقيقي لاحقًا عبر Firebase.',ready:'هل أنت مستعد للانضمام؟',joinnow:'انضم الآن',camdenied:'الكاميرا غير مسموحة',hand:'رفع يده',notfound:'الصفحة غير موجودة',notfoundsub:'يرجى التحقق من الرابط.',back:'العودة إلى لوحة التحكم'},
ja:{tagline:'自分の言語で話そう。みんな自分の言語で聞く。',sub:'NeilUshaは、それぞれが母語で話し、選んだ言語で聞くミーティングルームです。',start:'ミーティングを開始',dash:'ダッシュボード',create:'ミーティングを作成',join:'ミーティングに参加',title:'ミーティング名',code:'ミーティングコード',go:'参加',recent:'最近のミーティング',none:'まだミーティングがありません',chat:'チャット',people:'参加者',scenes:'背景',send:'送信',msg:'メッセージを入力',settings:'設定',name:'お名前',speak:'話す言語',lang:'聞く言語',notif:'通知',caps:'ライブ字幕',hear:'聞いている言語',copied:'リンクをコピーしました',f1:'リアルタイム翻訳',f2:'カスタム背景',f3:'画面共有',upload:'画像をアップロード',demo:'デモモード：映像と翻訳はシミュレーションです',joined:'ミーティングに参加しました',sharing:'画面を共有しています',stopped:'画面共有を停止しました',badcode:'正しいミーティングコードを入力してください',leaveq:'このミーティングを退出しますか？',blur:'ぼかし',bgset:'背景を更新しました',login:'ログイン',email:'メール',cont:'続ける',guest:'ゲストとして続ける',fbnote:'実際のログインは後でFirebaseと連携します。',ready:'参加する準備はできましたか？',joinnow:'今すぐ参加',camdenied:'カメラが許可されていません',hand:'挙手しました',notfound:'ページが見つかりません',notfoundsub:'リンクをご確認ください。',back:'ダッシュボードに戻る'}
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
  document.documentElement.dir=S.lang==='ar'?'rtl':'ltr';
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

/* ---------- Auth guard: pages that need a signed-in user ----------
   Firebase configured -> real check, redirect to login if signed out.
   Firebase not configured yet -> demo mode, a local id is used so
   the rest of the app (dashboard/meeting) still works unchanged. */
function localUid(){
  let id=store.get('localUid',null);
  if(!id){id='local-'+Math.random().toString(36).slice(2,10);store.set('localUid',id);}
  return id;
}
function requireUser(cb){
  if(window.NU_FB_READY && window.nuAuth){
    window.nuOnAuth(u=>{
      if(!u){location.href='login.html';return;}
      if(u.displayName) S.name=S.name==='You'?u.displayName:S.name;
      cb(u);
    });
  } else {
    cb(null);
  }
}

/* ---------- Dashboard ---------- */
function dashboard(){
  requireUser(user=>{
    const uid=user?user.uid:localUid();
    const gen=()=>{const r=n=>Array.from({length:n},()=>'abcdefghijkmnpqrstuvwxyz'[Math.random()*24|0]).join('');return r(3)+'-'+r(4)+'-'+r(3)};
    const go=async(code,title,isNew)=>{
      if(window.NU_FB_READY && window.nuDb){
        try{
          if(isNew) await nuCreateRoom(code,title,uid);
          else if(!(await nuRoomExists(code))) return toast('⚠️ '+t('badcode'),true);
        }catch(e){return toast('⚠️ '+e.message,true);}
      }
      const list=store.get('recent',[]).filter(x=>x.code!==code);
      list.unshift({code,title,t:Date.now()}); store.set('recent',list.slice(0,5));
      location.href='lobby.html?room='+encodeURIComponent(code);
    };
    $('#create').onclick=()=>go(gen(),$('#mtitle').value.trim()||'Untitled',true);
    $('#joinForm').onsubmit=e=>{
      e.preventDefault();
      const c=$('#jcode').value.trim().toLowerCase();
      if(c.length<5) return toast('⚠️ '+t('badcode'),true);
      go(c,c,false);
    };
    const list=store.get('recent',[]);
    $('#recent').innerHTML=list.length?list.map(x=>`<li><span>${x.title.replace(/</g,'&lt;')}<br><small>${x.code.replace(/</g,'&lt;')}</small></span><a class="btn line" href="lobby.html?room=${encodeURIComponent(x.code)}">${t('go')}</a></li>`).join(''):`<li><small>${t('none')}</small></li>`;
  });
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
  bn:[{o:'সবাইকে শুভ সকাল, শুরু করা যাক।',en:"Good morning everyone, let's begin.",hi:'सभी को सुप्रभात, शुरू करते हैं।',es:'Buenos días a todos, comencemos.',ar:'صباح الخير للجميع، لنبدأ.',ja:'皆さんおはようございます、始めましょう。'},{o:'আমি স্ক্রিনটা শেয়ার করছি।',en:"I'm sharing my screen.",hi:'मैं स्क्रीन शेयर कर रही हूँ।',es:'Estoy compartiendo mi pantalla.',ar:'أنا أشارك شاشتي.',ja:'画面を共有しています。'}],
  ja:[{o:'資料をご確認ください。',en:'Please check the document.',bn:'নথিটি দেখে নিন।',hi:'कृपया दस्तावेज़ देखें।',es:'Por favor revisen el documento.',ar:'يرجى مراجعة المستند.'},{o:'質問はありますか？',en:'Any questions?',bn:'কোনো প্রশ্ন আছে?',hi:'कोई सवाल है?',es:'¿Alguna pregunta?',ar:'هل لديكم أسئلة؟'}],
  es:[{o:'Me parece una gran idea.',en:"I think it's a great idea.",bn:'আমার কাছে এটা দারুণ আইডিয়া মনে হচ্ছে।',hi:'मुझे यह बहुत अच्छा विचार लगता है।',ar:'أعتقد أنها فكرة رائعة.',ja:'とても良い考えだと思います。'},{o:'Podemos verlo mañana.',en:'We can look at it tomorrow.',bn:'আমরা এটা আগামীকাল দেখতে পারি।',hi:'हम इसे कल देख सकते हैं।',ar:'يمكننا مراجعتها غدًا.',ja:'明日それを見ましょう。'}],
  ar:[{o:'أعتقد أننا يجب أن نبدأ الآن.',en:'I think we should start now.',bn:'আমার মনে হয় এখনই শুরু করা উচিত।',hi:'मुझे लगता है हमें अभी शुरू करना चाहिए।',es:'Creo que deberíamos empezar ahora.',ja:'今すぐ始めるべきだと思います。'},{o:'هل يمكنكم سماعي جيدًا؟',en:'Can you hear me well?',bn:'আপনারা কি ভালোভাবে শুনতে পাচ্ছেন?',hi:'क्या आप मुझे ठीक से सुन पा रहे हैं?',es:'¿Me escuchan bien?',ja:'よく聞こえますか？'}]
};
function sceneFor(id){const keys=Object.keys(SCENES);let h=0;for(const c of String(id))h=(h*31+c.charCodeAt(0))>>>0;return SCENES[keys[h%keys.length]];}

function meeting(){
 requireUser(user=>{
  const room=new URLSearchParams(location.search).get('room')||'demo-room-000';
  $('#roomCode').textContent=room;
  const live=window.NU_FB_READY && window.nuDb;
  const uid=user?user.uid:localUid();
  let mic=store.get('mic',true),cam=store.get('cam',true),myHand=false,sharing=false,scene='none',blur=false,customBg=null,unread=0,panelTab=null,spk=0;
  let people=[{id:uid,name:S.name,native:S.native,me:true}];
  let presence=null, unsubP=null, unsubM=null;

  const myBg=()=>blur?BLURBASE:customBg?`center/cover url(${customBg})`:SCENES[scene];
  function render(){
    people[0].name=S.name; people[0].native=S.native; people[0].hand=myHand;
    $('#grid').innerHTML=people.map(p=>{
      const isMe=p.me, on=isMe?cam:(p.cam!==undefined?p.cam:true), m=isMe?mic:(p.mic!==undefined?p.mic:true);
      return `<div class="tile ${on?'':'camoff'}" data-id="${p.id}">
        <div class="bg ${isMe&&blur?'blur':''}" style="background:${isMe?myBg():(p.bg||sceneFor(p.id))}"></div>
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
  $('#mic').onclick=()=>{mic=!mic;if(live)nuSetPresenceField(room,uid,{mic});render();};
  $('#cam').onclick=()=>{cam=!cam;if(live)nuSetPresenceField(room,uid,{cam});render();};
  function fly(e){const d=document.createElement('div');d.className='fly';d.textContent=e;d.style.left=(15+Math.random()*70)+'%';$('#fly').appendChild(d);setTimeout(()=>d.remove(),2300);}
  $('#handBtn').onclick=()=>{myHand=!myHand;if(live)nuSetPresenceField(room,uid,{hand:myHand});$('#handBtn').classList.toggle('on',myHand);render();};
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
  $('#leave').onclick=()=>{
    if(!confirm(t('leaveq'))) return;
    if(presence) presence.stop();
    if(unsubP) unsubP(); if(unsubM) unsubM();
    location.href='dashboard.html';
  };

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
    if(live){
      nuSendMessage(room,uid,S.name,v).catch(err=>toast('⚠️ '+err.message,true));
    } else {
      setTimeout(()=>{
        const p=people.filter(x=>!x.me); if(!p.length) return;
        const who=p[Math.random()*p.length|0], line=LINES[who.native][Math.random()*2|0], r=tr(line,who);
        addMsg(who.name,r.text,r.note);
      },1600);
    }
  };

  if(live){
    /* real people, real chat, via Firestore */
    presence=nuJoinRoom(room,uid,{name:S.name,native:S.native,hand:false,mic,cam});
    unsubP=nuWatchParticipants(room,list=>{
      const wasCount=people.length;
      people=[people[0],...list.filter(p=>p.id!==uid).map(p=>({id:p.id,name:p.name||'Guest',native:p.native||'en',hand:!!p.hand,mic:p.mic,cam:p.cam,me:false}))];
      if(people.length>wasCount) toast('👋 '+(people[people.length-1].name)+' '+t('joined'));
      render();
    });
    unsubM=nuWatchMessages(room,added=>{added.forEach(m=>{if(m.uid!==uid) addMsg(m.name,m.text,'');});});
  } else {
    /* demo mode: no backend configured yet -> simulated participants */
    const others=[{id:'a',name:'Ayesha',native:'bn',bg:SCENES.forest},{id:'k',name:'Kenji',native:'ja',bg:SCENES.night},{id:'s',name:'Sofia',native:'es',bg:SCENES.sunset}];
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
    setInterval(()=>{
      const p=people.filter(x=>!x.me); if(!p.length) return;
      const w=p[Math.random()*p.length|0];
      if(Math.random()<.5){w.hand=!w.hand;render();if(w.hand)toast('✋ '+w.name+' '+t('hand'));}
      else fly(['👍','👏','😄','🎉'][Math.random()*4|0]);
    },9000);
  }

  /* timer */
  const t0=Date.now();
  setInterval(()=>{const s=(Date.now()-t0)/1000|0;$('#timer').textContent=String(s/60|0).padStart(2,'0')+':'+String(s%60).padStart(2,'0');},1000);

  document.addEventListener('nu:change',render);
  buildScenes(); render();
  addMsg('NeilUsha','👋 '+room,'');
 });
}

/* ---------- Login ---------- */
function login(){
  $('#lname2').value=store.get('user',{}).name||S.name||'';
  if(window.NU_FB_READY && window.nuAuth){
    if($('#fbnote'))$('#fbnote').hidden=true;
    window.nuOnAuth(u=>{if(u) location.href='dashboard.html';});
    const goAuth=(p)=>p.then(cred=>{S.name=cred.user.displayName||S.name;save();location.href='dashboard.html';})
      .catch(err=>toast('⚠️ '+err.message,true));
    if($('#google')) $('#google').onclick=()=>goAuth(window.nuSignInGoogle());
    $('#loginForm').onsubmit=e=>{
      e.preventDefault();
      const n=$('#lname2').value.trim(); if(!n) return;
      S.name=n; save(); goAuth(window.nuSignInGuest(n));
    };
    $('#guest').onclick=()=>{
      const n=$('#lname2').value.trim()||S.name||'Guest';
      S.name=n; save(); goAuth(window.nuSignInGuest(n));
    };
  } else {
    $('#loginForm').onsubmit=e=>{
      e.preventDefault();
      const n=$('#lname2').value.trim(); if(!n) return;
      S.name=n; save(); store.set('user',{name:n,email:$('#lemail').value.trim()});
      location.href='dashboard.html';
    };
    $('#guest').onclick=()=>{location.href='dashboard.html';};
  }
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
