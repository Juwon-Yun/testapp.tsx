import React from 'react';
import '../Assets/App.css';
import Main from './Main'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import UseInput from './useInput';

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
        <Route path={"/useInput"}>
          <UseInput></UseInput>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
