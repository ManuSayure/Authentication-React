import { ButtonProps } from 'antd';
import { FC } from 'react';
import * as S from './styles';


const ButtonSubHeader: FC< ButtonProps > = ( props ) => {
    return(
        
        <S.StyledButton {...props}> { props.children } </S.StyledButton>
    )

}; export default ButtonSubHeader;
