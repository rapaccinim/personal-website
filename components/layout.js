import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return(
        <>
            <Header />
            <main
                className="main-container"
            >
                <div
                    className="wrapper"
                >
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}
export default Layout;