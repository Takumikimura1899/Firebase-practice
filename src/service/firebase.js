// firebaseの呼び出し
import firebase from 'firebase';
// auth(ログイン関係)
import 'firebase/auth';
//  firestore(データベース関係)
import 'firebase/firestore';

// firebaseの初期化に必要な情報 構成などから持ってくる envファイルで分けておくとセキュリティ面で良し。
// .envをgitignoreに追加するのを忘れずに
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// firebase初期化
firebase.initializeApp(firebaseConfig);

// 公式からログインの仕方を持ってくる。グーグルアカウントででポップアップが一番楽
const googleProivder = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(googleProivder)
    .then((res) => {
      console.log(res.user);
      console.log(res);
      console.log(res.user.photoURL);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('logged out');
      document.location.reload();
    })
    .catch((error) => {
      console.error(error.message);
    });
};

// 外で使いたいので分かりやすい名前の定数に入れてexport constする。
export const auth = firebase.auth();

export const db = firebase.firestore();

// 初期化されたfirebaseがexportされる
export default firebase;
