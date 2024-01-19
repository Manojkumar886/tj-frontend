let OrderDetails=[
    {
        "customername":"Manoj",
        "customerplace":"Salem", 
        "bookingdate":"12/10/2001",
        "orderno":898912,
    },
    {
        "customername":"Tamil",
        "customerplace":"Mettur",
        "bookingdate":"03/12/2021",
        "orderno":898913,
    },
    {
        "customername":"Janani",
        "customerplace":"Old Bus Stand (Salem)",
        "bookingdate":"09/09/2023",
        "orderno":898914,
    }
]


export const Create=(obj)=>
{
    OrderDetails.push(obj);
}

export const Listall=()=>
{
    // alert(JSON.stringify(OrderDetails))
    return OrderDetails;
}

export const Read=(index)=>
{
    return OrderDetails[index];
    //OrderDetails[2]
}


export const Remove=(index)=>
{
    OrderDetails=OrderDetails.filter(
        (data,ind)=>
        {
          return  ind!==index;
        })

        return OrderDetails;
}