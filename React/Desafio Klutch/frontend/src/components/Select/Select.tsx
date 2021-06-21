import React, { FC } from "react";
import { Select, SelectProps } from "antd";
import * as S from "./styles";

interface PropsSelect<ValueType = any> extends SelectProps<ValueType> {
  ListOptions?: { id: number; name: string }[];
}

const SelectComponent: FC<PropsSelect> = ({ children, ListOptions, ...props }) => {
  const HandleOptions = (List: { id: number; name: string }[]) =>
    List.map((item) => (
      <Select.Option key={item.id} value={item.name}>
        {item.name}
      </Select.Option>
    ));

  return (
    <S.StyledSelect {...props} {...ListOptions}>
      {ListOptions ? HandleOptions(ListOptions) : children}
    </S.StyledSelect>
  );
};

export default SelectComponent;
