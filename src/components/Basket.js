import React from 'react';

export default function Basket(props) {
  const { cartItems } = props;

  return (
    <div >
     
<hr/>
    <h2>You have selected these batches</h2>
      <div className="tablehead">
     <tr>
       <th>Date</th>
       <th >Time</th>
       <th >Status</th>
     </tr>
     </div> 
      <div>
        {cartItems.length === 0 && 
        <div className="footer">No batch selected (Please click on View Schedule and select batches)</div>}
        { cartItems.length <=3?(
        cartItems.map((item) => (
          <div>
           
          <div key={item.id} className="row">
            <div >
              
            <table>
              <tr>
             <td > {item.Date} </td>
            <td > {item.Time}</td>
             <td>Seat confirmed</td>
         <td>   <button  onClick={() => alert('Selected class will be removed from the list ')}>cancel</button></td>
            </tr>
            </table>
            </div>
           
            
             
            </div>

       
          </div>
        ))) :alert("Only 3 classes allowed") }

        
        
      </div>
    </div>
  );
}
