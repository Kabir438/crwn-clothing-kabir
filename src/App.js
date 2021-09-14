import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Homepage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.components';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
