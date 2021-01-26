import React, { useEffect } from 'react';
//import '../assets/css/Main.css';
import  RenderPost from "../RenderPost";

 const Main = ({devs, errMess, isLoading}) => { 
     console.log({devs, errMess, isLoading});
        
    return (
        <main>
            <ul>
                
                    <RenderPost
                    devs = {devs} 
                    errMess= {errMess} 
                    isLoading = {isLoading} 
                    />                            
                             
            </ul>
        </main>
    )     

}; export default Main;