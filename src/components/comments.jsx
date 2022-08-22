import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCommentsThunk } from "../app/slice/writeSlice";
import { useParams } from "react-router-dom";

import './css/comments.css'

const Comments = () => {
    
    const dispatch = useDispatch();
    const params = useParams();

    const comments = useSelector((state)=>
    state.writeSlice
);

useEffect(()=>{
    dispatch(getCommentsThunk(params.id))
},[dispatch])

   

//console.log(comments[0].map((a,b)=>a.commentkey))

// console.log(comments)
// const eachComment = comments[0].map((a,b)=>(a.comment))
// console.log(eachComment)
// const eachStar = comments[0].map((a,b)=>a.star)
// console.log(eachStar) 
// const date = comments[0].map((a,b)=>a.updatedAt)
// console.log(date)
// const userkey = comments[0].map((a,b)=> a.userkey)
// console.log(userkey)
    
    return (
        <div className="commentsContainer">
        {comments?.data?.map((a)=> {
            return(
            <section key={a.commentkey} className="comments">
            <h5>작성자:{a.userkey}</h5>
            <h5>평점:{a.star}점</h5>
            <h6>날짜:{a.updatedAt}</h6>
            <h5 className="commentBox">{a.comment}</h5>
            
            </section>
            )
        })
        }
        </div>
    )
};
export default Comments;