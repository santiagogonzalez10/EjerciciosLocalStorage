const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.addEventListener("click", (evt) => {
  // Si tenemos texto ingresado en el input, lo guardamos en el localStorage
  if (inputText.value) localStorage.setItem("text", inputText.value);
  localStorage.getItem("text");
  if(inputText.value){
    alert(inputText.value);
  } else {
    alert("Por favor ingresa un texto");
  }
});

// Escribe el código a continuación

//Alerta
"Por favor ingresa un texto"
