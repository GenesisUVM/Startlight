import ContTuristica from "../componentes/ContTuristica"
import Links from '../componentes/Links'
import NavBar from '../componentes/NavBar'
import BotonReservar from "../componentes/BotonReservar"





function InfTuristica(){

    return(
        <section>
            <NavBar />
            <Links />
            <ContTuristica />
            <ContTuristica />
            <ContTuristica />
            <BotonReservar />
        </section>
    )
};

export default InfTuristica