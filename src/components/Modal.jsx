
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { postLogin, postJoin } from '../app/slice/userSlice';
import { isId, isPassword, isNickname, isEmail } from '../utils/regExpLogin';
import { Link, useNavigate } from 'react-router-dom';
const Modal = ({ closeModal }) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const [mode, setMode] = useState('login')
    const navigate = useNavigate()
    console.log(user)
    const userId = useRef();
    const password = useRef();
    const comfirm = useRef();
    const nickname = useRef();
    const email = useRef();
    const host = useRef();

    const [checkId, setCheckId] = useState(null);
    const [checkNickname, setCheckNickname] = useState(null);
    const [checkPassword, setCheckPassword] = useState(null);
    const [checkComfirm, setCheckComfirm] = useState('');
    const [checkEmail, setCheckEmail] = useState(null);
    const [checkHost, setCheckHost] = useState(true);

    const validateData = (e, data) => {

    }

    const submitJoin = (e) => {
        e.preventDefault();
        if (checkId !== true) {
            userId.current.focus()
        } else if (checkNickname !== true) {
            nickname.current.focus()
        } else if (checkPassword !== true) {
            password.current.focus()
        } else if (password.current.value !== checkComfirm) {
            comfirm.current.focus()
        } else if (checkEmail !== true) {
            email.current.focus()
        } else if (host.current?.value === "none") {
            host.current.focus()
            setCheckHost(false);
        } else {
            alert('회원가입에 성공하셨습니다 !')
            dispatch(postJoin({
                userId: userId.current.value,
                nickname: nickname.current.value,
                password: password.current.value,
                comfirm: comfirm.current.value,
                email: email.current.value,
                host: host.current.value
            }))
            setMode('login')
        }
    }

    console.log(host.current?.value);

    if (mode === "login") {
        return (
            <OpenModal>
                <Background onClick={closeModal}>
                </Background>
                <LoginModal>
                    <header>
                        로그인
                    </header>
                    <h4 className='welcome_text'>에어비앤비에 오신 것을 환영합니다.</h4>
                    <LoginForm>
                        <input type="text" className="input_id" ref={userId} />
                        <input type="text" className="input_pw" ref={password} />
                        <p>전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.</p>
                        <LoginButton onClick={(e) => {
                            e.preventDefault();
                            dispatch(postLogin({ userId: userId.current.value, password: password.current.value }))
                            closeModal()
                        }}>로그인</LoginButton>
                        <p onClick={() => {
                            setMode("join");
                        }} style={{ textAlign: "center", fontSize: "1em", color: "gray" }}>회원가입</p>
                    </LoginForm>
                </LoginModal>
            </OpenModal>
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
                        <input type="text" className="input_id" placeholder='아이디' ref={userId} autoFocus onChange={(e) => {
                            isId(e.target.value) ? setCheckId(true) : setCheckId(false)
                        }} />
                        {
                            checkId === null ?
                                <div className='init'>6~12자의 영문 소문자, 숫자와 특수기호(._-)만 사용 가능합니다.</div>
                                :
                                checkId ?
                                    <div className='success'>사용 가능한 아이디입니다.</div>
                                    :
                                    <div className='fail'>아이디를 확인해주세요. 6~12자, 영문을 포함하고 숫자와 일부 특수문자(._-) 입력 가능</div>
                        }
                        <input type="text" className="input_nickname" placeholder='닉네임' ref={nickname} onChange={(e) => {
                            isNickname(e.target.value) ? setCheckNickname(true) : setCheckNickname(false)
                        }} />
                        {
                            checkNickname === null ?
                                <div className='init'>2~6자, 영문과 한글 입력 가능</div>
                                :
                                checkNickname ?
                                    <div className='success'>사용 가능한 닉네임입니다.</div>
                                    :
                                    <div className='fail'>닉네임을 확인해주세요. 2~6자, 영문과 한글 입력 가능</div>
                        }
                        <input type="password" className="input_pw" placeholder='비밀번호' ref={password} onChange={(e) => {
                            isPassword(e.target.value) ? setCheckPassword(true) : setCheckPassword(false)
                        }} />
                        {
                            checkPassword === null ?
                                <div className='init'>8~20자, 영문과 숫자를 포함하고 일부 특수문자(!@#$%^&*) 입력 가능</div>
                                :
                                checkPassword ?
                                    <div className='success'>사용 가능한 비밀번호입니다.</div>
                                    :
                                    <div className='fail'>비밀번호를 확인해주세요!</div>
                        }
                        <input type="password" className="input_pw" placeholder='비밀번호 확인' ref={comfirm} onChange={(e) => {
                            setCheckComfirm(e.target.value)
                        }} />
                        {
                            checkComfirm === '' ?
                                <div className='init'>비밀번호를 입력해주세요.</div>
                                :
                                checkComfirm === password.current.value ?
                                    <div className='success'>비밀번호가 일치합니다.</div>
                                    :
                                    <div className='fail'>비밀번호를 확인해주세요!</div>
                        }
                        <input type="text" className="input_email" placeholder='이메일' ref={email} onChange={(e) => {
                            isEmail(e.target.value) ? setCheckEmail(true) : setCheckEmail(false)
                        }} />
                        {
                            checkEmail === null ?
                                <div className='init'>이메일을 입력해주세요.</div>
                                :
                                checkEmail ?
                                    <div className='success'>사용 가능한 이메일입니다.</div>
                                    :
                                    <div className='fail'>이메일을 확인해주세요!</div>
                        }
                        <select name="" id="" ref={host}>
                            <option value="none" className="select__init">--당신은 호스트인가요?--</option>
                            <option value={true}>맞습니다.</option>
                            <option value={false}>아닙니다.</option>
                        </select>
                        {
                            !checkHost && <div className='fail'>옵션을 선택해주세요.</div>
                        }
                        <JoinButton onClick={submitJoin}>가입하기</JoinButton>
                    </JoinForm>
                </JoinModal>
            </>
        );
    }
};

export default Modal;


const OpenModal = styled.div`

`

const Background = styled.div`
    position: absolute;
    top:0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    z-index: 99;
    animation: modal-bg-show 0.3s;
    @keyframes modal-bg-show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
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
    animation: modal-show 0.3s;
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
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
        margin-top: 10px;
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
        margin-top: 10px;
        height: 56px;
        padding-left: 24px;
        color: gray;
        border:  1px solid lightgray;
        border-radius: 20px;

    }
    select:focus {
        outline: none;
    }
    div {
        width: 100%;
        padding-left: 24px;
        margin-top: 10px;
        font-size: 12px;
    }
    .init {
        color: gray;
    }
    .success {
        color: #00a600;
    }
    .fail {
        color: red;
    }
    .select__init {
        display: none;
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
    margin-top: 18px;
`
