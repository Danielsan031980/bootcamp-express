
import './App.css';
import RegisterForms from './components/RegisterForms';
import Viewproducts from './views/Viewproducts';
import Viewproduct from './views/Main';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import React, { useEffect, useState} from 'react';
import Buttonapi from './components/Buttonapi';

function App() {
  const [id, setId] = useState()
  const [products, setProducts] = useState({
    tittle:"",
    price:0,
    description:""
  })
  return (

    <div className="App">
      <Router>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/crear">Crear Nuevo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/product/:id">
             <Viewproduct id={id}  setProducts={setProducts} />
          </Route>
            <Route path="/crear">
              <RegisterForms tittleName ={products.tittle} priceValue={products.price} descriptionText={products.description} />
            </Route>
            <Route path="/edit">
              <RegisterForms tittleName = {products.tittle} priceValue={products.price} descriptionText={products.description} id={products._id} edit={true}/>
            </Route>
            <Route path="/">
              <Viewproducts setId={setId}  />
              <Buttonapi text="prueba"/>
            </Route>
        </Switch>

      </Router>
    
    </div>
  );
}

export default App;
