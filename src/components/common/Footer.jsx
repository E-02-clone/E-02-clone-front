import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterBar>
            <div className='company'>
                <div className='above-text'>
                    © 2022 Airbnb, Inc. · 개인정보 처리방침 · 이용약관 · 사이트맵 · 한국의 변경된 환불 정책 · 회사 세부정보
                </div>
                <p className='below-text'>
                    웹사이트 제공자: CloneCoding-hanghae, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: cloneClone, cloneClone, cloneClone | VAT 번호: clone9999 | 사업자 등록 번호: clone9999 | 연락처: ababab12, 웹사이트, clo-one-cod | 호스팅 서비스 제공업체: 아마존 웹서비스 | 클론에어비엔비는 통신판매 중개자 에어비앤비 플랫폼을 따라한 플랫폼으로 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 클론에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 클론에어비앤비에게는 없습니다.
                </p>
            </div>
        </FooterBar>
    );
};

export default Footer;

const FooterBar = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 0.9em;
    background-color: #ffffff;
    border-top: 1px solid lightgray;
    .company {
        padding: 12px 80px; 
    }
    .above-text {
        padding-bottom: 12px;
        border-bottom: 1px solid lightgray;
    }
    .below-text {
        font-size: 0.7em;
        margin: 0;
    }
    `
