import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <Outlet context={[]} />
  </>
);

export default App;
