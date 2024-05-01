import pool from "../config/db.js";


const argumento = process.argv.slice(2);
const accion = argumento[0];  
const nombre = argumento[1];
let rut = argumento[2];
const curso = argumento[3];
const nivel = argumento[4];



//agregar estudiantes

const nuevoEstudiante = async (nombre, rut, curso, nivel) => {
    try {
        const consulta = {
            text: "insert into alumnos values ($1, $2, $3, $4)",
            values: [nombre, rut, curso, nivel],
        };
        const res = await pool.query(consulta);
        console.log(`El student fue agregado correctamente`);
        } catch (error) {
            console.log(error.code, error.message);
        }
    }


//Mostrar por rut
const rutEstudientes = async (rut) => {
  try {
    const consulta = {
      text: "select * from alumnos where rut = $1",
      values: [rut],
    };
    const res = await pool.query(consulta);
    console.log(`El estudiante con el rut ${rut} es: ${JSON.stringify(res.rows)}`);
  } catch (error) {
    console.log(error.code, error.message);
  }
};



//Mostrar Todos los Estudiantes
const verEstudiantes = async () => {
  try {
    const consulta = {
      text: "SELECT * FROM alumnos",
      rowMode: "array",
    };
    const res = await pool.query(consulta);
    console.log(
      `el resgistro actual de estudantes es ${JSON.stringify(res.rows)}`
    );
  } catch (error) {
    console.log(error.code, error.message);
  }
};


////actualizar data Estudiante {actualizar}
const actualizarEstudiante = async () => {
  try {
    const consulta = {
      text: "UPDATE alumnos SET nombre = $1, rut = $2, curso = $3, nivel = $4 WHERE rut = $2",
      values: [nombre, rut, curso, nivel],
    };
    const res = await pool.query(consulta);
  console.log(res.rows, "Datos de Estudiante Actualizado!");
  } catch (error) {
    console.log(error.code, error.message);
}
};


//eliminar registro de estudiante {eliminar}
const eliminarEstudiante = async (rut) => {
  try {
    const consulta = {
      text: "delete from alumnos where rut = $1",
      values: [rut],
    };
    const res = await pool.query(consulta);
    console.log(`${JSON.stringify(res.rows)} Estudiante con rut ${rut} eliminado correctamente!`);
  } catch (error) {
    console.log(error.code, error.message);
}
};





//nombrar acciones/fx's
if (accion === "agregar") {
  nuevoEstudiante(nombre, rut, curso, nivel);
} else if (accion === "verRut") {
  rut = argumento[1];
  rutEstudientes(rut);
} else if (accion === "verTodos") {
  verEstudiantes();
} else if (accion === "actualizar") {
  actualizarEstudiante(nombre, rut, curso, nivel);
} else if (accion === "eliminar") {
  rut = argumento[1];
  eliminarEstudiante(rut);
} else {
  console.log("Accion no valida!🔥");
}