import { Container, createMuiTheme, CssBaseline, IconButton, ThemeProvider } from '@material-ui/core';
import { Brightness3, Brightness7 } from '@material-ui/icons';
import SearchAppBar from './components/SearchAppBar';
import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Business from './pages/Business';
import Sports from './pages/Sports';
import Home from './pages/Home';
import News from './pages/News';
import Tech from './pages/Tech';
import './App.css';

export default function App() {

  const light = {
    palette: {
      type: 'light'
    }
  };
  
  const dark = {
    palette: {
      type: 'dark'
    }
  };


  const [theme, setTheme] = useState(true);
  // const classes = useStyles();
  const icon = !theme ? <Brightness7 /> : <Brightness3 />;
  const appliedTheme = createMuiTheme(theme ? light : dark);

  return (
    <ThemeProvider theme={appliedTheme}>
    <CssBaseline />
      <div className="App">
        <SearchAppBar />
        <IconButton
        edge="end"
        color="inherit"
        aria-label="mode"
        onClick={() => setTheme(!theme)}
        >
          {icon}
          </IconButton>
        <Container> 
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/news" exact>
              <News />
            </Route>
            <Route path="/business" exact>
              <Business />
            </Route>
            <Route path="/tech" exact>
              <Tech />
            </Route>
            <Route path="/sports" exact>
              <Sports />
            </Route>
          </Switch>
        </Container>
      </div>
    </ThemeProvider>
  );
}


