import Header from "./header";
import Barra from "./barra";

export default function Main() {
    
    return (
        <div className="fondo ml-24 " >
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
                    <li className="text-lg font-semibold text-center">Andres Camilo Gaviria - Lider / Creador</li>
                    <li className="text-lg font-semibold text-center">Juan David Galindo - subLider / Ayudante</li>
                    <li className="text-lg font-semibold text-center">Juan Carlos Silva - Ayudante</li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    );
    
}