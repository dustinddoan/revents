import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCHY3TK_G14zMp-h9z7ONMnF-uAk4yANCQ",
  authDomain: "revents-878b7.firebaseapp.com",
  databaseURL: "https://revents-878b7.firebaseio.com",
  projectId: "revents-878b7",
  storageBucket: "revents-878b7.appspot.com",
  messagingSenderId: "6500924150"
};

firebase.initializeApp(config)
// firebase.firestore()

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

export default firebase;