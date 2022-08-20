import React,{useState} from "react";
import './css/seeAllComments.css'

const SeeAllComments = (props) => {

    return (
       <section className="modalCommentsContainer">
       <div>
       <button className="Xbutton" onClick={props.onClick}>&#x2715;</button>
       
       <h1>5.0 후기 47개</h1>
       <h4 style={{height:"100vh"}}>이것저것 별점들</h4>
       </div>
       <input className="search" placeholder="후기 검색" type="text"/>
       <div className="modalComments">
        <h6>작성자</h6>
        <h6>년월</h6>
        <p className="modalCommentsBox">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
       </div>
       <div className="modalComments">
        <h6>작성자</h6>
        <h6>년월</h6>
        <p className="modalCommentsBox">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
       </div>
       <div className="modalComments">
        <h6>작성자</h6>
        <h6>년월</h6>
        <p className="modalCommentsBox">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
       </div>
       <div className="modalComments">
        <h6>작성자</h6>
        <h6>년월</h6>
        <p className="modalCommentsBox">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
       </div>
       <div className="modalComments">
        <h6>작성자</h6>
        <h6>년월</h6>
        <p className="modalCommentsBox">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
       </div>

       </section>
    );
};
export default SeeAllComments;