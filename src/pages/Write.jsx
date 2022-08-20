import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import WriteFirst from "./WriteDetail/WriteFirst";
import WriteSecond from "./WriteDetail/WriteSecond";
import { _PostItem } from "../app/slice/ItemSlice";

const Write = () => {
  const dispatch = useDispatch();
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
    setLocation(j);
    setPrice(k);
  }

  const RememberSFage = (i, j) => {
    setTitle(i);
    setContent(j);
  };

  const PostItem = () => {
    console.log(location, price, category, title, content);
    console.log(array);
    dispatch(
      _PostItem([
        {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vya2V5IjoxLCJuaWNrbmFtZSI6ImppbiIsImlhdCI6MTY2MDk4OTkzOCwiZXhwIjoxNjYxMDc2MzM4fQ.inhB9yijoAHm7XZvU-RuC2uZ-AOSkVisxovQvuuUe3M",
        },
        { title, content, content, category, price, location, img: array },
      ])
    );
  };

  return (
    <div>
      {showPage ? (
        <WriteFirst
          setShowpage={setShowpage}
          location_ref={location_ref}
          price_ref={price_ref}
          category_ref={category_ref}
          RememberFFage={RememberFFage}
        />
      ) : (
        <WriteSecond
          setShowpage={setShowpage}
          setArray={setArray}
          title_ref={title_ref}
          content_ref={content_ref}
          PostItem={PostItem}
          RememberSFage={RememberSFage}
        />
      )}
    </div>
  );
};

export default Write;
