import React from 'react'

let Hello = () => {
    // return(
    //     <div>
    //         <h1> hello Mikan</h1>
    //     </div>
    // )
    return React.createElement('div',null, React.createElement('h1', null, 'hheloo cat' ))
}

export default Hello;

