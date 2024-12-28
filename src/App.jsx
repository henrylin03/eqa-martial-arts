import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Header />

    <main>
      <Outlet />
    </main>

    <Footer />
  </>
);

export default App;
