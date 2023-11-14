const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

app.use(cors());
app.use(express.json());

// Crear una instancia de Multer y configurar la ubicación de almacenamiento de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directorio donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre del archivo con marca de tiempo
  },
});

const upload = multer({ storage: storage });

//creando la conexion
const db = mysql.createConnection({
    //datos
    host: "localhost",
    user: "root",
    password: "",
    database: "usuarios_bc"
});


db.connect(err => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
    } else {
      console.log('Conexión a la base de datos exitosa');
    }
});

app.post("/create", async (req, res) => {
    const { nombre, correo, contraseña, edad } = req.body;

    // Verificar si el correo ya está en uso
    db.query('SELECT * FROM clientes WHERE correo = ?', [correo], async (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Ocurrió un error al verificar el correo");
        }

        if (result.length > 0) {
            // Si ya existe un registro con ese correo, enviar una respuesta de error
            return res.status(400).send("El correo electrónico ya está en uso");
        } else {
            // Si el correo no está en uso, insertar el nuevo registro
            try {
                const insertResult = await db.query('INSERT INTO clientes(nombre, correo, contraseña, edad) VALUES(?, ?, ?, ?)', [nombre, correo, contraseña, edad]);
                res.send("Usuario registrado con éxito");
            } catch (error) {
                console.error(error);
                res.status(500).send("Ocurrió un error al registrar el usuario");
            }
        }
    });
});

app.post("/read", (req, res) => {
    const nombre = req.body.nombre;
    const contraseña = req.body.contraseña;
  
    db.query('SELECT * FROM clientes WHERE nombre = ? AND contraseña = ?',[nombre, contraseña],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error en el servidor" });
        } else {
            if (result.length > 0) {
            // Usuario autenticado
            res.json({ message: "Inicio de sesión exitoso" });
        }else{
            // Usuario no registrado
            res.status(401).json({ message: "Verifica tus datos nuevamente" });
          }
        }
      }
    );
});

app.put("/update", async (req, res) => {
    const { correo, nuevoUsuario, nuevaContraseña } = req.body;
    
    if (!correo || !nuevoUsuario || !nuevaContraseña) {
        return res.status(400).json({ error: "Por favor completa todos los campos" });
    }

    const updateQuery = "UPDATE clientes SET nombre = ?, contraseña = ? WHERE correo = ?";
    db.query(updateQuery, [nuevoUsuario, nuevaContraseña, correo], (err, result) => {
        if (err) {
            console.error("Error al actualizar la información en la base de datos:", err);
            return res.status(500).json({ error: "Ocurrió un error al actualizar la información" });
        }

        console.log("Información actualizada correctamente");
        return res.status(200).json({ message: "Información actualizada correctamente" });
    });
});

app.delete("/delete/:correo", async (req, res) => {
    try {
        const correo = req.params.correo;

        // Realiza la lógica para verificar si el correo existe
        db.query('SELECT * FROM clientes WHERE correo = ?', [correo], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send("Ocurrió un error al verificar el correo");
            } else {
                if (result.length === 0) {
                    res.status(404).send("El correo no existe");
                } else {
                    // El correo existe, procede con la eliminación
                    db.query('DELETE FROM clientes WHERE correo = ?', [correo], (err, result) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send("Ocurrió un error al eliminar el usuario");
                        } else {
                            res.send("Usuario eliminado con éxito");
                        }
                    });
                }
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Ocurrió un error al eliminar el usuario");
    }
});



app.post("/createLibro",(req, res) => {
    const titulo = req.body.titulo
    const autor = req.body.autor
    const genero = req.body.genero
    const link = req.body.link

    db.query('INSERT INTO libros(titulo,autor,genero,link) VALUES(?,?,?,?)',[titulo,autor,genero,link],
    (err,result)=>{
        if(err){
            console.log(err + " error de creacion");
        }else{
            res.send(result);
        }
    }
    );
});

app.get("/libros",(req,res) => {
    db.query('SELECT * FROM libros',
    
        (err,result)=>{
            if(err){
                console.log(err + "error de leer");
            }else{
                res.send(result)
            }
        }
    );
})

app.put("/updateLibro",(req, res) => {
    const id = req.body.id
    const titulo = req.body.titulo
    const autor = req.body.autor
    const genero = req.body.genero
    const link = req.body.link

    db.query('UPDATE libros SET titulo = ?,autor = ?,genero = ?,link =? WHERE id = ?',[titulo,autor,genero,link,id],
    
    (err,result)=>{
        if(err){
            console.log(err + "error de actualizacion");
        }else{
            res.send(result)
        }
    }
    );
});

app.delete("/deleteLibro/:id",(req,res) => {
    const id = req.params.id

    db.query('DELETE FROM libros WHERE id = ?',id,
    
    (err,result)=>{
        if(err){
            console.log(err + "error de eliminacion");
        }else{
            res.send(result)
        }
    }
    );
})


app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
})