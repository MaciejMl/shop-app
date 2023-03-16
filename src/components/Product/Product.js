import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };
  console.log('colors', prepareColorClassName);

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
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
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

Product.prototypes = {
  props: PropTypes.func.isRequired,
};

export default Product;
