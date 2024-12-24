import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Header />

    <main>
      <Outlet context={[]} />
    </main>

    <Footer />
  </>
);

export default App;
