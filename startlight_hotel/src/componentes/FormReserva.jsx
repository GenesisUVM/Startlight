import './FormReserva.css'
/* Formulario para reservar habitacionees */

function FormReservas(){
    return(
        <div className='contReserva'>        
            <form className="formReserva">
                <h3 className='tituloForm'>Formulario de reserva</h3>
                <label htmlFor="fechaIngreso"> Ingresa fecha de llegada <input type="date" id='fechaIngreso' min='28-10-2024' max='28-03-2025'/></label>
            </form>
        </div>

    )
};

export default FormReservas