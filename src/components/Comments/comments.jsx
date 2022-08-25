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

const star1 = (comments.data.filter((a)=>a.star===1).length) 
const star2 = (comments.data.filter((a)=>a.star===2).length) 
const star3 = (comments.data.filter((a)=>a.star===3).length) 
const star4 = (comments.data.filter((a)=>a.star===4).length) 
const star5 = (comments.data.filter((a)=>a.star===5).length) 


//각 별점의 비율 (나타내는 bar가 200px이므로 *200하여 맞춤)
const star1_rate = ((star1 / (star1 + star2 + star3 + star4 + star5)).toFixed(2))*200;
const star2_rate = ((star2 / (star1 + star2 + star3 + star4 + star5)).toFixed(2))*200;
const star3_rate = ((star3 / (star1 + star2 + star3 + star4 + star5)).toFixed(2))*200;
const star4_rate = ((star4 / (star1 + star2 + star3 + star4 + star5)).toFixed(2))*200;
const star5_rate = ((star5 / (star1 + star2 + star3 + star4 + star5)).toFixed(2))*200;


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
    console.log(b)
    
    return (
        <>
        <p className="starAverage">&#9733;{b.length === 0 ? 0 : (b.reduce((a,b)=>a+b, 0)/comments.data?.length).toFixed(2) }</p>
        <h3 className="commentAmounts">·후기{comments.data.length}개</h3>
        <div className="commentsContainer">
        <div className="starBox2">
    <section className="star1"></section>
       <section  className="star2"></section>
       <section  className="star3"></section>
       <section  className="star4"></section>
       <section  className="star5"></section>
       <section style={{width:`${star1_rate}px`}} className="star1_1"><span>&#9733;1</span></section>
       <section style={{width:`${star2_rate}px`}} className="star2_2"><span>&#9733;2</span></section>
       <section style={{width:`${star3_rate}px`}} className="star3_3"><span>&#9733;3</span></section>
       <section style={{width:`${star4_rate}px`}} className="star4_4"><span>&#9733;4</span></section>
       <section style={{width:`${star5_rate}px`}} className="star5_5"><span>&#9733;5</span></section>
       </div> 
        {comments?.data?.map((a)=> {
            return(
            <section key={a?.commentkey} className="comments">
            <h5 >{a?.nickname}</h5>
            <h5 >&#9733;{a?.star}</h5>
            <h6 className="writeTime">{a?.updatedAt?.substr(0,10)}</h6>
            <h5 className="commentBox">{a?.comment}</h5>
            
            </section>
            
            )
        })
        }
        
        </div>
        </>
    )
};
export default Comments;