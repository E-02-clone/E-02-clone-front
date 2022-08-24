import React from 'react';
import styled from 'styled-components';

const AmenityButton = ({ item, amenity, setAmenity }) => {

    return (
        <SpecialButton className='special__info' select={amenity.includes(item.title) ? true : false} onClick={() => {
            amenity.includes(item.title)
                ?
                setAmenity(amenity.filter(v => v !== item.title))
                :
                setAmenity([...amenity, item.title])
        }}>
            <ButtonElement>
                <div className='img__box'>
                    <img src={item.img} alt="" width="30px" />
                </div>
                <div>
                    {item.title}
                </div>
            </ButtonElement>
        </SpecialButton>
    );
};

export default AmenityButton;

const SpecialButton = styled.button`
    box-sizing: content-box;
    padding: ${(prop) => prop.select ? "22px 4px 38px 4px" : "24px 6px 40px 6px"};
    border: ${(prop) => prop.select ? "3px solid black" : "1px solid lightgray"};
    background-color: ${(prop) => prop.select ? "#f7f7f7" : "transparent"};
    margin: 0 8px 16px 8px;
    border-radius: 20px;
    transition: 0.1s all;
        &:active {
            transform: scale(0.95)
        }
    &:hover {
        border: 3px solid black;
        padding: 22px 4px 38px 4px;
    }
`

const ButtonElement = styled.div`
    width: 186px;
    height: 82px;
    padding: 20px;
    .img__box {
        height: 40px;
        width: 146px;
    }
    
`