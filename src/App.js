import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import Greet from './components/Greet.js'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// // import Message from './components/Message'
// import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
class App extends Component{
  render(){
    
//   return (
//     {<div className="App">
//       <Greet/>
//      <Welcome/> */}
//     <Greet name="Bruce" heroName= "Batman">
//        {/* <p>This is children</p>
//      </Greet>
//     //  <Greet name = "Clark" heroName = "Superman">
//     //    <button>Action</button>
//     //    </Greet>
//     //  <Hello/>
//     //  <Welcome name="Bruce" heroName= "Batman"/>
//     //  <Welcome name = "Clark" heroName = "Superman"/>
//     //  <Welcome name = "Diana" heroName = "Wonder Woman"/> */}
    // {/* <Message/> */}
//     {/* //  <Counter/> */} 
//     </div>}
//   )
// }
// }

return(
  <div className= "App">
    {/* <Greet name = "Diana" heroName = "Wonder Woman"/>
    <Welcome name = "Clark" heroName = "Superman"/> */}
    <FunctionClick/>
    <ClassClick/>
  
  </div>
)
}
}


export default App;
