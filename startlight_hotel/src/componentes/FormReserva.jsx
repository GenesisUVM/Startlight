import './FormReserva.css'
/* Formulario para reservar habitacionees */

function FormReservas(){
    return(
        <div className='contReserva'>        
            <form className="formReserva">
                <h3 className='tituloForm'>Formulario de reserva</h3>
               <label className='labelFecha' > Ingresa fecha de llegada <input type="date" className='fecha' min='28-10-2024' max='28-03-2025'/></label>
               <label className='labelFecha'> Ingresa fecha de salida <input type="date" className='fecha' min='28-10-2024' max='28-03-2025'/></label>
               <label className='labelPersona' >
                <input type="name" placeholder='Ingrese nombre' className='inputs' required  />
                <input type="email" placeholder='Ingrese correo electronico' className='inputs' required />
                <input type="number" placeholder='Ingrese cedula' className='inputs' required />
               </label>
               <label className='labelPersona' >
                <input type="name" placeholder='Ingrese nombre' className='inputs'  />
                <input type="number" placeholder='Ingrese cedula' className='inputs'  />
               </label>
               <select name='select' className='inputs'> 
                <option disabled selected value >Metodo de pago</option>
                <option value="1">Tarjeta credito</option>
                <option value="2">Tarjeta debito</option>
                <option value="3">Trasferencia bancaria</option>
                <option value="4">Binance</option>
                <option value="5">Zelle</option>
                <option value="6">Efectivo</option>
               </select>

               <button>Enviar Reserva</button>
            </form>
        </div>

    )
};

export default FormReservas