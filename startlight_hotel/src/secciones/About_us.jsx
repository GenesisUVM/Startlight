import './AboutUs.css'
import Links from '../componentes/Links'
import NavBar from '../componentes/NavBar'
import BotonReservar from '../componentes/BotonReservar'

function AboutUs(){
    return(
        <section className='sectionUs'>
            <NavBar />
            <Links />
            <div className="containerText">
                <p className='texto'>Nuestro Hotel se encuentra en la mágica ciudad de Mérida donde el clima es ideal para pasar unas vacaciones en familia, con paisajes y montañas que explorar con los paquetes que te facilitamos en nuestra pagina. </p>
                <p className='texto'>
                El hotel tiene 50 años de historia, en el casco central de la ciudad donde podras visitar en cuestion de minutos lugares historicos, como el casco historico, el teleferico, y una variedad de restaurants, cafes y lugares con tematicas interesantes.</p>
                </div>
            <div className='containerText'>
                <p className='texto'> Contamos con 25 Habitaciones en las cuales podemos ofrecerte habitaciones individuales, matrimoniales, triples, familiaes desde 4 hasta 6 personas, tambien contamos con 5 suites matrimoniales que te haran pasar un grato fin de semana en pareja</p>
                <p className=''>La habitación está decorada con muebles antiguos, cada uno con su propia historia. Una cama de cuatro postes, vestida con sábanas de lino blanco, ocupa el centro del espacio, invitando a los huéspedes a sumergirse en un sueño profundo. En una esquina, una cómoda de caoba alberga una colección de relojes de diferentes épocas, que marcan la hora de manera caprichosa, haciendo que uno se pregunte si el tiempo realmente tiene sentido aquí.</p>
            </div>
            <div className='containerText'>
                <p className='texto'>Pasar la noche en nuestro es como retroceder en el tiempo. La conexión con la naturaleza es palpable, y el canto de los pájaros por la mañana es el despertador más hermoso que uno podría desear. Sin embargo, la única razón por la que no le doy cinco estrellas es la falta de Wi-Fi; en este refugio, el tiempo se detiene y el mundo exterior se siente a años luz.</p>
            </div>
            <BotonReservar />
        </section>
    )
};

export default AboutUs