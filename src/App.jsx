import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => (
  <>
    <Header />

    <main>
      <ScrollToTop />
      <Outlet />
    </main>

    <Footer />
  </>
);

export default App;
