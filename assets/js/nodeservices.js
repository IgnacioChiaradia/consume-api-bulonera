const API_URL = `http://localhost:8080/register/`;

const register = (form) => {
      //let name = document.querySelector('#name');
      //console.log("NAMEEE",name.value);

      console.log("confirmacion_contrasenia",$("#password_confirm").val());
      let password_confirm = $("#password_confirm").val();

      fetch(API_URL,{
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          name: $("#name").val(),
          surname: $("#surname").val(),
          email: $("#email").val(), //recordar cambiar para probar (dato unico)
          password: $("#password").val(),
          direction: $("#direction").val(),
          telephone: $("#telephone").val() //recordar cambiar para probar (dato unico)
        }),
        method: 'POST'
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

//register();
