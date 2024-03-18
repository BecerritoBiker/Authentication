import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyCkHXF1AYKoFeV-ET6GIIf124vCyS7DqmI",
  authDomain: "pagina-web-3abf3.firebaseapp.com",
  projectId: "pagina-web-3abf3",
  storageBucket: "pagina-web-3abf3.appspot.com",
  messagingSenderId: "1051096980268",
  appId: "1:1051096980268:web:05cb03b318d4b59f40ea89",
  measurementId: "G-7RM5DRM13Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginvalidation = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);