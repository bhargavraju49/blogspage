import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { firestore as db } from '../firebase'
import {
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    addDoc,
  } from 'firebase/firestore/lite';

// get the docs by id in fire base 
function PostDetail () {
    const [post, setPost] = useState({});
    const {postId} = useParams();
    useEffect(()=>{
        const PostRef = doc(db, "Posts", postId)
        getDoc(PostRef).then((snap) => {
            console.log(snap.data())
            setPost(snap.data())
        })
    },[])

    return (
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.content}</p> 
        </div>
    )
}
export default PostDetail