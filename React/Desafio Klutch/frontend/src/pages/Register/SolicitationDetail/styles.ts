import styled from "styled-components";
import { Button, Card } from "antd";
import { MenuOutlined } from "@ant-design/icons";
export const StyledCard = styled(Card)`
  margin: 24px;
  border-radius: 12px;
`;
export const StyledSpace = styled.div`
  margin: auto;
`;
export const StyledButton = styled(Button)`
  height: 31px;
  width: 162px;
  font-size: 12px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  border: 1px solid #5eb510;
  border-radius: 6px;
  background: ${(props) => {
    switch (props?.type) {
      case "text":
        break;
      case "primary":
        break;
      default:
        return "transparent";
    }
  }};
  color: ${(props) => {
    switch (props?.type) {
      case "primary":
        return "#FFFFF";
      default:
        return "#5EB510";
    }
  }};
  &:hover,
  &:active,
  &:focus {
    background: ${(props) => {
      switch (props?.type) {
        case "text":
          break;
        case "primary":
          break;
        default:
          return "transparent";
      }
    }};
  }
`;
export const StyledMenuOutlined = styled(MenuOutlined)`
  margin-right: 15px;
  color: #3f7e06;
`;
export const StyledIcons = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  max-width: 56px;
  color: #cecfd0;
  .anticon {
    cursor: pointer;
    :hover {
      color: #5eb510;
    }
  }
  .anticon-delete {
    :hover {
      color: red;
    }
  }
`;