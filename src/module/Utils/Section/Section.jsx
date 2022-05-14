import style from './Section.module.css';
import PropTypes from 'prop-types';
const { section, section_phonebook } = style;

export const Section = ({ children, type }) => {
  const sectionClassName = [section];
  type === 'Phonebook' && sectionClassName.push(section_phonebook);

  return <div className={sectionClassName.join(' ')}>{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};
