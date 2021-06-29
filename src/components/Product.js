import React from 'react';

export default function Product(props) {
  
  
  const { product, onAdd, decNum } = props;
  return (<div>
    
    <div>
      <tr>
    <td  className="constant">{product.Date}</td>
    <td className="constant">{product.Time}</td>
    <td className="constant">{product.Availabilty}</td>
    <td><button className="constantbutton" onClick={()=> {onAdd(product)
    decNum(product);
    }}>Book Now</button></td>
      </tr>
      <tr>
 <td>Booked</td>
   <td>03:00 PM PST -04:00 PM PST</td>
   <td>0 seats available</td>
   <td><button class="full">Full</button></td>
   </tr>
    </div>
    
</div>
  
  );
}
