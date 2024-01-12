import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {useState} from 'react'
export let Myternary=()=>
{
    const[uservalue,setUservalue]=useState (" ");
    
    const[getdesign,setGetdesign]=useState({backgroundColor:'dark'});

    const [display,setDisplay]=useState("");

    const gettingvalue=(temp)=>
    {
        setUservalue(temp.target.value)
    }   

    const useTernary=()=>
    {
        uservalue==="winter" ?
        setGetdesign({backgroundColor:'blue',textShadow:'4px 4px 10px pink'}) :

        uservalue==="summer" ?
        setGetdesign({backgroundColor:'yellow',textDecoration:'underline'}) :

        uservalue==="Rainy" ?
        setGetdesign({color:'blue',backgroundColor:'brown'}):

        setGetdesign({backgroundColor:'black',color:'white',textShadow:'0px 0px 10px seagreen'})

        // setGetdesign({backgroundImage:url('.//filename.jpg')})
        setDisplay(uservalue);
    }
    return(
        <>  
            <div className='container'>
                <input placeholder='enter your Favoriate season' onChange={gettingvalue}/>
                <button className='btn btn-outline-dark text-light' onClick={useTernary}> CLICK.!</button>
                <strong style={getdesign}>
                    my favoriate season {uservalue}
                </strong>
            </div>
        </>
    )
}