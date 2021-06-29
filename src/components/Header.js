import React from 'react';

export default function Header({num , counter}) {
  const myFunc=()=>{
    alert("Scroll down to see your cart")
  }

  return (
    <div>
      
      
      <h3>Time left :{counter}</h3>
      <h1>Claim Your Free Trial Class</h1>
      <h2>Class Schedule</h2> <p>Free Seats Left:{num}</p>
      <div className="App">
     <button className="view" onClick={myFunc}>View Cart</button>
      <div className="tablehead">
     <tr>
       <th>Date</th>
       <th>Time</th>
       <th>Availabilty</th>
     </tr>
     </div> 
      </div>
       
      
      </div>
    
  );
}
