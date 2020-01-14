import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAcNAlFSg9DDYS9QmxaEY4yINJSktwwor8",
    authDomain: "time-table-a9aad.firebaseapp.com",
    databaseURL: "https://time-table-a9aad.firebaseio.com",
    projectId: "time-table-a9aad",
    storageBucket: "time-table-a9aad.appspot.com",
    messagingSenderId: "265410560938",
    appId: "1:265410560938:web:b58e472f3bdf609ad4e1d3"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
