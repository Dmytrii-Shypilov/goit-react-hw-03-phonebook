import style from './feedback-options.module.css';

import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(option => {
    return (
      <button
        className={style.btn}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    );
  });
  return <div className={style.btnContainer}>{elements}</div>;
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
