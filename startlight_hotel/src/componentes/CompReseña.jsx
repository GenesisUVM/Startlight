import './CompReseña.css'
import habitacion from "../img/habitacion.jpg"
import habitacion2 from "../img/habitacion2.jpg"
import habitacion3 from "../img/habitacion3.jpg"
import habitacion4 from "../img/habitacion4.jpg"

function CompReseña(){

    return(
        <div className='containerReseña'>
            <h3 className='tituloHabitacion'>Reseña Habitacion 12</h3>
            <div className='containerImgs'>
                <img src={habitacion} alt="habitacion 12"  className='imgsHabitaciones'/>
                <img src={habitacion2} alt="habitacion 12" className='imgsHabitaciones' />
                <img src={habitacion3} alt="habitacion 12" className='imgsHabitaciones' />
                <img src={habitacion4} alt="habitacion 12" className='imgsHabitaciones' />
            </div>
            <div className='contText'>
                <p>Recomiendo encarecidamente a quienes busquen escapar de la rutina diaria y sumergirse en un ambiente que evoca nostalgia y paz. Es un lugar donde los sueños parecen más cercanos y el tiempo, casi irrelevante. ¡No olvides llevar un buen libro y dejar tu reloj en casa!</p>
            </div>

        </div>
    )
};

export default CompReseña