import styled from "styled-components";
import { Button, Card, InputNumber } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export const StyledCard = styled(Card)`
  margin: 24px 0px 0px 0px;
  border-radius: 12px;
  width: 473px;
 
`;

export const StyledButton = styled(Button)`
  
  width: 391px;
  height: 98px;

  background: #228A95 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  border-radius: 5px;
  opacity: 1;

  text-align: left;
  font: normal normal bold 39px/52px Inria Sans;
  letter-spacing: 0px;
  color: #FFFFFF;

  &:hover,
  &:active,
  &:focus {
    background: "#FFFFFF";
  };
  
`;

export const StyledBlockIcons= styled.div`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  max-width: 54px;
 
`;
export const StyledIcon = styled.img`
    display: inline-block;
    width:  ${props => props.width ? props.width: '45px'};
    height:  ${props => props.height ? props.height: '45px'};
    margin-right: 20px;
`;
export const StyledText = styled.p`  
  top: 287px;
  left: 820px;
  width: 280px;
  height: 53px;  
  text-align: left;
  font: normal normal bold 40px/55px Flexo;
  letter-spacing: 0px;
  color: #228A95;
  opacity: 1;
  //margin: auto 100px;
`;
export const StyledInputNumber = styled(InputNumber)`
  padding: 11px;
  border-radius: 8px;
  border: 1px solid #CECFD0;
  width: 473px;
  height: 61px;
  background: #F8F8F8 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;     
  text-align: left;
  font: italic normal medium 30px/40px Flexo;
  letter-spacing: 0px;
  color: #777777;
  opacity: 1;
  margin-right: 20px;
  .ant-input-suffix {
    color: #777777;
  }
  ::placeholder {
    color: #777777;
  }
`;
export const StyledLabel = styled.p`
  text-align: left;
  font: italic normal medium 33px/44px Flexo;
  letter-spacing: 0px;
  color: #777777;
  opacity: 1;
`;
export const StyledCpfText = styled.p`
  text-align: left;
  font: italic normal medium 33px/44px Flexo;
  letter-spacing: 0px;
  color: #EF9C4B;
  opacity: 1;
`;
export const StyledTextName = styled.p`
  text-align: left;
  font: normal normal bold 33px/39px Flexo;
  letter-spacing: 0px;
  color: #228A95;
  opacity: 1;

`;
export const StyledBlockClient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 473px;
  height: 355px;
  background: #F8F8F8 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;

`