import Header from "./header";
import { Link } from 'react-router-dom'
import perfil from '../logos/icono_perfil.png'
import volver from '../logos/icono_volver.png'
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
        <div>
            <Header/>

            <Link to='/main'>
                <div style={{ display: 'inline-block' }}>
                    <img src={volver} alt="icono grande perfil" />
                </div>
            </Link>

            <div id="" className=" flex w-full">

                    <div id="" className="w-1/2 flex aling-center items-center justify-center">
                        <img src={perfil} alt="icono grande perfil" />
                    </div>

                    <div id="info" className="flex flex-col items-center justify-center w-1/2">
                        {/* <h2 className="font-semibold text-3xl my-6 mr-12">NOMBRE <strong className="text-red-500">CLIENTE</strong></h2> */}
                        <h2 className="font-semibold text-3xl my-6 mr-12">USUARIO <strong className="text-red-500">CLIENTE</strong></h2>
                        
                        <div className="botones">
                            <Link to='/'><button id="button1" className="my-10 mr-12 text-xl bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                            onClick={Salir}>CERRAR SECCION</button></Link>
                        </div>
                        
                    </div>

            </div>
        </div>
    );
}