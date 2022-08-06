import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  text-align: center;
  background-color: #fff;
  margin-top: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  overflow: hidden;
`;

export const StatisticsTitle = styled.h2`
  padding-top: 32px;
  margin-bottom: 12px;
  text-transform: uppercase;
  color: #666e6e;
`;

export const StatisticsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 26px 12px;
  color: #fff;
  width: 80px;
`;
