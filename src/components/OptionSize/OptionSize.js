import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionSize = (props) => {
  return (
    <ul className={styles.choices}>
      {props.sizes.map((size) => (
        <li key={size.name}>
          <button
            type='button'
            onClick={() => props.setCurrentSize(size.name)}
            className={clsx(size.name === props.currentSize && styles.active)}
          >
            {size.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
};

export default OptionSize;
