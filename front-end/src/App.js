import "./App.css";


import Footer from "./Components/home/Footer";
import Navbar from "./Components/home/Nav";
import PlywoodProductPage from "./pages/Products/PlywoodProductPage";


import AllRoutes from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/adminDashboard" ||
      location.pathname === "/addProduct" ||
      location.pathname === "/addNewProduct" ||
      location.pathname === "/sell" ||
      location.pathname === "/admin" ? (

        false
      ) : (
        <Navbar />
      )}


      

      <AllRoutes />

      {location.pathname === "/adminDashboard" ||
      location.pathname === "/addProduct" ||
      location.pathname === "/addNewProduct" ||
      location.pathname === "/admin" ||
      location.pathname === "/sell"? (

        false
      ) : (
        <Footer />
      )}

    </div>
  );
}

export default App;
