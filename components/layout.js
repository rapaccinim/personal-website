import Header from "./header/Header";
import Footer from "./footer";
import Wrapper from "./wrapper/Wrapper";

const Layout = ({ children }) => {
    return(
        <>
            <Header />
            <main>
                <Wrapper
                >
                    {children}
                </Wrapper>
            </main>
            <Footer />
        </>
    );
}
export default Layout;