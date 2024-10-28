import './ContTuristica.css'



function ContTuristica( img,img1,img2){
    /*let nombre = arrayLugar[0]
    let descripcion = arrayLugar[1]
    let img1 = arrayLugar[2]
    let img2 = arrayLugar[3]
    let img3 = arrayLugar[4]*/
    return(
        <div className="contenedorInfo">
            <h2>Centro Historico de la Ciudad</h2>
            <p>Nuestro hotel queda en medio del casco historico de la ciudad donde puedes recorrer los edificios de estilo renacentista</p>
            <div className='imgContainer'>
                <img src={img}  alt="Imagen del centro historico" className='imgTuristicas'/>
                <img src={img1} alt="Imagen del centro historico" className='imgTuristicas'/>
                <img src={img2} alt="Imagen del centro historico" className='imgTuristicas'/>
            </div>
            <a href="#" className='enlaceGuia'>Guia Turistica</a>

        </div>
    )
};

export default ContTuristica