import React, { FC, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import RegisterRoutes from "../../routes/Register.routes";
import * as S from "./styles";



const Register: FC = () => {
  const [showSideMenu, setShowSideMenu] = useState<boolean>(true);
  const history = useHistory();
  const location = useLocation(); 


  /* const returnButton = () => (<>
    {!showSideMenu && (
      <S.StyledArrowLeftOutlined onClick={handleReturnAction} />
    )}
  </>); */

  /* const sideMenuProps = {
    showSideMenu: showSideMenu,
    handleMenuVisibility: handleMenuVisibility,
    handleReturnAction: handleReturnAction,
    title: "Cadastro",
    menuItens: registerSideMenuItens,
    menuButton: menuButton(),
    returnButton: returnButton()
  }; */

  return (
    <S.Wrapper>     
      <S.Content>
        <RegisterRoutes/>
      </S.Content>
    </S.Wrapper>
  );
};

export default Register;
