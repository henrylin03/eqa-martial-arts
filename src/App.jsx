import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => (
  <>
    <Header />
    
    <main>
      <Outlet context={[]} />
    </main>
  </>
);

export default App;
