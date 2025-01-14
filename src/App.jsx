import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  console.log(
    "This website was designed and built by Henry Lin (https://henrylin.io)",
  );

  return (
    <>
      <Header />

      <main>
        <ScrollRestoration />
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default App;
