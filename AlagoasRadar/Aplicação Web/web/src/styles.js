import styled from 'styled-components';
import {FundoClaro} from './styles/variables';

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    margin:30px;
    background: ${FundoClaro};
    border-radius: 4px;
    padding: 20px;
`