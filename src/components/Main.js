import React, { useState , useEffect } from 'react';
import Product from './Product';
import Header from "./Header"


export default function Main(props) {
  const [num, setNum] = useState(9);
  const decNum=()=>{
    setNum(num-1)}

    const [counter, setCounter] = useState(60);
    useEffect(() => { const timer = counter > 0
   && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer); },
    [counter]);
  const { products, onAdd } = props;
  return (
    
      <div>
     <Header num={num} counter={counter}/>
    
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} decNum={decNum}></Product>
        
        ))}
      </div>
    
  );
}
