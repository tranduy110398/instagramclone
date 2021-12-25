import React, {Component, useState} from "react";
import Grid from '@mui/material/Grid'
import login_image from "../assets/images/login.svg";
import logoinsta from "../assets/images/logoinsta.png";
import "./LoginPage.css";
import fb from "../assets/images/fb.png";
import ios from "../assets/images/appstore.png";
import android from "../assets/images/googleplay.png";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const LoginPage = () => {    

    // const [account, setAccount] = useState("");
    // const [password, setPassword] = useState("");

    // const submitFormHandler = (e) => {
    //     e.preventDefault();
    // }

    // const accountHandler =(e) => {
    //     setAccount(e.target.value);
    // }

    // const passwordHandler =(e) => {
    //     setPassword(e.target.value);
    // }
    
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const changeLogIn = () => {
        if(isLoggedIn){
            setIsLoggedIn(false);
        }else {
            setIsLoggedIn(true);
        }
    }
        // const SubmitButtonHandler = () => {
    //     if(account.trim().length > 5 && password.trim().length > 5) {
    //         return (
    //         <Link to="/home"> 
    //             <button className="login-button">
    //                 Log In 
    //             </button>
    //         </Link>  
    //         )
    //     }else{
    //         return(
    //         <button className="login-button">
    //             Log In 
    //         </button> 
    //         )
    //     }
    // }
     return (
        <div>
            <Grid container>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <div className="login-main">
                        <div>
                            <img src={login_image} className="login-image" width="454px"/>
                        </div>
                        <div>
                            <div className="login-form">
                                <img src={logoinsta} className="logo-insta"/>  
                                   <div className="login-signin">
                                       {
                                           isLoggedIn ? <Login/> : <SignUp/>
                                       }
                                    <div className="login-alt">
                                        <div className="login-line"></div>
                                        <div className="login-or">OR</div>
                                        <div className="login-line"></div>
                                        
                                    </div>
                                    <div className="login-facebook">
                                        <img src={fb} className="fb-logo"/>
                                        Log in with Facebook</div>
                                    <div className="login-forgot">Forgot password? </div>
                                </div>    
                            </div> 
                            <div className="signup">
                 {
                    isLoggedIn ? 
                     <div className="signup-option">
                         Don't have an account? <span onClick={changeLogIn} style={{fontWeight:"bold",color: "rgb(24, 149, 246)"}}>Sign up</span> 
                     </div> : 
                      <div className="loginPage__signup">
                           Have an account? <span onClick={changeLogIn}  style={{fontWeight:"bold", color:"#0395F6", cursor: "pointer"}}>Sign in</span>
                    </div>
                }      
                            </div>     
                            <div>
                            <div className="get-app">
                                Get the app.
                            </div>  
                            <div className="login-app">
                                <img src={ios} className="download-ios"/>
                                <img src={android} className="download-android"/>
                            </div>      
                        </div>     
                        </div>    
                         
                    </div>
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
        </div>
    )
    
   
}
export default LoginPage;
