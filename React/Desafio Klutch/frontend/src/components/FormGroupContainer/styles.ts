import { Form } from 'antd';
import styled from 'styled-components';

export const StyledTitle = styled.span`
    font-size: 18px;
    letter-spacing: 0px;
    color: #333333;
`;

export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 16px;
  .ant-form-item-label {
    padding: 0;
  }
  .ant-form-item-label > label {
    color: #646d82;
    height: auto;
  }
  .ant-form-item-label > label.ant-form-item-required::before {
    content: none;
  }
  .ant-form-item-label > label::after {
    content: ${(props) => (props.required ? '"*"' : 'none')};
  }
  .ant-form-vertical .ant-form-item-label > label::after, .ant-col-24.ant-form-item-label > label::after, .ant-col-xl-24.ant-form-item-label > label::after {
    display: inherit;
  }
`;
