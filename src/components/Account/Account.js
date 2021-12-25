import  Avatar  from '@mui/material/Avatar';
import React from 'react'
import  "./Account.css";
import pp1circle from "../assets/images/pp1circle.png";
const Account = () => {
    return (
        <div className="account-container">
            <Avatar src={pp1circle} alt="Account" className="account-image"/>
            <div>
                <div className="account-name">duydinh1615</div>
                <div className="account-username" >Duy Đình</div>
                <div className="account-switch">Switch</div>
            </div>
            
        </div>
    )
}

export default Account
