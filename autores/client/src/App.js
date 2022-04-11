import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom"
import './App.css';
import RegisterForms from "./components/RegisterForms";
import Main from './views/Main';
import React, { useEffect, useState} from 'react';

function App() {


  const [lastautor, setLastautor] = useState(
    {
      autor:""
    }
  )

  return (
    <div className="App">
      <Router className="router-class">
        <ul className="lista-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/autor/crear">Crear Nuevo</Link>
            </li>
        </ul>
        <Switch>
          <Route path="/autor/crear">
            <RegisterForms edit={false} autor="" />        
          </Route>
          <Route path="/autor/update/:id">
            <RegisterForms edit={true} autor={lastautor.autor} _id = {lastautor._id} />        
          </Route>
          <Route path="/">
            <h3>Autores Registrados</h3>
            <Main url="http://localhost:8000/api/autor/" setLastautor={setLastautor}/>            
          </Route>
        </Switch> 
      </Router>



    </div>
  );
}

export default App;
