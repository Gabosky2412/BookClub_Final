import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Axios from 'axios';

export default function Registro() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');

    const registro = () => {
        if (!usuario || !password || !correo || !edad) {
            Swal.fire({
                title: "<strong>Registro Fallido</strong>",
                html: "Por favor completa todos los campos del formulario",
                icon: 'error',
            });
        } else {
            Axios.post('http://localhost:3001/create', {
                nombre: usuario,
                correo: correo,
                contraseña: password,
                edad: edad,
            })
            .then((response) => {
                if (response.status === 200) {
                    Swal.fire({
                        title: "<strong>Registro Exitoso!</strong>",
                        html: `<i>Bienvenido a la familia!</i>`,
                        icon: 'success',
                        timer: 2000
                    });
                    console.log('registro exitoso');
                }
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    // Código de estado 400
                    Swal.fire({
                        title: '<strong>Error de registro</strong>',
                        html: `<i>${error.response.data}</i>`,
                        icon: 'error',
                    });
                } else {
                    console.error('Error al registrar usuario:', error);
                }
            });
            
            // Reiniciar los campos del formulario
            setUsuario('');
            setPassword('');
            setCorreo('');
            setEdad('');
        }
    };    

    const handleSubmit = (e) => {
        e.preventDefault();
        registro();
    };

    return (
        <div>
            <div className='bg-gradient-to-t from-violet-800 to-blue-800 h-screen flex flex-col justify-center items-center'>
                <div className="w-full max-w-md">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} >
                        <div className='mb-8 font-semibold text-4xl text-center'>Registro</div>
                        <div className="mb-4">
                            <label className="text-lg block text-gray-700 text-sm font-bold mb-2" > Usuario </label>
                            <input className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Usuario" autoComplete="off" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        </div>
                        <div className="mb-6">
                            <label className="text-lg block text-gray-700 text-sm font-bold mb-2" > Contraseña </label>
                            <input className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password" placeholder="******************" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-6">
                            <label className="text-lg block text-gray-700 text-sm font-bold mb-2" > Correo Electronico </label>
                            <input className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Example@gmail.com" autoComplete="off"  value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        </div>
                        <div className="mb-6">
                            <label className="text-lg block text-gray-700 text-sm font-bold mb-2" > Edad </label>
                            <input className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="number" placeholder="0" autoComplete="off" value={edad} onChange={(e) => setEdad(e.target.value)} />
                        </div>

                        <div className="items-center justify-center text-center">
                            <div className='mb-2 '>
                                <button className="mx-3 text-lg bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit" >
                                    Registro
                                </button>
                                <Link to='/'>
                                    <button className="mx-3 text-lg bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Ingresar
                                    </button>
                                </Link>
                            </div>
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
