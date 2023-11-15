import Header from "./header";
import { useState } from "react";
import Swal from "sweetalert2";
import Barra from "./barra";
import Axios from 'axios';

export default function Add_Libro() {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [link, setLink] = useState('');
    const [id, setId] = useState("");
    const [editar, setEditar] = useState(false);
    const [librosList,setLibros] = useState([]);

    const add = () => {

        if (!titulo || !autor || !genero) {
            Swal.fire({
                title: "<strong>Registro Fallido</strong>",
                html: "Por favor completa todos los campos faltantes",
                icon: 'error',
            });
        } else {
            Axios.post("http://localhost:3001/createLibro",{

                titulo:titulo,
                autor:autor,
                genero:genero,
                link:link,
            }).then(()=>{

                getUsuarios();
                limpiarCampos();
                Swal.fire({
                    title: "<strong>Libro registrado con exito!</strong>",
                    html: `<i>El libro <strong>${titulo}</strong> se ha guardado correctamente.</i>`,
                    icon: 'success',
                    timer: 2000
                });
            });
        }

    }

    const update = () => {

        Axios.put("http://localhost:3001/updateLibro",{

            id:id,
            titulo:titulo,
            autor:autor,
            genero:genero,
            link:link,
        }).then(()=>{
            getUsuarios();
            limpiarCampos();
            Swal.fire({
                title: "<strong>Libro actualizado con exito!</strong>",
                html: `<i>El libro <strong>${titulo}</strong> se ha actualizado correctamente.</i>`,
                icon: 'success',
                timer: 2000
            });
        });

    }

    const eliminar = (val) => {

        //le daremos la url que colocamos en la conexion de db para la eliminacion y concatenamos el id para enviarlo via url
        Axios.delete(`http://localhost:3001/deleteLibro/${val.id}`).then(()=>{
            //cuando termine el proceso nos indique que este ya finalizo
            getUsuarios();
            limpiarCampos();
            Swal.fire({ 
                title: "<strong>Libro eliminado con exito!</strong>",
                html: `<i>El libro <strong>${titulo}</strong> se ha eliminado correctamente.</i>`,
                icon: 'success',    
                timer: 2000
            });
        });

    }

    const limpiarCampos = () => {

        setTitulo("");
        setAutor("");
        setGenero("");
        setLink("");
        setEditar(false);
        
    }

    const editarLibro = (val) =>{
        setEditar(true);

        setTitulo(val.titulo);
        setAutor(val.autor);
        setGenero(val.genero);
        setLink(val.link);
        setId(val.id);
    }

    const getUsuarios = () => {

        Axios.get("http://localhost:3001/libros").then((response)=>{
            setLibros(response.data);
        });
    }

    getUsuarios();

    return(
        <div >
            <Barra />
            <div className="ml-24">
                <Header/>

            <div className="flex flex-col justify-center items-center text-center">
                <div className='my-8 font-bold text-5xl'>Añade un nuevo libro!</div>
                <div className="w-full max-w-md mt-12">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-bold mb-2" > Nombre: </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Nombre del libro" autoComplete="off" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-bold mb-2" > Autor: </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Autor(es) del libro" autoComplete="off" value={autor} onChange={(e) => setAutor(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-bold mb-2" > Genero: </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Genero principal del libro" autoComplete="off" value={genero} onChange={(e) => setGenero(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-bold mb-2" > Link: </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Link para visualizar el libro" autoComplete="off" value={link} onChange={(e) => setLink(e.target.value)} />
                    </div>


                    <div className="items-center justify-center text-center mt-10 font-2xl ">
                        {//condicional de que si editar = verdadero, suceda lo de abajo
                            editar === true?
                                <div>
                                    <button className="mx-3 bg-yellow-600 hover:bg-yellow-800 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={update}>Actualizar</button> 
                                    <button className="mx-3 bg-red-600 hover:bg-red-800 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={limpiarCampos}>Cancelar</button>
                                </div>
                            ://sino entonces muestra este boton
                                <button className="mx-3 bg-blue-600 hover:bg-blue-800 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={add}>Registrar</button>
                        }
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center">

                <div className="mt-16 mb-8 font-bold text-5xl">Libros Registrados</div>

                <div className="mx-4">
                    <table className="mb-16">
                        <thead className="">
                            <tr >
                                <th scope="col" className="px-12 py-6 text-xl">Titulo</th>
                                <th scope="col" className="px-12 py-6 text-xl">Autor</th>
                                <th scope="col" className="px-12 py-6 text-xl">Genero</th>
                                <th scope="col" className="px-12 py-6 text-xl">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                librosList.map((val)=>{ 

                                    return <tr key={val.id}>
                                                <td className="text-lg">{val.titulo}</td>
                                                <td className="text-lg">{val.autor}</td>
                                                <td className="text-lg">{val.genero}</td>
                                                <td>
                                                    <div className="btn-group" >
                                                        <button type="button" onClick={()=>{ editarLibro(val) } }
                                                            className="mr-1 text-lg ml-8 mb-2 bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                                            Editar
                                                        </button>
                                                        <button type="button" onClick={()=>{ eliminar(val) } }
                                                            className="mx-1 text-lg mb-2 bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                                            Eliminar
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            </div>


        </div>
    );
}