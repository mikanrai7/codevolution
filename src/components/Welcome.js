import React, {Component} from 'react'

//own private data-state
//Stateful/Smart/ container

class Welcome extends Component{
    render(){
        let {name, heroName} = this.props
        return (
        <h1>Hey {name} a.k.a </h1>
        )
    }
}
export default Welcome;