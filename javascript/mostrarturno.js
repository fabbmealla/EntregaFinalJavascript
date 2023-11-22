let reservas = recuperarReservas()

const sinReservas = document.querySelector("#sinReservas")
const turno = document.querySelector("#turno")
const botones = document.querySelectorAll(".cancelarTurno");

if (!reservas || reservas.length === 0) {
    const sinReservaDiv = document.createElement("div")
    sinReservaDiv.innerHTML =`<div class="sinReserva cuadros-dos">
        <p>Aún no posee reservas</p>
    </div>`
    sinReservas.appendChild(sinReservaDiv)
} else {
    const sinReservaDiv = document.querySelector(".sinReserva");
        if (sinReservaDiv) {
        sinReservaDiv.remove();}
    }

reservas.forEach((reserva, id) => {
    const reservaDiv = document.createElement("div")

    reservaDiv.innerHTML = `<div class="card cardEsp cardReserva">
     <div class="card-body">
      <h4 class="nombre">${reserva.nombre}</h4>
        <div class="mostrarRes">
        <p>DNI: ${reserva.dni}</p>  
        <p>Teléfono: ${reserva.telefono}</p>  
        <p>E-mail: ${reserva.email}</p>
        <p class="card-text"> Turno para: ${reserva.especialidad}</p>
        <p class="card-text"> Día de atención: ${reserva.dia} a las ${reserva.horario} hs</p>
        </div>
        <a href="#" class="btn btn-primary cancelarTurno" data-id="${id}">Cancelar turno</a>
        </div>
     </div>
    </div>`;

    turno.appendChild(reservaDiv)
});

botones.forEach((boton) => {
    boton.addEventListener("click", eliminarReserva);
    });







