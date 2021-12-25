import React, { Component } from 'react'
import "./Posts.css";
import pp1circle from "../assets/images/pp1circle.png";
import pp2circle from "../assets/images/pp2circle.png";
import pp3circle from "../assets/images/pp3circle.png";
import pp4circle from "../assets/images/pp4circle.png";
import image3 from "../assets/posts/image3.jpg";
import image4 from "../assets/posts/image4.jpg";
import image5 from "../assets/posts/image5.jpg";
import image6 from "../assets/posts/image6.jpg";
import image7 from "../assets/posts/image7.jpg";
import PostDetail from '../PostDetail/PostDetail';
import upload from "../assets/images/upload.png";
import {storage,auth} from "../firebase";

class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {
            postArray:[],
            
        }
    }

  

    getPostHandler = () => {
        fetch('http://localhost:8080/post')
        .then(response => response.json())
        .then(data => {
            this.setState({postArray: data})
        })
    }

    
    componentDidMount() {
        this.getPostHandler();
    }
//   const [postData, setPostData] = useState([
//       {
//           postId: 1,
//           postAvatar: pp1circle,
//           postUserName: "thesquarecomics",
//           imageUrl: image3,
//           timeStamp: 12345,
//           likesAmount: 10.120,

//       },
//       {
//         postId: 2,
//         postAvatar: pp2circle,
//         postUserName: "thesquarecomics",
//         imageUrl: image4,
//         timeStamp: 12345,
//         likesAmount: 14.233,
//     },
//     {
//         postId: 3,
//         postAvatar: pp3circle,
//         postUserName: "thesquarecomics",
//         imageUrl: image5,
//         timeStamp: 12345,
//         likesAmount:  18.179 ,
 
//     },
//     {
//         postId: 3,
//         postAvatar: pp4circle,
//         postUserName: "thesquarecomics",
//         imageUrl: image6,
//         timeStamp: 12345,
//         likesAmount: 18.236,
//     },
//     {
//         postId: 4,
//         postAvatar: pp1circle,
//         postUserName: "thesquarecomics",
//         imageUrl: image7,
//         timeStamp: 12345,
//         likesAmount: 16.841,
//     }
//   ])

   uploadHandler = (event) => {
        let image = event.target.files[0];
        const context = this;
        if(image === null || image === undefined){
            return;
        }
        var uploadTask = storage.ref("images").child(image.name).put(image);
        uploadTask.on(
            "state_changed",
            function (snapshot){
          
            },
            function(error) {

            },
            function() {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL){
                        console.log(downloadURL);
                        let payload = {
                            "postId": Math.floor(Math.random()*100000).toString(),
                            "userId": JSON.parse(localStorage.getItem("users")).uid,
                            "postPath": downloadURL,
                            "timeStamp": new Date().getTime(),
                            "likesAmount": Math.floor(Math.random()*30000).toString()
                        }
                        const responses = {
                            method: "POST",
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify(payload)
                        }
                        fetch("http://localhost:8080/post", responses)
                        .then(response => response.json())
                        .then(data => {
                             console.log(data);
                             context.getPostHandler();
                        })
                        .catch(error => {

                        })
                })
            }
        )
  }
    render() {
         return (
        <div>
            <div className='post-container'>
                    <div className='file-upload'>
                        <label for ="file-upload">
                            <img className='post-uploadicon' src={upload}/>
                        </label>
                        <input type="file" id="file-upload" onChange={this.uploadHandler}/>
                    </div>
                  
            </div>


            {
                
                this.state.postArray.map((item,index) => (
                <PostDetail 
                    id={item.postId} 
                    userName={item.userName} 
                    postImage={item.postPath} 
                    likesAmount={item.likesAmount}
                    />
            ))}
        </div>
    )
    }
   
}

export default Posts
