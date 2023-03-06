import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAyYO1Ala7Nh2P8GtZ7bvWUx0qWMemOC_k',
  authDomain: 'involuted-bird-368217.firebaseapp.com',
  projectId: 'involuted-bird-368217',
  storageBucket: 'involuted-bird-368217.appspot.com',
  messagingSenderId: '653382565128',
  appId: '1:653382565128:web:4151f7e77c7aa0b87d80bd',
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
export const auth = getAuth(app);
