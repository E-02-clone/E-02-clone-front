import React,{useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteCommentsThunk, putCommentsThunk } from "../../app/slice/writeSlice";
import { useParams } from "react-router-dom";
import '../css/editComment.css'


const EditComment = (props) => {
    const params = useParams();
    const dispatch = useDispatch();
    
    const userKey = useSelector((state)=>
    state.user.user.userkey);

    const [change, setChange] = useState(false);

    const onChangeHandler = (event) => {
        const {value, name} = event.target;
        setEditComment({...editComment, [name]:value})
    };

    const [editComment, setEditComment] = useState({
        comment: '',
        star : '',
    });
    const onClickChangeHandler = () => {
        setChange((status)=>!status);
    };

    const onClickPatchHandler = (commentkey) => {
        if(editComment?.star !== '' && editComment?.comment !== ''){
        setChange((status)=>!status)
        dispatch(putCommentsThunk({...editComment, commentkey:commentkey}))
        }else if(editComment?.star === '' || editComment?.comment === ''){
            window.alert('모든값을 입력해주세요.')
        }
    };

    const onClickDeleteHandler = () => {
        dispatch(deleteCommentsThunk(props.comments.commentkey))
    };



    return (
        <div className="editCommentContainer">
    { change ? <><div className="editCommentBox">
        <h4>{props.comments.userkey}</h4>
        <h4><input type="range"
            min="1"
            max="5"
            defaultValue="1"
            onChange={onChangeHandler}
            name="star"
        /></h4>
        {editComment.star}
        <h6>{props.comments.updatedAt}</h6>
        <h6 className="CommentBox"><input onChange={onChangeHandler} name="comment" type="text"/></h6>
        </div>
        <div className="editButtons">
            <button className="editButton" onClick={onClickChangeHandler}>취소</button>
            <button className="deleteButton" onClick={()=>onClickPatchHandler(props.comments.commentkey)}>수정</button>
        </div>
        </>
         :
         <>
        <div className="editCommentBox">
        <h4>{props.comments.userkey}</h4>
        <h4>&#9733;{props.comments.star}</h4>
        <h6>{props.comments.updatedAt}</h6>
        <h6 className="CommentBox">{props.comments.comment}</h6>
        </div>
        {userKey === props.comments.userkey ? <div className="editButtons">
            <button className="editButton" onClick={onClickChangeHandler}>수정</button>
            <button className="deleteButton" onClick={onClickDeleteHandler}>삭제</button>
        </div> : null}
        
        </>
        
    }
   </div>   )
}

export default EditComment;

