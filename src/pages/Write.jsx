import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import WriteFirst from "../components/WriteDetail/WriteFirst";
import WriteSecond from "../components/WriteDetail/WriteSecond";
import { _PostItem, _PutItem } from "../app/slice/ItemSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reallocation = useLocation();
  const [showPage, setShowpage] = useState(true);

  const location_ref = useRef(null);
  const [location, setLocation] = useState("");
  const price_ref = useRef(null);
  const [price, setPrice] = useState(0);
  const category_ref = useRef(null);
  const [category, setCategory] = useState("");
  const title_ref = useRef(null);
  const [title, setTitle] = useState("");
  const content_ref = useRef(null);
  const [content, setContent] = useState("");

  // 사진을 넣어서 사용할곳.
  const [array, setArray] = useState([]);

  function RememberFFage(i, j, k) {
    setCategory(i);
    setTitle(j);
    setContent(k);
  }

  // console.log(reallocation?.state?.id);

  const RememberSFage = (i, j) => {
    setLocation(i);
    setPrice(j);
  };

  const GetedToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vya2V5IjoxLCJuaWNrbmFtZSI6ImppbiIsImlhdCI6MTY2MTE1OTkwMywiZXhwIjoxNjYxMjQ2MzAzfQ.94T7PDQY-6T6uXYJKhfIPtyyaEZ1CRYThuAVNqUeTEU";

  const PostItem = async () => {
    console.log(location, price, category, title, content);
    console.log(array);

    if (!isNaN(reallocation?.state?.id)) {
      // key값이 있을때
      await dispatch(
        _PutItem([
          {
            token: GetedToken,
          },
          { title, content, content, category, price, location, img: array },
          { key: reallocation?.state?.id },
        ])
      );
      await navigate("/");
    } else {
      // key값이 없을때
      await dispatch(
        _PostItem([
          {
            token: GetedToken,
          },
          { title, content, content, category, price, location, img: array },
        ])
      );
      await navigate("/");
    }
  };

  return (
    <div>
      {showPage ? (
        <WriteFirst
          setShowpage={setShowpage}
          title_ref={title_ref}
          content_ref={content_ref}
          category_ref={category_ref}
          RememberFFage={RememberFFage}
        />
      ) : (
        <WriteSecond
          setShowpage={setShowpage}
          setArray={setArray}
          location_ref={location_ref}
          price_ref={price_ref}
          PostItem={PostItem}
          RememberSFage={RememberSFage}
        />
      )}
    </div>
  );
};

export default Write;
