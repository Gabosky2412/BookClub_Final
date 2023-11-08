import Registro from '../rutas/registro.jsx'
import Login from '../rutas/login.jsx'
import Main from './main.jsx';
import Perfil from './perfil.jsx';
import Recuperar from './recuperar.jsx';
import Add_Libro from './add_libro.jsx';
import Eliminar from './eliminar.jsx';
import { Routes, Route } from 'react-router-dom'


function ContCRUD() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route path='/' element={<Login/>}/>
          <Route path='registro' element={<Registro/>}/>
          <Route path='main' element={<Main/>}/>
          <Route path='perfil' element={<Perfil/>}/>
          <Route path='recuperar' element={<Recuperar/>}/>
          <Route path='add_libro' element={<Add_Libro/>}/>
          <Route path='eliminar' element={<Eliminar/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default ContCRUD;