
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import Search from "./Search"
import { useState } from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
  

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
      setCartItems([...cartItems, { ...product}]);
    }
  ;
 
  
    
  return (
    <div>
      <Router>
      
      
      <Switch>
      <Route path ="/" exact component={Search}/>
        
          <Route path ="/schedule"  component={()=>(
            <Main products={products} onAdd={onAdd}
           />)}/>


        
        </Switch>
        </Router>
        <Basket cartItems={cartItems}  onAdd={onAdd}></Basket>


    </div>
  );
}

export default App;
