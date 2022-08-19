import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { postLogin } from '../app/slice/userSlice';

const Modal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    console.log(user)

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
                </LoginForm>
            </LoginModal>
        </>
    );
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
const LoginForm = styled.form`
    height: 618px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 24px;
    padding-top: 0;
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

const LoginButton = styled.button`
    width: 100%;
    border:none;
    height: 48px;
    border-radius: 10px;
    background-color:#e11a60;
    color: white;
    font-weight: bold;
    font-size: px;
`