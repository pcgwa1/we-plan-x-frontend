import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import firebaseConfig from "./firebaseConfig";

class GridLayoutService {
  firestore;

  constructor() {
    // UNCOMMENT IF YOU WANT TO USE FIREBASE
    this.firestore = firebase.firestore();
  }

    //   this.database  = firebase.database();
    //   this.storage = firebase.storage();
  getGridLayout = docId => {
    //   generally it's better to use uid for docId
    this.firestore
      .collection("users")
      .doc(docId)
      .get()
      .then(doc => {
        console.log(doc.data());
      });
  };

  saveGridLayout = () => {
    this.firestore
      .collection("users")
      .get()
      .then(docList => {
        docList.forEach(doc => {
          console.log(doc.data());
        });
      });
  };

}

const instance = new GridLayoutService();

export default instance;
