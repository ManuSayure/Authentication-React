import { Form, FormItemProps } from "antd";
import styled from "styled-components";

type ExtendedFormItemProps = FormItemProps & { $bottomSpacing?: string }

export const StyledFormItem = styled(Form.Item) <ExtendedFormItemProps>`
  margin-bottom: ${({ $bottomSpacing }) => $bottomSpacing || "16px"}; 
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
    content: ${({ required }) => (required ? '"*"' : 'none')};
  }
  .ant-form-vertical .ant-form-item-label > label::after, .ant-col-24.ant-form-item-label > label::after, .ant-col-xl-24.ant-form-item-label > label::after {
    display: inherit;
  }
`;
