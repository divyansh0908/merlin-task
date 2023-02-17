import Snowfall from 'react-snowfall';
import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import InputBox from './components/InputBox';
import { FrequentlyCommands } from './components/FrequentlyCommands';
import ResultBox from './components/ResultBox';
import { handleSubmit } from './utils/handleSubmit';
import { UIProvider, useUIContext } from './context/UiContext';

function App() {
 

  
 
  return (
    <UIProvider>
    <div id='particle-js'>
      {/* <Home /> */}
      {/* Hi */}
      <Snowfall />
      <Header />
      <Home />
      
      
      </div>
    </UIProvider>
  );
}

export default App;
