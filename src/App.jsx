import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import { Header } from './components';
import theme from './theme';


const App = () => (
  <ThemeProvider theme={createMuiTheme(theme)}>
    <Header />
  </ThemeProvider>
);

export default App;
