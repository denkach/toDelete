import PropTypes from 'prop-types';
import {
  FriendListCard,
  FriendListImage,
  FriendListSpan,
} from './FriendListItem.styled';

export const FriendListItem = ({ user: { avatar, name, isOnline, id } }) => {
  return (
    <FriendListCard>
      <FriendListSpan isOnline={isOnline}></FriendListSpan>
      <FriendListImage
        src={avatar}
        alt={`avatar of ${name}`}
        width="80"
        height="80"
      />
      <p>{name}</p>
    </FriendListCard>
  );
};

FriendListItem.propTypes = {
  user: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
