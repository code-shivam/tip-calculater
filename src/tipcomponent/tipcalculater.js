import React,{ useState } from "react";
import "./tipcalculater.css";
const TipCal = () => {
  const [bill,setBill]=useState("");
  const [select,setSelect]=useState("");
  const [person,setPerson]=useState("");
  const[output,setOutput]=useState(null);
  const BillHand =(event)=>{
setBill(event.target.value)
  };
  const SelectHand =(event)=>{
    setSelect(event.target.value)
  };
  const PersonHand =(event)=>{
    setPerson(event.target.value)
  };
  const Solution =(event)=>{
event.preventDefault()
let total = (bill*select)/person

setOutput(total)
setBill("")
setSelect("")
setPerson('')

  }

  
return (
  <div className="container">
  <form onSubmit={Solution}>
   
      <h1>TIP CALCULATOR</h1>
      <div className="wrapper">
        <p>Bill Amount</p>
        <input
        value={bill}
          type="text"
          onChange={BillHand}
          placeholder="Amount to be paid"
        />
        ₹<p>How was the service ?</p>
        <select value={select} onChange={SelectHand}>
          <option>select</option>
          <option value="0.20">20% - Excellent</option>
          <option value="0.10">10% - Good</option>
          <option value="0.05">5% - Not So Good</option>
        </select>
        <p>Total number of people</p>
        <input  value={person} onChange={PersonHand} type="text" placeholder="Number of people sharing the bill" />
        <button type="sumbit">Calculate</button>
      </div>
  
    </form>
    <div className="tip">
        <p>Tip Amount</p>
        <p>
          <span>{output ?output:0}</span> <span>₹ each</span>
        </p>
      </div>
    </div>
  );
};
export default TipCal;