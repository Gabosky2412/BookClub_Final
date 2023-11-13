import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import key from '../icons/password.png'
import user from '../icons/user.png'
import mail from '../icons/mail.png'
import eye from '../icons/eye.png'
import eyeOff from '../icons/eye.png';
import { useForm } from 'react-hook-form';

export default function Recuperar() {
    const [mostrarContraseña, setMostrarContraseña] = useState(false); 

    const toggleMostrarContraseña = () => {
        setMostrarContraseña(!mostrarContraseña);
    };

    const { register, reset, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = handleSubmit((data) => {

      console.log(data);
      
      axios.put("http://localhost:3001/update", {
        correo: data.correo,
        nuevoUsuario: data.nombre,  // <- Aquí cambió de "data.usuario" a "data.nombre"
        nuevaContraseña: data.password
      }).then(() => {
        Swal.fire({
          title: "<strong>Recuperacion Exitosa!</strong>",
          html: `<i>Tus datos se actualizaron correctamente!</i>`,
          icon: 'success',
          timer: 2000
        });
        reset();
      }).catch((error) => {
        console.error("Error al actualizar datos:", error);
        Swal.fire({
          title: "<strong>Recuperacion Fallida!</strong>",
          html: `<i>Tus datos no se actualizaron correctamente!</i>`,
          icon: 'error',
          timer: 2000
        });
      });
    })

    return (
        <div>
            <div className='bg-gradient-to-t from-violet-800 to-blue-800 h-screen flex flex-col justify-center items-center'>
                <div className="w-full max-w-md">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit} >
                        <div className='mb-8 font-semibold text-4xl text-center'>Recuperacion de cuenta</div>
                        
                        <div className="mb-4">
                            <label className="text-lg block text-gray-700 text-sm font-bold mb-2 text-center" > Correo Electronico </label>
                            <div className='flex'>
                              <img src={mail} className="w-6 h-6 mt-2 mr-2"/>
                              <input className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                              type="email" placeholder="Example@gmail.com" autoComplete="off"  {...register("correo", { required: {value: true,message: 'El correo es requerido!'}, pattern: {value: /^[a-zA-Z0-9_.+-]+@gmail\.com$/,message: 'El correo debe ser gmail!'}})}/>
                              </div>
                              {errors.correo && <span className='text-red-500'>{errors.correo.message}</span>}
                          </div>
                        <div className="mb-6">
                            <label className="text-lg block text-gray-700 text-sm font-bold mb-2 text-center" > Usuario </label>
                            <div className='flex'>
                              <img src={user} className="w-6 h-6 mt-2 mr-2"/>
                              <input className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text" placeholder="Ingresa tu nuevo usuario" autoComplete="off" {...register("nombre", { required: {value: true, message: 'Nombre es requerido'},
                              maxLength: 15, minLength: 3 })} />
                          </div>
                              {errors.nombre?.type === "required" && <span className='text-red-500'>El nombre requerido!</span>}
                              {errors.nombre?.type === "maxLength" && <span className='text-red-500'>El nombre no debe ser mayor a 15 caracteres!</span>}
                              {errors.nombre?.type === "minLength" && <span className='text-red-500'>El nombre debe ser mayor a 3 caracteres!</span>}
                      </div>
                        <div className="mb-6">
                            <label className="text-lg block text-gray-700 text-sm font-bold mb-2 text-center" > Contraseña </label>
                            <div className='flex'>
                              <img src={key} className="w-6 h-6 mt-2 mr-2"/>
                              <input className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                              type={mostrarContraseña ? "text" : "password"} placeholder="Ingresa tu nueva contraseña" autoComplete="off" {...register("password", { required: {value: true, message: 'La contraseña es requerida'},
                              maxLength: 15, minLength: 6 })} />
                              <img className="w-8 h-8 mt-1 ml-2 hover:cursor-pointer opacity-40 hover:opacity-100"
                              id="Eye" src={mostrarContraseña ? eyeOff : eye} onClick={toggleMostrarContraseña} />
                          </div>
                              {errors.password?.type === "required" && <span className='text-red-500'>La contraseña es requerida!</span>}
                              {errors.password?.type === "maxLength" && <span className='text-red-500'>La contraseña no debe ser mayor a 15 caracteres!</span>}
                              {errors.password?.type === "minLength" && <span className='text-red-500'>La contraseña debe ser mayor a 6 caracteres!</span>}
                      </div>

                        <div className="items-center justify-center text-center">
                            <div className='mb-2 '>
                                <button className="text-lg mx-3 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit" >
                                    Recuperar
                                </button>
                                <Link to='/'>
                                    <button className="text-lg mx-3 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
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
