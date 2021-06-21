import React, {FC, useState} from "react";
import * as S from "./styles";
import logo from "./../../assets/Logo/Grupo 290.svg";
import {Menu, Select} from "antd";
import {useHistory, useLocation} from "react-router-dom";


const HeaderNav: FC = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const [selectedMenuTab, setSelectedMenuTab] = useState<string>(
    history.location.pathname
  );

  return (
    <S.StyledHeader>

       <S.StyledMenuOutlined/>

        <S.StyledSpace/>  

      <S.StyledHeaderLogo alt="logo" src={logo}/>
      
    </S.StyledHeader>
  );
};

export default HeaderNav;
