import React from 'react';
import './App.css';
import Main from './Main'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Main></Main>
        </Route>
        <Route path={"/home"}>
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
