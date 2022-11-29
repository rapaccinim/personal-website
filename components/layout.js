import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return(
        <>
            <Header />
            <main>
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