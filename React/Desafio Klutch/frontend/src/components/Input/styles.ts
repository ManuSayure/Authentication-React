import styled from 'styled-components';
import { Input } from 'antd';


export const StyledInput = styled(Input)`
  border-radius: 8px;
  border: 1px solid #CECFD0;
  .ant-input-suffix {
    color: #cecfd0;
  }
  ::placeholder {
    color: #cecfd0;
  }
`;