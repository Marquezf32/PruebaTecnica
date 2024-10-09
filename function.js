//Menu desplegable 

document.addEventListener('DOMContentLoaded', function() {
    const botonMenu = document.getElementById('boton-menu');
    const contenido = document.getElementById('contenido');

    botonMenu.addEventListener('click', function() {
        if (botonMenu.value === '0') {
            contenido.style.display = 'block';
            botonMenu.value = '1';
        } else {
            contenido.style.display = 'none';
            botonMenu.value = '0';
        }
    })});



