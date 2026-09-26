/* NeilUsha V2 - frontend simulation (no backend). One script for all pages. */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const LANGS={en:'English',bn:'বাংলা',hi:'हिन्दी',es:'Español',ar:'العربية',ja:'日本語'};

/* ---------- UI text (en / bn / hi) ---------- */
const T={
en:{tagline:'Speak your language. Everyone hears theirs.',sub:'NeilUsha is a meeting room where each person talks in their native language and listens in the one they choose.',start:'Start a meeting',dash:'Dashboard',create:'Create meeting',join:'Join meeting',title:'Meeting title',code:'Meeting code',go:'Join',recent:'Recent meetings',none:'No meetings yet',chat:'Chat',people:'People',scenes:'Backgrounds',send:'Send',msg:'Type a message',settings:'Settings',name:'Your name',speak:'I speak',lang:'I hear',notif:'Notifications',caps:'Live captions',hear:'You hear',copied:'Link copied',f1:'Live translation',f2:'Custom backgrounds',f3:'Screen sharing',upload:'Upload image',demo:'Demo mode: video and translation are simulated',joined:'joined the meeting',sharing:'You are sharing your screen',stopped:'Screen sharing stopped',badcode:'Enter a valid meeting code',leaveq:'Leave this meeting?',blur:'Blur',bgset:'Background updated',login:'Log in',email:'Email',cont:'Continue',guest:'Continue as guest',fbnote:'Real sign-in will be added with Firebase later.',ready:'Ready to join?',joinnow:'Join now',camdenied:'Camera not allowed',hand:'raised a hand',notfound:'Page not found',notfoundsub:'Please check the link.',back:'Back to dashboard',invite:'Invite people',inviteSub:'Share this link so others can join',copyLink:'Copy link',shareBtn:'Share',waiting:'Waiting for the host to let you in…',waitingSub:'You will join automatically once admitted.',cancel:'Cancel',denied:'The host did not admit you.',requests:'Join requests',admitBtn:'Admit',denyBtn:'Deny',kick:'Remove',kicked:'The host removed you from the meeting.',host:'Host'},
bn:{tagline:'নিজের ভাষায় বলুন। সবাই নিজের ভাষায় শুনুন।',sub:'নীলউষা এমন একটি মিটিং রুম, যেখানে প্রত্যেকে মাতৃভাষায় কথা বলে এবং নিজের পছন্দের ভাষায় শোনে।',start:'মিটিং শুরু করুন',dash:'ড্যাশবোর্ড',create:'মিটিং তৈরি করুন',join:'মিটিংয়ে যোগ দিন',title:'মিটিংয়ের নাম',code:'মিটিং কোড',go:'যোগ দিন',recent:'সাম্প্রতিক মিটিং',none:'এখনো কোনো মিটিং নেই',chat:'চ্যাট',people:'অংশগ্রহণকারী',scenes:'ব্যাকগ্রাউন্ড',send:'পাঠান',msg:'বার্তা লিখুন',settings:'সেটিংস',name:'আপনার নাম',speak:'আমি বলি',lang:'আমি শুনি',notif:'নোটিফিকেশন',caps:'লাইভ ক্যাপশন',hear:'আপনি শুনছেন',copied:'লিংক কপি হয়েছে',f1:'লাইভ অনুবাদ',f2:'পছন্দমতো ব্যাকগ্রাউন্ড',f3:'স্ক্রিন শেয়ার',upload:'ছবি আপলোড করুন',demo:'ডেমো মোড: ভিডিও ও অনুবাদ নকল করে দেখানো হচ্ছে',joined:'মিটিংয়ে যোগ দিয়েছেন',sharing:'আপনি স্ক্রিন শেয়ার করছেন',stopped:'স্ক্রিন শেয়ার বন্ধ হয়েছে',badcode:'সঠিক মিটিং কোড দিন',leaveq:'মিটিং ছেড়ে যাবেন?',blur:'ব্লার',bgset:'ব্যাকগ্রাউন্ড বদলেছে',login:'লগ ইন',email:'ইমেইল',cont:'চালিয়ে যান',guest:'অতিথি হিসেবে চালিয়ে যান',fbnote:'আসল সাইন-ইন পরে Firebase দিয়ে যোগ হবে।',ready:'যোগ দিতে প্রস্তুত?',joinnow:'এখনই যোগ দিন',camdenied:'ক্যামেরার অনুমতি নেই',hand:'হাত তুলেছেন',notfound:'পেজটি পাওয়া যায়নি',notfoundsub:'লিংকটি ঠিক আছে কি না দেখুন।',back:'ড্যাশবোর্ডে ফিরুন',invite:'মানুষ ইনভাইট করুন',inviteSub:'এই লিংক পাঠিয়ে অন্যদের যোগ দিতে বলুন',copyLink:'লিংক কপি করুন',shareBtn:'শেয়ার করুন',waiting:'হোস্ট অনুমতি দেওয়ার অপেক্ষায়…',waitingSub:'অনুমতি পেলে আপনি নিজে থেকেই যোগ দেবেন।',cancel:'বাতিল',denied:'হোস্ট আপনাকে অনুমতি দেননি।',requests:'যোগদানের অনুরোধ',admitBtn:'গ্রহণ',denyBtn:'বাতিল',kick:'সরিয়ে দিন',kicked:'হোস্ট আপনাকে মিটিং থেকে সরিয়ে দিয়েছেন।',host:'হোস্ট'},
hi:{tagline:'अपनी भाषा में बोलिए। सब अपनी भाषा में सुनें।',sub:'नीलउषा ऐसा मीटिंग रूम है जहाँ हर कोई अपनी मातृभाषा में बोलता है और अपनी पसंद की भाषा में सुनता है।',start:'मीटिंग शुरू करें',dash:'डैशबोर्ड',create:'मीटिंग बनाएँ',join:'मीटिंग से जुड़ें',title:'मीटिंग का नाम',code:'मीटिंग कोड',go:'जुड़ें',recent:'हाल की मीटिंग',none:'अभी कोई मीटिंग नहीं',chat:'चैट',people:'प्रतिभागी',scenes:'बैकग्राउंड',send:'भेजें',msg:'संदेश लिखें',settings:'सेटिंग्स',name:'आपका नाम',speak:'मैं बोलता/बोलती हूँ',lang:'मैं सुनता/सुनती हूँ',notif:'नोटिफिकेशन',caps:'लाइव कैप्शन',hear:'आप सुन रहे हैं',copied:'लिंक कॉपी हो गया',f1:'लाइव अनुवाद',f2:'अपनी पसंद का बैकग्राउंड',f3:'स्क्रीन शेयरिंग',upload:'तस्वीर अपलोड करें',demo:'डेमो मोड: वीडियो और अनुवाद नकली हैं',joined:'मीटिंग में शामिल हुए',sharing:'आप स्क्रीन शेयर कर रहे हैं',stopped:'स्क्रीन शेयरिंग बंद हुई',badcode:'सही मीटिंग कोड दें',leaveq:'मीटिंग छोड़ें?',blur:'ब्लर',bgset:'बैकग्राउंड बदल गया',login:'लॉग इन',email:'ईमेल',cont:'जारी रखें',guest:'अतिथि के रूप में जारी रखें',fbnote:'असली साइन-इन बाद में Firebase से जुड़ेगा।',ready:'जुड़ने के लिए तैयार?',joinnow:'अभी जुड़ें',camdenied:'कैमरे की अनुमति नहीं',hand:'ने हाथ उठाया',notfound:'पेज नहीं मिला',notfoundsub:'लिंक सही है या नहीं जाँचें।',back:'डैशबोर्ड पर लौटें',invite:'लोगों को आमंत्रित करें',inviteSub:'यह लिंक भेजकर दूसरों को जोड़ें',copyLink:'लिंक कॉपी करें',shareBtn:'शेयर करें',waiting:'होस्ट की अनुमति का इंतज़ार…',waitingSub:'अनुमति मिलते ही आप अपने आप जुड़ जाएंगे।',cancel:'रद्द करें',denied:'होस्ट ने आपको अनुमति नहीं दी।',requests:'जुड़ने के अनुरोध',admitBtn:'स्वीकार करें',denyBtn:'अस्वीकार करें',kick:'हटाएं',kicked:'होस्ट ने आपको मीटिंग से हटा दिया।',host:'होस्ट'}
,
es:{tagline:'Habla tu idioma. Todos escuchan el suyo.',sub:'NeilUsha es una sala de reuniones donde cada persona habla en su idioma natal y escucha en el que elija.',start:'Iniciar una reunión',dash:'Panel',create:'Crear reunión',join:'Unirse a reunión',title:'Título de la reunión',code:'Código de reunión',go:'Unirse',recent:'Reuniones recientes',none:'Aún no hay reuniones',chat:'Chat',people:'Participantes',scenes:'Fondos',send:'Enviar',msg:'Escribe un mensaje',settings:'Configuración',name:'Tu nombre',speak:'Yo hablo',lang:'Yo escucho',notif:'Notificaciones',caps:'Subtítulos en vivo',hear:'Estás escuchando',copied:'Enlace copiado',f1:'Traducción en vivo',f2:'Fondos personalizados',f3:'Compartir pantalla',upload:'Subir imagen',demo:'Modo demo: video y traducción son simulados',joined:'se unió a la reunión',sharing:'Estás compartiendo tu pantalla',stopped:'Se detuvo el uso compartido',badcode:'Ingresa un código válido',leaveq:'¿Salir de esta reunión?',blur:'Desenfoque',bgset:'Fondo actualizado',login:'Iniciar sesión',email:'Correo',cont:'Continuar',guest:'Continuar como invitado',fbnote:'El inicio de sesión real se añadirá con Firebase más adelante.',ready:'¿Listo para unirte?',joinnow:'Unirse ahora',camdenied:'Cámara no permitida',hand:'levantó la mano',notfound:'Página no encontrada',notfoundsub:'Por favor revisa el enlace.',back:'Volver al panel',invite:'Invitar personas',inviteSub:'Comparte este enlace para que otros se unan',copyLink:'Copiar enlace',shareBtn:'Compartir',waiting:'Esperando que el anfitrión te deje entrar…',waitingSub:'Te unirás automáticamente una vez admitido.',cancel:'Cancelar',denied:'El anfitrión no te admitió.',requests:'Solicitudes de unión',admitBtn:'Admitir',denyBtn:'Rechazar',kick:'Eliminar',kicked:'El anfitrión te ha eliminado de la reunión.',host:'Anfitrión'},
ar:{tagline:'تحدث بلغتك. الجميع يستمع بلغته.',sub:'نيل أوشا غرفة اجتماعات يتحدث فيها كل شخص بلغته الأم ويستمع باللغة التي يختارها.',start:'ابدأ اجتماعًا',dash:'لوحة التحكم',create:'إنشاء اجتماع',join:'الانضمام إلى اجتماع',title:'عنوان الاجتماع',code:'رمز الاجتماع',go:'انضمام',recent:'الاجتماعات الأخيرة',none:'لا توجد اجتماعات بعد',chat:'الدردشة',people:'المشاركون',scenes:'الخلفيات',send:'إرسال',msg:'اكتب رسالة',settings:'الإعدادات',name:'اسمك',speak:'أنا أتحدث',lang:'أنا أستمع',notif:'الإشعارات',caps:'ترجمة نصية مباشرة',hear:'أنت تستمع',copied:'تم نسخ الرابط',f1:'ترجمة فورية',f2:'خلفيات مخصصة',f3:'مشاركة الشاشة',upload:'رفع صورة',demo:'وضع تجريبي: الفيديو والترجمة محاكاة',joined:'انضم إلى الاجتماع',sharing:'أنت تشارك شاشتك',stopped:'توقفت مشاركة الشاشة',badcode:'أدخل رمز اجتماع صحيح',leaveq:'مغادرة هذا الاجتماع؟',blur:'ضبابية',bgset:'تم تحديث الخلفية',login:'تسجيل الدخول',email:'البريد الإلكتروني',cont:'متابعة',guest:'المتابعة كضيف',fbnote:'سيتم إضافة تسجيل الدخول الحقيقي لاحقًا عبر Firebase.',ready:'هل أنت مستعد للانضمام؟',joinnow:'انضم الآن',camdenied:'الكاميرا غير مسموحة',hand:'رفع يده',notfound:'الصفحة غير موجودة',notfoundsub:'يرجى التحقق من الرابط.',back:'العودة إلى لوحة التحكم',invite:'دعوة أشخاص',inviteSub:'شارك هذا الرابط لينضم الآخرون',copyLink:'نسخ الرابط',shareBtn:'مشاركة',waiting:'في انتظار موافقة المضيف…',waitingSub:'ستنضم تلقائيًا بمجرد القبول.',cancel:'إلغاء',denied:'لم يقبلك المضيف.',requests:'طلبات الانضمام',admitBtn:'قبول',denyBtn:'رفض',kick:'إزالة',kicked:'قام المضيف بإزالتك من الاجتماع.',host:'المضيف'},
ja:{tagline:'自分の言語で話そう。みんな自分の言語で聞く。',sub:'NeilUshaは、それぞれが母語で話し、選んだ言語で聞くミーティングルームです。',start:'ミーティングを開始',dash:'ダッシュボード',create:'ミーティングを作成',join:'ミーティングに参加',title:'ミーティング名',code:'ミーティングコード',go:'参加',recent:'最近のミーティング',none:'まだミーティングがありません',chat:'チャット',people:'参加者',scenes:'背景',send:'送信',msg:'メッセージを入力',settings:'設定',name:'お名前',speak:'話す言語',lang:'聞く言語',notif:'通知',caps:'ライブ字幕',hear:'聞いている言語',copied:'リンクをコピーしました',f1:'リアルタイム翻訳',f2:'カスタム背景',f3:'画面共有',upload:'画像をアップロード',demo:'デモモード：映像と翻訳はシミュレーションです',joined:'ミーティングに参加しました',sharing:'画面を共有しています',stopped:'画面共有を停止しました',badcode:'正しいミーティングコードを入力してください',leaveq:'このミーティングを退出しますか？',blur:'ぼかし',bgset:'背景を更新しました',login:'ログイン',email:'メール',cont:'続ける',guest:'ゲストとして続ける',fbnote:'実際のログインは後でFirebaseと連携します。',ready:'参加する準備はできましたか？',joinnow:'今すぐ参加',camdenied:'カメラが許可されていません',hand:'挙手しました',notfound:'ページが見つかりません',notfoundsub:'リンクをご確認ください。',back:'ダッシュボードに戻る',invite:'招待する',inviteSub:'このリンクを共有して他の人を招待しましょう',copyLink:'リンクをコピー',shareBtn:'共有',waiting:'ホストの許可を待っています…',waitingSub:'許可されると自動的に参加します。',cancel:'キャンセル',denied:'ホストに許可されませんでした。',requests:'参加リクエスト',admitBtn:'許可',denyBtn:'拒否',kick:'削除',kicked:'ホストによって退出させられました。',host:'ホスト'}
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
  <button class="btn">OK</button></form></dialog>
  <dialog id="inviteDlg"><div class="setbox"><h3>🔗 <span data-i18n="invite"></span></h3>
  <p class="note" data-i18n="inviteSub"></p>
  <input id="inviteUrl" readonly>
  <div class="row" style="gap:8px;margin-top:10px">
    <button class="btn" id="inviteCopy" style="flex:1" data-i18n="copyLink"></button>
    <button class="btn line" id="inviteShare" style="flex:1" data-i18n="shareBtn"></button>
  </div>
  <form method="dialog"><button class="linkbtn" style="width:100%">OK</button></form>
  </div></dialog>`);
  window.nuOpenInvite=(url)=>{
    $('#inviteUrl').value=url;
    $('#inviteDlg').showModal();
    $('#inviteCopy').onclick=async()=>{try{await navigator.clipboard.writeText(url);}catch{} toast('🔗 '+t('copied'),true);};
    $('#inviteShare').onclick=()=>{
      if(navigator.share) navigator.share({title:'NeilUsha',url}).catch(()=>{});
      else{navigator.clipboard.writeText(url).catch(()=>{});toast('🔗 '+t('copied'),true);}
    };
  };
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
function sceneFor(id){const keys=Object.keys(SCENES);let h=0;for(const c of String(id))h=(h*31+c.charCodeAt(0))>>>0;return SCENES[keys[h%keys.length]];}
const SPEECH_LOCALE={en:'en-US',bn:'bn-BD',hi:'hi-IN',es:'es-ES',ar:'ar-SA',ja:'ja-JP'};
/* pick the best-sounding voice available in this browser for a language */
let _voices=[];
function refreshVoices(){_voices=speechSynthesis.getVoices();}
refreshVoices();
if('onvoiceschanged' in speechSynthesis) speechSynthesis.onvoiceschanged=refreshVoices;
function bestVoice(lang){
  if(!_voices.length) refreshVoices();
  const loc=(SPEECH_LOCALE[lang]||lang||'').toLowerCase(), base=loc.split('-')[0];
  let m=_voices.filter(v=>v.lang&&v.lang.toLowerCase().startsWith(loc));
  if(!m.length) m=_voices.filter(v=>v.lang&&v.lang.toLowerCase().startsWith(base));
  if(!m.length) return null;
  const rank=v=>['Neural','Natural','Google','Premium','Enhanced'].some(k=>v.name.includes(k))?1:0;
  m.sort((a,b)=>rank(b)-rank(a));
  return m[0];
}
function speakTranslated(text,lang){
  const ut=new SpeechSynthesisUtterance(text); ut.lang=SPEECH_LOCALE[lang]||'en-US';
  const v=bestVoice(lang); if(v) ut.voice=v;
  speechSynthesis.speak(ut);
}
/* canvas versions of the SCENES gradients, used to paint the real local video */
function paintScene(ctx,key,w,h){
  if(key==='beach'){const g=ctx.createLinearGradient(0,0,0,h);g.addColorStop(0,'#8fd3f4');g.addColorStop(.7,'#e8d9a8');g.addColorStop(1,'#f1c27d');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);return;}
  const stops={none:['#14503c','#0b3b2c'],forest:['#2d6a4f','#95d5b2'],office:['#dfe7e2','#b8c5bd'],night:['#0f2027','#2c5364'],sunset:['#ff8a5b','#7a3e9d']}[key]||['#14503c','#0b3b2c'];
  const g=ctx.createLinearGradient(0,0,w,h); g.addColorStop(0,stops[0]); g.addColorStop(1,stops[1]);
  ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
}

function meeting(){
 requireUser(user=>{
  const room=new URLSearchParams(location.search).get('room')||'demo-room-000';
  const roomSafe=room.replace(/[^a-z0-9-]/gi,'').toLowerCase()||'room';
  $('#roomCode').textContent=room;
  const live=window.NU_FB_READY && window.nuDb;
  const uid=user?user.uid:localUid();
  let mic=store.get('mic',true),cam=store.get('cam',true),myHand=false,sharing=false,scene='none',blur=false,customImg=null,unread=0,panelTab=null,spk=0;
  let people=[{id:uid,name:S.name,native:S.native,me:true}];
  let presence=null, unsubP=null, unsubM=null, unsubWait=null, unsubWaitList=null, unsubSelf=null;
  let isHost=!live, hostUid=null, leaving=false;

  /* ---------- real local camera + background compositing (canvas) ---------- */
  const camRaw=$('#camRaw'), meCanvas=document.createElement('canvas');
  meCanvas.width=640; meCanvas.height=480; meCanvas.className='bg';
  let localMedia=null, outStream=null, seg=null, segRunning=false, camReady=false, camTrack=null, screenStream=null;
  function paintBlurOrBg(image){
    const ctx=meCanvas.getContext('2d'), w=meCanvas.width, h=meCanvas.height;
    if(blur){ctx.filter='blur(14px)';ctx.drawImage(image,0,0,w,h);ctx.filter='none';return;}
    if(customImg){ctx.drawImage(customImg,0,0,w,h);return;}
    paintScene(ctx,scene,w,h);
  }
  function onSeg(r){
    const ctx=meCanvas.getContext('2d'), w=meCanvas.width, h=meCanvas.height;
    ctx.save(); ctx.clearRect(0,0,w,h);
    ctx.drawImage(r.segmentationMask,0,0,w,h);
    ctx.globalCompositeOperation='source-in'; ctx.drawImage(r.image,0,0,w,h);
    ctx.globalCompositeOperation='destination-over'; paintBlurOrBg(r.image);
    ctx.restore();
  }
  async function camLoop(){
    if(!camReady) return;
    const ctx=meCanvas.getContext('2d');
    try{
      if(!cam){
        ctx.fillStyle='#10233f'; ctx.fillRect(0,0,meCanvas.width,meCanvas.height);
      } else if(scene==='none' && !blur && !customImg){
        ctx.drawImage(camRaw,0,0,meCanvas.width,meCanvas.height);
      } else if(camRaw.readyState>=2 && seg){
        await seg.send({image:camRaw});
      }
    }catch(e){}
    requestAnimationFrame(camLoop);
  }
  async function startCamera(){
    try{
      localMedia=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480},audio:{echoCancellation:true,noiseSuppression:true}});
    }catch(e){toast('📷 '+t('camdenied'),true);cam=false;render();return;}
    camRaw.srcObject=localMedia; await camRaw.play();
    seg=new SelfieSegmentation({locateFile:f=>`https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation@0.1.1675465747/${f}`});
    seg.setOptions({modelSelection:1}); seg.onResults(onSeg);
    camReady=true; camLoop();
    outStream=meCanvas.captureStream(30);
    camTrack=outStream.getVideoTracks()[0];
    localMedia.getAudioTracks().forEach(tr=>{tr.enabled=mic;outStream.addTrack(tr);});
    localMedia.getVideoTracks().forEach(tr=>tr.enabled=cam);
    ensureTile(uid,true);
    if(live) startPeer();
    if(live && mic) startSpeech();
  }

  /* ---------- tiles: created once, updated in place so video/canvas keep playing ---------- */
  const tiles={}; // id -> {div,slot,avatar,hand,tag,lchip}
  function ensureTile(id,isMe){
    if(tiles[id]) return tiles[id];
    const div=document.createElement('div'); div.className='tile'+(isMe?' me':''); div.dataset.id=id;
    const slot=document.createElement('div'); slot.className='bg';
    const avatar=document.createElement('div'); avatar.className='avatar';
    const hand=document.createElement('span'); hand.className='hand'; hand.textContent='✋'; hand.hidden=true;
    const tag=document.createElement('span'); tag.className='tag';
    const lchip=document.createElement('span'); lchip.className='lchip';
    div.append(slot,avatar,hand,tag,lchip);
    $('#grid').appendChild(div);
    tiles[id]={div,slot,avatar,hand,tag,lchip};
    if(isMe) tiles[id].slot.replaceWith(meCanvas), tiles[id].slot=meCanvas;
    return tiles[id];
  }
  function dropTile(id){ if(tiles[id]){tiles[id].div.remove();delete tiles[id];} }
  const remoteStreams={}, remoteVideos={};

  function render(){
    people[0].name=S.name; people[0].native=S.native; people[0].hand=myHand;
    Object.keys(tiles).forEach(id=>{ if(!people.some(p=>p.id===id)) dropTile(id); });
    people.forEach(p=>{
      const isMe=p.me, tl=ensureTile(p.id,isMe);
      const on=isMe?cam:(p.cam!==undefined?p.cam:true), m=isMe?mic:(p.mic!==undefined?p.mic:true);
      const hasVideo=isMe?(cam&&camReady):(!!remoteVideos[p.id]&&p.cam!==false);
      tl.div.classList.toggle('camoff',!on);
      tl.avatar.style.display=hasVideo?'none':'';
      tl.avatar.textContent=on?p.name[0].toUpperCase():'📷';
      tl.hand.hidden=!p.hand;
      tl.tag.textContent=(m?'🎤':'🔇')+' '+(isMe?p.name+' ('+t('hear').split(' ')[0]+')':p.name);
      tl.lchip.textContent='🗣️ '+LANGS[p.native]+(isMe?'':' → '+LANGS[S.lang]);
      if(!isMe){
        tl.slot.className='bg';
        if(!hasVideo) tl.slot.style.background=p.bg||sceneFor(p.id);
        if(remoteVideos[p.id]) remoteVideos[p.id].muted=!(p.native===S.lang);
      } else {
        meCanvas.classList.toggle('blur',blur);
      }
    });
    $('#tab-people').innerHTML=people.map(p=>`<div class="row2"><span>${p.me?'⭐ ':''}${p.name}${(p.id===hostUid)?' · 👑 '+t('host'):''} · ${LANGS[p.native]} ${p.me?(mic?'🎤':'🔇'):((p.mic===false)?'🔇':'🎤')}</span>${(isHost&&!p.me&&live)?`<button class="kickbtn" data-kick="${p.id}">${t('kick')}</button>`:''}</div>`).join('');
    $('#mic').classList.toggle('off',!mic); $('#mic').textContent=mic?'🎤':'🔇';
    $('#cam').classList.toggle('off',!cam);
    $('#ccBtn').classList.toggle('on',S.caps);
    if(!S.caps) $('#caption').hidden=true;
  }

  /* ---------- controls ---------- */
  $('#mic').onclick=()=>{
    mic=!mic;
    if(localMedia) localMedia.getAudioTracks().forEach(tr=>tr.enabled=mic);
    if(live){nuSetPresenceField(room,uid,{mic}); mic?startSpeech():stopSpeech();}
    render();
  };
  $('#cam').onclick=()=>{
    cam=!cam;
    if(localMedia) localMedia.getVideoTracks().forEach(tr=>tr.enabled=cam);
    if(live)nuSetPresenceField(room,uid,{cam});
    render();
  };
  function fly(e){const d=document.createElement('div');d.className='fly';d.textContent=e;d.style.left=(15+Math.random()*70)+'%';$('#fly').appendChild(d);setTimeout(()=>d.remove(),2300);}
  $('#handBtn').onclick=()=>{myHand=!myHand;if(live)nuSetPresenceField(room,uid,{hand:myHand});$('#handBtn').classList.toggle('on',myHand);render();};
  $('#reactBtn').onclick=()=>{$('#reacts').hidden=!$('#reacts').hidden;};
  $$('#reacts button').forEach(b=>b.onclick=()=>{fly(b.textContent);$('#reacts').hidden=true;});
  $('#ccBtn').onclick=()=>{S.caps=!S.caps;changed();};
  $('#shareBtn').onclick=async()=>{
    if(!sharing){
      let stream;
      try{stream=await navigator.mediaDevices.getDisplayMedia({video:true});}
      catch(e){return;}
      screenStream=stream;
      const track=stream.getVideoTracks()[0];
      track.onended=()=>stopShare();
      if(outStream){outStream.getVideoTracks().forEach(tk=>outStream.removeTrack(tk));outStream.addTrack(track);}
      Object.values(calls).forEach(call=>{
        const pc=call.peerConnection; if(!pc) return;
        const sender=pc.getSenders().find(s=>s.track&&s.track.kind==='video');
        if(sender) sender.replaceTrack(track);
      });
      $('#share').innerHTML=''; const v=document.createElement('video');
      v.autoplay=true;v.playsInline=true;v.muted=true;v.srcObject=stream;
      v.style.cssText='width:100%;height:100%;object-fit:contain';
      $('#share').appendChild(v);
      sharing=true;
      $('#share').hidden=false; $('#stage').classList.add('sharing');
      $('#shareBtn').classList.add('on');
      toast('🖥️ '+t('sharing'));
    } else stopShare();
  };
  function stopShare(){
    if(screenStream){screenStream.getTracks().forEach(tk=>tk.stop());screenStream=null;}
    if(outStream&&camTrack){outStream.getVideoTracks().forEach(tk=>{if(tk!==camTrack)outStream.removeTrack(tk);});if(!outStream.getVideoTracks().includes(camTrack))outStream.addTrack(camTrack);}
    Object.values(calls).forEach(call=>{
      const pc=call.peerConnection; if(!pc||!camTrack) return;
      const sender=pc.getSenders().find(s=>s.track&&s.track.kind==='video');
      if(sender) sender.replaceTrack(camTrack);
    });
    sharing=false;
    $('#share').hidden=true; $('#stage').classList.remove('sharing');
    $('#shareBtn').classList.remove('on');
    toast('🖥️ '+t('stopped'));
  }
  $('#copy').onclick=()=>nuOpenInvite(location.href);
  $('#tab-people').addEventListener('click',e=>{
    const id=e.target.dataset.kick;
    if(id&&live&&isHost&&confirm(t('kick')+'?')) nuKick(room,id);
  });
  $('#leave').onclick=()=>{
    if(!confirm(t('leaveq'))) return;
    leaving=true;
    stopSpeech();
    if(presence) presence.stop();
    if(unsubP) unsubP(); if(unsubM) unsubM(); if(unsubWaitList) unsubWaitList(); if(unsubSelf) unsubSelf();
    if(peerObj) try{peerObj.destroy();}catch(e){}
    if(screenStream) screenStream.getTracks().forEach(x=>x.stop());
    if(localMedia) localMedia.getTracks().forEach(x=>x.stop());
    speechSynthesis.cancel();
    location.href='dashboard.html';
  };

  /* ---------- side panel: chat / people / backgrounds ---------- */
  function openPanel(tab){
    if(panelTab===tab){panelTab=null;$('#panel').hidden=true;return;}
    panelTab=tab; $('#panel').hidden=false;
    $$('[data-tab]').forEach(b=>b.classList.toggle('on',b.dataset.tab===tab));
    $$('[data-body]').forEach(b=>b.hidden=b.dataset.body!==tab);
    if(tab==='chat'){unread=0;$('#badge').hidden=true;}
  }
  $$('[data-open]').forEach(b=>b.onclick=()=>openPanel(b.dataset.open));
  $$('[data-tab]').forEach(b=>b.onclick=()=>{panelTab=null;openPanel(b.dataset.tab);});

  /* ---------- backgrounds (now really composited onto the local video) ---------- */
  function buildScenes(){
    $('#scenes').innerHTML=Object.keys(SCENES).map(k=>`<button data-s="${k}" class="${!blur&&!customImg&&scene===k?'on':''}" style="background:${SCENES[k]}">${k}</button>`).join('')
      +`<button data-s="blur" class="${blur?'on':''}" style="background:${BLURBASE};filter:blur(.5px)">${t('blur')}</button>`;
    $$('#scenes button').forEach(b=>b.onclick=()=>{
      const k=b.dataset.s; customImg=null;
      blur=k==='blur'; if(!blur)scene=k;
      buildScenes(); render(); toast('🎨 '+t('bgset'));
    });
  }
  $('#bgFile').onchange=e=>{
    const f=e.target.files[0]; if(!f) return;
    const img=new Image();
    img.onload=()=>{customImg=img; blur=false; buildScenes(); render(); toast('🎨 '+t('bgset'));};
    img.src=URL.createObjectURL(f);
  };

  /* ---------- captions ---------- */
  function showCaption(name,orig,shown){
    if(!S.caps) return;
    const c=$('#caption'); c.hidden=false;
    c.innerHTML='<small></small><div class="o"></div><div class="tr"></div>';
    c.children[0].textContent=name; c.children[1].textContent=orig||''; c.children[2].textContent=shown;
    clearTimeout(showCaption._t); showCaption._t=setTimeout(()=>{c.hidden=true;},3600);
  }

  /* ---------- chat ---------- */
  function addMsg(from,text,note,me){
    const d=document.createElement('div'); d.className='msg'+(me?' me':'');
    d.innerHTML='<b></b><p></p><small></small>';
    d.children[0].textContent=from; d.children[1].textContent=text; d.children[2].textContent=note||'';
    $('#msgs').appendChild(d); $('#msgs').scrollTop=1e6;
    if(!me&&panelTab!=='chat'){unread++;$('#badge').textContent=unread;$('#badge').hidden=false;toast('✉️ '+from);}
  }
  $('#chatForm').onsubmit=e=>{
    e.preventDefault();
    const v=$('#chatIn').value.trim(); if(!v) return;
    addMsg(S.name,v,'',true); $('#chatIn').value='';
    if(live) nuSendMessage(room,uid,S.name,v).catch(err=>toast('⚠️ '+err.message,true));
  };

  /* ---------- real speech: recognize my speech, translate + speak others' ---------- */
  let speechRec=null, speechActive=false;
  function startSpeech(){
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SR||speechActive) return;
    speechRec=new SR(); speechRec.lang=SPEECH_LOCALE[S.native]||'en-US';
    speechRec.continuous=true; speechRec.interimResults=false;
    speechRec.onresult=e=>{
      for(let i=e.resultIndex;i<e.results.length;i++){
        if(!e.results[i].isFinal) continue;
        const text=e.results[i][0].transcript.trim(); if(!text) continue;
        showCaption(S.name+' ('+t('hear').split(' ')[0]+')','',text);
        nuSetPresenceField(room,uid,{lastSpeech:{text,native:S.native,at:Date.now()}});
      }
    };
    speechRec.onend=()=>{if(speechActive)setTimeout(()=>{try{speechRec.lang=SPEECH_LOCALE[S.native]||'en-US';speechRec.start();}catch(e){}},300);};
    speechRec.onerror=()=>{};
    try{speechRec.start();speechActive=true;}catch(e){}
  }
  function stopSpeech(){speechActive=false;try{speechRec&&speechRec.stop();}catch(e){}}
  const seenSpeech={};
  async function handleIncomingSpeech(p){
    const sp=p.lastSpeech; if(!sp||!sp.text) return;
    const key=sp.at&&sp.at.toMillis?sp.at.toMillis():sp.at;
    if(seenSpeech[p.id]===key) return; seenSpeech[p.id]=key;
    let shown=sp.text, orig='';
    if(sp.native!==S.lang){
      try{
        const res=await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(sp.text)}&langpair=${sp.native}|${S.lang}`);
        const j=await res.json();
        shown=(j.responseData&&j.responseData.translatedText)||sp.text; orig=sp.text;
      }catch(e){}
      speakTranslated(shown,S.lang);
    }
    showCaption(p.name,orig,shown);
    if(tiles[p.id]){tiles[p.id].div.classList.add('speaking');setTimeout(()=>{if(tiles[p.id])tiles[p.id].div.classList.remove('speaking');},3000);}
  }

  /* ---------- WebRTC mesh via PeerJS (room membership comes from Firestore) ---------- */
  let peerObj=null; const connected=new Set(), peerIdMap={}, calls={};
  function peerIdFor(otherUid){return ('nu-'+roomSafe+'-'+otherUid).replace(/[^a-zA-Z0-9-]/g,'');}
  function startPeer(){
    peerObj=new Peer(peerIdFor(uid));
    peerObj.on('open',tryConnectAll);
    peerObj.on('call',call=>{
      call.answer(outStream);
      wireCall(call, peerIdMap[call.peer]);
    });
    peerObj.on('error',e=>{if(e.type!=='peer-unavailable')console.warn('NeilUsha peer:',e.type);});
  }
  function tryConnectAll(){
    if(!peerObj||!peerObj.open||!outStream) return;
    people.filter(p=>!p.me).forEach(p=>{
      peerIdMap[peerIdFor(p.id)]=p.id;
      if(connected.has(p.id)||uid>=p.id) return; // deterministic initiator: smaller uid calls
      const call=peerObj.call(peerIdFor(p.id),outStream);
      if(call) wireCall(call,p.id);
    });
  }
  function wireCall(call,pid){
    if(!pid) return;
    connected.add(pid); calls[pid]=call;
    call.on('stream',stream=>{
      remoteStreams[pid]=stream;
      let v=remoteVideos[pid];
      if(!v){v=document.createElement('video');v.autoplay=true;v.playsInline=true;remoteVideos[pid]=v;}
      v.srcObject=stream;
      const tl=tiles[pid]; if(tl){v.className='bg';tl.slot.replaceWith(v);tl.slot=v;}
      render();
    });
    call.on('close',()=>{connected.delete(pid);delete remoteVideos[pid];delete calls[pid];render();});
    call.on('error',()=>{connected.delete(pid);});
  }

  function watchWaitingRequests(){
    unsubWaitList=nuWatchWaitingList(room,list=>{
      const box=$('#waitReqs');
      if(!list.length){box.innerHTML='';return;}
      box.innerHTML=`<div style="font-weight:600;margin-bottom:6px">🕓 ${t('requests')}</div>`+
        list.map(p=>`<div class="wreq"><span>${(p.name||'Guest').replace(/</g,'&lt;')}</span><span class="acts">
          <button class="btn" data-admit="${p.id}">${t('admitBtn')}</button>
          <button class="btn line" data-deny="${p.id}">${t('denyBtn')}</button></span></div>`).join('');
    });
  }
  $('#waitReqs').addEventListener('click',e=>{
    const a=e.target.dataset.admit, d=e.target.dataset.deny;
    if(a) nuAdmit(room,a); if(d) nuDeny(room,d);
  });

  function proceedJoin(){
    presence=nuJoinRoom(room,uid,{name:S.name,native:S.native,hand:false,mic,cam});
    unsubP=nuWatchParticipants(room,list=>{
      const wasCount=people.length;
      people=[people[0],...list.filter(p=>p.id!==uid).map(p=>({id:p.id,name:p.name||'Guest',native:p.native||'en',hand:!!p.hand,mic:p.mic,cam:p.cam,me:false}))];
      if(people.length>wasCount) toast('👋 '+(people[people.length-1].name)+' '+t('joined'));
      list.forEach(handleIncomingSpeech);
      tryConnectAll();
      render();
    });
    unsubM=nuWatchMessages(room,added=>{added.forEach(m=>{if(m.uid!==uid) addMsg(m.name,m.text,'');});});
    if(isHost) watchWaitingRequests();
    unsubSelf=nuWatchSelf(room,uid,exists=>{
      if(!exists && !leaving){
        toast('🚫 '+t('kicked'),true);
        setTimeout(()=>location.href='dashboard.html',1200);
      }
    });
    startCamera();
    const t0=Date.now();
    setInterval(()=>{const s=(Date.now()-t0)/1000|0;$('#timer').textContent=String(s/60|0).padStart(2,'0')+':'+String(s%60).padStart(2,'0');},1000);
  }

  async function checkHostAndProceed(){
    if(!live){ isHost=true; proceedJoin(); return; }
    let info=null;
    try{ info=await nuGetRoom(room); }catch(e){}
    hostUid = info ? info.createdBy : null;
    isHost = !info || hostUid===uid; // no room doc found (joined by raw code) -> treat as host, nothing to wait for
    render();
    if(isHost){ proceedJoin(); return; }
    $('#waitWrap').hidden=false;
    nuRequestJoin(room,uid,{name:S.name,native:S.native});
    let settled=false;
    unsubWait=nuWatchOwnWaiting(room,uid,(exists,data)=>{
      if(settled) return;
      if(exists && data && data.admitted){
        settled=true; $('#waitWrap').hidden=true;
        nuCancelWaiting(room,uid);
        proceedJoin();
      } else if(!exists){
        settled=true; $('#waitWrap').hidden=true;
        toast('🚫 '+t('denied'),true);
        setTimeout(()=>location.href='dashboard.html',1500);
      }
    });
    $('#cancelWait').onclick=()=>{settled=true;if(unsubWait)unsubWait();nuCancelWaiting(room,uid);location.href='dashboard.html';};
  }

  document.addEventListener('nu:change',render);
  buildScenes(); render();
  addMsg('NeilUsha','👋 '+room,'');
  checkHostAndProceed();
 });
}

/* ---------- Login ---------- */
function login(){
  $('#lname2').value=store.get('user',{}).name||S.name||'';
  const langOpts=Object.entries(LANGS).map(([c,n])=>`<option value="${c}">${n}</option>`).join('');
  $('#lnative').innerHTML=langOpts; $('#llisten').innerHTML=langOpts;
  $('#lnative').value=S.native; $('#llisten').value=S.lang;
  const grabLang=()=>{S.native=$('#lnative').value; S.lang=$('#llisten').value;};
  if(window.NU_FB_READY && window.nuAuth){
    if($('#fbnote'))$('#fbnote').hidden=true;
    window.nuOnAuth(u=>{if(u) location.href='dashboard.html';});
    const goAuth=(p)=>p.then(cred=>{S.name=cred.user.displayName||S.name;grabLang();save();location.href='dashboard.html';})
      .catch(err=>toast('⚠️ '+err.message,true));
    if($('#google')) $('#google').onclick=()=>{grabLang();goAuth(window.nuSignInGoogle());};
    $('#loginForm').onsubmit=e=>{
      e.preventDefault();
      const n=$('#lname2').value.trim(); if(!n) return;
      S.name=n; grabLang(); save(); goAuth(window.nuSignInGuest(n));
    };
    $('#guest').onclick=()=>{
      const n=$('#lname2').value.trim()||S.name||'Guest';
      S.name=n; grabLang(); save(); goAuth(window.nuSignInGuest(n));
    };
  } else {
    $('#loginForm').onsubmit=e=>{
      e.preventDefault();
      const n=$('#lname2').value.trim(); if(!n) return;
      S.name=n; grabLang(); save(); store.set('user',{name:n,email:$('#lemail').value.trim()});
      location.href='dashboard.html';
    };
    $('#guest').onclick=()=>{grabLang();save();location.href='dashboard.html';};
  }
}

/* ---------- Lobby: camera preview before joining ---------- */
function lobby(){
  const room=new URLSearchParams(location.search).get('room')||'demo-room-000';
  $('#lcode').textContent=room;
  if($('#lInvite')) $('#lInvite').onclick=()=>nuOpenInvite(location.href);
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
