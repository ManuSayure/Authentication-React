import React, { useEffect, useState } from 'react';
//import './global.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import api from './services/api';
import GlobalStyle from './styles/global';
import Upload from './components/Upload/styles';

import {Provider} from "react-redux";
import {ConfigureStore} from '../src/redux/ConfigureStore';
import Setup from './components/Setup/Setup';
import {ThemeProvider} from 'styled-components'
import {temaClaro, temaEscuro} from './styles/UI/temas';
import Routes from './routes';


function App() { 
  /*
   <BtnTema onClick= {handleTema } >
           <SwitcherTema tema = {tema}/>                
        </BtnTema>
         <Routes />
  */ 
 /** <Provider store= {ConfigureStore()}>  
          <div className="App" id="app">      
            <Setup/>          
          </div>
      </Provider> */
 const [tema, setTema] = useState(false);

  
  return (
    <ThemeProvider theme={ tema? temaEscuro : temaClaro }>
        <GlobalStyle/> 
        <Routes/>       
    </ThemeProvider>
    
  );
}; 
export default App;
