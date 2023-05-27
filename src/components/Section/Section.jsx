import PropTypes from 'prop-types';
import { FeedbackListButtons } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <FeedbackListButtons>
      <h1>{title}</h1>
      {children}
    </FeedbackListButtons>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
