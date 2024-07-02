document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('form_contacto').addEventListener('submit', 
  validar)
  });
  function validar(e) {
    e.preventDefault();
    var msg_username = document.getElementById('msg_username');
    var msg_email = document.getElementById('msg_email');
    var msg_consulta = document.getElementById('msg_consulta');

    msg_username.innerText = '';
    msg_email.innerText = '';
    msg_consulta.innerText = '';

    if(this.querySelector('[name=username]').value == '') {
        msg_username.style.visibility = "visible"
        msg_username.innerText = 'Debes ingresar tu nombre y apellido';
        // return;
    }

    if(! validateEmail(this.querySelector('[name=email]').value)){
        msg_email.style.visibility = "visible"
        msg_email.innerText = 'Debes ingresar un email válido';
        // return;
    }

    if(this.querySelector('[name=consulta]').value == '') {
        msg_consulta.style.visibility = "visible"
        msg_consulta.innerText = 'Debes ingresar tu consulta';
        return;
    }

    this.submit();
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   }