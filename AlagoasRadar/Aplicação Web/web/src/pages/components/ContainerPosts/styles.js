import {fundoClaro} from "../../../styles/variables";
import styled from 'styled-components';

export const ContainerDiv = styled.div`
  background-color: ${ ({theme}) => theme.body } ;
  height: calc(100% - 30vh);
  min-height: 90vh;
  padding: 0px 15vw;
`;
export const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content:center;
  color: ${({theme}) => theme.text};
  @media( max-width: 800px ){
    
    flex-direction: column;
    
  }
`;