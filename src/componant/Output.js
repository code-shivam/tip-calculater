import React from "react"; 
import Footer from "./Footer";
import "./calculater.css"
import Input from "./Input";

function Output({output,total}) {
  let add = 0;
  total?.forEach((el)=>{add += el});
  return (
    <div >
      <div className="outputbox">
      <h3>Customer List</h3>
      <div>
      {output.length > 0 && (
        <div>
          {output?.map((el ,index) => (
            <li key={index}>{el}</li>
          ))}
        </div>
      )}
      </div>
      </div>
      <p className="text">Calculate Tip and Customer</p>
            <div className="list">
            <p>Total Customer</p>
            <p>Tip</p>
            <p>{output.length}</p>
            <p>{add}</p>
            </div>
      <Footer/>
    </div>
  );
}
export default Output;
