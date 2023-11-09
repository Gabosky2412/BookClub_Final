import Header from "./header";
import portada_nula from '../logos/PORTADA-NULA.png'
import Axios from "axios";
import { useState } from "react";

export default function Main(){
    const [librosList,setLibros] = useState([]);

    const getUsuarios = () => {

        Axios.get("http://localhost:3001/libros").then((response)=>{
            setLibros(response.data);
        });
    }

    getUsuarios();

    return(
        <div>
        <Header />
        <h1 className="font-bold text-5xl text-center mt-8 mb-14">LEE LOS MEJORES LIBROS</h1>

            {
                librosList.map((val)=>{ 

                    return <div key={val.id}>
                                <div className="mb-12 ">
                                    <div className="flex justify-start items-center border-4 border-slate-900 rounded-lg w-3/5 mx-auto shadow-2xl">
                                        <img src={portada_nula} alt='logo_principal' className="h-80 m-8 rounded-lg border-2 border-slate-900 shadow-2xl" />
                                        <div className="m-16">
                                            <h2 className="text-2xl mb-8"><strong>Título:</strong> {val.titulo}</h2>
                                            <h2 className="text-2xl mb-8"><strong>Autor:</strong> {val.autor}</h2>
                                            <h2 className="text-2xl"><strong>Género:</strong> {val.genero}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                })
            }
            
        </div>

    );
}