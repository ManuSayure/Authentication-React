import styled from 'styled-components';

 export const Item = styled.li`
    background: #ffffff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 20px; 

    header{
     display: flex;
     flex-direction: row;
     align-items: center;
     
        strong{
            display: block;
            font-size: 16px;
            color: #333333;
        }
        span{
            font-size: 13px;
            color: #999999;
            margin-top: 2px;
        }
    }
    p {
      color: #666666;
      font-size: 14px;
      line-height: 20px;
      margin: 10px 0;
    }
    a{
        color: #8e4dff;
        font-size: 14px;
        text-decoration: none;

    }
    a:hover{
        color: #5a2ea6;
    } 
    @media(max-width: 660px){
   
        grid-template-columns: 1fr; 
    }


`;