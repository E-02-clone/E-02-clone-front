import React,{useState, useEffect} from "react";
import '../css/writeComments.css'
import { postCommentsThunk, getCommentsThunk } from "../../app/slice/writeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";


const WriteComments = (props) => {

    const dispatch = useDispatch();
    const params = useParams();

    const [writeComment, setWriteComment] = useState({
        comment: '',
        star : '',
        id : params.id,
    });

   

    
    const onChangeHandler = (event) => {
        const {value, name} = event.target;
        setWriteComment({...writeComment, [name]:value})
    }

    const onClickSubmitHandler = () => {
        if(writeComment?.star !== '' && writeComment?.comment !== ''){
        dispatch(postCommentsThunk(writeComment));
        window.location.reload();  
    }else if(writeComment?.star === '' || writeComment?.comment === ''){
        window.alert('모든값을 입력해주세요');
    }
    };

    return (
        <section className="writeCommentsContainer">
       <div>
       <button onClick={props.onClick} className="writeXbutton">&#x2715;</button>
       
       <h1>후기를 남겨주세요</h1>
       <h4 style={{height:"100vh"}}>반갑습니다 user님</h4>
       </div>
       
       <input
        className="writeSearch"
        name="comment"
        onChange={onChangeHandler}
        placeholder="후기 작성(최대 50자)" type="text" maxLength="50"/>
        <br/>
        <p>평점을 남겨주세요(1 ~ 5)</p>
        <input 
        className="rangeBar"
        type="range"
            name="star"
             onChange={onChangeHandler}   
            min="1" max="5" step="1" defaultValue="1"
        /><span className="starPoint"> {writeComment.star}</span>
        <button className="submitButton" onClick={onClickSubmitHandler}>후기 제출</button>
        
       </section>
    );
};

export default WriteComments;