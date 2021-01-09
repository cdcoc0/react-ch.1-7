
function App() {
  const name = "reac";
  //const, let: 블록 단위 scope
  //var: 함수 단위의 scope

  return (
    <>
      {name === "react" ? (<h1>hello react!😉</h1>) : (<h1>not react🙄</h1>)}
      <p>jsx 내부에서 자바스크립트 표현식 사용하기</p>
    </>
  );
}

export default App;
