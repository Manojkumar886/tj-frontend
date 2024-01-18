import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Listall } from './tempvalues';
import { OrderForm } from './OrderForm';


export let Homepage=()=>
{
    const [createpage,setCreatepage]=useState(false);
    
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
                <>
                <button className='btn btn-outline-info'
                onClick={()=>
                {
                    setCreatepage(true)
                }}>
                    OrderForm-BOOKING 
                </button>
                <div className='container'>
                <table className='table-responsive-md table table-striped table-info'>
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
                            temparray.map((data)=>
                                <tr>
                                    <td>{data.customername}</td>
                                    <td>{data.customerplace}</td>
                                    <td>{data.bookingdate}</td>
                                    <td>{data.orderno}</td>
                                    <td>
                                        <button className='btn btn-outline-warning'>UPDATE</button>
                                        <button className='btn btn-outline-secondary'>READ</button>
                                        <button className='btn btn-outline-danger'>DELETE</button>
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