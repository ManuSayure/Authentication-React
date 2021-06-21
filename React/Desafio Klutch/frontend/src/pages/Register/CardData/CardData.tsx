import React, { useState, FC } from "react";
import * as S from "./styles";
import RegisterTable from "../../../components/RegisterTable/RegisterTable";
import { Form, Row, Col, Input, InputNumber, Button, Upload } from "antd";

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

const Card: FC = () => {
   
  const [form] = Form.useForm();
  const [value, setValue] = useState<string | number>('0.00');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [client, setClient] = useState<IClient>();
  
  const history = useHistory();
  const location = useLocation(); 

  
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  const Demo = () => {
    const onFinish = (values: any) => {
      console.log(values);
    };
  }
  
  const subHeaderPrefix = () => (
    <S.StyledBlockIcons>
      <S.StyledIcon src={addIcon} width={'45px'} height={'85px'}/>
      <S.StyledIcon src={icon2} width={'80px'} height={'80px'}/>
     
    </S.StyledBlockIcons>
  );  
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = () => {    
      history.push('/card_data');

  }

  return (
    <>
    
      <SubHeader
        prefix={subHeaderPrefix()}        
        title={"Solicitar Emprestimo"}       
      />

      <S.StyledCard>    
                            
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                      <Row>
                        <Col  span={12}>
                        <S.StyledLabel> Escolha a Modalidade: </S.StyledLabel>
                        <Form.Item name={['user', 'name']}  rules={[{ required: true }]}>
                            <Input placeholder="Lara B Esquível"  />
                        </Form.Item>
                        <Form.Item name={['user', 'cardNumber']}  rules={[{ required: true }]}>
                            <Input placeholder="000000000000" />
                        </Form.Item>
                        <Form.Item name={['user', 'validateDate']}  rules={[{ required: true }]}>
                            <InputNumber placeholder="Data de Validade"  />
                        </Form.Item>
                        <Form.Item name={['user', 'cvc']} >
                            <Input placeholder="CVC " />
                        </Form.Item> 
                        </Col> 

                        <Col  span={12}>
                          <S.StyledLabel> Escolha a Modalidade:</S.StyledLabel>
                          <Form.Item
                              name="upload"
                              label="Cartão de Crédito (frente)"
                              valuePropName="fileList"
                              getValueFromEvent={normFile}
                              extra="longgggggggggggggggggggggggggggggggggg"
                          >
                              <Upload name="logo" action="/upload.do" listType="picture">
                              <Button >Adicionar</Button>
                              </Upload>
                          </Form.Item>
                          <Form.Item
                              name="upload"
                              label="Cartão de Crédito (Verso)"
                              valuePropName="fileList"
                              getValueFromEvent={normFile}
                              extra="longgggggggggggggggggggggggggggggggggg"
                          >
                              <Upload name="logo" action="/upload.do" listType="picture">
                              <Button >Adicionar</Button>
                              </Upload>
                          </Form.Item>
                          <Form.Item
                              name="upload"
                              label="Selfie com o cartão de crédito"
                              valuePropName="fileList"
                              getValueFromEvent={normFile}
                              extra="longgggggggggggggggggggggggggggggggggg"
                          >
                              <Upload name="logo" action="/upload.do" listType="picture">
                              <Button >Adicionar</Button>
                              </Upload>
                          </Form.Item>
                          <S.StyledLabel> Atenção as fotos devem estar legíveis,
                          com todas as informações visíveis do cartão. </S.StyledLabel>

                        </Col> 
                        <Col span={24}>
                          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                          </Form.Item>                        
                        </Col>           
                                                          
                      </Row>                     
                    </Form>                    
                
      
            <S.StyledButton
                        disabled
                        type="primary"
                        onClick={() => {console.log('pesquisar')}}
                        >Crédito Cosignado
            </S.StyledButton>           
      </S.StyledCard>
    </>
  )
  

}; export default Card;