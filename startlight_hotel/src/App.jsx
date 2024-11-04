import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AboutUs from "./secciones/About_us";
import InfTuristica from "./secciones/InfoTuristica";
import Reseñas from "./secciones/Reseñas";
import Reservas from "./secciones/Reservas";


function App() {

  return (
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<AboutUs />} />
            <Route path='/Informacion' element={<InfTuristica />} />
            <Route path='/Reseñas' element={<Reseñas />} />
            <Route path='/Reservas' element={<Reservas />} />
        </Routes> 
        </BrowserRouter>   
      
    
  )
}



export default App
