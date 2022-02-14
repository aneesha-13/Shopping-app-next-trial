import ProductCard from '../components/ProductCard';
import styles from '../styles/ExplorePage.module.css';
import { getProducts } from './api/products/index';

const explore = ({ products }) => {
  return (
    <div className={styles.container}>
        <br/>
      <h1 className={styles.title}>All Results</h1>
        <br/>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default explore;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}