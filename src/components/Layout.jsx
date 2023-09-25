import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />

      <div className="content font-raleway">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
