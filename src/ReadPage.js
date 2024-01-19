import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Read } from './tempvalues'

export const ReadingaPage=(myindex)=>
{
    const[orderdetails,setOrderdetails]=useState({
        "customername":"",
        "customerplace":"",
        "bookingdate":"",
        "orderno":0
    })

    useEffect(
        ()=>
        {
            getmyvalues()
        }
    )

    const getmyvalues=()=>
    {
        setOrderdetails(Read(myindex.who))
    }

    return(
        <>
            <div className='row justify-content-center bg-info'>
                <div className='col-6 card'>
                    <div className='card-body'>
                            <h1 className='text-center text-decoration-underline'>MY ORDER DETAILS</h1>
                            <div className='mt-5 display-4'>
                                <p>customername : {orderdetails.customername}</p>
                                <p>customerPlace: {orderdetails.customerplace}</p>
                                <p>Booking Date : {orderdetails.bookingdate}</p>
                                <p>Order Number : {orderdetails.orderno}</p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}