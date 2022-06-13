import React, { useState } from "react";
import { Button } from "@mui/material";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../../firebase";
import "./Login.css";
import { useStateValue } from "../../ContextsAPI/StateProvider";
import { actionType } from "../../ContextsAPI/reducer";

const Login = () => {
  const [{}, dispatch] = useStateValue();
  const [error, setLoginError] = useState("");

  const signIn = () => {
    auth.languageCode = "en";
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result;
        console.log("User", user);
        dispatch({
          type: actionType.SET_USER,
          user: user,
        });
      })
      .catch((error) => {
        // Handle Errors here.
        setLoginError(error.message);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
      });
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <img
          src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-.png"
          alt=""
          className="logo"
        />
        <div className="loginText">
          <h1>Sign In to WhatsApp</h1>
        </div>

        <Button
          type="submit"
          size="medium"
          variant="contained"
          onClick={signIn}
        >
          Sign In with Google
        </Button>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Login;
