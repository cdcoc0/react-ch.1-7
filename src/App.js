
function App() {
  const name = "react";
  //const, let: 블록 단위 scope
  //var: 함수 단위의 scope

  return (
    <>
      {name === "react" && <h1>hello react!😉</h1>}
    </>
  );
}

export default App;
