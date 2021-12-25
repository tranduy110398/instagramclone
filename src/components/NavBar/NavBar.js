import React from "react";
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import logo from "../assets/images/logoinsta.png";
import home from "../assets/images/home.svg";
import share from "../assets/images/share.svg";
import upload from "../assets/images/comment.svg";
import love from "../assets/images/love.svg";
import find from "../assets/images/find.svg";
import pp1 from "../assets/images/pp1.png";
import  Avatar  from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-main">
            <Grid container>

                {/* ****** Empty Space ******  */}
                <Grid item xs={2}> 
                            
                </Grid>
                {/* ****** Empty Space ******  */}

                {/* ****** Main Navbar ******  */}
                <Grid item xs={3}>
                    <img src={logo} className="navbar-logo" alt="Logo"/>
                </Grid>    
                <Grid item xs={3}>
                        <input type="text" placeholder="Search" className="navbar-search"/>
                </Grid>
                <Grid item xs={3} className="navbar-icons">
                   <img src={home} alt="Home Page" width="40px"/>
                   <img src={share} alt="Share Button"  width="40px"/>
                   <img src={upload} alt="Upload Button" width="40px"/>
                   <img src={find} alt="Find Button" width="40px"/>
                  
                   <img src={love} alt="Love Button" width="40px"/>
                   <Link to="/welcome">
                    <Avatar src={pp1} className="navbar-avatar"/>
                   </Link>
                  
                </Grid>
                {/* ****** Main Navbar ******  */}

            </Grid>
        </div>
    )
}
export default Navbar;