import React, {useEffect, useState} from 'react';

import {uniqueId} from 'lodash';
import filesize from 'filesize';

//import '../assets/css/Sidebar.css';
import api from '../../services/api'; 

import {connect} from 'react-redux';
import { actions } from 'react-redux-form';
import { postDev} from '../../redux/ActionCreators';
import  FileList  from '../FileList'
import {Form, Wrapper, Aside} from './styles';

import Upload from '../Upload';
import fileSize from 'filesize';

const Sidebar = (props) => {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');
    const [ uploadAvatarImage ,  setUploadAvatarImage] = useState(null);
    const [ uploadedFiles , setUploadedFiles] = useState([]);


    useEffect(() => {
         navigator.geolocation.getCurrentPosition(
             (position) => {
               const {latitude, longitude} = position.coords;
               setLatitude(latitude);
               setLongitude(longitude);
             }, 
             (err) =>{
                 console.log(err);
             },
             {
                 timeout: 30000,
             }
         );
     }, [])  
    
    const updateFile = (id, data) => { 
        setUploadedFiles({ uploadedFiles: uploadedFiles.map( file => {
                return id === file.id 
                    ?  { ...file, ...data }
                    : file;
                 })
        })
    };    
    const processUpload = (uploadedFile) => {
            const data =  new FormData();
            data.append('file',uploadedFile.file, uploadedFile.name);
            api.post('/image', data, {
                onUploadProgress: e => {

                    const progress = parseInt( Math.round( (e.loaded * 100 )/ e.total ) );

                    updateFile(uploadedFile.id, {
                      progress,
                    })
                }

            }).then((response) => {  updateFile( uploadedFile.id, 
                { 
                    uploaded:true,
                    id: response.data._id,
                    url: response.url, 
                })
                
            }).catch(() => {updateFile( uploadedFile.id , { error: true } )});
    }    
    const handleDelete = async id => {
              await api.delete(`images/delete/${id}`);
              setUploadedFiles(uploadedFiles.filter(file => file.id !== id) )
    }
    const handleUpload = files => {
        const uploadedFiles = files.map(file => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: fileSize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null,
            
        }));
        setUploadedFiles([...uploadedFiles]);
        uploadedFiles.forEach(processUpload);
    }
    useEffect( () => {
        async function getImages(){
            try{
                const response =   await api.get('/images');
                response = await response.json()
                console.log(response);
                setUploadedFiles(response.data.map( file => ({
                    id: file._id,
                    name: file.name,
                    readableSize: filesize(file.size),
                    preview: file.url,
                    uploaded:true,
                    url: file.url,
                })));

            } catch(e) {
                console.log(e);
            }              
        }; getImages(); 
            // Especifique como limpar depois desse efeito:
            return function cleanup() {
                uploadedFiles.forEach( file => URL.revokeObjectURL(file.preview))
            ;
        };
    } , [])

    async function submit(){
        await postDev( 
            github_username,
            techs,
            latitude,
            longitude   );

        setGithub_username('');
        setTechs(''); 
     }
    return(
        <Aside>
        <strong>Cadastrar</strong>
        <Form onSubmit={submit}>
            <div  className='input-block'>
                <label>Node do Local</label>
                <input 
                    type='text'
                    name= 'github_username'  
                    id='github_username' 
                    required 
                    value={github_username}
                    onChange={(e) => setGithub_username(e.target.value)}/> 
            </div>
           
            <div className='input-block'>
                <label>Tecnologias</label>
                <input 
                    name= 'techs' 
                    type='text' 
                    id='techs' 
                    required
                    value={techs}
                    onChange={(e)=>setTechs(e.target.value)}    
                
                />
            </div>
              
            <Wrapper className='input-group'>

                <div className="input-block">
                    <label>Latitude</label>
                    <input 
                        type='number' 
                        name= 'latitude'  
                        id='latitude' 
                        required 
                        value = {latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                    />   
                </div>

                <div className="input-block">
                    <label>Longitude</label>
                    <input 
                        type='number' 
                        name= 'longitude'  
                        id='longitude' 
                        required 
                        value = {longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                    />  
                </div>             
                
            </Wrapper>

            <Upload onUpload = {handleUpload}/>
            {
                uploadedFiles
                   &&   <FileList 
                        files = {uploadedFiles } 
                        onDelete = {handleDelete}/>   
                
            }

            <button type='submit'>Salvar</button>
            
        </Form>
    </Aside>
    );
    
    

}; export default Sidebar;