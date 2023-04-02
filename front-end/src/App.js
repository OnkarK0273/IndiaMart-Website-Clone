import "./App.css";


import Footer from "./Components/home/Footer";
import Navbar from "./Components/home/Nav";


import AllRoutes from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/adminDashboard" ||
      location.pathname === "/addProduct" ||
      location.pathname === "/addNewProduct" ||
      location.pathname === "/addProduct/*" || location.pathname === "/sell" ?  (
        false
      ) : (
        <Navbar />
      )}


      

      <AllRoutes />

      {location.pathname === "/adminDashboard" ||
      location.pathname === "/addProduct" ||
      location.pathname === "/addNewProduct" ||
      location.pathname === "/addProduct/:id" || location.pathname === "/sell" ? (
        false
      ) : (
        <Footer />
      )}

    </div>
  );
}

export default App;
