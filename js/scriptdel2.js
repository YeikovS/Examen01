var nom = document.getElementById("nombre");
var email = document.getElementById("correo");
var i=0;
function registrar(){
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");
    var fila = document.createElement("tr");
    //celda del item
    var celda_item = document.createElement("td");
    celda_item.innerHTML = i+1;
    //celda del nombre
    var celda_nombre = document.createElement("td");
    celda_nombre.innerHTML = nom.value;
    //celda del correo
    var celda_correo = document.createElement("td");
    celda_correo.innerHTML = correo.value;
    //celda accion editar
    var celda_editar = document.createElement("td");
    celda_editar.innerHTML="<a href='#' class='icono2'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>";
    //celda accion eliminar
    var celda_eliminar = document.createElement("td");
    celda_eliminar.innerHTML="<a href='#' class='icono1'><i class='fa fa-trash' aria-hidden='true'></i></a>";
    fila.appendChild(celda_item);
    fila.appendChild(celda_nombre);
    fila.appendChild(celda_correo);
    fila.appendChild(celda_editar);
    fila.appendChild(celda_eliminar);
    //agregar fila al tbody
    tbody.appendChild(fila);
    //agregar tbody a la tabla
    table.appendChild(tbody);
    limpiar();
    i+=1;
}
function limpiar(){
    nom.value="";
    email.value="";
    nom.focus();
}