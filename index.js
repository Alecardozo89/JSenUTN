
const formulario = document.getElementById('todoForm');
const tabla      = document.getElementById('todoTabla');

//Escuchar los eventos del formulario
formulario.addEventListener("submit", handleFormulario);

let listado = [];

function handleFormulario(event) {
    event.preventDefault();
    const inputDescription = formulario.querySelector('#inputDescription');
    const nuevaTarea = {
        id: 1,
        description: inputDescription.value,
        completado: false
    }
    listado.push(nuevaTarea);
    renderTable()
}

function renderTable() {
    const tableBody = tabla.querySelector('tbody');
    const fila = document.createElement('tr');
    listado.forEach(tarea =>{
        const celda = document.createElement('td');
        celda.innerText = tarea.id;
        fila.appendChild(celda);

        const descriptionCell= document.createElement('td');
        descriptionCell.innerText = tarea.description;
        fila.appendChild(descriptionCell);

        const statusCell = document.createElement('td');
        statusCell.innerText = tarea.completado;
        fila.appendChild(statusCell);

        tableBody.appendChild(fila);
    })

}
