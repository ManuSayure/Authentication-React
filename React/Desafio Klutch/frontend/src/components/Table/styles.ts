import { Table } from "antd";
import styled from "styled-components";


export const StyledTable = styled(Table)`
    td, th, tr { 
        height: ${props => (props as any).rowHeight || "41px"};
        padding: 0 0 0 14px !important;
        border-bottom: 1px solid #d8eae6 !important;
    }
  .ant-table-thead tr th {
    text-align: left;
    font: normal normal bold 20px/30px Flexo;
    letter-spacing: 0px;
    color: #777777;
    opacity: 1;
    /* :hover {
        background: #ebf2ea;
    } */
    * {
        position: relative;
        display: inline-flex;
    }
  }
  .ant-table-title {
    background: #F8F8F8 0% 0% no-repeat padding-box;
  }
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-top-left-radius: 8px;
  }
  .ant-table-container table > thead > tr:last-child th:last-child {
    border-top-right-radius: 8px;
  }
  td {
    color: #646d82;
    letter-spacing: 0px;
    size: 16px;
  }
  .ant-table-filter-trigger {
    background: #ebf2ea;
    color: #777777;
    :hover {
        background: #ebf2ea;
    }
  }
  .ant-table-filter-column-title {
    padding: 0 !important;
  }
  .ant-table-column-sorters {
    padding: 0 !important;
  }
  .ant-table-filter-trigger-container {
    align-items: center;
  }
  .ant-table-filter-trigger {
        height: 100%;
        > span {
            align-items: center;
        }
    }
  .ant-pagination {
    display: none;
  }
`;
