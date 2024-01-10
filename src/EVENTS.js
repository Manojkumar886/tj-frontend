import React, { Component } from 'react';

// class components
//  class Myevents extends Component
class Myevents extends React.Component
{
    
    render()
    {
        const myaction=()=>
        {
            alert(Date(
                
            ));
        }
        return(
            <button onClick={myaction}>Click(DATE)</button>
        );  
    }
}

// functionsl components
 let Access=()=>
{
    function action()
    {
        alert(" give me a dinner")
    }
    return(
        <>
        <button onClick={action}>SHOW ME</button>
        </>
    )
}

export {Myevents,Access};