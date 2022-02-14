import '../styles/globals.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Layout from '../components/Layout'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Provider } from 'react-redux';
import store from '../redux/store';


function MyApp({ Component, pageProps }) {
  return(
  <Provider store={store}>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </Provider>)
  
}

export default MyApp
