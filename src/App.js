import React from 'react';
import './App.css';

import Hello from './hello';
// const hello=(name) => "Hello world";
// function hello1(name){

//   return "helloworld";
// }
function App(name) {
  let {name1,age}=name;
  //hello1(name);
  //hello(name);
  return <div>
    Hello from Hassan {name1} age:{age-4} 
   <Hello></Hello>
    </div>  
  //(
    // <div className="App"> 
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
 // );
}

export default App;
