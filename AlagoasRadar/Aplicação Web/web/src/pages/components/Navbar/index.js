import React from 'react'
import {Nav, BtnHeader, ImageLogo} from './styles';
import Logo from "../../../assets/images/logo.svg";

const Navbar = () => {
    return(
        <Nav>
        <ImageLogo src={Logo} alt="AL Radar" />
        <div>
          <BtnHeader href="https://google.com">
            Ajuda
          </BtnHeader>
          <BtnHeader primary  href="https://google.com">
            Sair
          </BtnHeader>
        </div>
      </Nav>
    )


}; export default Navbar;