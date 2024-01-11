import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export let Firsthook=()=>
{
    const [choconame,setChoconame]=useState(" ");
    const print=()=>
    {
        alert(" My favoriate Chocolate Name is :"+choconame);
    }
    const set=(temp)=>
    {
        setChoconame(temp.target.value)
    }
    return(
        <>
            <div className='col-5 '>
                <label className='form-label'>ChocolateName</label>
                <input  type='text' 
                        className='form-control'
                        onChange={set}
                 />
                <button className='btn btn-outline-info'
                onClick={print}>
                    CLICK..!
                </button>
            </div>
        </>
    );
}


export let Oddeven=()=>
{
    const[count,setCount]=useState(0);
    

    return(
        <> 
            <button className='btn btn-outline-warning'
                    onClick={
                        ()=>
                        {
                            setCount(count+1)
                        }
                    }
            >CLICK..!</button>

            <p>
                {count} - number is 
                {count%2===0 ? 'even' : 'odd'} 
            </p>
        </>
    )
}