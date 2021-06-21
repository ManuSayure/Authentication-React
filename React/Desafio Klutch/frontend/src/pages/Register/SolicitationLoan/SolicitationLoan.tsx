import React, { FC, useState } from "react";
import * as S from "./styles";
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
 
  const onCancel = () => {
    
  };

  const onSearchClient = async (clientCpf: string) => {
    setIsLoading(true);
    clientService.getAll()
    .then( response => { console.log(response); setIsLoading(false);})
    .catch(console.error); 
  };

  
  function onChange(value: any) {
    console.log('changed', value);
    setValue(value);
  }
  const onSubmit = (value: string) => {    
    onSearchClient(value);
    form.resetFields();   
  };
  const OnSolicitation = () => {    
      history.push('/solicitation');

  }

  return (
    <>
      <SubHeader
        prefix={subHeaderPrefix()}        
        title={"Solicitar Emprestimo"}       
      />

      <S.StyledCard>       
       
          <Row  gutter={[16, 16]}>
            <Col  offset = {5} span={19}>
              <S.StyledText>
                    Busque o Cliente
              </S.StyledText>
            </Col>
          </Row>
          <Form form={form} name="horizontal_login" layout="inline"  onFinish={onSubmit}>
          <Form.Item
            name="valor"
            rules={[{ required: true,  message: 'Você precisa digitar um valor' }, 
                    {min: 300, max:100000, message: 'O valor precisa ser entre 300,00 e 10.000, 00 reais'}]}
          >
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onChange={onChange}
              onSearch={onSearchClient}
              loading = {isLoading}          
            />          
        </Form.Item>
        </Form>          
          <Row>
            <Col offset = {5}  span={5}>
                <S.StyledBlockClient>
                    <S.StyledLabel> Cliente Encontrado:</S.StyledLabel>
                    <S.StyledCpfText>{'074.119.055.93'}</S.StyledCpfText>
                    <S.StyledTextName>{'Lara Test'}</S.StyledTextName>
                </S.StyledBlockClient>             
                
                <S.StyledButton
                  type="primary"
                  onClick={() => {console.log('pesquisar')}}
                >Solicitar</S.StyledButton>          
              
            </Col>
          </Row>
       
       
      </S.StyledCard>
    </>
  );
};

export default SolicitationLoan;