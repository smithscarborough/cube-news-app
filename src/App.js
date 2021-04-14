import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
