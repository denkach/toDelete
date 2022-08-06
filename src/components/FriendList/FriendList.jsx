import PropTypes from 'prop-types';
import { FriendListItems } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListItems>
      {friends.map(item => {
        return <FriendListItem key={item.id} user={item} />;
      })}
    </FriendListItems>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
