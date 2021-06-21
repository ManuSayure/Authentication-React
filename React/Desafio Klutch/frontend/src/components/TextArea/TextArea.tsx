import { TextAreaProps } from 'antd/lib/input/TextArea';
import { FC } from 'react';
import * as S from './styles'

const TextArea: FC<TextAreaProps> = (props: TextAreaProps) => (
    <S.StyledTextArea {...props}/>
)

export default TextArea;