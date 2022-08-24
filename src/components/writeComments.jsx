import React, { useState, useEffect } from "react";
import './css/writeComments.css'
import { postCommentsThunk, getCommentsThunk } from "../app/slice/writeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";


const WriteComments = () => {

    const dispatch = useDispatch();
    const params = useParams();

    const [writeComment, setWriteComment] = useState({
        comment: '',
        star: '',
        id: params.id,
    });


    const onChangeHandler = (event) => {
        const { value, name } = event.target;
        setWriteComment({ ...writeComment, [name]: value })
    }

    const onClickSubmitHandler = () => {
        if (writeComment?.star !== '') {
            dispatch(postCommentsThunk(writeComment));
        } else if (writeComment?.star === '') {
            window.alert('평점을 선택해주세요');
        }
    }
    return (
        <section className="modalCommentsContainer">
            <div>
                <button className="Xbutton">&#x2715;</button>

                <h1>후기를 남겨주세요</h1>
                <h4 style={{ height: "100vh" }}>반갑습니다 user님</h4>
            </div>

            <input
                className="search"
                name="comment"
                onChange={onChangeHandler}
                placeholder="후기 작성(최대 50자)" type="text" maxLength="50" />
            <br />
            <p>평점을 남겨주세요(1 ~ 5)</p>
            <input type="range"
                name="star"
                onChange={onChangeHandler}
                min="1" max="5" step="1" defaultValue="1"
            /><span> {writeComment.star}</span>
            <button onClick={onClickSubmitHandler}>후기 제출</button>

        </section>
    );
};

export default WriteComments;