import React from 'react';
import '../App/index.css';
import Home from '../../pages/Home';
import Artist from '../../pages/Artist';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/artist/:id'>
            <Artist />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;