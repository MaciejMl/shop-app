import styles from './HeaderProd.module.scss';
import PropTypes from 'prop-types';

const HeaderProd = (props) => {
  return (
    <header>
      <h2 className={styles.name}>{props.title}</h2>
      <span className={styles.price}>Price: {props.getPrice}$</span>
    </header>
  );
};

HeaderProd.propTypes = {
  getPrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
export default HeaderProd;
