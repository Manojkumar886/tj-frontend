import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Altervalues } from "./tempvalues";

export const UpdateingPage=(myindex)=>
{
    const[pos,setPos]=useState(myindex.who);

    const [orderdetails,setOrderdetails]=useState(
        {
            "customername":myindex.mention.customername,
            "customerplace":myindex.mention.customerplace,
            "bookingdate":myindex.mention.bookingdate,
            "orderno":myindex.mention.orderno,
        })
    
        const gettingvalues=(temp)=>
        {   
            const{name,value}=temp.target;
    
           setOrderdetails(
            (get)=>
            {
                return{
                    ...get ,
                    [name]:value,
                }
            }
           )
        }   
       const UPDATE=()=>
       {
        // alert(orderdetails)
        alert(" Your order details is updated successfully...!"+JSON.stringify(orderdetails))
        Altervalues(orderdetails,pos)
       } 
    
       const Calcel=()=>
       {
        alert(" Your Order is Not Booked")
       }
        return(
            <>
                <div className='form-group row justify-content-center'>
                    <div className='col-lg-7 col-md-10 col-sm-12 '>
                        <h1 className='text-center'>New Order</h1>
                        <div>
                            <label className='form-label'> Name</label>
                            <input 
                                type='text' 
                                className='form-control'
                                name='customername' 
                                onChange={gettingvalues}
                                value={orderdetails.customername}/>
                            <label className='form-label mt-3'> Place</label>
                            <input  type='text' 
                                    className='form-control'
                                    name='customerplace'
                                    onChange={gettingvalues} 
                                    value={orderdetails.customerplace}/>
                            <label className='form-label mt-3'>Date</label>
                            <input 
                                    type='date' 
                                    className='form-control' 
                                    name='bookingdate'
                                    onChange={gettingvalues}
                                    value={orderdetails.bookingdate}/>
                            <label className='form-label mt-3'> Order Number</label>
                            <input 
                                    type='number' 
                                    className='form-control'
                                    name='orderno'
                                    onChange={gettingvalues}
                                    value={orderdetails.orderno}/>
                        </div>
                        <button 
                        className='btn btn-outline-primary col-12'
                        onClick={UPDATE}>UPDATE</button>
                        <button  
                        className='btn btn-outline-danger col-12 mt-3'
                        onClick={Calcel}>Cancel</button>
                    </div>
                </div>
    
            
            </>
        )
}