import { Menu} from "antd";
import { Header,Content, Footer, } from "antd/lib/layout/layout";
import { SettingFilled, BellFilled, MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const StyledMenuOutlined = styled(MenuOutlined)`
  margin-right: 17px;
  color: #FFFF;
  height: 25px;
  width: 25px;
`;

export const StyledHeader = styled(Header)`
    display: flex;
    align-items: center;
    flex-direction: row;
    line-height: 57px;
    height: 57px;
    background: #228A95;
    padding: 0 24px;
    * {
        max-height: 57px;
    }
    .anticon{
        font-size: 25px;
    }
    .ant-menu-horizontal {
        border: 0px;
    }
    .ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu {
        top: 0px;
        border: 0px;
    }
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
        box-sizing: border-box;
        
    }
`;

export const StyledMenu = styled(Menu)`
    height: 57px;
    width: 100%;
    letter-spacing: 1px;
    color: #FFFF; 
    text-transform: uppercase;
    border-bottom: 0px;
`;
export const StyledSpace = styled.div`
    margin: auto 270px
;`
export const StyledHeaderLogo = styled.img`
    display: inline-block;
    width: 101px;
    height: 24px;
    margin-right: 20px;
`;
