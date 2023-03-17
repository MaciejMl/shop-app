import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import PropTypes from 'prop-types';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map((products) => (
        <Product key={products.id} {...products} />
      ))}
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
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
    })
  ).isRequired,
};

export default Products;
