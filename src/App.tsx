import React, { useEffect } from 'react';
import './assets/scss/themes.scss';
import RouteIndex from 'Routes/Index';

import fakeBackend from "./helpers/AuthType/fakeBackend";
import { initFirebaseBackend } from "./helpers/firebase_helper";
import { loadAuthToken } from "./helpers/api_helper";


// Activating fake backend
fakeBackend();

// Import Firebase Configuration file

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// init firebase backend
initFirebaseBackend(firebaseConfig);

function App() {
  useEffect(() => {
    // Load auth token when app starts
    loadAuthToken();
  }, []);

  return (
    <RouteIndex />
  );
}

export default App;
