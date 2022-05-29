import style from './filter.module.css';

import PropTypes from 'prop-types';

const Filter = ({ filterChange }) => {
  return (
    <div className={style.filter}>
      <input onChange={filterChange} type="text" placeholder="Search" />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};
