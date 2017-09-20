import React from "react";
import { Helmet } from "react-helmet";
import Routes from "./Routes";

const App = props => (
  <div>
    <Helmet>
      <title>BookStout!</title>
      <meta
        name="description"
        content="Everyone loves a good book with a good bier. Now search for any book available at BookShout with BookStout!"
      />
      <meta
        name="keywords"
        content="books, bier, bier books, Oktoberfest"
      />
    </Helmet>
    <Routes/>
  </div>
);

export default App;



// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
