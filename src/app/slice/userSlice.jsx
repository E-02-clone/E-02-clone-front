import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { postLogin, postJoin } from '../app/slice/userSlice';
import { isId, isPassword, isNickname, isEmail } from '../utils/regExpLogin';
import { checkDuplicationId, checkDuplicationNick, checkDuplicationEmail } from '../app/slice/userSlice';


const Modal = ({ closeModal }) => {

    const check = useSelector(state => state.user.check);
    console.log(check)

    const [mode, setMode] = useState('login')

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
    const [myHost, setMyHost] = useState("none");

    if (myHost === "true") {
        setMyHost(true)
    } else if (myHost === "false") {
        setMyHost(false)
    }

    const [checkIdState, setCheckIdState] = useState(false)
    const [checkNickState, setCheckNickState] = useState(false)
    const [checkEmailState, setCheckEmailState] = useState(false)

    const dispatch = useDispatch();

    /** 회원가입 함수 */
    const submitJoin = (e) => {
        e.preventDefault();
        if (checkId !== true) {
            alert('아이디를 확인해주세요')
            userId.current.focus()
        } else if (checkNickname !== true) {
            alert('닉네임을 확인해주세요')
            nickname.current.focus()
        } else if (checkPassword !== true) {
            alert('비밀번호를 확인해주세요')
            password.current.focus()
        } else if (password.current.value !== checkComfirm) {
            alert('비밀번호를 확인해주세요')
            comfirm.current.focus()
        } else if (checkEmail !== true) {
            alert('이메일을 확인해주세요')
            email.current.focus()
        } else if (host.current?.value === "none") {
            alert('호스트를 확인해주세요')
            setCheckHost(false);
        } else if (check.id.ok !== true) {
            alert('아이디를 중복확인 해주세요')
            userId.current.focus()
        } else if (check.nickname.ok !== true) {
            alert('닉네임을 중복확인 해주세요')
            nickname.current.focus()
        } else if (check.email.ok !== true) {
            alert('이메일을 중복확인 해주세요')
            email.current.focus()
        } else {
            dispatch(postJoin({
                userId: userId.current.value,
                nickname: nickname.current.value,
                password: password.current.value,
                email: email.current.value,
                host: myHost
            }))
            alert("회원가입에 성공하셨습니다.")
            setMode('login')
        }
    }
    /**
     * 
     * @param {string} key: userId, nickname, email 
     * @param {string} value 
     */
    const checkDuplicationUser = (key, value) => {
        if (key === "userId") {
            dispatch(checkDuplicationId({ key: key, value }));
            setCheckIdState(check.id?.ok)
        } else if (key === "nickname") {
            dispatch(checkDuplicationNick({ key, value }));
            setCheckIdState(check.nickname?.ok)
        } else if (key === "email") {
            dispatch(checkDuplicationEmail({ key, value }));
            setCheckIdState(check.email?.ok)
        }
    };

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
                        <input placeholder='아이디' type="text" className="input_id" ref={userId} />
                        <input placeholder='비밀번호' type="text" className="input_pw" ref={password} />
                        <p>전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.</p>
                        <LoginButton onClick={(e) => {
                            e.preventDefault();
                            dispatch(postLogin({ userId: userId.current.value, password: password.current.value }));
                            closeModal();
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
                        <span style={{ display: "flex", alignItems: "center", width: "90%" }}>
                            <input type="text" className="input_id" placeholder='아이디' ref={userId} autoFocus onChange={(e) => {
                                isId(e.target.value) ? setCheckId(true) : setCheckId(false)
                            }} />
                            <DuplicationCheckButton onClick={() => checkDuplicationUser("userId", userId.current.value)}>중복</DuplicationCheckButton>
                        </span>
                        {
                            checkId === null ?
                                <div className='init'>6~12자의 영문 소문자, 숫자와 특수기호(._-)만 사용 가능합니다.</div>
                                :
                                checkId ?
                                    (check.id?.ok === false ?
                                        <div className='fail'>중복된 아이디입니다.</div>
                                        :
                                        <div className='success'>사용 가능한 아이디입니다.</div>
                                    )
                                    :
                                    <div className='fail'>아이디를 확인해주세요. 6~12자, 영문을 포함하고 숫자와 일부 특수문자(._-) 입력 가능</div>
                        }

                        <span style={{ display: "flex", alignItems: "center", width: "90%" }}>
                            <input type="text" className="input_nickname" placeholder='닉네임' ref={nickname} onChange={(e) => {
                                isNickname(e.target.value) ? setCheckNickname(true) : setCheckNickname(false)
                            }} />
                            <DuplicationCheckButton check={check.id?.ok} onClick={() => checkDuplicationUser("nickname", nickname.current.value)}>중복</DuplicationCheckButton>
                        </span>

                        {
                            checkNickname === null ?
                                <div className='init'>2~6자, 영문과 한글 입력 가능</div>
                                :
                                checkNickname ?
                                    (check.nickname?.ok === false ?
                                        <div className='fail'>중복된 닉네임입니다.</div>
                                        :
                                        <div className='success'>사용 가능한 닉네임입니다.</div>
                                    )
                                    :
                                    <div className='fail'>닉네임을 확인해주세요. 2~6자, 영문과 한글 입력 가능</div>
                        }
                        <span style={{ display: "flex", alignItems: "center", width: "90%" }}>
                            <input type="password" className="input_pw" placeholder='비밀번호' ref={password} onChange={(e) => {
                                isPassword(e.target.value) ? setCheckPassword(true) : setCheckPassword(false)
                            }} />
                        </span>
                        {
                            checkPassword === null ?
                                <div className='init'>8~20자, 영문과 숫자를 포함하고 일부 특수문자(!@#$%^&*) 입력 가능</div>
                                :
                                checkPassword ?
                                    <div className='success'>사용 가능한 비밀번호입니다.</div>
                                    :
                                    <div className='fail'>비밀번호를 확인해주세요!</div>
                        }
                        <span style={{ display: "flex", alignItems: "center", width: "90%" }}>
                            <input type="password" className="input_pw" placeholder='비밀번호 확인' ref={comfirm} onChange={(e) => {
                                setCheckComfirm(e.target.value)
                            }} />
                        </span>

                        {
                            checkComfirm === '' ?
                                <div className='init'>비밀번호를 입력해주세요.</div>
                                :
                                checkComfirm === password.current.value ?
                                    <div className='success'>비밀번호가 일치합니다.</div>
                                    :
                                    <div className='fail'>비밀번호를 확인해주세요!</div>
                        }
                        <span style={{ display: "flex", width: "90%" }}>
                            <input type="text" className="input_email" placeholder='이메일' ref={email} onChange={(e) => {
                                isEmail(e.target.value) ? setCheckEmail(true) : setCheckEmail(false)
                            }} />
                            <DuplicationCheckButton onClick={() => checkDuplicationUser("email", email.current.value)}>중복</DuplicationCheckButton>

                        </span>
                        {
                            checkEmail === null ?
                                <div className='init'>이메일을 입력해주세요.</div>
                                :
                                checkEmail ?
                                    (check.email?.ok === false ?
                                        <div className='fail'>중복된 이메일입니다.</div>
                                        :
                                        <div className='success'>사용 가능한 이메일입니다.</div>
                                    )
                                    :
                                    <div className='fail'>이메일을 확인해주세요!</div>
                        }
                        <span style={{ display: "flex", width: "90%" }}>

                            <select name="" id="" onChange={(e) => {
                                e.preventDefault()
                                setMyHost(e.target.value)
                            }}>
                                <option value="none" className="select__init">--당신은 호스트인가요?--</option>
                                <option value={true}>맞습니다.</option>
                                <option value={false}>아닙니다.</option>
                            </select>
                        </span>

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

const DuplicationCheckButton = styled.button`
    width: 56px;
    height: 56px;
    margin-top: 10px;
    border: 1px solid #e11a60;
    background-color: transparent;
    color: #e11a60;
    border-radius: 0 10px 10px 0;
    font-weight:bold;
    transition: 0.2s all;
    &:hover {
        color: white;
        background-color: #e11a60;
    }
`


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
        padding-left: 24px;
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
const JoinForm = styled.div`
    height: 724px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 24px;
    padding-top: 0;
    input {
        margin-top: 10px;
        border-radius: 10px 0 0 10px;
        border: 1px solid lightgray;
        height: 56px;
        width: 90%;
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
        border-radius: 10px;

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
    .input_pw {
        width: 100%;
        border-radius:10px;
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
