import { useState } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import user from '../icons/user.png'
import key from '../icons/password.png'
import eye from '../icons/eye.png'
import eyeOff from '../icons/eye.png';


export default function Login() {
    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate();
    const [, setNombreError] = useState('');
    const [, setContraseñaError] = useState('');
    const [mostrarContraseña, setMostrarContraseña] = useState(false); 

    const toggleMostrarContraseña = () => {
        setMostrarContraseña(!mostrarContraseña);
    };

    const login = (event) => {
        event.preventDefault(); 
    
        if (!nombre || !contraseña) {
            Swal.fire({
                title: '<strong>Campos requeridos vacíos</strong>',
                text: 'Por favor, complete todos los campos requeridos.',
                icon: 'warning',
                timer: 2000,
            });
            return;
        }
    
        Axios.post('http://localhost:3001/read', { nombre, contraseña })
        .then((response) => {
            if (response.status === 200) {
            // Usuario autenticado
            Swal.fire({
                title: '<strong>Hola de nuevo!</strong>',
                html: `<i>Es un gusto tenerte de vuelta <strong>${nombre}</strong>.</i>`,
                icon: 'success',
                timer: 2000
            });
            console.log("inicio de sesión correcto");
            navigate('/libros');
            } else {
            // Otro código de estado, en este caso 401
            Swal.fire({
                title: '<strong>Error de inicio de sesión</strong>',
                html: `<i>${response.data.message}</i>`,
                icon: 'error',
            });
            }
        })
        .catch((error) => {
            if (error.response.status === 401) {
            // Código de estado 401
            Swal.fire({
                title: '<strong>Error de inicio de sesión</strong>',
                html: `<i>${error.response.data.message}</i>`,
                icon: 'error',
            });
            } else {
            console.error('Error al iniciar sesión:', error);
            }
        });

    };
    
    const handleNombreChange = (event) => {
        setNombre(event.target.value);
        setNombreError(event.target.value ? '' : 'Campo requerido');
    };
    
    const handleContraseñaChange = (event) => {
        setContraseña(event.target.value);
        setContraseñaError(event.target.value ? '' : 'Campo requerido');
    };

    return (
        <div>
            <div className='bg-gradient-to-t from-violet-800 to-blue-800 h-screen flex flex-col justify-center items-center'>
                <div className="w-full max-w-md">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className='mb-8 font-semibold text-4xl text-center'>Iniciar Sesión</div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-lg text-center" > Usuario </label>
                            <div className="flex">
                                <img src={user} className="w-6 h-6 mt-2 mr-2"/>
                                <input className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="Usuario" autoComplete="off" value={nombre} required onChange={handleNombreChange} autoFocus/>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-lg text-center" > Contraseña </label>
                            <div className="flex">
                                <img src={key} className="w-6 h-6 mt-2 mr-2"/>
                                <input className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type={mostrarContraseña ? "text" : "password"} placeholder="******************" autoComplete="off" value={contraseña} required onChange={handleContraseñaChange} />
                                <img className="w-8 h-8 mt-1 ml-2 hover:cursor-pointer opacity-40 hover:opacity-100"
                                id="Eye" src={mostrarContraseña ? eyeOff : eye} onClick={toggleMostrarContraseña} />
                            </div>
                        </div>
                        <div className="items-center justify-center text-center">
                            <div className='mb-4 '>
                                <Link to='/libros'>
                                    <button className="mx-3 bg-blue-600 hover:bg-blue-800 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit" onClick={login} >
                                        Ingresar
                                    </button>
                                </Link>
                                <Link to="/registro">
                                    <button className="mx-3 bg-blue-600 hover:bg-blue-800 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit" >
                                        Registrar
                                    </button>
                                </Link>
                            </div>
                            <br />
                            <p className='font-bold text-base text-red-500 '><Link to='/recuperar' className="hover:text-red-700">¿Olvidaste tu contraseña?</Link></p>
                            <p className='font-bold text-base text-red-500 mt-2'><Link to='/eliminar' className="hover:text-red-700">¿Deseas eliminar tu cuenta?</Link></p>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}
