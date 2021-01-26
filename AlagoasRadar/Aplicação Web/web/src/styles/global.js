import {createGlobalStyle} from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

export default createGlobalStyle`
*{
    margin: 0 ;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body{
    font-size: 14px;
   // background: #7159c1 ;
    background: #E5E6F0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing : antialiased;
}
html, body, #root{
    height:100%;
}
body, input, button {
    font-family: Roboto, sans-serif;
}
`