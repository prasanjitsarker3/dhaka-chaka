import React, { useContext } from 'react';
import "firebase/auth";
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import Header from '../Home/Header/Header';
import './Login.css';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';




if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
else {
  firebase.app();
}

const Login = () => {

  const [LoggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(res => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photoURL: photoURL
        }
        setUser(signedInUser);
        // const { displayName, email } = result.user;
        const signInUser = { name: displayName, email }
        // console.log(signInUser)
        setLoggedInUser(signInUser)
        history.replace(from)
      })
      .catch((err) => {

        const credential = GoogleAuthProvider.credentialFromError(err);
        console.log(err);
        console.log(credential);
      });
  };

  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          photo: '',
          email: '',
          error: '',
          success: false
        }
        setUser(signedOutUser);
       

      })
      .catch(err => {

      })
  }
  const handleBlur = (e) => {
    // console.log(e.target.name, e.target.value); 
    let isFieldValid = true;

    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)

    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value)
      isFieldValid = passwordHasNumber && isPasswordValid;

    }
    if (isFieldValid) {
      const newUserInfo = { ...user }
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo)
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in 
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
          const { displayName, email } = res.user;
          const signInUser = { name: displayName, email };
          setLoggedInUser(signInUser);
          history.replace(from);
        })
        .catch(error => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);

        });

    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          const { displayName, email } = res.user;
          const signInUser = { name: displayName, email };
          setLoggedInUser(signInUser);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  }

  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name

    }).then(() => {
      console.log('User name updated successfully')
    }).catch((error) => {
      console.log(error);

    });
  }

  return (
    <div className="authentication">
      <div>
        <Header></Header>
      </div>


      <h2 className="auth" > Authentication</h2>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit} className="form-about ">

        {newUser && <input type="text" name="name" className="form-about" onBlur={handleBlur} placeholder="Enter your name" />}
        <br />
        <input type="text" name="email" className="form-about" onBlur={handleBlur} placeholder="Email Address" required />
        <br />
        <input type="password" name="password" className="form-about" onBlur={handleBlur} placeholder="Password" required />
        <br />
        <input className="form-btn" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
      </form>
      <br />
      {
        user.isSignedIn ? <button onClick={handleSignOut} className="button">Sign Out</button> :
          <button onClick={handleSignIn} className="button">Google Sign in</button>
      }
      <p style={{ color: 'red' }}>{user.error}</p>

      {
        user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged in'} successfully</p>

      }


    </div>
  );
};

export default Login;