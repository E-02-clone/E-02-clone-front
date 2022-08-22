import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCommentsThunk, deleteCommentsThunk, putCommentsThunk } from "../app/slice/writeSlice";
import './css/seeAllComments.css'


//테스트용주석
const SeeAllComments = (props) => {
    const dispatch = useDispatch();
    const params = useParams();

    const comments = useSelector((state)=>
    state.writeSlice
);

const [editComment, setEditComment] = useState({
    comment: '',
    star : '',
    id : params.id,
});

useEffect(()=>{dispatch(getCommentsThunk(params.id))},[dispatch]);

const [edit, setEdit] = useState(false);

//별점 평점
let b = [];
let average = 0
for (let i = 0 ; i < comments.data.length; i++){
let a = b.push(comments.data[i].star)
}

const onChangeHandler = (event) => {
    const {value, name} = event.target;
    setEditComment({...editComment, [name]:value})
}

const onClickDeleteHandler = (commentkey) => {
    dispatch(deleteCommentsThunk(commentkey))
};

const onClickEditMode = () => {
    setEdit((status)=>!status)
};

const onClickPatchHandler = (commentkey) => {
    setEdit((status)=>!status)
    dispatch(putCommentsThunk(commentkey))
}

   return (
       <section className="modalCommentsContainer">
       <div>
       <button className="Xbutton" onClick={props.onClick}>&#x2715;</button>
       
       <h1>평균평점 : {(b.reduce((a,b)=>a+b,0)/comments.data.length).toFixed(2)}</h1>
       <h4 style={{height:"100vh"}}>이것저것 별점들</h4>
       </div>
       <input className="search" placeholder="후기 검색" type="text"/>
       {edit ? comments?.data?.map((a)=> {
            return(
                <div key={a.commentkey}>
            <section  className="comments">
            <h5>작성자:{a.userkey}</h5>
            평점 <input type="range"
            name="star"
             onChange={onChangeHandler}   
            min="1" max="5" step="1" defaultValue="1"/>{editComment.star}
            
            <input 
            name = "comment"
            onChange={onChangeHandler}/>
            
            
            
            </section>
            <button onClick={onClickEditMode}>수정취소</button>
            <button onClick={()=>onClickPatchHandler(a.commentkey)}>수정</button>
            </div>
            )
        })
        :
        comments?.data?.map((a)=> {
            return(
                <div key={a.commentkey}>
            <section  className="comments">
            <h5>작성자:{a.userkey}</h5>
            <h5>평점:{a.star}점</h5>
            <h6>날짜:{a.updatedAt}</h6>
            <h5 className="commentBox">{a.comment}</h5>
            </section>
            <button onClick={()=>onClickDeleteHandler(a.commentkey)}>삭제</button>
            <button onClick={onClickEditMode}>수정</button>
            </div>
            )
        })
         }
       

       </section>
    );
};
export default SeeAllComments;