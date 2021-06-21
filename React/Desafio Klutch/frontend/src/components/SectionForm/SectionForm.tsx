import { Col, Row } from "antd";
import React, { FC } from "react";
import Input from "../Input/Input";
import * as S from "./styles";
import { FormItemProps } from "antd";

export interface IFormItem extends FormItemProps {
  colSpan?: number;
  formComponent?: React.ReactNode;
}

interface ISectionFormProps {
  items: IFormItem[];
  bottomSpacing?: string;
}
const SectionForm: FC<ISectionFormProps> = ({ items, bottomSpacing }) => {
  const overrideProps = (item: IFormItem) => {
    const newProps = Object.assign({}, item);
    delete newProps.colSpan;
    delete newProps.formComponent;
    return newProps;
  };

  return (
    <Row gutter={[16, 0]}>
      {items.map((item: IFormItem, index: number) => (
        <Col span={item.colSpan} key={index}>
          <S.StyledFormItem
            {...overrideProps(item)}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: item?.required,
                message: item.label
                  ? `${item.label} é obrigatório`
                  : "Campo obrigatório",
              },
            ]}
            $bottomSpacing={bottomSpacing}
          >
            {item.formComponent ?? <Input />}
          </S.StyledFormItem>
        </Col>
      ))}
    </Row>
  );
};

export default SectionForm;
