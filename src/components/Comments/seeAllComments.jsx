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


   return (
    <>
       <section className="modalCommentsContainer">
       <div>
       <button className="Xbutton" onClick={props.onClick}>&#x2715;</button>
       </div>
       <h1 className="starAverage">&#9733;{(b.reduce((a,b)=>a+b, 0)/comments.data?.length).toFixed(2) }</h1>
       <div className="makeItRow2">
       <h5>솔직한 후기를 만나보세요</h5>
    <input className="detailSearch" placeholder=" 미구현 입니다." disabled={true} type="text"/>
    </div>
    <div className="starBox">
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
       
      
       
        <div className="modalAllComments">
        {comments?.data?.map((a)=> (
           <EditComment key={a?.commentkey} comments={a}/>
        ))}
         </div>
         </section>
         </>
)
       
      
       
    };
export default SeeAllComments;