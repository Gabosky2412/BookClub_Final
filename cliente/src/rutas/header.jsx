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
                    <Link to='/add_libro'><p className="mx-2 text-xl hover:text-blue-500 text-white font-bold py-2 px-4 rounded">Agg Libro</p></Link>
                    <Link to='/main'><p className="mx-2 text-xl hover:text-blue-500 text-white font-bold py-2 px-4 rounded">Informacion</p></Link>
                    <Link to='/perfil'><p className="mx-2 text-xl hover:text-blue-500 text-white font-bold py-2 px-4 rounded">Perfil</p></Link>
                    <Link to='/'><p className="mx-6 text-xl hover:text-red-500 text-white font-bold py-2 px-4 rounded" onClick={Salir}>Salir</p></Link>
                </nav>
            </nav>
        </div>
    );
}