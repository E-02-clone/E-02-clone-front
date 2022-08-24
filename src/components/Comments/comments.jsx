import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCommentsThunk } from "../../app/slice/writeSlice";
import { useParams } from "react-router-dom";

import '../css/comments.css'

const Comments = () => {

 

    const dispatch = useDispatch();
    const params = useParams();

    const comments = useSelector((state)=>
    state.writeSlice
);



let b = [];
let average = 0
for (let i = 0 ; i < comments.data?.length; i++){
let a = b.push(Number(comments.data[i]?.star))
};

useEffect(()=>{
    dispatch(getCommentsThunk(params.id))
},[])




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
        <>
        <p className="starAverage">&#9733;{(b.reduce((a,b)=>a+b, 0)/comments.data?.length).toFixed(2) }</p>
        <h3 className="commentAmounts">·후기{comments.data.length}개</h3>
        <div className="commentsContainer">
        {comments?.data?.map((a)=> {
            return(
            <section key={a.commentkey} className="comments">
            <h5 >{a.nickname}</h5>
            <h5 >&#9733;{a.star}</h5>
            <h6 className="writeTime">{a.updatedAt?.substr(0,10)}</h6>
            <h5 className="commentBox">{a.comment}</h5>
            
            </section>
            )
        })
        }
        </div>
        </>
    )
};
export default Comments;