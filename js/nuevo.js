const login = document.getElementById('TITLE')
const visitas = document.getElementById('visitantes')
let usuario = ""
let visitantes = 0


addEventListener('DOMContentLoaded', contador);

function contador() {
    visitantes = localStorage.getItem('visitantes')
    visitantes++
    localStorage.setItem('visitantes', visitantes)
    visitas.innerHTML = `Visitas: <b>${visitantes}</b>`
}

login.addEventListener('click', identificarUsuario);

function identificarUsuario() {

    usuario = prompt('Ingrese su nombre de usuario: ')
    if (usuario == 0) {
        // alert("Ingrese un nombre válido")
        usuario = prompt('No es un nombre válido, ingréselo nuevamente: ')
        login.innerHTML = `Bienvenid@ ${usuario}`
    } else {
        localStorage.setItem('usuario', usuario)
        login.innerHTML = `Bienvenid@ ${usuario}`
    }
}



