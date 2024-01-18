import { useState } from "react";
import { Usingbootstrap } from "./Bootstrap";
import { Myclass } from "./ClsCompo";
import { Access, Myevents } from "./EVENTS";
import { Form2, Form3, Studentform } from "./Myform";
import { List } from "./ReactList";
import { Myternary } from "./TernaryOperator";
import { Firsthook, Oddeven } from "./USESTATE";
import { Withcss } from "./usingcss";
import { Myblog } from "./Nagivation";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { OrderForm } from "./OrderForm";

function App()
{
    

    return(
        <>
            <OrderForm/>
           {/* <BrowserRouter>
           <Myblog/>
           <Routes>
                <Route path='myhome' exact element={<Myevents/>} />
                <Route path='mycontact' exact element={<Myternary/>} />
                <Route path="https://www.w3schools.com/react/react_router.asp" exact element={<Other/>} />
           </Routes>
           </BrowserRouter> */}
        </>
    )
}

function Other()
{
    return(
        <>
        <a href="https://www.w3schools.com/react/react_router.asp">react router</a>
        </>
    )
}

export default App;

