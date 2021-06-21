import { FC, useEffect, useState } from "react";
import { Form, Space } from "antd";
import * as S from "./styles";
import SubHeader from "../../../components/SubHeader/SubHeader";
import { IFormItem } from "../../../components/SectionForm/SectionForm";
import Input from "../../../components/Input/Input";
import { useParams } from "react-router-dom";

import {ISolicitation} from '../../../models/solicitation.model';
import soliciationService from '../../../services/solicitation.service';

const items: IFormItem[] = [{
  id: "1",
  name: "type",
  label: "Nome",
  colSpan: 24,
  required: true,
  formComponent: <Input />,
}]

const SolicitationDetail: FC = () => { 

  const { id } = useParams<{ id?: string }>();
  const [attachment, setAttachment] = useState<any>([]);
  const [solicitationData, setSolicitationData] = useState<any>();
  const [form] = Form.useForm();

  useEffect(() => {
    soliciationService
      .get(Number(id))
      .then((res) => {
        console.log("res ->", res);
        setSolicitationData(res.data);
        form.setFieldsValue(res.data);
      })
      .catch(console.error);
  }, [id, form]);

  
  const columns = [
    {
      title: "Tipo de contrato",
      dataIndex: "type",
      key: "type",
      sorter: true,
      filters: [],
    },
  ]; 

  /* const subHeaderPrefix = () => (
    <S.StyledBlockIcons>
      <S.StyledIcon src={addIcon} width={'45px'} height={'85px'}/>
      <S.StyledIcon src={icon2} width={'80px'} height={'80px'}/>
     
    </S.StyledBlockIcons>
  ); */


  return (
    <>
      <SubHeader
       /*  prefix={subHeaderPrefix()} */
        title={"Detalhe de Solicitação"}
      />
      <S.StyledCard bordered={false}>
       
      </S.StyledCard>
    </>
  );
};
export default SolicitationDetail;
