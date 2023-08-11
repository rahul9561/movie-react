// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxlV39b6wTXaCyC_AabV4ZHYmvwK_3fWg",

  authDomain: "registio.firebaseapp.com",

  databaseURL: "https://registio-default-rtdb.firebaseio.com",

  projectId: "registio",

  storageBucket: "registio.appspot.com",

  messagingSenderId: "479762969187",

  appId: "1:479762969187:web:9c25eef77e481d66127e56",

  measurementId: "G-G792RLDCB2",

  databaseURl:"https://registio-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);


export default  app;
