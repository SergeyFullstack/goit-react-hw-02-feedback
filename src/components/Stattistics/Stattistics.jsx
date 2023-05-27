import PropTypes from 'prop-types';

import {
  Title,
  WrapFeedback,
  WrapTotal,
} from 'components/Stattistics/Statistics.styled';

export const Stattistics = ({
  good,
  neutral,
  bad,
  total,
  PositivePercentage,
}) => {
  return (
    <div>
      <Title>Statistics</Title>
      <WrapFeedback>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </WrapFeedback>
      <WrapTotal>
        <p>Total: {total}</p>
        <p>Positive feedback: {PositivePercentage}%</p>
      </WrapTotal>
    </div>
  );
};

Stattistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  PositivePercentage: PropTypes.number,
};
