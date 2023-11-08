import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Recuperar() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [correo, setCorreo] = useState('');

    const recuperar = async () => {
        if (!usuario || !password || !correo) {
          Swal.fire({
            title: "<strong>Recuperacion Fallida</strong>",
            html: "Por favor completa todos los campos del formulario",
            icon: 'error',
          });
        } else {
          try {
            await axios.put("http://localhost:3001/update", { correo, nuevoUsuario: usuario, nuevaContraseña: password });
            Swal.fire({
              title: "<strong>Recuperacion Exitosa!</strong>",
              html: `<i>Tus datos se actualizaron correctamente!</i>`,
              icon: 'success',
              timer: 2000
            });
      
            // Reiniciar los campos del formulario
            setUsuario('');
            setPassword('');
            setCorreo('');
          } catch (error) {
            console.error("Error al actualizar la información:", error);
            Swal.fire({
              title: "<strong>Error de actualización</strong>",
              html: "Ocurrió un error al actualizar la información",
              icon: 'error',
            });
          }
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        recuperar();
    };

    return (
        <div>
            <div className='bg-gradient-to-t from-violet-800 to-blue-800 h-screen flex flex-col justify-center items-center'>
                <div className="w-full max-w-md">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} >
                        <div className='mb-8 font-semibold text-4xl text-center'>Recuperacion de cuenta</div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" > Correo Electronico </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Example@gmail.com" autoComplete="off"  value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" > Usuario </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Ingresa tu nuevo usuario" autoComplete="off" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" > Contraseña </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password" placeholder="Ingresa tu nueva contraseña" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="items-center justify-center text-center">
                            <div className='mb-2 '>
                                <button className="mx-3 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit" >
                                    Recuperar
                                </button>
                                <Link to='/'>
                                    <button className="mx-3 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Volver
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
