import React, { FC } from 'react';
import { Row, Col } from 'antd';
import * as S from './styles';
import SectionForm, { IFormItem } from '../SectionForm/SectionForm';


interface IFormGroupContainerProps {
  title: string;
  items?: IFormItem[];
}
const FormGroupContainer: FC<IFormGroupContainerProps> = ({ title, items, children }) => {
  return (<Row>
    <Col span={5}><S.StyledTitle>{title}</S.StyledTitle></Col>
    <Col span={19}>{items ? (<SectionForm items={items}/>) : children}</Col>
  </Row>);
}

export default FormGroupContainer;
