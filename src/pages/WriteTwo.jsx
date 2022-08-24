import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import WritePageOne from "../components/WriteDetail2/WritepageOne";
import WritePageTwo from "../components/WriteDetail2/WritepageTwo";
import WritePageThree from "../components/WriteDetail2/WritepageThree";
import WritepageFour from "../components/WriteDetail2/WritepageFour";
import WritepageFive from "../components/WriteDetail2/WritepageFive";
import Amenity from "../components/WriteDetail2/Amenity";
import WritePageSeven from "../components/WriteDetail2/WritepageSeven";
import WritepageEight from "../components/WriteDetail2/WritepageEight";
import WritepageNine from "../components/WriteDetail2/WritepageNine";
import WritepageTen from "../components/WriteDetail2/WritepageTen";
import { _WriteDone, _EditItem } from "../app/slice/ItemSlice";

function WriteTwo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [getLocation, setGetLocation] = useState(null);

  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [space, setSpace] = useState("");
  const [location, setLocation] = useState("");
  const [roomCount, setRoomCount] = useState({});
  const [convenient, setConvenient] = useState([]);
  const [array, setArray] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [theprice, setThePrice] = useState(0);

  const location_ref = useRef(location);
  const title_ref = useRef(title);
  const content_ref = useRef(content);

  const tokenValue = localStorage.getItem("jwtToken");

  // console.log(
  //   type,
  //   category,
  //   space,
  //   location,
  //   roomCount,
  //   convenient,
  //   array,
  //   title,
  //   content,
  //   theprice
  // );

  const WriteDone = async () => {
    if (getLocation) {
      console.log("수정시작");
      await dispatch(
        _EditItem([
          { token: tokenValue },
          {
            itemType: type,
            category,
            itemSize: space,
            location,
            guestRoom: roomCount,
            convenience: convenient,
            img: array,
            title,
            content,
            price: theprice,
          },
          { key: getLocation },
        ])
      );
      await alert("수정이 완료되었습니다.");
      navigate("/");
    } else {
      console.log("생성시작");
      await dispatch(
        _WriteDone([
          { token: tokenValue },
          {
            itemType: type,
            category,
            itemSize: space,
            location,
            guestRoom: roomCount,
            convenience: convenient,
            img: array,
            title,
            content,
            price: theprice,
          },
        ])
      );
      await alert("작성이 완료되었습니다.");
      navigate("/");
    }
  };

  // 뒤로가기버튼
  const GoFrontBtn = () => {
    const target = Number(id) + 1;
    if (target > 11) {
      console.log("10페이지 초과");
    } else {
      navigate(`/write/${target}`);
    }
  };

  return (
    <>
      {id == 1 ? (
        <WritePageOne
          setType={setType}
          type={type}
          setGetLocation={setGetLocation}
        />
      ) : null}
      {id == 2 ? (
        <WritePageTwo setCategory={setCategory} category={category} />
      ) : null}
      {id == 3 ? <WritePageThree setSpace={setSpace} space={space} /> : null}
      {id == 4 ? (
        <WritepageFour setLocation={setLocation} location_ref={location_ref} />
      ) : null}
      {id == 5 ? (
        <WritepageFive GoFrontBtn={GoFrontBtn} setRoomCount={setRoomCount} />
      ) : null}
      {id == 6 ? <Amenity setConvenient={setConvenient} /> : null}
      {id == 7 ? (
        <WritePageSeven
          GoFrontBtn={GoFrontBtn}
          setArray={setArray}
          array={array}
        />
      ) : null}
      {id == 8 ? (
        <WritepageEight setTitle={setTitle} title_ref={title_ref} />
      ) : null}
      {id == 9 ? (
        <WritepageNine setContent={setContent} content_ref={content_ref} />
      ) : null}
      {id == 10 ? (
        <WritepageTen setThePrice={setThePrice} WriteDone={WriteDone} />
      ) : null}
    </>
  );
}

export default WriteTwo;
