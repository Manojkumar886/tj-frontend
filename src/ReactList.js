export let List=()=>
{
    const Fruits=["Banana","Apple","Orange","Strawberry","Gooseburry","PineApple","Mango"];

    const Listall=(getting)=>
    {
        return(
            <>
                <li>{getting.show}</li>
            </>
        );
    }
    return(
        <>  
            <h1> Currently available fruits</h1>
            <ul>
                {
                    Fruits.map(
                        (get1)=>
                        <Listall show={get1} />
                    )
                }
            </ul>
        </>     
    )
}