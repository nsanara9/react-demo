import React, { Component, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

const App2 = () => {
  let [name, setName] = useState("");

  return (
    <>
      <p>Hello! {name}</p>
      <input
        type="text" name="name" onChange={({ target }) => setName(target.value)}/>
    </>
  );
}

// class App extends Component {
//   state = {
//     name: ""
//   };

//   handleTextInput = ({ target }) => {
//     const name = target.value;

//     this.setState({
//       name,
//     });
//   };

//   render() {
//     return (
//       <>
//         <p> Hello! {this.state.name}</p>

//         <input type="text" name="name" onChange={this.handleTextInput} />
//       </>
//     );
//   }
// }

export default App2;
