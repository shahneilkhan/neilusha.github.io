/* ============================================================
   NeilUsha — Firebase config
   ------------------------------------------------------------
   1. https://console.firebase.google.com -> Add project
   2. Project settings (⚙️) -> General -> "Your apps" -> Web (</>) 
      -> copy the firebaseConfig object Firebase gives you and
      paste the values below (replace every "REPLACE_ME").
   3. Build -> Authentication -> Sign-in method -> enable
      "Google" and "Anonymous".
   4. Build -> Firestore Database -> Create database (production
      mode is fine; rules are set below).
   5. Firestore -> Rules -> paste this and Publish:

      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /rooms/{roomId} {
            allow read, create: if request.auth != null;
            allow update, delete: if request.auth != null;
            match /participants/{uid} {
              allow read: if request.auth != null;
              allow write: if request.auth != null && request.auth.uid == uid;
            }
            match /messages/{msgId} {
              allow read: if request.auth != null;
              allow create: if request.auth != null && request.resource.data.uid == request.auth.uid;
            }
          }
        }
      }
   ============================================================ */
window.NEILUSHA_FIREBASE_CONFIG = {
  apiKey: "REPLACE_ME",
  authDomain: "REPLACE_ME.firebaseapp.com",
  projectId: "REPLACE_ME",
  storageBucket: "REPLACE_ME.appspot.com",
  messagingSenderId: "REPLACE_ME",
  appId: "REPLACE_ME"
};
