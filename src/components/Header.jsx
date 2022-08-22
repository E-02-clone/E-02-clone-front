import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGlobe, faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Category from './category/Category';

const Header = ({ setSelect }) => {
    const [modal, setModal] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false)

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    if (!openSearchBar) {
        return (
            <>
                <Head>
                    <HeaderBar>
                        <LogoButton>
                            <Logo
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/640px-Airbnb_Logo_B%C3%A9lo.svg.png"
                                alt="logo"
                                width="100em"
                            />
                        </LogoButton>
                        <Search>
                            <SearchBar>
                                <div>
                                    <span className="search where">어디든지</span>
                                    <span className="search when">언제든 일주일</span>
                                    <span>게스트 추가</span>
                                </div>
                                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                            </SearchBar>
                        </Search>
                        <HeaderRight className='header__right'>
                            <HeaderButton>호스트 되기</HeaderButton>
                            <HeaderButton><FontAwesomeIcon icon={faGlobe} /></HeaderButton>
                            <LoginButton onClick={openModal}>
                                <span className="bars"><FontAwesomeIcon icon={faBars} /></span>
                                <span className="user"><FontAwesomeIcon icon={faCircleUser} /></span>
                            </LoginButton>
                        </HeaderRight>
                    </HeaderBar>
                    <Category setSelect={setSelect} />
                </Head>
                {modal ? <Modal closeModal={closeModal} /> : null}

            </>
        );
    }
};

export default Header;

const Head = styled.div`
background-color: white;
    position: sticky;
    top: 0;
    z-index: 5;
`
const HeaderRight = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;

`
const Logo = styled.img`
    object-fit: contain;
`

const LogoButton = styled.div`
    width: 30em;
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
`

const LoginButton = styled.button`
    border: 1px solid lightgray;
    display:flex;
    align-items: center;
    justify-content:center;
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
    padding: 0 80px;
    border-bottom: 1px solid  rgb(240, 240, 240);
    z-index: 5;
    img{
        height: 36px;
    }
`

const SearchBar = styled.button`
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
        padding: 0 16px;
        color: gray;
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