// Importamos express
const express = require("express");
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Servidor levantado y escuchando por el puerto: " + PORT);
});

// ruta /agregar debe recibir un body con la informacion a ser agregada.
app.post("/agregar", async(req, res) => {
    if (condition) {
        
    }
try {
    
} catch (error) {
    
}
});

// ruta /todos
app.get("/todos", async(req, res) => {
    if (condition) {
        
    }
try {
    
} catch (error) {
    
}
});

// ruta /consulta recibir parametro (PK) de la tabla
app.get("/consultar", async(req, res) => {
    if (condition) {
        
    }
try {
    
} catch (error) {
    
}
});

// ruta /eliminar recibir parametro (PK) de la tabla
app.delete("/eliminar", async(req, res) => {
    if (condition) {
        
    }
try {
    
} catch (error) {
    
}
});

// ruta /modificar recibir por query string toda la informacion requerida
app.post("/modificar", async(req, res) => {
    if (condition) {
        
    }
try {
    
} catch (error) {
    
}
});