import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Homepage from './pages/home/homepage.component';
import Hats from './pages/hats/hats.component'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop/hats' component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
