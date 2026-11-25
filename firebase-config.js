/* Firebase connection for the self-hosted (Vercel) version of Sail with Purpose.
   Values from Firebase console > Project settings > General > Your apps > Web app (project asc2027-421ec).
   These values are not secret: Firebase web configs are meant to be public. Security comes from firestore.rules.
   Leave apiKey empty to run in rehearsal mode (data stays in each browser only). */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDKSs8YE1BBj5NgbXpecnscAzDswMw0md0",
  authDomain: "asc2027-421ec.firebaseapp.com",
  projectId: "asc2027-421ec",
  storageBucket: "asc2027-421ec.firebasestorage.app",
  messagingSenderId: "586706842528",
  appId: "1:586706842528:web:6b9a9357a49c7e704b6ac5"
};
