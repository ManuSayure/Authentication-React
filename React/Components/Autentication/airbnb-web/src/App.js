import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import {GlobalStyle }from './styles/global';
import {temaClaro, temaEscuro} from './styles/UI/temas';
import {BtnTema} from './styles/UI/index';
import SwitcherTema from './components/SwitcherTema';
const App = () => {
    const [tema, setTema] = useState(false);


    const handleTema = () => {
        setTema( (tema) => !tema)
    }
    return(
        <>
        <ThemeProvider theme={ tema? temaEscuro : temaClaro }>
           
            <GlobalStyle/>

            <BtnTema onClick= {handleTema } >
                <SwitcherTema tema = {tema}/>                
            </BtnTema>

            <Routes />
            
         </ThemeProvider>
         </>
    );   
    
}; export default App;