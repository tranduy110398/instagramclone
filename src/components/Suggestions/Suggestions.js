import  Avatar  from '@mui/material/Avatar';
import React from 'react'
import "./Suggestions.css";
import pp1circle from "../assets/images/pp1circle.png";
import pp2circle from "../assets/images/pp2circle.png";
import pp3circle from "../assets/images/pp3circle.png";
import pp4circle from "../assets/images/pp4circle.png";

const Suggestions = () => {
    return (
       <div className="suggestion-container">
           <div className="suggestion-header">
               <div>Suggestions For You</div>
           </div>
           <div className="suggestion-main">
               <div className="suggestion-friend">
                     <Avatar src={pp1circle} className="suggestion-image"/>
                     <div className="suggestion-text">n.binh.98</div>
              </div>
              <div className="suggestion-friend">
                     <Avatar src={pp2circle} className="suggestion-image"/>
                     <div className="suggestion-text">thucuc1001</div>
              </div>     
              <div className="suggestion-friend">
                     <Avatar src={pp3circle} className="suggestion-image"/>
                     <div className="suggestion-text">cher.rybeauty21</div>
              </div>     
              <div className="suggestion-friend">
                     <Avatar src={pp4circle} className="suggestion-image"/>
                     <div className="suggestion-text">waris_98</div>
              </div>
              <div className="suggestion-friend">
                     <Avatar src={pp1circle} className="suggestion-image"/>
                     <div className="suggestion-text">acrosstheuniverse_library</div>
              </div>
               </div>
       </div>
    )
}
export default Suggestions
