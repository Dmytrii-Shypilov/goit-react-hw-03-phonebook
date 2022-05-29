import style from './section.module.css';

import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className={style.section}>
      <h2 className={style.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
