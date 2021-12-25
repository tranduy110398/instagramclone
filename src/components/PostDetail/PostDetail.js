import React , {useState} from 'react';
import  Avatar  from '@mui/material/Avatar';
import "./PostDetail.css";
import love from "../assets/images/love.svg";
import comment from "../assets/images/comment.svg";
import share from "../assets/images/share.svg";
import save from "../assets/images/save.svg";
import pp1circle from "../assets/images/pp1circle.png";
import pp2circle from "../assets/images/pp2circle.png";
import pp3circle from "../assets/images/pp3circle.png";
import pp4circle from "../assets/images/pp4circle.png";
const PostDetail =(props) => {
    const [commentData, setCommentData] = useState([
        {
            userName: "cpike3",
            commentId: 10,
            timeStamp: 13245,
            comment: "Progress isn't linear"
        },
        {
            userName: "samuelmz2",
            commentId: 11,
            timeStamp: 12345,
            comment: "How sweet of my brain :)"
        },
        {
            userName: "allrosepower",
            commentId: 12,
            timeStamp: 2345,
            comment: "I love how disappointed that baby looks after the comparison is revealed"
        },
    ])

    const randomNumber = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomizeAvatar = () => {
        let random = randomNumber(1,4);
        switch (random){
              case 1:
                  return <Avatar src={pp1circle} className="post-avatar"/>;
              case 2:
                  return <Avatar src={pp2circle} className="post-avatar"/>;
              case 3:
                  return <Avatar src={pp3circle} className="post-avatar"/>
              case 4:
                  return <Avatar src={pp4circle} className="post-avatar"/>       
        }
          
        // const avatar = `pp${randomNumber(1,4)}circle`;
        // if(avatar === `pp1cirlce`){
        //        return <Avatar src={pp1circle} className="post-avatar"/>        }
        // else if(avatar === `pp2cirlce`){
        //     return <Avatar src={pp2circle} className="post-avatar"/>        }
        // else if(avatar === `pp3cirlce`){
        //     return <Avatar src={pp3circle} className="post-avatar"/>        }
        // else if(avatar === `pp4cirlce`){
        //     return <Avatar src={pp4circle} className="post-avatar"/>        }
  
        // switch(avatar){
        //     case "pp1circle":
        //         return pp1circle;
       
        //     case "pp2circle":
        //         return  pp2circle;   
    
        //     case "pp3circle":
        //         return  pp3circle;   
     
        //     case "pp4cirlce":
        //         return  pp4circle;
        // }
    }
   
    // const getComments = () => {
    //     fetch('http://localhost:8080/comments/'+this.props.id)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({commentData: data});
    //     });
    // }

    // const submitComments = (event) => {
    //     if(event.key === "Enter"){
    //         let comment = event.currentTarget.value;
    //         if(comment != null || comment != undefined) {
    //             let payload = {
    //                 "commentId": Math.floor(Math.random()*1000000).toString(),
    //                 "userId": JSON.parse(localStorage.getItem("users")).uid,
    //                 "postId": props.id,
    //                 "timeStamp": new Date().getTime(),
    //                 "comment": comment
    //             }

    //             const requestOptions = {
    //                 method: "POST",
    //                 headers: {"Content-Type": "application/json"},
    //                 body: JSON.stringify(payload),
    //             }
    //             fetch("http://localhost:8080/comments", requestOptions)
    //             .then(response => response.json())
    //             .then(data => {
    //                 getComments();
    //             })
    //             .catch(error =>{

    //             })
    //         }
    //     }
    // }

    return (
        <div className="postdetail-container">
            <div className="post-header">
                {/* <Avatar src={randomizeAvatar} className="post-avatar"/>
                <p>{`pp${randomAvatar(1,4)}circle`}</p> 
                {randomizeAvatar}
                {randomNumber}*/}
                {randomizeAvatar()}
                <div className="post-username">{props.userName}</div>
            </div>
            <div>
                <img src={props.postImage} className="post-image" alt="square"/>
            </div>
            <div>
                <div className="post-actions-container">
                    <img src={love} alt="Love Button" className="post-actions"/>
                    <img src={comment} alt="Comment Button" className="post-actions"/>
                    <img src={share} alt="Share Button" className="post-actions"/>
                    <img src={save} alt="Save Button" className='save-actions'/>
                </div>    
                <div className="post-likes">
                {props.likesAmount} likes
                </div>
            </div>
            <div>
                
                {
                    commentData.map((item,index) => (
                        <div className="post-comments">
                             <span style={{fontWeight:"bold"}}>{item.userName}</span>:<span style={{marginLeft:"5px"}}>{item.comment}</span>
                        </div>
                    ))
                }

                {/* <div className="post-user">
                <div style={{fontWeight:"bold", marginRight:"5px"}}>{data.userName1} </div>{data.userComment1}
                </div>
                <div className="post-comments">
                View all {data.commentsAmount} comments
                </div>
                <div className="post-comments">
                <div style={{fontWeight:"bold", marginRight:"5px"}}> {data.userName2}</div> {data.userComment2}
                </div>
                <div className="post-comments">
                <div style={{fontWeight:"bold", marginRight:"5px"}}> {data.userName3}</div> {data.userComment3}
                </div>
                <div className="post-date">
                {data.date}
                </div> */}
                <div className="post-input-container">
                    <input type ="text" placeholder="Add a comment..."  className="post-input"/>
                </div> 
            </div>
        </div>
    )
}

export default PostDetail
