import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledContent = styled.div`
  background: #EBF2EA;
  flex: 1 1 auto;
  padding-bottom: 16px;
`;
