import styled from 'styled-components';
import { Container, FileInfo, Preview } from './styles';
import {ColorDefault, ColorSuccess, ColorError, ColorCircularBar} from '../../styles/variables' ;
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'; // icons from material design: /md; font awesome:  /fa ...



const FileList = ({files, onDelete}) => ( 
    <Container>
        {
            files.map( uploadedFile => (
                <li key={ uploadedFile.id }> 
                    <FileInfo>
                           <Preview scr= {uploadedFile.preview}></Preview>
                            <div>
                                <strong>{uploadedFile.name}</strong>
                                <span> {uploadedFile.readableSize} 
                                    {
                                        uploadedFile.uploaded 
                                        ? <button onClick={ onDelete(uploadedFile.id) }> Excluir </button>
                                        : null
                                    }
                                </span>
                            </div>
                        </FileInfo>
                    <div>{
                        (uploadedFile.uploaded && uploadedFile.error) && 

                        (<CircularProgressbar 
                            style={ {
                                root: { width  : 24}, // tamanho do circulo de carregamento
                                path: { stroke : { CircularProgressbar}} // cor do circulo
                            }}
                            strokeWidth = {10} //largura do circulo de progresso
                            percentage = {uploadedFile.progress} // progresso
                        />)            
                        }
                        {
                            uploadedFile.url? 

                                <a href= {uploadedFile.url}
                                target='_blanck' // abre em uma nova aba
                                rel = 'noopener noreferrer'
                                > 
                                <MdLink style={{ marginRight: 8 }} size={24} color= '#222'/>
                                </a>

                                : null
                        }

                        {
                            uploadedFile.uploaded? <MdCheckCircle size={24} color = {ColorSuccess}/> : null
                        }
                        
                        {
                            uploadedFile.error?  <MdError size = {24} color= {ColorError} /> : null
                        }  
                    </div>         
            
                 </li>
            ))
        }
        
    </Container>
        
); export default FileList;