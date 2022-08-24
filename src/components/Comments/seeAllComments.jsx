import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCommentsThunk, deleteCommentsThunk, putCommentsThunk } from "../../app/slice/writeSlice";
import EditComment from "./editComment"
import '../css/seeAllComments.css'


//테스트용주석
const SeeAllComments = (props) => {
    const dispatch = useDispatch();
    const params = useParams();

    const comments = useSelector((state)=>
    state.writeSlice
);



useEffect(()=>{dispatch(getCommentsThunk(params.id))},[dispatch]);



const [edit, setEdit] = useState(false);

//별점 평점
let b = [];
let average = 0
for (let i = 0 ; i < comments.data?.length; i++){
let a = b.push(Number(comments.data[i]?.star))
};


   return (
    <>
       <section className="modalCommentsContainer">
       <div>
       <button className="Xbutton" onClick={props.onClick}>&#x2715;</button>
       </div>
       <h1 className="starAverage">&#9733;{(b.reduce((a,b)=>a+b, 0)/comments.data?.length).toFixed(2) }</h1>
       <div className="makeItRow2">
       <h4>이것저것 별점들</h4>
       <input className="detailSearch" placeholder="후기 검색" type="text"/>
       </div>
        <div>
        {comments?.data?.map((a)=> (
           <EditComment key={a.commentkey} comments={a}/>
        ))}
         </div>
         </section>
         </>
)
       
      
       
    };
export default SeeAllComments;