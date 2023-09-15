import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { ContextGlobal } from "./Components/utils/global.context";

function App() {

  const { state } = useContext(ContextGlobal);
  const theme = state.theme;

  return (
    <div className={`app-container ${theme}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
