import clsx from 'clsx';
import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';

const OptionColor = (props) => {
  return (
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
  );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  prepareColorClassName: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default OptionColor;
