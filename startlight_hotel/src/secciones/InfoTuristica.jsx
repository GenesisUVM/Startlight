import ContTuristica from "../componentes/ContTuristica"
import imgCentro from '../img/merida_centro.jpg'
import imgCentro1 from '../img/merida_centro1.jpg'
import imgCentro2 from '../img/merida_centro2.jpg'




function InfTuristica(){
    const imagenesSlider =[imgCentro,imgCentro1,imgCentro2]
    return(
        <section>
            <ContTuristica imagenes={imagenesSlider}/>
            <ContTuristica imagenes={imagenesSlider}/>
            <ContTuristica imagenes={imagenesSlider}/>
        </section>
    )
};

export default InfTuristica