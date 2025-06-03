import { useLocation } from "react-router-dom";
import AppRouter from "./../../router/AppRouter";

import { useEffect } from "react";
import { scrollTop } from "../../utils/scrollTop";

import HeaderMenu from "../global/HeaderMenu/HeaderMenu"; 
import Footer from "../global/Footer/Footer" 
 

function App() {
    const location = useLocation();

    useEffect(() => {
      scrollTop();
    }, [location]); 

  return (
    <>
      <HeaderMenu />
      <div className="container">
       <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;