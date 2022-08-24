buttonText.addEventListener("click", (evt) => {
    // Si tenemos texto ingresado en el input, lo guardamos en el localStorage
    if (inputText.value) localStorage.setItem("text", inputText.value);
    localStorage.getItem("text");
  });