import React, { Component } from 'react';
import Dropzone from 'react-dropzone'; 
import {DropContainer, UploadMessage } from './styles';

export default class Upload extends Component{
renderDragMessage = (isDragActive, isDragReject) => {

    const Icones = {
        active:   <UploadMessage type= 'success'> Solte os arquivos aqui   </UploadMessage>,        
        reject:   <UploadMessage type='error'   > Arquivos não suportados  </UploadMessage>,
        inactive: <UploadMessage                > Arraste arquivos aqui... </UploadMessage>,
    }

    if(!isDragActive){
        return Icones.inactive

    }else if(isDragReject) {
        return Icones.reject

    }else{
        return Icones.active
    }  
    

}

    render(){
        const { onUpload } = this.props;
        return (
            <Dropzone accept= 'image/*' onDropAccepted = { onUpload }>
                {
                    ({ getRootProps, getInputProps, isDragActive, isDragReject  }) => (
                        <DropContainer
                            {... getRootProps()}
                            isDragActive = { isDragActive }
                            isDragReject = { isDragReject }
                        >
                            <input {... getInputProps()} />
                            {
                                this.renderDragMessage( isDragActive, isDragReject)
                            }

                        </DropContainer>
                    )
                }

            </Dropzone>
        );
    }

}