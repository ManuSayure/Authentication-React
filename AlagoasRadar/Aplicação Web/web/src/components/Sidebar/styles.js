import styled from 'styled-components';

export const Aside = styled.aside`
     width: 320px;
     background: #fff;
     box-shadow:  0 0 14px rgba(0, 0, 0, 0.02);
     border-radius: 2px;
     padding: 30px 20px;

    strong{
        font-size: 20px;
        text-align: center;
        display: block;
    }
    

`;
export const Form = styled.form`
    margin-top: 30px;

    label{
        margin-top: 20px;
        color: #ACACAC;
        font-size: 14px;
        font-weight: bold;
        display: block;
    
    }
    input{
        width: 100%;
        height: 32px;
        color: #666666;
        border: 0;
        border-bottom: 1px solid #eeeeee;
    }
   
    .input-group{
        
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
    }
    
    button[type=submit]{
        width: 100%;
        border: 0;
        margin-top: 30px;
        background: #7d40e7; 
        border-radius: 2px;
        padding: 15px 20px;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        transition: backgrond 0.5s;

    }

    button[type=submit]:hover {
        background: #6931ca;
    }
    @media(max-width: 1000px){   
        
        width:100%      
    }

`;
export const Wrapper = styled.div`
    margin-top: 20px;
    display: grid;
    column-gap: 20px;
    grid-template-columns: 1fr 1fr;
    input{
        width: 100%;
        height: 32px;
        color: #666666;
        border: 0;
        border-bottom: 1px solid #eeeeee;
    }
    &.input-block{ /* quando o input-block estiver dentro do input-group margin-top =zero*/
        margin-top: 0;
    }
`
