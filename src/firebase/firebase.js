import * as firebase from 'firebase/app';
import {
  getDatabase,
  ref,
  set,
  remove,
  update,
  get,
  child,
  onValue,
  off,
  push,
  onChildRemoved,
  onChildChanged,
  onChildAdded,
} from 'firebase/database';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);
const googleAuthProvider = new GoogleAuthProvider();

// set(ref(database), {
//   name: 'Devansh',
//   age: 23,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google',
//   },

//   location: {
//     city: 'Delhi',
//     country: 'India',
//   },
// })
//   .then(() => {
//     console.log('data Saved');
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// set(ref(database, 'attributes/'), {
//   height: 10,
//   weight: 100,
// })
//   .then(() => {
//     console.log('Second set call worked');
//   })
//   .catch((e) => {
//     console.log('Things didnt for the second error', e);
//   });

// update(ref(database), {
//   stressLevel: 9,

//   'job/company': 'Amazon',
//   'location/city': 'Banglore',
// });

// get(child(ref(database), `/notes`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       let notes = [];
//       snapshot.forEach((childSnapshot) => {
//         notes = [...notes, { id: childSnapshot.key, ...childSnapshot.val }];
//       });
//       console.log(notes);
//     } else {
//       console.log('No data available');
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// onChildRemoved(ref(database, '/notes'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// onChildChanged(ref(database, '/notes'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// onChildAdded(ref(database, '/notes'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// const onValueChange = onValue(
//   ref(database, '/notes'),
//   (snapshot) => {
//     let notes = [];
//     snapshot.forEach((childSnapshot) => {
//       notes = [...notes, { id: childSnapshot.key, ...childSnapshot.val }];
//     });
//     console.log(notes);
//   },
//   (e) => {
//     console.log('Error Data fetching', e);
//   }
// );
// console.log(onValueChange);

// setTimeout(() => {
//   set(ref(database, 'age'), 56);
// }, 3500);

// setTimeout(() => {
//   off(ref(database, '/'));
// }, 7000);

// setTimeout(() => {
//   set(ref(database, 'age'), 40);
// }, 10500);

// const onValueChange = onValue(
//   ref(database, '/'),
//   (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//   },
//   (e) => {
//     console.log('Error Data fetching', e);
//   }
// );

// const notes = [
//   {
//     id: '12',
//     title: 'First Note',
//     body: 'This is my note',
//   },
//   {
//     id: '7861ae',
//     title: 'Second Note',
//     body: 'This is my note',
//   },
// ];

// set(ref(database), { notes });

// push(ref(database, 'notes'), {
//   title: 'Course Topics1',
//   body: 'React native ,Python ,Angular',
// });

// push(ref(database, 'notes'), {
//   title: 'Course Topics2',
//   body: 'React native ,Python ,Angular',
// });
// push(ref(database, 'notes'), {
//   title: 'Course Topics3',
//   body: 'React native ,Python ,Angular',
// });
// push(ref(database, 'notes'), {
//   title: 'Course Topics4',
//   body: 'React native ,Python ,Angular',
// });
// push(ref(database, 'notes'), {
//   title: 'Course Topics4',
//   body: 'React5 native ,Python ,Angular',
// });

export { firebase, googleAuthProvider, auth, database as default };
