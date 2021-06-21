import React, { FC, useState } from "react";
import * as S from "./styles";
import RegisterTable from "../../../components/RegisterTable/RegisterTable";
import { Form, Row, Col} from "antd";

import SubHeader from "../../../components/SubHeader/SubHeader";

import { IFormItem } from "../../../components/SectionForm/SectionForm";
import Input from "../../../components/Input/Input";

import addIcon from "../../../assets/Icones/Grupo 270.svg";
import icon2 from "../../../assets/Icones/_ionicons_svg_md-filing.svg";

import rateTableService  from '../../../services/rate-table.service';
import { useHistory} from "react-router-dom";


const items: IFormItem[] = [{
  id: "1",
  name: "name",
  label: "Nome",
  colSpan: 24,
  required: true,
  formComponent: <Input />,
}]


const TaxonSilumation: FC = () => {
  const [reRenderTableAux, setReRenderTableAux] = useState<number>(0);
  const [form] = Form.useForm();
  const [value, setValue] = React.useState<string | number>('0.00');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();
  
  const columns = [
    {
      title: "Parcela",
      dataIndex: "installments",
      key: "installments",
      sorter: true,
      filters: [],
    },
    {
      title: "Juros da Parcela",
      dataIndex: "installmentInterest",
      key: "installmentInterest",
      sorter: true,
      filters: [],
    },
    {
      title: "Valor Parcela",
      dataIndex: "installmentValue",
      key: "installmentValue",
      sorter: true,
      filters: [],
    },
    {
      title: "Valor Total",
      dataIndex: "fullValue",
      key: "fullValue",
      sorter: true,
      filters: [],
    },
    {
      title: "Comissão do Parceiro",
      dataIndex: "comission",
      key: "comission",
      sorter: true,
      filters: [],
    },
  ];

  const subHeaderPrefix = () => (
    <S.StyledBlockIcons>
      <S.StyledIcon src={addIcon} width={'45px'} height={'85px'}/>
      <S.StyledIcon src={icon2} width={'80px'} height={'80px'}/>
     
    </S.StyledBlockIcons>
  );
  const onSearchTable = async () => {
    setIsLoading(true);
    rateTableService.getAll()
    .then( response => { console.log(response); setIsLoading(false);})
    .catch(console.error); 
  };

  function onChange(value: any) {
    console.log('changed', value);
    setValue(value);
  }
  const onSubmit = (value: string) => {    
    onSearchTable();
    form.resetFields();   
  };
  const OnSolicitation = () => {    
      history.push('/solicitation');

  }  
  const updateTable = () => setReRenderTableAux(reRenderTableAux + 1);

  return (
    <>
      <SubHeader
        prefix={subHeaderPrefix()}        
        title={"Simulação de Taxas"}       
      />

      <S.StyledCard>       
       
          <Row  gutter={[16, 16]}>
            <Col  offset = {5} span={5}>
              <S.StyledText>
                    Valor Desejado
              </S.StyledText>
            </Col>
          </Row>
          <Row>
            <Col offset = {5}  span={19}>
              <div style = {{justifyContent:'center', alignItems:'center'}}>
              <Form form={form} name="horizontal_login" layout="inline"  onFinish={onSearchTable}>
                <Form.Item
                  name="valor"
                  rules={[{ required: true,  message: 'Você precisa digitar um valor' }, 
                        {min: 300, max:100000, message: 'O valor precisa ser entre 300,00 e 10.000, 00 reais'}]}
                >
                  <S.StyledInputNumber
                    defaultValue={0.00}
                    formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    /* parser={value => value.replace(/\$\s?|(,*)/g, '')} */
                    onChange={onChange}
                  />
                </Form.Item>
                <S.StyledButton
                  type="primary"
                  onClick={() => {console.log('pesquisar')}}
                >Calcular</S.StyledButton>
              </Form>          
               
                
              </div>
              
            </Col>
          </Row>
       
        {<RegisterTable
         rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
          crudServiceApi={ rateTableService }
          columns={columns}          
        />}
      </S.StyledCard>
    </>
  );
};

export default TaxonSilumation;
