<h2><b>클론코딩</b></h2>
<h2>AirBnB</h2>
<h4>프로젝트 설명: 에어비앤비 클론코딩</h4>
<h4>📆 기간: 2022.08.19 ~ 2022.08.25</h4>

<hr/>

<h2>🔧 STACK</h2>

- <strong>Client</strong>
<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
</p>

- <strong>UI</strong>

<p>
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
  <img src="https://img.shields.io/badge/font awsome-528DD7?style=for-the-badge&logo=Font Awesome&logoColor=white">
  <img src="https://img.shields.io/badge/Amazon S3-1572B6?style=for-the-badge&logo=Amazon S3&logoColor=white">
</p>

- <strong>Server & Deploy</strong>

<p>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
</p>

<hr/>

### 🔎 Function

#### 📄 메인 페이지

![스크린샷 2022-08-25 오후 2 55 53](https://user-images.githubusercontent.com/97071355/186586163-7d72244e-7708-44bd-a6e3-82f719daec6f.png)

호스트가 작성한 게시글들을 볼 수 있다.
게시글을 상단에서 검색할수 있고, 항목에 따라 게시글을 볼 수 있다.
사진을 옆에 버튼을 클릭하여 슬라이드로 여러가지 사진을 볼 수 있다.
하트를 눌러서 wishlist에 저장할 수 있다.

#### 📄 회원가입과 로그인 모달

![스크린샷 2022-08-25 오후 2 58 27](https://user-images.githubusercontent.com/97071355/186586697-a7936119-72bc-44b1-8fd3-78b30deefa56.png)

![스크린샷 2022-08-25 오후 3 00 51](https://user-images.githubusercontent.com/97071355/186586810-587a25a8-35f2-4e81-8dec-e8c86fef4608.png)

회원가입과 로그인 페이지는 모달로 처리하였다.

#### 📄 작성 페이지

![스크린샷 2022-08-25 오후 3 02 10](https://user-images.githubusercontent.com/97071355/186587047-7bfa138f-0290-42ff-bab0-03ee5f27740f.png)

작성 페이지는 원하는 항목을 클릭하고 다음으로 넘어가도록 처리하였다

#### 📄 상세페이지와 댓글

![스크린샷 2022-08-25 오후 2 56 17](https://user-images.githubusercontent.com/97071355/186587103-85029d63-5363-4d3a-89ec-573723f05258.png)

상단에는 사진, 하부에는 상세 내용을 넣었다.


</hr>

## 📁 File Directory

```bash
/src
  ├── app // 리덕스 폴더
  │   ┝── slice  각종 slice 파일들 첨부         
  │   │                                     
  │   ┕── store.jsx  리덕스 store 파일         
  │
  │
  ┝── components  ──┬──── calendar 달력을 위한 컴퍼넌트 모음 폴더
  │                 │
  │                 ┝──── category 카테고라를 위한 컴퍼넌트 모음 폴더
  │                 │
  │                 ┝──── comments 댓글을 위한 컴퍼넌트 모음 폴더
  │                 │
  │                 ┝──── common 공통사항들을 위한 컴퍼넌트 모음 폴더
  │                 │
  │                 ┝──── css Css모음 폴더
  │                 │
  │                 ┝──── DetailDetail 상세페이지를 위한 컴퍼넌트 모음 폴더
  │                 │
  │                 ┝──── WriteDetail 작성페이지를 위한 컴퍼넌트 모음 폴더 ( 예비용, 사용하지 않음 ) 
  │                 │
  │                 ┝──── WriteDetail2 상세페이지를 위한 컴퍼넌트 모음 폴더 ( 현재 적용중 )
  │                 │
  │                 ┕─── componentsfiles...jsx 그 외 각종 컴퍼넌트 파일들
  │            
  │ 
  │ 
  ┝── pages ───────┬───── Detail.jsx 메인 상세페이지 파일
  │                │          
  │                ┝───── Home.jsx 메인 메인페이지 파일
  │                │          
  │                ┝───── Wish.jsx 첫번째 위시페이지 파일
  │                │          
  │                ┝───── WishList.jsx 두번째 위시페이지 파일
  │                │          
  │                ┝───── Write.jsx 작성페이지 파일 ( 미사용 )
  │                │          
  │                ┕───── WriteTwo.jsx 작성페이지 파일 ( 사용중 )
  │                                                
  │                 
  ├── shared ───── Router.jsx 라우터 파일
  │   
  ├── utils 각종 기능을 넣어놓은 파일            
  │
  ┕──────── app.js , index.js ...

```
