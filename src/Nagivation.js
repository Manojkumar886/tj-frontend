import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from 'react-bootstrap'

export const Myblog=()=>
{
    return(
        <>
            <Navbar bg='primary' expand='lg'>
                <NavbarBrand >MYBLOG</NavbarBrand>
                <NavbarToggle aria-controls='mynavbar'></NavbarToggle>
                <NavbarCollapse>
                    <Nav>
                        <Nav.Link href='/myhome'>HOME</Nav.Link>
                        <Nav.Link href='/mycontact'>CONTACT</Nav.Link>
                        <Nav.Link href='/https://www.w3schools.com/react/react_router.asp'>OTHER</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}