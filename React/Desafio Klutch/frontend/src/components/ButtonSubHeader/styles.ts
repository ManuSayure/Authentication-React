import styled from 'styled-components';
import { Button } from 'antd';

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