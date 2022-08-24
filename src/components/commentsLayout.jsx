import React, { useState } from "react";
import './css/commentsLayout.css'
import Comments from "./comments";
import SeeAllComments from "./seeAllComments";
import WriteComments from "./writeComments";



const CommentsLayout = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [write, setWrite] = useState(false);

    const onClickWrite = () => {
        setWrite((status) => !status);
    }

    const onClickModal = () => {
        setModalOpen((status) => !status);
    };

    return (
        <div className="commentsLayout">
            <div className="commentsSubject">
                <p style={{ fontSize: '30px' }}>총점</p> <button onClick={onClickWrite}>후기 작성</button>
                {write ? <WriteComments /> : <WriteComments />}
                <p>점수</p>
            </div>
            <Comments onClick={onClickModal} />
            <button className="modalButton" onClick={onClickModal}>모든 후기 보기</button>
            <div className={modalOpen ? "modalOpen" : "modalClose"}>
                {modalOpen ? <SeeAllComments onClick={onClickModal} /> : <SeeAllComments />}
            </div>
        </div>
    )
};
export default CommentsLayout;