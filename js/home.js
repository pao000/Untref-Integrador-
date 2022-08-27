const usuario = document.getElementById("TITLE")
let login = '';
let contador = + localStorage.getItem('contador') ?? 0;
const miUsuario = document.querySelector('.login');

usuario.addEventListener("click", identificarUsuario);

function identificarUsuario() {
    let nombre = prompt("Ingrese su nombre para identificarse");

    let usuarioNuevo = login += nombre;

    localStorage.setItem("nombre", JSON.stringify(usuario));
    let saludo = "Bienvenid@";
    alert(saludo + " " + nombre);

    if (usuarioNuevo) {
        localStorage.setItem('nombre', usuarioNuevo);
    }
}


