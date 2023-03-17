import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import HeaderProd from '../HeaderProd/HeaderProd';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = (color) => {
    return 'color' + color[0].toUpperCase() + color.substr(1).toLowerCase();
  };

  const getPrice = () => {
    const findPrice = props.sizes.find((item) => item.name === currentSize);
    return props.basePrice + findPrice.additionalPrice;
  };

  const summary = () => {
    console.log(
      `
      Summary
      ===============
      Name: ${props.title}
      Price: ${getPrice()}
      Size: ${currentSize}
      Color: ${currentColor}
      `
    );
  };

  return (
    <article className={styles.product}>
      <ProductImage
        title={props.title}
        name={props.name}
        currentColor={currentColor}
      />
      <div>
        <HeaderProd title={props.title} getPrice={getPrice} />
        <ProductForm
          sizes={props.sizes}
          setCurrentSize={setCurrentSize}
          currentSize={currentSize}
          colors={props.colors}
          setCurrentColor={setCurrentColor}
          currentColor={currentColor}
          prepareColorClassName={prepareColorClassName}
          summary={summary}
        />
      </div>
    </article>
  );
};

Product.protoTypes = {
  props: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Product;
