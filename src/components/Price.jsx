import React, { useState } from 'react';
import styled from 'styled-components';

const Price = () => {

    const [price, setPrice] = useState(null);

    return (
        <PriceLayout>
            <div className="prcie__input">
                <PriceButton state={price <= 13426} onClick={() => {
                    price - 1000 < 13426 ? setPrice(13426) : setPrice(price - 1000)
                }}>
                    <div>-</div>
                </PriceButton>
                <div style={{ margin: "0 32px" }}>
                    <PriceInput placeholder="\00" value={price} state={price < 13426} onChange={(e) => {
                        setPrice(e.target.value)
                    }} />
                </div>
                <PriceButton onClick={() => {
                    price < 13426 ? setPrice(13426) : setPrice(price + 1000)
                }}><div>+</div></PriceButton>
            </div>
            <div style={{ textAlign: "center" }}>/박</div>
            <div style={{ width: "100%" }}>
                <PriceRecommend>&nbsp;이와 비슷한 숙소의 요금은 보통 ₩35,156~₩58,593 사이입니다.</PriceRecommend>
            </div>
            <SaleButtonLabel>
                <div style={{ width: "430px", }}>
                    첫 3명의 게스트에게 20% 할인 혜택을 제공하여 예약률을 높여보세요. <b><u>자세히 알아보기</u></b>
                </div>
                <SalePriceCheckBox type="checkbox" />
            </SaleButtonLabel>
        </PriceLayout>
    );
};

export default Price;

const PriceLayout = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .prcie__input {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const SaleButtonLabel = styled.label`
    width: 500px;
    display: flex;
    margin: 72px 0;
    border: 1px solid lightgray;
    padding: 20px 10px;
    border-radius: 20px;
`

const PriceRecommend = styled.p`
    width: 320px;
    font-size:20px;
    margin: auto;
    padding-top: 32px;
`

const PriceButton = styled.button`
    font-size:24px ;
    width: 48px;
    height: 48px;
    border-radius: 48px;
    color: black;
    border: 1px solid black;
    background-color: transparent;
    opacity: ${(prop) => prop.state ? 0.2 : 0.5};
    font-weight: bold;
    &:hover {
        opacity: ${(prop) => prop.state ? 0.2 : 0.8};
        cursor: ${(prop) => prop.state ? "not-allowed" : "pointer"};
    }
    div{
        text-align: center;
        width: 36px;
        height: 40px;
        margin: auto;
    }
`
const PriceInput = styled.input`
    text-align: center;
    height: 96px;
    width: 300px;
    margin: 8px 12px;
    border: ${(prop) => prop.state ? "2px solid red" : "2px solid lightgray"};
    background-color: ${(prop) => prop.state ? "#f4c9c9" : "white"};
    border-radius: 5px;
    font-size: 64px;
    font-weight: bold;
    &:focus {
        outline: red;
        border: ${(prop) => prop.state ? "4px solid red" : "4px solid black"};
        background-color: white;
    }
`

const SalePriceCheckBox = styled.input`
    width: 24px;
    margin-left: 24px;
    background-color:black;
`