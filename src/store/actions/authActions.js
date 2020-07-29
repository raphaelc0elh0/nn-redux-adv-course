export const signIn = (credentials) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch((error) => {
      dispatch({ type: 'LOGIN_ERROR', error: error })
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    })
  }
}