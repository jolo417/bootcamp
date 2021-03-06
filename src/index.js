
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import 'firebase/database';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase';

import { composeWithDevTools } from 'redux-devtools-extension';

const firebaseConfig = {
    apiKey: "AIzaSyBVTI2do76IccZKbkgIHDrgHIuo1FpgDh0",
    authDomain: "bootcamp-a00df.firebaseapp.com",
    databaseURL: "https://bootcamp-a00df.firebaseio.com",
    projectId: "bootcamp-a00df",
    storageBucket: "bootcamp-a00df.appspot.com",
    messagingSenderId: "460450770419",
    appId: "1:460450770419:web:73ec48e6fa414f6710b686"
  };

firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    // firestore: firestoreReducer // <- needed if using firestore
  });
  
  // Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());

const rrfConfig = {
userProfile: 'users'
// useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// enableClaims: true // Get custom claims along with the profile
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
  }
  

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
                <App />
            </BrowserRouter>,
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'),
);
