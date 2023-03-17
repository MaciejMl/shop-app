import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map((size) => (
            <li key={size.name}>
              <button
                type='button'
                onClick={() => props.setCurrentSize(size.name)}
                className={clsx(
                  size.name === props.currentSize && styles.active
                )}
              >
                {size.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map((color) => (
            <li key={color}>
              <button
                type='button'
                onClick={() => props.setCurrentColor(color)}
                className={clsx(
                  styles[props.prepareColorClassName(color)],
                  color === props.currentColor && styles.active
                )}
              />
            </li>
          ))}
        </ul>
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
