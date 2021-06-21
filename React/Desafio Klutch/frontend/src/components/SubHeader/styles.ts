import { Header } from "antd/lib/layout/layout";
import styled from "styled-components";

export const SubHeader = styled(Header)`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 129px; 
  margin-top :50px ;
  /* max-height: 74px; */
  background: #FFFFFF;   
  padding-left: 350px;
`;

export const StyledSubHeaderTitle = styled.p`
  
  width:285px;
  margin: auto 100px;
  height: 120px;  
  font: normal normal bold 55px/56px Flexo;
  color: #228A95;
  opacity: 1
`;

export const StyledSubHeaderSubTitle = styled.p`
  letter-spacing: 0.7px;
  color: #3f7e06;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 5px 0 0 0;
`;


export const StyledSubHeaderText = styled.div`
  overflow: hidden;
  line-height: 100%;
`;

export const StyledSpace = styled.div`
  margin: auto;
`;
