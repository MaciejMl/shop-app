import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = (props) => {
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize
          className={styles.choices}
          sizes={props.sizes}
          setCurrentSize={props.setCurrentSize}
          currentSize={props.currentSize}
        />
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor
          className={styles.choices}
          colors={props.colors}
          setCurrentColor={props.setCurrentColor}
          prepareColorClassName={props.prepareColorClassName}
          currentColor={props.currentColor}
        />
      </div>
      <Button className={styles.button} summary={props.summary}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};
ProductForm.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  prepareColorClassName: PropTypes.func.isRequired,
  summary: PropTypes.func.isRequired,
};

export default ProductForm;
