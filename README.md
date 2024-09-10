# MBTI-Test

### [ 간단하게 알아보는 성격유형검사 MBTI-Test ](링크)

## 📖 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [자기 소개](#자기-소개)
3. [주요기능](#주요기능)
4. [개발기간](#개발기간)
5. [기술스택](#기술스택)
6. [프로젝트 파일 구조](#프로젝트-파일-구조)
7. [Trouble Shooting](#trouble-shooting)
8. [소감한마디](#소감-한-마디)

## 👨‍🏫 프로젝트 소개

- 주제 : MBTI 테스트
- 내용 : 여기저기서 많이 해 본 MBTI 테스트를 직접 만들어보며, 실무에서 자주 사용하는 회원가입/로그인부터 프로필 관리, 테스트 결과 저장 기능을 다루었습니다.

## 자기 소개

|안수영|
|:-----------------------------------------:
|INFJ|
|[velog - @ssyeong121.log](https://velog.io/@ssyeong121/posts) |
|[github - soo0297](https://github.com/soo0297)|

## 💜 주요기능

#### 1. 회원가입 / 로그인 / 프로필 관리 기능 구현

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

![signup](https://github.com/user-attachments/assets/a640635c-843d-4e33-988a-9aaef49cd847)
![login](https://github.com/user-attachments/assets/dd351eb0-d9de-49e7-9321-23f076b26f43)
![profile](https://github.com/user-attachments/assets/b6faaa78-2248-497a-a3f1-dd258ca18a8f)

 <br>
</div>
</details>

- JWT 인증 서버와 통신하는 코드를 작성(auth.js파일)
- **회원가입** : 사용자 등록을 위한 API 요청을 처리하는 함수를 작성
- **로그인** : 사용자 로그인과 로그인 후 사용자 정보를 가져오는 로직을 작성
- **프로필 수정** : 프로필 정보를 가져오고 수정하는 API 요청을 작성

#### 2. MBTI 테스트 제공 & 테스트 결과 계산 및 저장

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

![json-server.axios](https://github.com/user-attachments/assets/6158bcd5-038e-4a07-86b7-1b08d4e939c9)

 <br>
</div>
</details>

- 로그인한 사용자가 MBTI 테스트를 진행
- 총 20개의 문항으로 구성된 테스트를 question.js 파일에 저장하여 관리
- 사용자가 MBTI 테스트를 완료하면, 결과를 계산하여 json-server에 저장
- 테스트 결과는 기본적으로 공개(true)로 설정

#### 3. 테스트 결과 관리 기능

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

![TestResultList](https://github.com/user-attachments/assets/4ee8c1cc-3f9f-4f8b-a042-75b4baf8865c)

 <br>
</div>
</details>

- 사용자는 자신의 테스트 결과를 삭제할 수 있습니다.
- 다른 사용자가 자신의 테스트 결과를 볼 수 없도록 공개/비공개 여부 설정할 수 있습니다.
- 모든 사용자가 다른 사용자의 공개된 테스트 결과를 볼 수 있는 페이지(TestResultPage.jsx) 구현

## ⏲️ 개발기간

- 2024.09.06(금) ~ 2024.09.11(수)

## 📚️ 기술스택

### ✔️ Language

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)

### ✔️ Version Control(버전관리)

Git을 이용한 분산버전관리(DVCS)

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

### ✔️ IDE(통합개발환경)

![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

### ✔️ Framework

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB), `Vite`

### ✔️ Deploy

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### ✔️ DBMS

![JsonWebToken](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink)

## 프로젝트 파일 구조

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

![파일트리](https://github.com/user-attachments/assets/294789b2-05bd-43b2-92af-a0af461c07b1)

 <br>
</div>
</details>

## Trouble Shooting

### 1. 새로고침하면 로그인 페이지가 나타남

- 문제발생 : 로그인 된 상태에서 새로고침을 하면 로그인 되어있는 레이아웃은 그대로 보여지나, 로그인 페이지가 나타남.

- 원인추론 : ProtectedRoute 부분이 Profile페이지 바깥에 감싸져 있었는데 조건문이 잘못 된것 같았다.

```js
기존코드: if (!isAuthenticated) {
  return <Navigate to="/login" />;
}
```

- 해결방안 : isAuthenticated를 user로도 바꿔봤지만 로그인이 되었을 때를 결정짓는 token의 유무로 조건을 바꿔줘야 할 것 같았다.
- 결과 : localStorage에 있는 accessToken을 가져와 토큰의 유무를 조건에 넣어줬다.
  ![ProtectedRoute](https://github.com/user-attachments/assets/d09e16c1-ad99-42f0-9f77-e176329d2736)

### 2. '모든 결과 보러가기' 버튼 클릭 후, 아무런 페이지가 뜨지 않음

- 문제발생 : `TestPage.jsx`에서 로그인한 사용자의 테스트 결과가 나타나고, '모든 결과 보러가기' 버튼을 클릭하면 아무 것도 나타나지 않았고, id값을 불러오지 못한다는 내용의 에러가 있었다. 불러온 user를 콘솔로 확인해보니 null이 나왔다.

- 원인추론 : 처음에 user를 props로 받아왔는데, 생각해보니 user는 'MbtiTestContext'로 페이지 전체 바깥에서 감싸주고 있었다.

- 해결방안 : props 받아오는 부분에서 지우고, `TestResultList.jsx`에서 `const { user } = useContext(MbtiTestContext);`를 작성하여 받아오는 방법으로 바꿨다.
  그리고 user가 null이기 때문에 filter 메서드를 사용할 때 user 뒤에 `?`를 붙여줬다.

- 결과 : 배열메서드를 쓰고 있고, props나 contextAPI를 잘 사용하고 있음에도 에러가 뜬다면 `?`를 붙여보자.
  ![TestResultList](https://github.com/user-attachments/assets/bfc2e24c-a13d-47e1-9745-bdf22d2030a0)

## ❤️ 소감 한 마디

페이지와 컴포넌트가 많아 불러오는 과정에서 너무 많은 혼동이 있었다. 처음 사용해보는 기능들(axios, tailwind, json-server, HTTP연동, JWT 등)이 많아 어려웠지만 또 이전 주차에서 공부했던 부분 중 이해하지 못한 부분들은 또 한 번 복습하는 느낌이 났다.
