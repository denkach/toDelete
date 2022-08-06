import PropTypes from 'prop-types';
import { randomHex } from '../../utils/randomColor';

import {
  StatisticsWrapper,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsWrapper>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {data.map(({ label, percentage }, index) => {
          return (
            <StatisticsListItem
              key={index}
              style={{ backgroundColor: randomHex() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage + '%'}</span>
            </StatisticsListItem>
          );
        })}
      </StatisticsList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
