import React from 'react';
import styled from 'styled-components';

const Calendar = () => {
    //getMonth => 7 : 8월
    //getDate => 24 : 24일
    //getDay => 수요일 : 3 일요일 : 0
    //getFullYear => 2022 

    // const [nowMonth,]

    const now_year = new Date().getFullYear();
    const now_month = new Date().getMonth();
    const now_date = new Date().getDate();
    const now_day = new Date().getDay();

    // 이번 달 말일
    const now_month_lastDate = new Date(now_year, now_month + 1, 0).getDate()
    console.log(now_month_lastDate)
    return (
        <CalendarMonth>
            gd
        </CalendarMonth>
    );
};

export default Calendar;

const CalendarMonth = styled.div`
    width: 100vw;
    height: 100vw;
    background-color: #c3c3c3;

`