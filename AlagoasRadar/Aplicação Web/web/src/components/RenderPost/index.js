import React from 'react';
import  Loading from '../Loading/Loading';
import { LoadingErrorDevs } from "../ErroMessage/ErrorMessage";
import { Item } from './styles';

 const RenderPost = ({errMess, isLoading, devs}) => {
     console.log({errMess, isLoading, devs})
    if (isLoading) {
        return( <Loading /> );
    }
    else if (errMess) {
        return(
            <LoadingErrorDevs errMess = { errMess} />           
        );
    }
    else if(devs!= null){
        return(
            devs.map(dev => {
                return (            
                      <Item key={dev._id} className="dev-item">
                            <header>
                                <img src={ dev.avatar_url } alt={dev.name}/>
                                <div className="user-info">
                                        <strong>{dev.name}</strong>
                                        <span> {dev.techs.join(', ')} </span>
                                </div>
                            </header>
                            <p> {dev.bio}</p>
                            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
                        </Item>                
                 
                )
            })
        )
    }   
}; export default RenderPost;