let OrderDetails=[
    {
        "customername":"Manoj",
        "customerplace":"Salem", 
        "bookingdate":"2023-09-19",
        "orderno":898912,
    },
    {
        "customername":"Tamil",
        "customerplace":"Mettur",
        "bookingdate":"2021-09-09",
        "orderno":898913,
    },
    {
        "customername":"Janani",
        "customerplace":"Old Bus Stand (Salem)",
        "bookingdate":"2023-07-27",
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


export const FetchExact=(name)=>
{
    const temp=OrderDetails.filter((data,index)=>
    {
        return data.customername===name;
    })

    return temp[0];
}

export const Altervalues=(data,pos)=>
{
    OrderDetails[pos]=data;//
    //pos -index of array
    //data - added a update values
}