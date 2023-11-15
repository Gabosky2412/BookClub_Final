import Header from "./header";
import { Link } from 'react-router-dom'
import perfil from '../logos/icono_perfil.png'
import Barra from "./barra";
import Swal from "sweetalert2";

export default function Perfil() {

    const Salir = () => {
        Swal.fire({
            title: "<strong>Cerando Seccion!</strong>",
            html: `<i>Esperamos verte pronto!</i>`,
            icon: 'warning',
            timer: 2000
        });
    }

    return(
        <div className="">
            <Barra/>
            <div className="ml-24">
                <Header/>
            </div>

            <div className="flex flex-col md:flex-row ml-40 mt-20">

                <div id="imagen" className="md:w-1/2 flex items-center justify-center">
                    <img src={perfil} alt="icono grande perfil" />
                </div>

                <div id="info" className="flex flex-col items-center justify-center md:w-1/2   my-28">
                    <h2 className="font-semibold text-3xl my-4">USUARIO <strong className="text-red-500">CLIENTE</strong></h2>

                    <div className="">
                        <Link to='/'>
                            <button id="button1" className="text-xl bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mt-6"
                                onClick={Salir}>CERRAR SESIÓN
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}