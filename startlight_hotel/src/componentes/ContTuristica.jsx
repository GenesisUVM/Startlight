import './ContTuristica.css'

import Slide from './Slide'



/* Componente que tiene el titulo, descripcion e imagenes del lugar turistico de la ciudad, 
asi como el enlace a la guia turistica para que el usuario pueda descargarla */

function ContTuristica(){
   
    return(
        <div className="contenedorInfo">
            <h2>Centro Historico de la Ciudad</h2>
            <p>Nuestro hotel queda en medio del casco historico de la ciudad donde puedes recorrer los edificios de estilo renacentista</p>
            <div className='imgContainer'>
               <Slide />
            </div>
            <a href="#" className='enlaceGuia'>Guia Turistica</a>

        </div>
    )
};

export default ContTuristica