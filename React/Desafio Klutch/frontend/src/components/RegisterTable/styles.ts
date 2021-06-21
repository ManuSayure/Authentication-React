import { Input, Modal} from "antd";
import styled from "styled-components";

export const StyledInput = styled(Input)`
  border: 1px solid #e8e9ec;
  border-radius: 8px;
  margin-bottom: 8px;
  height: 40px;
  .anticon {
    color: #cecfd0;
    font-size: 16px;
  }
`;

export const StyledIcons = styled.div`
  display: flex;
  font-size: 20px;
  color: #cecfd0;
  .anticon {
    margin: 6px;
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
export const StyledTitle = styled.div`
  left: 300px;
  font: normal normal bold 29px/38px Flexo;
  letter-spacing: 0px;
  color: #228A95;
  opacity: 1;
  background: #F8F8F8 0% 0% no-repeat padding-box;

`

export const StyledModal = styled(Modal)`
 .ant-modal{
    border-radius: 30px;
  }
  .ant-modal-title {
      color: #3F7E06;
  }
  .ant-modal-content {
    width: 459px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 12px 48px #00000008;
    border-radius: 12px!important;
    opacity: 1;
    font: normal normal normal 12px/17px Montserrat;
    p{
      margin-left: 5px;
      color: #3F7E06;     
      font-size: 17px;
    }
  }
  .ant-modal-footer {
      border:none;
      button {
        border-radius: 6px;
        letter-spacing: 0.6px;
        text-transform: uppercase;
        font: normal normal normal 12px/17px Montserrat;
      }
      button:first-child {
        border: 1px solid #5eb510;
        color: #5eb510;
      }
  }
  .ant-modal-header{
      border-radius: 12px 12px 0px 0px; ;
  }
  .ant-modal-mask {
      background: #646D82 0% 0% no-repeat padding-box;
  } 
  .ant-modal-close-x svg {
     display: none; 
  }
`;

