
import './App.css';
import RegisterForms from './components/RegisterForms';
import Main from './views/Main';
import Viewproduct from './views/Product';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import React, { useEffect, useState} from 'react';


function App() {
  const [id, setId] = useState()
  const [products, setProducts] = useState({
    tittle:"",
    price:"",
    description:""
  })
  return (

    <div className="App">
      <h1>Administración de Productos</h1>
      <Router className="router-class">
     
          <ul className="lista-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/crear">Crear Nuevo</Link>
            </li>
          </ul>
      
        <Switch>
          <Route path="/product/:id">
             <Viewproduct id={id}  setProducts={setProducts} />
          </Route>
            <Route path="/crear">
              <RegisterForms tittleName ="" priceValue="" descriptionText="" />
            </Route>
            <Route path="/edit">
              <RegisterForms tittleName = {products.tittle} priceValue={products.price} descriptionText={products.description} id={products._id} edit={true}/>
            </Route>
            <Route path="/">
              <Main className="lista-productos" setId={setId} />
            </Route>
        </Switch>

      </Router>
    
    </div>
  );
}

export default App;
