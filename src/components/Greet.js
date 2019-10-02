import React from 'react'

// function Greet(){
//     return <h1> hello aayush</h1>
// }

//use more
//absence of 'this' keyword
//props are immutable, value cannot be changed
//state are mutable. 
//state can be accessed using useState Hook in functional compoenents and this.state compoenent  in class component
let Greet = props => {
let {name, heroName} = props
return (<div>
<h1>Hello {name} a.k.a {heroName}</h1>


</div>)}


export default Greet;
