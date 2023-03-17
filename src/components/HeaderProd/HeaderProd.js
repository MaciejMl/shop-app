import styles from './HeaderProd.module.scss';

const HeaderProd = (props) => {
  return (
    <header>
      <h2 className={styles.name}>{props.title}</h2>
      <span className={styles.price}>Price: {props.getPrice()}$</span>
    </header>
  );
};

export default HeaderProd;
