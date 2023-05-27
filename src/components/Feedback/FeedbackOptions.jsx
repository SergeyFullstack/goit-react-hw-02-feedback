import PropTypes from 'prop-types';

import { FeedbackListButtons } from 'components/Feedback/Feedback.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackListButtons>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </FeedbackListButtons>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
