import Header from "./header";
import Barra from "./barra";
import andres from '../imgs/andres.jpg'
import github from '../icons/github.png'
import insta from '../icons/instagram.png'

export default function Main() {
    
    return (
        <div className="fondo " >
            <Header />
            <Barra />
            <div className="font-bold px-64 text-black">
            <ul className="my-32 text-2xl">
                <li>
                    <h2 className="text-5xl font-semibold text-center mb-12">¿Qué es Book Club?</h2>
                    <p className="text-lg">
                    Book Club es una página de libros, pensada originalmente para poder descargar algunos libros que se añadan de cualquier
                    persona, apoyando los nuevos libros, no tan conocidos, compartidos, y mucho más!; para que así las personas tal vez se
                    puedan descubrir nuevos gustos y libros, dicho esto la página será vigilada por administradores para que el contenido sea
                    para cualquier persona, con un libro real y que cumpla con ciertos requisitos.
                    </p>
                </li>
                </ul>
                <ul className="my-32 text-2xl">
                <li>
                    <h2 className="text-5xl font-semibold text-center mb-12">¿Cómo se creó Book Club?</h2>
                    <p className="text-lg">
                    Lo que usamos para crear esta página en primer lugar fue Vite, que es principalmente un paquetador que en resumidas
                    cuentas hace lo mismo que react pero usa menos paquetes o los de mas prioridad para que el proyecto sea menos pesado y
                    mas eficiente, desde Vite se creo entonces el proyecto usando React y JavaScript que es también conocido ambos como JSX
                    y para estilos usamos TailWind, algo similar a BootStrap; y para el Back-End utilizamos MySQL para almacenar el CRUD de
                    clientes y libros añadidos, base de datos no relacional y mundialmente conocida, y Express para manejar sus rutas. Con
                    librerías extra como Axios, SweetAlert2 y Cors.
                    </p>
                </li>
                </ul>
                <ul className="my-32 text-2xl">
                <li>
                    <h2 className="text-5xl font-semibold text-center mb-12">Participantes</h2>
                    <ul>

                    <div className="w-96 mx-auto rounded-lg shadow-xl border-4 border-slate-900 mb-16">
                        <div className="text-center">
                            <img src={andres} alt="Profile Photo" className="rounded-lg w-60 h-60 mt-4 mx-auto shadow-xl" />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2 text-center">Andres Camilo Gaviria</h2>
                            <p className="text-sm text-gray-600 mb-4 text-left">Lider / Creador</p>
                            <p className="text-sm text-gray-600 text-left mb-4">
                                Creador y dueño de este proyecto, Programador Front-End y Back-End Junior de 7mo semestre de Ingenieria de sistemas
                                en la uniersidad Santiago de Cali, Gymrat, guitarrista y adicto a los carros
                            </p>
                            <div className="text-lg">
                                <div className="flex items-center">
                                    <img src={github} className="w-4 h-4" />
                                    <a href="https://github.com/Gabosky2412" target="_blank" rel="noopener noreferrer" className="ml-2">GitHub</a>
                                </div>
                                <div className="flex items-center">
                                    <img src={insta} className="w-4 h-4" />
                                    <a href="https://www.instagram.com/camilo.gabo/" target="_blank" rel="noopener noreferrer" className="ml-2">Instagram</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-96 mx-auto rounded-lg overflow-hidden shadow-xl text-center border-4 border-slate-900 mb-16">
                        <div className=" h-36 overflow-hidden text-center aling-center">
                            <img src="" alt="Profile Photo" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">Juan David Galindo</h2>
                            <p className="text-sm text-gray-600 mb-4 text-left">SubLider / Ayudante</p>
                            <p className="text-sm text-gray-600 text-left">
                                Creador y dueño de este proyecto, trabajando arduamente en el día a día y así poder tener la mejor entrega posible
                                con herramientas gratis y usando VITE, React, JSX, Express, MySQL, etc.
                            </p>
                        </div>
                    </div>

                    <div className="w-96 mx-auto rounded-lg overflow-hidden shadow-xl text-center border-4 border-slate-900 mb-16">
                        <div className=" h-36 overflow-hidden text-center aling-center">
                            <img src="" alt="Profile Photo" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">Juan Carlos Silva</h2>
                            <p className="text-sm text-gray-600 mb-4 text-left">SubLider / Ayudante</p>
                            <p className="text-sm text-gray-600 text-left">
                                Creador y dueño de este proyecto, trabajando arduamente en el día a día y así poder tener la mejor entrega posible
                                con herramientas gratis y usando VITE, React, JSX, Express, MySQL, etc.
                            </p>
                        </div>
                    </div>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    );
    
}