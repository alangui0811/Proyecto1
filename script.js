function agregarAlumno() {
    var nombre = document.getElementById("nombreAlumno").value;
    var descripcion = document.getElementById("descripcionAlumno").value;

    if (nombre.trim() === "" || descripcion.trim() === "") {
      alert(
        "Por favor, ingresa tanto el nombre del alumno como la descripción."
      );
      return;
    }

    var tabla = document.getElementById("tablaAlumnos");

    var fila = tabla.insertRow(-1);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);

    celda1.innerHTML = nombre;
    celda2.innerHTML = `<div class="estado-container" onclick="mostrarEstadoMenu(event, this)">
            <select onclick="cambiarEstado(this)">
                <option value="x">x</option>
                <option value="!">!</option>
                <option value="ok">ok</option>
            </select>
        </div>`;
    celda3.innerHTML = descripcion;
    celda4.innerHTML =
      '<button onclick="editarAlumno(this)">Editar</button> <button onclick="eliminarAlumno(this)">Eliminar</button> <button onclick="finalizarAlumno(this)">Finalizar</button>';

    document.getElementById("nombreAlumno").value = "";
    document.getElementById("descripcionAlumno").value = "";
  }

  function editarAlumno(button) {

    var fila = button.parentNode.parentNode;
    var nombre = fila.cells[0].innerHTML;
    var nuevaDescripcion = prompt(
      "Ingresa la nueva descripción para " + nombre + ":"
    );

    if (nuevaDescripcion !== null) {
      fila.cells[2].innerHTML = nuevaDescripcion;
    }
  }

  function eliminarAlumno(button) {
    var fila = button.parentNode.parentNode;
    fila.remove();
  }

  function finalizarAlumno(button) {
    var fila = button.parentNode.parentNode;
    var nombre = fila.cells[0].innerHTML;
    var descripcion = fila.cells[2].innerHTML;

    var estado = fila.cells[1].querySelector("select").value;

    if (estado === "ok") {
      var tablaFinalizados = document.getElementById("tablaFinalizados");
      var filaFinalizados = tablaFinalizados.insertRow(-1);
      var celda1 = filaFinalizados.insertCell(0);
      var celda2 = filaFinalizados.insertCell(1);
      var celda3 = filaFinalizados.insertCell(2);

      celda1.innerHTML = nombre;
      celda2.innerHTML = descripcion;
      celda3.innerHTML ='<button onclick="eliminarFinalizado(this)">Eliminar</button>';

      fila.remove();
    } else {
      alert("Completa el pendiente antes de finalizar.");
    }
  }

  function mostrarEstadoMenu(event, container) {
    var estadoMenu = container.querySelector(".estado-menu");
    estadoMenu.style.display =
      estadoMenu.style.display === "block" ? "none" : "block";
    event.stopPropagation();
  }

  function cambiarEstado(select) {
    var estadoContainer = select.parentNode;
    estadoContainer.querySelector(".estado-menu").style.display = "none";
    event.stopPropagation();
  }

  function eliminarFinalizado(button) {
    var filaFinalizado = button.parentNode.parentNode;
    filaFinalizado.remove();
  }