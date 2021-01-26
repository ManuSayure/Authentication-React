import styled from 'styled-components';
import {corPrimaria} from '../../../styles/UI/variaveis';

export const Nav = styled.nav`
    background-color: ${corPrimaria};
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 10vh;
    align-items: center;

`;
export const ImageLogo = styled.img`
    height: 50px;
    width: 50px;
`;
export const BtnHeader = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;
    background: ${props => props.primary ? corPrimaria : "white"};
    color: ${props => props.primary ? "white" : corPrimaria};
`;