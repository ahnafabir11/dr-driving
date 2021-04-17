import './Login.css';
import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [, setloggedInUser] = useContext(UserContext);
  const [errorMessege, setErrorMessege] = useState(null);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        const newUser = {
          email: user.email,
          username: user.displayName,
          userImg: user.photoURL
        }
        setloggedInUser(newUser);
        setUserToken();
        setErrorMessege(null);
        history.replace(from);
      }).catch((error) => {
        const errorMessage = error.message;
        setErrorMessege(errorMessage)
      });
  }

  const setUserToken = ()=> {
    firebase.auth().currentUser.getIdToken(true)
    .then((idToken)=> {
      sessionStorage.setItem('token', idToken)
    })
    .catch(function (error) {
      // Handle error
    });
  }

  return (
    <div className="Login">
      <div className="container my-5">
        <div className="p-5">
          <Card style={{maxWidth: '600px'}} className="mx-auto">
            <Card.Body>
              <h3 className="text-center pb-3" style={{color: '#333366' }}>Login</h3>
              <div className="social-login" onClick={googleSignIn}>
                <div className="d-flex align-items-center">
                  <FcGoogle style={{ fontSize: '50px' }} />
                  <p className="mb-0 ml-auto mr-auto flex-grow">Continue With Google</p>
                </div>
              </div>
              <div className="social-login">
                <div className="d-flex align-items-center">
                  <FaFacebook style={{ fontSize: '50px', color: 'blue' }} />
                  <p className="mb-0 ml-auto mr-auto flex-grow">Continue With Facebook</p>
                </div>
              </div>
              <div className="social-login">
                <div className="d-flex align-items-center">
                  <FaGithub style={{ fontSize: '50px' }} />
                  <p className="mb-0 ml-auto mr-auto flex-grow">Continue With GitHub</p>
                </div>
              </div>
              {
                errorMessege && <p className="pt-3 text-center text-danger">{errorMessege}</p>
              }
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login;