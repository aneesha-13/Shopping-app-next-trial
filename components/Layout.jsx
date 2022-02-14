import NavBar from "./NavBar1";
import Footer from "./Footer";


function Layout({ children }) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}
export default Layout