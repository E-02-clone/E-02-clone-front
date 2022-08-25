import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGlobe, faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from '../app/slice/userSlice';
import { Link } from 'react-router-dom';
import { getSearchItems } from '../app/slice/mainSlice';

const Header = ({ modal, setModal, type }) => {
    const searchItem = useRef()
    const dispatch = useDispatch()
    const [openSearchBar, setOpenSearchBar] = useState("normal")
    const onLogoutHandler = () => {
        const confirm = window.confirm("로그아웃 하시겠습니까?");
        if (confirm) {
            dispatch(logoutUser());
            window.location.replace("/");
        }
    };
    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };


    const [dropbox, setDropbox] = useState(false)
    return (
        <>
            <Head mode={openSearchBar}>
                <HeaderBar mode={openSearchBar}>
                    <LogoButton>
                        <Logo
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/640px-Airbnb_Logo_B%C3%A9lo.svg.png"
                            alt="logo"
                            width="100em"
                            onClick={() => {
                                window.location.replace('/')
                            }}
                        />
                    </LogoButton>
                    <HeaderRight className='header__right'>
                        <Link to={"/write/1"}><HeaderButton>호스트 되기</HeaderButton></Link>
                        <HeaderButton><FontAwesomeIcon icon={faGlobe} /></HeaderButton>
                        <LoginButton onClick={() => {
                            setDropbox(!dropbox)
                        }}>
                            <span className="bars"><FontAwesomeIcon icon={faBars} /></span>
                            <span className="user"><FontAwesomeIcon icon={faCircleUser} /></span>
                            <Dropbox open={dropbox}>
                                <StyledLink to="/wishlists">
                                    <div className="wishlist">위시리스트</div>
                                </StyledLink>
                                {localStorage.getItem("jwtToken") === null
                                    ?
                                    <div onClick={openModal}>로그인</div>
                                    :
                                    <div onClick={onLogoutHandler}>로그아웃</div>
                                }
                            </Dropbox>
                        </LoginButton>
                    </HeaderRight>
                </HeaderBar>
                <MoreSearchBar mode={openSearchBar}>
                    {type !== "wish" &&
                        <Search >
                            <SearchBar mode={openSearchBar} onClick={() => {
                                openSearchBar === "normal" &&
                                    setOpenSearchBar("search")
                            }}>
                                {
                                    openSearchBar === "normal" ?
                                        <div>
                                            <span className="search where">어디든지</span>
                                            <span className="search when">언제든 일주일</span>
                                            <span>게스트 추가</span>
                                        </div>
                                        :
                                        <div>
                                            <SearchInput type="text" ref={searchItem} />
                                        </div>
                                }

                                <button onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(getSearchItems(searchItem.current.value))
                                    setOpenSearchBar("normal")

                                }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                            </SearchBar>
                        </Search>}


                </MoreSearchBar>
            </Head>
            <Background mode={openSearchBar} />
            {modal ? <Modal closeModal={closeModal} /> : null}
        </>
    );
}
export default Header;

const SearchInput = styled.input`
    width:320px;
    margin:0 10px 0 20px;
    border: none;
    &:focus {
        outline:none;
    }
`

const StyledLink = styled(Link)`
    text-decoration:none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`


const Dropbox = styled.div`
    position: absolute;
    border-radius: 20px;
    box-shadow: 0 1px 5px 0 rgb(190, 190, 190);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin: auto auto;
    font-weight: bold;
    font-size: 16px;
    width: 230px;
    background-color:white;
    z-index: 11;
    top:50px;
    right:0;
    overflow: hidden;
    display: ${(prop) => prop.open ? "block" : "none"};
    div {
        width: 100%;
        padding: 10px 0 ;
    }
    div:hover {
        background-color: #f7f7f7;
    }

`

const Background = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    background-color:black;
    opacity: 0.3;
    z-index: 3;
    position: absolute;
    transition: 0.2s ease-in;
    display: ${(prop) => prop.mode === "normal" ? "none" : "block"};
`

const MoreSearchBar = styled.div`
    width: 100%;
    left: 0;
    height: 80px;
    background-color: white;
    border-bottom: 1px solid  rgb(240, 240, 240);
    position: absolute;
    z-index: 7;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in;
    top: ${(props) => props.mode === "normal" ? "0" : "80px"};
`

const Head = styled.div`
    background-color: white;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    padding: 0 160px;

`
const HeaderRight = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;

    z-index: 10;
`
const Logo = styled.img`
    object-fit: contain;
    cursor: pointer;

`

const LogoButton = styled.div`
    width: 30em;

    z-index: 10;

`

const HeaderButton = styled.button`
    font-weight:bold;
    margin: 10px;
    border: 0;
    padding: 8px 16px;
    background-color: transparent;
    border-radius: 24px;
    &:hover {
        background-color: #f9f9f9;
    }

`
const Search = styled.div`
    width: 37em;

    z-index: 5;


`

const LoginButton = styled.button`
    border: 1px solid lightgray;
    display:flex;
    align-items: center;
    justify-content:center;

    position:relative;

    width: 84px;
    height: 42px;
    border-radius: 42px;
    background-color: transparent;
    transition: 0.2s ease-in;
    .bars {
        font-size: 14px;
        margin: 0 10px; 
    }
    .user {
        font-size: 32px;
        color: #a3a3a3;
    }
    &:hover {
        box-shadow: 0 1px 3px 0 rgb(190, 190, 190);
    }
`

const HeaderBar = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between;

    background-color: white;
    z-index: 5;
    transition: 0.2s ease-in;

    img{
        height: 36px;
    }
`


const SearchBar = styled.div`

    width: 400px;
    height: 48px;
    border-radius: 48px;
    border: 1px solid lightgray;
    background-color: transparent;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 3px 0 lightgray;
    transition: 0.2s ease-in;
    &:hover {
        box-shadow: 0 1px 5px 0 rgb(190, 190, 190);
    }

    span {
        border: none;
        padding: 0 16px;
        background-color: transparent;
        color: gray;
        border-radius: 0;
    }
    button {
        border: 0;
        background-color: #ff385c;
        color: white;
        width: 36px;
        height: 36px;
        font-size: 14px;
        border-radius: 36px;
    }
    .search {
        border-right: 1px solid lightgray; 
        font-weight: bold;
        color: black;
    }
`
