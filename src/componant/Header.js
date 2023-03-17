import React from "react";
import Input from "./Input";
import "./calculater.css"
 function Header(){
 return(
    <div className="all">
    <div className="header">
        
        <h1>Tip Calculator</h1>
        <p>Build In React</p>
        </div>
        <Input/>
    </div>
 )
 }
 export default Header