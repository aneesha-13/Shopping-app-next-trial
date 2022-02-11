import styles from '../styles/Footer.module.css';
// import styles from '../styles/Home.module.css'


function Footer(){
  return (
    <div className="wrapper">
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>GamesKart</span>{' '}
      {new Date().getFullYear()}
    </footer>
    </div>
  );
};
export default Footer;