import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
export let Usingbootstrap=()=>
{

    const mycss={
        height:'400px'
    }
    return(
        <>
        <div className='container bg-dark text-light row justify-content-center ' style={mycss} >
        <button className="btn btn-outline-primary text-center col-2">READMORE<i class="bi bi-1-circle"></i></button>
        </div>
        </>
    )
}