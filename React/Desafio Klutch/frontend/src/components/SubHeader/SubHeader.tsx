import React, { FC } from "react";
import * as S from "./styles";

interface ISubHeaderProps {
  prefix?: React.ReactNode | null;
  suffix?: React.ReactNode | null;
  title?: string; 
}
const SubHeader: FC<ISubHeaderProps> = ({ prefix, suffix, title}) => {

  const titleComp = (text: string) => (
    <S.StyledSubHeaderTitle>
      {text}
    </S.StyledSubHeaderTitle>
  )

  return <S.SubHeader>
    {prefix}
    <S.StyledSubHeaderText>
      {title ? titleComp(title) : null}
    </S.StyledSubHeaderText>
    <S.StyledSpace />
    {suffix}
  </S.SubHeader>;
};

export default SubHeader;
