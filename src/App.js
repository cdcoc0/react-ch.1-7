import React from 'react';
import './App.css';
import MyComponent from './MyComponent';


const App = () => {
  return (
    <div>
      <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
    </div>
  );
};

export default App;