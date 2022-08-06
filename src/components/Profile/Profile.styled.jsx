import styled from 'styled-components';

export const CardWrapper = styled.div`
  text-align: center;
  border: 1px solid #dce2ed;
  width: 280px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  overflow: hidden;
  padding-top: 24px;
  background-color: #fff;
`;

export const AvatarImg = styled.img`
  width: 30%;
`;

export const Description = styled.div`
  color: rgba(138, 150, 163);
`;

export const DescriptionText = styled.p`
  color: rgba(138, 150, 163);
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const DescriptionTitle = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  background-color: rgb(243, 246, 249);
  border-top: 1px solid #e6ebf2;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 18px 12px;
  list-style: none;
  width: calc(100% / 3);

  &:nth-child(2) {
      border-left: 1px solid #e6ebf2;
      border-right: 1px solid #e6ebf2;
    }
  }
`;

export const Label = styled.span`
  font-size: 14px;
  color: rgba(138, 150, 163);
`;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;
