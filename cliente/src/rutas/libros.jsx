import Header from "./header";
import Barra from './barra';
import Slider from "./img_slider";
import portada_nula from '../logos/PORTADA-NULA.png'
import Axios from "axios";
import { useState, useEffect  } from "react";

export default function Main(){
    const [librosList, setLibros] = useState([]);

    useEffect(() => {
        const getUsuarios = () => {
            Axios.get("http://localhost:3001/libros").then((response)=>{
                setLibros(response.data);
            });
        };

        getUsuarios();
    }, []);

    return(
        <div >
        <Barra />
        <div className="ml-24">
            <Header/>
            <h1 className="font-bold text-5xl text-center mt-8 mb-14 ">LEE LOS MEJORES LIBROS</h1>

            
            <div className="flex justify-center mb-8 "> 
                <Slider />
            </div> 
                
                {
                    librosList.map((val)=>{ 

                        return <div key={val.id}>
                                    <div className="py-8 ">
                                        <div className="flex flex-col lg:flex-row justify-start items-center border-4 border-slate-900 rounded-lg w-3/5 mx-auto shadow-2xl bg-white">
                                            <img src={portada_nula} alt='logo_principal' className="h-64 m-16 rounded-lg border-2 border-slate-900 shadow-2xl lg:w-58 lg:text-center text-center" />
                                            <div className="m-8 lg:m-16">
                                                <h2 className="text-2xl mb-4 lg:mb-8"><strong>Título:</strong> {val.titulo}</h2>
                                                <h2 className="text-2xl mb-4 lg:mb-8"><strong>Autor:</strong> {val.autor}</h2>
                                                <h2 className="text-2xl mb-4 lg:mb-8"><strong>Género:</strong> {val.genero}</h2>
                                                <strong><a className="text-2xl text-red-600 mb-4 lg:mb-8" href={val.link} target="_blank" rel="noopener noreferrer"> Descargar</a></strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    })
                }
        </div>
            
        </div>

    );
}