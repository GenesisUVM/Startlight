import './Reseñas.css';
import Links from '../componentes/Links'
import NavBar from '../componentes/NavBar'
import BotonReservar from '../componentes/BotonReservar'
import CompReseña from '../componentes/CompReseña'

function Reseñas() {
    return(
        <div className='contReseñas'>
        <NavBar />
        <Links />
        <CompReseña />
        <CompReseña />
        <CompReseña />
        <BotonReservar />
        </div>
    )
};

export default Reseñas