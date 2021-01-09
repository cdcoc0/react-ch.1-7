
function App() {
  const name = undefined;
  const style = {
    //카멜 표기법 사용
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 //default: px
  }

  return (
    <div style={style}>
      {name || 'hello react!😉'}
    </div>
  //   <div style={{
    // backgroundColor: 'black',
    // color: 'aqua',
    // fontSize: '48px',
    // fontWeight: 'bold',
    // padding: 16
  //}}>
  //   {name || 'hello react!😉'}
  // </div>
  );
}

export default App;
