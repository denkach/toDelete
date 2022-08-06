import PropTypes from 'prop-types';
import {
  CardWrapper,
  AvatarImg,
  DescriptionText,
  DescriptionTitle,
  StatsList,
  StatsListItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <CardWrapper>
      <div className="description">
        <AvatarImg src={avatar} alt="User avatar" />
        <DescriptionTitle>{username}</DescriptionTitle>
        <DescriptionText>{'@' + tag}</DescriptionText>
        <DescriptionText>{location}</DescriptionText>
      </div>

      <StatsList>
        <StatsListItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsListItem>
        <StatsListItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsListItem>
        <StatsListItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsListItem>
      </StatsList>
    </CardWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
