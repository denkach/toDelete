import styled from 'styled-components';

export const FriendListCard = styled.li`
  display: flex;
  align-items: center;
  font-size: 28px;
  width: 320px;
  padding: 8px 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  background-color: #fff;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const FriendListImage = styled.img`
    margin-right: 12px;
  }
`;

export const FriendListSpan = styled.span`
  width: 12px;
  height: 12px;
  margin-right: 12px;
  background-color: ${p => (p.isOnline ? '#46b24b' : '#ff4f53')};
  border-radius: 50%;
`;
