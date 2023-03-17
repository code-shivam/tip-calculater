import React,{useState} from "react";
import Output from './Output';
import "./calculater.css"

 function Input(){

    const [bill,setBill]=useState("");
  const [select,setSelect]=useState("");
  const [name,setName]=useState("");
  const [total,setTotal]=useState([])
  const [output,setOutput]=useState([])
    const BillHand =(event)=>{
      setBill(event.target.value)
        };
        const SelectHand =(event)=>{
          setSelect(event.target.value)
        };
        const NameHand =(event)=>{
          setName(event.target.value)
        };
      
        const Solution = () => {
         let amount = bill * select;
          let tamp =`${name} offering a tip of ${amount} rupee`
          setOutput([...output,tamp])
          setTotal([...total,amount])
        };
  
    return(
      <div>
        <div className="input">
            <p>Enter bill Amount</p>
           <input
           className="bill"
        value={bill}
          type="text"
          onChange={BillHand}
          placeholder="Amount to be paid"
        />
      <hr  style={{width: "100%"}}/>
        <div>
          <hr  style={{width: "100%"}}/>
        <label>How was the service</label>
        <select  value={select} onChange={SelectHand}> 
          <option>select</option>
          <option value="0.20">20% - Excellent</option>
          <option value="0.10">10% - Good</option>
          <option value="0.05">5% - Not So Good</option>
        </select>
         <input type="text" value={name} onChange={NameHand}
        placeholder="Custmer Name"/>
        <button onClick={Solution} > ADD Customer</button>
        </div>
        </div>
        <Output output={output} total={total}/>
        </div>
     )
 }
 export default Input