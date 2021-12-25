import React, {Component ,useState} from 'react'
import { storage,auth } from '../firebase';
const Login = () => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         emailId: null,
    //         password: null
    //     }
    // }

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");


    const LoginHandler = () => {
        auth.signInWithEmailAndPassword(emailId, password)
        .then((userCredential) =>{
            var user = userCredential.user;
            localStorage.setItem("users", JSON.stringify(user));
            window.location.reload();
        })
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message
        })
        
    }

    //  render () {
         return (
        <div>
            <input className="signin-text" onChange={(event) => {setEmailId(event.currentTarget.value)}} type="text" placeholder="Phone number, username, or email"/>
            <input className="signin-password" onChange={(event) => {setPassword(event.currentTarget.value)}} type="password" placeholder="Password"/>
            <button className="signin-button" onClick={LoginHandler}>Log In</button>        
        </div>
     ) 
    //  }
  
}

export default Login;
