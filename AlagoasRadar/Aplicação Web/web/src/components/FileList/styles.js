import styled from 'styled-components';
import {ColorError} from '../../styles/variables';

export const Container = styled.div`
     margin-top :10px;
    
     li{
         display: flex;
         justify-content: space-between;
         align-items: center;
         color: #444;
    & + li { // Pra cada li que seja seguida por uma li, adicione margin superior de 15px na sehunda li
             margin-top: 15px
         }
     }
`;

export const FileInfo = styled.div`
    display: flex;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;

        span {
            font-size: 12px;
            color: '#999';
            margin-top: 5px;

            button{
                 border: 0;
                 background: transparent;
                 color: ${ColorError};
                 margin-left: 5px;
                 cursor: pointer;
            }
        }
    }
`;
export const Preview = styled.div`
     width:36px;
     height: 36px;
     border-radius: 5px;
     background-image: url( ${props => props.src});
     background-repeat: no-repeat;
     background-size: cover;
     background-position: 50% 50%;
     margin-right: 10px;


`;