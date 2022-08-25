import React, {useState} from "react";
import '../css/commentsLayout.css'
import Comments from "./comments";
import SeeAllComments from "./seeAllComments";
import WriteComments from "./writeComments";
import { useSelector } from "react-redux";

const CommentsLayout = () => {
    
    const [modalOpen, setModalOpen] = useState(false);
    const [write, setWrite] = useState(false);

    const token = useSelector((state)=>state.user.isAuth)

    const onClickWrite = () => {
        if(token !== true){
            window.alert('로그인 후 이용가능합니다.')
        }else{
        setWrite((status)=>!status);
    }
}

    const onClickModal = () => {
        setModalOpen((status)=>!status);
    };
    
    return (
        <div className="commentsLayout">
        <div className={write ? "commentsSubject" : "commentsClosed"}>
            <div className="makeItRow3">
            <p style={{fontSize:'30px'}}>이 숙소의 후기</p> 
            <button className="writeButton" onClick={onClickWrite}>후기 작성</button>
            </div>
            {write ? <WriteComments onClick={onClickWrite}/> : null }
            
        </div>
            <Comments onClick={onClickModal}/>
            <button className="modalButton" onClick={onClickModal}>모든 후기 보기</button>
            <div className={modalOpen ? "modalOpen" : "modalClose"}>
            {modalOpen ? <SeeAllComments modalOpen={modalOpen} onClick={onClickModal}/> : <SeeAllComments/>}
            </div>
        </div>
    )
};
export default CommentsLayout;