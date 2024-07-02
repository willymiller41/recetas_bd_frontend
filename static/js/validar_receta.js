document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('form_receta').addEventListener('submit', 
validar)
});
function validar(e) {
  e.preventDefault();
  var msg_nombre = document.getElementById('msg_nombre');
  var msg_pais_origen = document.getElementById('msg_pais_origen');
  var msg_imagen = document.getElementById('msg_imagen');
  var msg_tipo = document.getElementById('msg_tipo');
  var msg_tipo_alimentacion = document.getElementById('msg_tipo_alimentacion');
  var msg_tiempo_coccion = document.getElementById('msg_tiempo_coccion');
  var msg_destacada = document.getElementById('msg_destacada');
  var msg_ingredientes = document.getElementById('msg_ingredientes');
  var msg_preparacion = document.getElementById('msg_preparacion');

  msg_nombre.innerText = '';
  msg_pais_origen.innerText = '';
  msg_imagen.innerText = '';
  msg_tipo.innerText = '';
  msg_tipo_alimentacion.innerText = '';
  msg_tiempo_coccion.innerText = '';
  msg_destacada.innerText = '';
  msg_ingredientes.innerText = '';
  msg_preparacion.innerText = '';

  if(this.querySelector('[name=nombre]').value == '') {
    msg_nombre.style.visibility = "visible"
    msg_nombre.innerText = 'Debes ingresar el nombre de la receta';
    //return;
  }

  if(this.querySelector('[name=pais_origen]').value == '') {
    msg_pais_origen.style.visibility = "visible"
    msg_pais_origen.innerText = 'Debes ingresar el país de origen';
    //return;
  }

  if(this.querySelector('[name=imagen]').value == '') {
    msg_imagen.style.visibility = "visible"
    msg_imagen.innerText = 'Debes ingresar la imagen de la receta';
    //return;
  }

  if(this.querySelector('[name=tipo]').value == '') {
    msg_tipo.style.visibility = "visible"
    msg_tipo.innerText = 'Debes ingresar el tipo de plato';
    //return;
  }

  if(this.querySelector('[name=tipo_alimentacion]').value == '') {
    msg_tipo_alimentacion.style.visibility = "visible"
    msg_tipo_alimentacion.innerText = 'Debes ingresar el tipo de alimentación';
    //return;
  }

  if(this.querySelector('[name=tiempo_coccion]').value == '') {
    msg_tiempo_coccion.style.visibility = "visible"
    msg_tiempo_coccion.innerText = 'Debes ingresar el tiempo de cocción';
    //return;
  }

  if(this.querySelector('[name=destacada]').value == '') {
    msg_destacada.style.visibility = "visible"
    msg_destacada.innerText = 'Debes indicar si la receta se destaca en la portada o no';
    //return;
  }

  if(this.querySelector('[name=ingredientes]').value == '') {
    msg_ingredientes.style.visibility = "visible"
    msg_ingredientes.innerText = 'Debes indicar los ingredientes de la receta';
    //return;
  }

  if(this.querySelector('[name=preparacion]').value == '') {
    msg_preparacion.style.visibility = "visible"
    msg_preparacion.innerText = 'Debes indicar la preparación de la receta';
    return;
  }

  this.submit();
}