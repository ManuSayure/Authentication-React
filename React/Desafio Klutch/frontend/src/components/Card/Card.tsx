import { FC } from "react";
import * as S from "./styles";


const Card: FC = ({ children }) => <S.StyledCard>
    {children}
</S.StyledCard>

export default Card;