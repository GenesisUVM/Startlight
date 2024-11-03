import './AboutUs.css'
import Links from '../componentes/Links'
import NavBar from '../componentes/NavBar'

function AboutUs(){
    return(
        <section className='sectionUs'>
            <NavBar />
            <Links />
            <div className="containerText">
                <p>Nuestro Hotel se encuentra en la mágica ciudad de Mérida donde el clima es ideal para pasar unas vacaciones en familia, con paisajes y montañas que explorar con los paquetes que te facilitamos en nuestra pagina. </p>
                <p>
                El hotel tiene 50 años de historia, en el casco central de la ciudad donde podras visitar en cuestion de minutos lugares historicos, como el casco historico, el teleferico, y una variedad de restaurants, cafes y lugares con tematicas interesantes.</p>
            </div>
        </section>
    )
};

export default AboutUs