import { FC } from "react";
import { CheckboxProps } from "antd";
import * as S from "./styles";

//TODO: make it possible to use Checkbox.Group
const Checkbox: FC<CheckboxProps> = ({ children, ...props }) => {
  return <S.StyledCheckbox {...props}>{children}</S.StyledCheckbox>;
};

export default Checkbox;
