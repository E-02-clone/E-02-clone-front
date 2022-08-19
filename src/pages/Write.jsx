import React, { useRef, useState } from "react";
import WriteFirst from "./WriteDetail/WriteFirst";
import WriteSecond from "./WriteDetail/WriteSecond";

const Write = () => {
  const [showPage, setShowpage] = useState(true);

  const location_ref = useRef(null);
  const [location, setLocation] = useState("");
  const price_ref = useRef(null);
  const [price, setPrice] = useState("");
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

  const check = () => {
    console.log(location, price, category, title, content);
    console.log(array);
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
          check={check}
          RememberSFage={RememberSFage}
        />
      )}
    </div>
  );
};

export default Write;
