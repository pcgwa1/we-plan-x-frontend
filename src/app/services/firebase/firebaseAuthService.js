import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import firebaseConfig from "./firebaseConfig";

class FirebaseAuthService {
  auth;
  firestore;
  //   database;
  //   storage;
  googleProvider;
  facebookProvider;
  twitterProvider;

  constructor() {
    // UNCOMMENT IF YOU WANT TO USE FIREBASE

    this.init();
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();

    //   this.database  = firebase.database();
    //   this.storage = firebase.storage();
    
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    this.twitterProvider = new firebase.auth.TwitterAuthProvider();
  }

  init = () => {
    firebase.initializeApp(firebaseConfig);
  };

  checkAuthStatus = callback => {
    this.auth.onAuthStateChanged(callback);
  };

  signUpWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  signInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  signInWithPopup = media => {
    switch (media) {
      case "google":
        return this.auth.signInWithPopup(this.googleProvider);

      case "facebook":
        return this.auth.signInWithPopup(this.facebookProvider);

      case "twitter":
        return this.auth.signInWithPopup(this.twitterProvider);

      default:
        break;
    }
  };

  signInWithPhoneNumber = phoneNumber => {
    return this.auth.signInWithPhoneNumber(phoneNumber);
  };

  getUserData = docId => {
    //   generally it's better to use uid for docId
    this.firestore
      .collection("users")
      .doc(docId)
      .get()
      .then(doc => {
        console.log(doc.data());
      });
  };

  getAllUser = () => {
    this.firestore
      .collection("users")
      .get()
      .then(docList => {
        docList.forEach(doc => {
          console.log(doc.data());
        });
      });
  };

  signOut = () => {
    return this.auth.signOut();
  };

  create_UUID = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}



  createDeck = (layout, blocks, uid, name) => {
    const docRef = this.firestore.collection('decks').doc(this.create_UUID())
    return docRef.set({
        id: docRef.id,
        uid: uid,
        name: name,
        blocks: blocks,
        layouts: layout
      })
      .then(() => {
        console.log("Document successfully created!");
        return true;
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        return false;
      });
  }

  updateDeck = (layout, blocks, docId) => {
    console.log("Document updated! ", docId);
    const docRef = this.firestore.collection('decks').doc(docId)
    docRef.update({
        blocks: blocks,
        layouts: layout
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  getLayoutData = async docId => {
    //   generally it's better to use uid for docId
    return await this.firestore
      .collection("decks")
      .where("uid", "==", docId)
      .get()
      .then(querySnapshot => {
        let results = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            results.push(doc.data())
        });
        return results;
      });
  };
}

const instance = new FirebaseAuthService();

export default instance;
