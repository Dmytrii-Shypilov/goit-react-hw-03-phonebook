import style from './statistics.module.css';

import PropTypes from 'prop-types';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <div className={style.statistics}>
      <span className={style.option}>
        Good: <span className={style.result}>{good}</span>
      </span>
      <span className={style.option}>
        Neutral: <span className={style.result}>{neutral}</span>
      </span>
      <span className={style.option}>
        Bad: <span className={style.result}>{bad}</span>
      </span>
      <span className={style.option}>
        Total: <span className={style.result}>{total}</span>
      </span>
      <span className={style.option}>
        Positive feedback:{' '}
        <span className={style.result}>{positivePercentage}</span>
      </span>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
