import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBQoFokPkKte9OIRYxobx4nz4PafVjQD4w",
  authDomain: "linkedin-clone-762d8.firebaseapp.com",
  projectId: "linkedin-clone-762d8",
  storageBucket: "linkedin-clone-762d8.appspot.com",
  messagingSenderId: "869934736026",
  appId: "1:869934736026:web:ee6a7404f3d3f1ab20f523"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export{auth,provider,storage};
export default db;