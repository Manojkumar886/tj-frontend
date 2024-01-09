 import App from './App';
import './external.css'
 
 export let Withcss=()=>
{
    const mystylecss={
        backgroundColor:'seagreen',
        textDecoration:'line-through'
    }

    return(
        <>
            <App/>
            <table style={{color:'red',backgroundColor:'pink',boxShadow:'4px 5px 10px black'}} 
            cellPadding='15px'
            cellSpacing='10px' >
                <thead>
                    <tr>
                        <th>Serial no</th>
                        <th>Name</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody style={mystylecss}>
                    <tr>
                        <td>1</td>
                        <td>Manojkumar</td>
                        <td>MCA</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>JANANI</td>
                        <td>BE EEE</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>TAMIL</td>
                        <td>BE </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

