import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 32px;
  border-radius: 8px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const TableHeader = styled.th`
  padding: 12px 80px;
  color: #fff;
  background-color: #00bcd5;
  text-align: center;

  :nth-child(2) {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
  }
`;

export const TableRow = styled.tr`
  color: #939799;
  background-color: #fff;

  :nth-child(2n + 3) {
    background-color: #ebf1f3;
  }
`;

export const TableData = styled.td`
  text-align: center;
  padding: 12px 80px;

  :nth-child(2) {
    border-right: 1px solid #e7e7e7;
    border-left: 1px solid #e7e7e7;
  }
`;
