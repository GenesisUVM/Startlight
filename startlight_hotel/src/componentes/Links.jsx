import { Link} from 'react-router-dom';
import './Links.css'


function Links(){
    return(
        <div className="sideBarContainer">
        <ul>
            <Link to={'/'} className='navEnlace'>About Us </Link>
            <Link to={'/Informacion'} className='navEnlace'>Informacion Turistica</Link>
            <Link to={'/Reseñas'} className='navEnlace'>Reseñas</Link>
            <Link to={'/Reservas'} className='navEnlace'>Reservas</Link>
        </ul>
    </div>

        
       
    )
};

export default Links