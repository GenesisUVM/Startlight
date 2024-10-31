import { useState } from 'react';
import './Slide.css'
import imm1 from '../img/merida_centro.jpg'
import imm2 from '../img/merida_centro2.jpg'
import imm3 from '../img/merida_centro4.jpg'
import imm4 from '../img/merida_centro5.jpg'
import flecha1 from '../img/flecha_derecha.png'
import flecha2 from '../img/flecha_izquierda .png'



const Slide = () => {
    
    const imagenes = [imm1,imm2,imm3,imm4];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % imagenes.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + imagenes.length) % imagenes.length);
    };

    return (
        <div className="slider">
            <button onClick={prevSlide}><img src={flecha2} className='flechas' /></button>
            <img src={imagenes[currentIndex]} alt="Slide" className='imgenes' />
            <button onClick={nextSlide}><img src={flecha1} className='flechas'/></button>
        </div>
    );
};



export default Slide