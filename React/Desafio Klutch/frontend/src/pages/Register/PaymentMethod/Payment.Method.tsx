import React, { FC, useState } from "react";
import * as S from "./styles";
import RegisterTable from "../../../components/RegisterTable/RegisterTable";
import { Form, Row, Col, Input} from "antd";

import SubHeader from "../../../components/SubHeader/SubHeader";

import SectionForm, { IFormItem } from "../../../components/SectionForm/SectionForm";

import addIcon from "../../../assets/Icones/Grupo 270.svg";
import icon2 from "../../../assets/Icones/_ionicons_svg_md-filing.svg";

import rateTableService  from '../../../services/rate-table.service';
import clientService from '../../../services/client.service';
import { IClient } from '../../../models/client.model';

import { useHistory, useLocation } from "react-router-dom";

const { Search } = Input;
const R = require('ramda');


const SolicitationLoan: FC = () => {
  
  const [form] = Form.useForm();
  const [value, setValue] = useState<string | number>('0.00');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [client, setClient] = useState<IClient>();
  
  const history = useHistory();
  const location = useLocation(); 
  
  const subHeaderPrefix = () => (
    <S.StyledBlockIcons>
      <S.StyledIcon src={addIcon} width={'45px'} height={'85px'}/>
      <S.StyledIcon src={icon2} width={'80px'} height={'80px'}/>
     
    </S.StyledBlockIcons>
  );  

  const onClick = () => {    
      history.push('/card_data');

  }

  return (
    <>
      <SubHeader
        prefix={subHeaderPrefix()}        
        title={"Solicitar Emprestimo"}       
      />

      <S.StyledCard>             
          <Row>
            <Col offset = {5}  span={5}>
                <S.StyledBlockClient>
                    <S.StyledLabel> Escolha a Modalidade:</S.StyledLabel>
                    <S.StyledButton
                        type="primary"
                        onClick={onClick}
                        >Cartão de Crédito
                    </S.StyledButton> 
                    <S.StyledTextName>Ou</S.StyledTextName>
                    <S.StyledButton
                        disabled
                        type="primary"
                        onClick={() => {console.log('pesquisar')}}
                        >Crédito Cosignado
                    </S.StyledButton> 
                    <S.StyledTextName>Em Breve</S.StyledTextName>
                </S.StyledBlockClient>
            </Col>
          </Row>
      </S.StyledCard>
    </>
  );
};

export default SolicitationLoan;