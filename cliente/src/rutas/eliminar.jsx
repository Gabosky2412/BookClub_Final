import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Axios from 'axios';
import mail from '../icons/mail.png'
import { useForm } from 'react-hook-form';

export default function Eliminar() {
    // const [correo, setCorreo] = useState('');

    // const eliminar = async () => {
    //     if (!correo) {
    //         Swal.fire({
    //             title: "<strong>Eliminación Fallida</strong>",
    //             html: "Por favor ingresa tu correo electrónico",
    //             icon: 'error',
    //         });
    //     } else {
    //         try {
    //             const response = await Axios.delete(`http://localhost:3001/delete/${correo}`);
    
    //             if (response.status === 200) {
    //                 Swal.fire({
    //                     title: "<strong>Eliminación Exitosa</strong>",
    //                     html: `<i>Tus datos se eliminaron correctamente</i>`,
    //                     icon: 'success',
    //                     timer: 2000,
    //                 });
    //                 setCorreo('');
    //             } else if (response.status === 404) {
    //                 Swal.fire({
    //                     title: "<strong>Eliminación Fallida</strong>",
    //                     html: "Por favor verifica tus datos",
    //                     icon: 'error',
    //                 });
    //             } else {
    //                 Swal.fire({
    //                     title: "<strong>Eliminación Fallida</strong>",
    //                     html: "Por favor verifica tus datos",
    //                     icon: 'error',
    //                 });
    //             }
    //         } catch (error) {
    //             console.error(error);
    //             Swal.fire({
    //                 title: "<strong>Eliminación Fallida</strong>",
    //                 html: "Por favor verifica tus datos",
    //                 icon: 'error',
    //             });
    //         }
    //     }
    // };

    const { register, reset, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);

        Axios.delete(`http://localhost:3001/delete/${data.correo}`)
        .then(() => {
            Swal.fire({
                title: "<strong>Eliminación Exitosa</strong>",
                html: `<i>Tus datos se eliminaron correctamente</i>`,
                icon: 'success',
                timer: 2000,
            });
            reset();
        }).catch((error) => {
            console.log(error);
            Swal.fire({
                title: "<strong>Eliminación Fallida</strong>",
                html: "Por favor verifica tus datos",
                icon: 'error',
            });
        });

    })

    return (
        <div>
            <div className='bg-gradient-to-t from-violet-800 to-blue-800 h-screen flex flex-col justify-center items-center'>
                <div className="w-full max-w-md">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit} >
                        <div className='mb-8 font-semibold text-4xl text-center'>Eliminación de cuenta</div>
                        
                        <div className="mb-4">
                            <label className="text-lg block text-gray-700 text-sm font-bold mb-2" > Correo Electrónico </label>
                            <div className='flex'>
                                <img src={mail} className="w-6 h-6 mt-2 mr-2"/>
                                <input className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Example@gmail.com" autoComplete="off" {...register("correo", { required: {value: true,message: 'El correo es requerido!'}, pattern: {value: /^[a-zA-Z0-9_.+-]+@gmail\.com$/,message: 'El correo debe ser `gmail.com`!'}})}/>
                                </div>
                                {errors.correo && <span className='text-red-500'>{errors.correo.message}</span>}
                            </div>

                        <div className="items-center justify-center text-center">
                            <div className='mb-2 '>
                                <button className="text-lg mx-3 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Eliminar
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
