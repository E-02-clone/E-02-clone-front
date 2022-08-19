import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGlobe, faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    console.log(modal);
    return (
        <>
            <HeaderBar>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/640px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />
                <SearchBar>
                    <div>
                        <span className="search where">어디든지</span>
                        <span className="search when">언제든 일주일</span>
                        <span>게스트 추가</span>
                    </div>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </SearchBar>
                <HeaderRight className='header__right'>
                    <HeaderButton>호스트 되기</HeaderButton>
                    <HeaderButton><FontAwesomeIcon icon={faGlobe} /></HeaderButton>
                    <LoginButton onClick={openModal}>
                        <span className="bars"><FontAwesomeIcon icon={faBars} /></span>
                        <span className="user"><FontAwesomeIcon icon={faCircleUser} /></span>
                    </LoginButton>
                </HeaderRight>
            </HeaderBar>
            {modal ? <Modal closeModal={closeModal} /> : null}

        </>
    );
};

export default Header;

const HeaderRight = styled.div`
    /* width: 300px; */
    display: flex; 
    align-items: center;
    justify-content: center;
    
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
    padding: 0 36px;
    border-bottom: 1px solid  rgb(240, 240, 240);
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