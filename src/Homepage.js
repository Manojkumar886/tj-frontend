import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { FetchExact, Listall, Remove } from './tempvalues';
import { OrderForm } from './OrderForm';
import { ReadingaPage } from './ReadPage';
import { UpdateingPage } from './Updatepage';


export let Homepage=()=>
{
    const [createpage,setCreatepage]=useState(false);

    const [readpage,setReadpage]=useState(false);
    const[position,setPosition]=useState(0);

    const[updatepage,setUpdatepage]=useState(false);
    const[object,setObject]=useState({});
    
    const[temparray,setTemparray]=useState([]);
    

    // hook no-2
    useEffect(
        ()=>
        {
            setTemparray(Listall);
        })

    return(
        <>  
            {
                (createpage)?
                <>
                    <OrderForm/>
                    <button 
                    onClick={
                        ()=>
                        {
                            setCreatepage(false)
                        }
                    }>
                        BACK
                    </button>
                </>
                :
                (readpage)?
                <>
                {/* //who is attributesname */}
                    <ReadingaPage who={position} />  
                    <button className=' btn btn-outline-secondary'onClick={()=>
                    {
                        setReadpage(false)
                    }}>
                        BACK
                    </button>
                </>
                :
                (updatepage)?
                <>
                  <UpdateingPage who={position} mention={object} />
                  <button className='btn btn-outline-secondary'
                  onClick={
                    ()=>
                    {
                        setUpdatepage(false)
                    }
                  }>
                    BACK
                  </button>
                </>
                :
                <>
                <button className='btn btn-outline-info'
                onClick={()=>
                {
                    setCreatepage(true)
                }}>
                    OrderForm-BOOKING 
                </button>
                <div className='container'>
                <table className='table-responsive-md table table-striped table-primary'>
                    <thead>
                        <tr>
                            <th>customername</th>
                            <th>customerplace</th>
                            <th>Booking Date</th>
                            <th>Ordernumber</th>
                            <th>EVENTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            temparray.map((data,index)=>
                                <tr>
                                    <td>{data.customername}</td>
                                    <td>{data.customerplace}</td>
                                    <td>{data.bookingdate}</td>
                                    <td>{data.orderno}</td>
                                    <td>
                                        <button className='btn btn-outline-warning'
                                        onClick={()=>
                                        {
                                            setUpdatepage(true)
                                            setPosition(index)
                                            setObject(FetchExact(data.customername))
                                        }}>UPDATE</button>
                                        <button className='btn btn-outline-secondary'
                                        onClick={()=>
                                        {
                                            setReadpage(true)
                                            setPosition(index)
                                        }}>READ</button>
                                        <button className='btn btn-outline-danger'
                                        onClick={()=>
                                        {
                                            setTemparray(Remove(index));
                                        }}>DELETE</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
                </>
            }
        </>
    )
}