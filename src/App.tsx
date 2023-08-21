import React from 'react';
import './App.css';
import { Header } from './components/header';
import GlobalStyle from './global';
import { Home } from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Home />
    </BrowserRouter>
  );
}

export default App;
