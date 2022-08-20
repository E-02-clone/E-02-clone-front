import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { postLogin } from '../app/slice/userSlice';

const Modal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const [mode, setMode] = useState('login')
    console.log(user)
    if (mode === "login") {
        return (
            <>
                <Background onClick={closeModal}>
                </Background>
                <LoginModal>
                    <header>
                        로그인
                    </header>
                    <h4 className='welcome_text'>에어비앤비에 오신 것을 환영합니다.</h4>
                    <LoginForm>
                        <input type="text" className="input_id" />
                        <input type="text" className="input_pw" />
                        <p>전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.</p>

                        <LoginButton onClick={(e) => {
                            e.preventDefault();
                            dispatch(postLogin())
                        }}>로그인</LoginButton>
                        <p onClick={() => {
                            setMode("join")
                        }} style={{ textAlign: "center", fontSize: "1em", color: "gray" }}>회원가입</p>
                    </LoginForm>
                </LoginModal>
            </>
        );
    } else if (mode === "join") {
        return (
            <>
                <Background onClick={closeModal}>
                </Background>
                <JoinModal>
                    <header>
                        회원가입
                    </header>

                    <JoinForm>
                        <input type="text" className="input_id" placeholder='아이디' />
                        <input type="text" className="input_id" placeholder='닉네임' />
                        <input type="text" className="input_pw" placeholder='패스워드' />
                        <input type="text" className="input_pw" placeholder='패스워드 확인' />
                        <input type="text" className="input_pw" placeholder='이메일' />
                        <select name="" id="">
                            <option value="true">맞습니다.</option>
                            <option value="false">아닙니다.</option>
                        </select>
                        <JoinButton onClick={(e) => {
                            e.preventDefault();
                        }}>가입하기</JoinButton>
                    </JoinForm>
                </JoinModal>
            </>
        );
    }
};

export default Modal;

const Background = styled.div`
    position: absolute;
    top:0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    z-index: 99;
`

const LoginModal = styled.div`
    z-index: 100;
    position:absolute;
    border-radius:10px;
    color: black;
    background-color: white;
    width: 564px;
    height: 40em;
    left: calc(50% - 564px/2);
    top: calc(50% - 40em/2);
    display: flex;
    flex-direction:column;
    align-items:center;
    header {
        font-weight: bold;
        height: 72px;
        padding: 24px;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid lightgray;
    }
    .welcome_text{
        width: 100%;
        padding: 24px;
        margin: 0;
        font-weight:bold;
    }
`

const JoinModal = styled.div`
    z-index: 100;
    position:absolute;
    border-radius:10px;
    color: black;
    background-color: white;
    width: 564px;
    height: 45em;
    left: calc(50% - 564px/2);
    top: calc(50% - 45em/2);
    display: flex;
    flex-direction:column;
    align-items:center;
    header {
        font-weight: bold;
        height: 72px;
        padding: 24px;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid lightgray;
    }
`
const LoginForm = styled.form`
    height: 618px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 24px;
    padding-top: 0;
    label {
        width: 100%;
        text-align: left;
    }
    input {
        border: 1px solid lightgray;
        height: 56px;
        width: 100%;
    }
    .input_id {
        border-bottom: none;
        border-radius: 10px 10px 0 0 ;
    }
    .input_pw {
        border-radius: 0 0 10px 10px;
    }
    p {
        font-size:0.74em;
        padding-top: 5px;
        width: 100%;
    }
`
const JoinForm = styled.form`
    height: 724px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 24px;
    padding-top: 0;
    input {
        margin-top: 30px;
        border-radius: 20px;
        border: 1px solid lightgray;
        height: 56px;
        width: 100%;
        padding: 24px;
    }
    input:focus {
        outline: none;
    }
    select {
        width: 100%;
        margin-top: 30px;
        height: 56px;
        padding-left: 24px;
        color: gray;
        border:  1px solid lightgray;
        border-radius: 20px;

    }
    select:focus {
        outline: none;
    }
`

const LoginButton = styled.button`
    width: 100%;
    border:none;
    height: 48px;
    border-radius: 10px;
    background-color:#e11a60;
    color: white;
    font-weight: bold;
`

const JoinButton = styled.button`
    width: 100%;
    border:none;
    height: 48px;
    border-radius: 10px;
    background-color:#e11a60;
    color: white;
    font-weight: bold;
    margin-top: 30px;
`