const copyURL = () => {
  let url = "";
  let textarea = document.createElement("textarea"); //textarea라는 변수에 text요소 생성

  document.body.appendChild(textarea); // 바디테그 바로 위에 textarea 잠시 추가
  url = window.document.location.href; // 현재 주소값 url에 넣기
  textarea.value = url; // textarea에 url 넣기
  textarea.select(); //textarea 설정하기
  document.execCommand("copy"); // 복사해줌
  document.body.removeChild(textarea); // 마무리로 textarea 요소 없애주기

  alert("URL이 복사되었습니다.");
};

export default copyURL;
