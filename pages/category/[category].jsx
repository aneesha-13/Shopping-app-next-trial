import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/ExplorePage.module.css';
import { getProductsByCategory } from '../api/products/[category]';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <br/>
      <h1 className={styles.title}>Results for {router.query.category}</h1>
      <br/>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}