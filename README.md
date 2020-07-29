## Are you stuck on the lesson #18?
In the middle of the lesson I was getting an error:

```
TypeError: Object(...)
```
After some googling, found out that the firebase/firestore code was updated and it broke the code we were writing with the course.
So I read the official API reference docs, which you can find here https://react-redux-firebase.com/docs/api/, and made some changes to our code based on them.

Documents affected (inside src folder):
* index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from './config/fbConfig'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={{}}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```
* config/fbConfig.js `I put my config object on a different file and .gitignored that`
```
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import configObject from './configObject';

// Initialize Firebase
firebase.initializeApp(configObject);
firebase.firestore();

export default firebase;
```
* store/actions/projectActions.js
```
export const createProject = (project) => {
  return (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project: project })
    }).catch((error) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', error: error })
    })
  }
};
```

Hope it works for you too!
