const API_URL = `192.168.1.37:8080/register/`;

const register = () => {
      fetch(API_URL,{
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          name: "David",
          surname: "Navarro",
          email: "vidasda95el@hotmail.com",
          password: "123",
          direction: "Padrae Duttso 1988",
          telephone: "32564"
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
