import React, {Component} from 'react';
import './App.css';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ValidationSample />
        <ScrollBox />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div>
//       {/* <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
//       <Counter />
//       <Say />
//       <EventPractice /> */}
//       <ValidationSample />
//     </div>
//   );
// };

export default App;