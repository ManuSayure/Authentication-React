import styled from "styled-components";
import { Tabs } from "antd";

export const StyledTabs = styled(Tabs)`
  margin: 24px;
  .ant-tabs-nav {
    margin: 0px;
  }
  .ant-tabs-tab {
    margin: 0px;
    min-width: 120px;
    justify-content: center;
    background-color: #00000005;
    border: 1px solid #00000026;
    border-radius: 12px 12px 0px 0px;
    color: #000000a6;
    :hover {
      color: none;
    }
  }
  .ant-tabs-ink-bar {
    display: none;
  }
  .ant-tabs-tab-btn {
    transition: none !important;
  }
  .ant-tabs-tab-active {
    font-weight: 600;
    border: 0;
    background-color: white;
    .ant-tabs-tab-btn {
      color: #3f7e06;
    }
  }
  .ant-tabs-content {
    border-radius: 0px 12px 12px 12px;
    background-color: white;
  }
`;

