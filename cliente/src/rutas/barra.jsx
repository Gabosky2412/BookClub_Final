import hogar from '../icons/hogar.png'
import libros from '../icons/libro-abierto.png'
import anadir from '../icons/anadir.png'
import user from '../icons/user2.png'
import out from '../icons/salida.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Barra(){
    const navigate = useNavigate();

    const salir = () => {
        Swal.fire({
            title: "Deseas Salir?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Salir"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Hasta Pronto!",
                text: "Se ha cerrado tu session",
                icon: "success"
              });
              navigate('/');
            }
          });
    }

    return(
        <div className="">
            {/* Barra lateral */}
            <nav className="bg-slate-950 p-4 w-24 fixed top-0 left-0 bottom-0 text-white flex flex-col justify-center items-center">
                <button className="block w-14 pb-2 pt-1 mb-4 text-center hover:bg-gray-700 hover:rounded-lg hover:border-1 mt-8">
                    <Link to={"/main"}>
                        <img src={hogar} className="mx-auto my-auto"/>
                    </Link>
                </button>
                <button className="block w-14 pb-2 pt-1 my-4 text-center hover:bg-gray-700 hover:rounded-lg hover:border-1">
                    <Link to={"/libros"}>
                        <img src={libros} className="mx-auto my-auto"/>
                    </Link>
                </button>
                <button className="block w-14 pb-2 pt-1 my-4 text-center hover:bg-gray-700 hover:rounded-lg hover:border-1">
                    <Link to={"/add_libro"}>
                        <img src={anadir} className="mx-auto my-auto"/>
                    </Link>
                </button>
                <button className="block w-14 pb-2 pt-1 my-4 text-center hover:bg-gray-700 hover:rounded-lg hover:border-1">
                    <Link to={"/perfil"}>
                        <img src={user} className="mx-auto my-auto"/>
                    </Link>
                </button>
                <button className="block w-14 pb-2 pt-1 my-4 text-center hover:bg-gray-700 hover:rounded-lg hover:border-1" onClick={salir}>
                    <img src={out} className="mx-auto my-auto"/>
                </button>
            </nav>
        </div>

    );
}