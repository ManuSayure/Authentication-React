import styled from 'styled-components';

const Main = styled.main`
    flex: 1;
    margin-left: 10px;
    ul{
    display: grid;
    grid-template-columns: 1fr 1fr; /*repeat(2, 1fr)*/
    gap: 20px;
    list-style: none; /* remover as bolinhas da lista */
    }
    @media(max-width: 1000px){   
    
        margin-left: 0px;
        margin-top: 30px;   
    }  
`