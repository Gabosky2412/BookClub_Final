import { Link } from "react-router-dom";
import logo from '../logos/logo_header.png';
import Swal from "sweetalert2";

export default function Header() {

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
            <nav className="top-0 left-0 h-20 flex items-center justify-between w-full bg-slate-950 box-border text-white">
                <Link to='/main'>
                        <img src={logo} alt='logo_principal ' className="w-3/4 h-3/4 ml-6"/>
                </Link>
                <nav className="flex items-center justify-center">
                    <Link to='/add_libro'><button type="button" className="mr-8 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Agg Libro</button></Link>
                    <Link to='/perfil'><button type="button" className="mr-8 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Perfil</button></Link>
                    <Link to='/'><button type="button" className="mr-12 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={Salir}>Salir</button></Link>
                </nav>
            </nav>
        </div>
    );
}