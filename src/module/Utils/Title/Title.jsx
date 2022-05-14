import PropTypes from 'prop-types';
import style from './Title.module.css';

export const Title = ({ title }) => <h2 className={style.title}>{title}</h2>;

Title.propTypes = {
  title: PropTypes.string,
};
