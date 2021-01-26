import styled from 'styled-components';


export const Wrapper = styled.div`
    width:260px;
    height: 500px;
    background: "#fefefe";
    border-radius: '10px';
    overflow: hidden;
    position: relative;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);

`;
export const TopContent = styled.div`
    width: 100%;
    height: 260px;
    display:flex;
    position: relative;
    justify-content: space-between;
    img{
        width: 100%;
        height: 100%;
        border-radius: 0% 0% 8% 8%;
    };
    div{
        width: 88%;
        display: flex;
        position: relative;
        padding: 20px 16px;
        justify-content: space-between;
    }
`;
export const MidContent = styled.div`
    display:flex;
    justify-content: center;
    div{
            background: #fff;
            padding: 10px 40px 20px;
            font-family: 'Nunito', sans-serif;
            position: absolute;
            top: 45%;
            box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
            border-radius: 50%;
    }

`;
export const DescContent = styled.div`

`;

export const BottomContent = styled.div`

`;
export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0% 0% 8% 8%;
`;