function mostrarClima() {
  const dia = document.getElementById("dia").value;
  const resultado = document.getElementById("resultado-clima");
  let texto = "";
  let color = "";

  switch (dia) {
    case "lunes":
      texto = "Lunes: Soleado ☀️, 26°C, humedad 40%.";
      color = "lightyellow";
      break;
    case "martes":
      texto = "Martes: Nublado ⛅, 24°C, humedad 55%.";
      color = "lightgray";
      break;
    case "miercoles":
      texto = "Miércoles: Lluvia ligera 🌧️, 22°C, humedad 70%.";
      color = "lightblue";
      break;
    case "jueves":
      texto = "Jueves: Nublado ☁️, 23°C, humedad 65%.";
      color = "gainsboro";
      break;
    case "viernes":
      texto = "Viernes: Tormenta eléctrica 🌩️, 20°C, humedad 85%.";
      color = "lightslategray";
      break;
  }

  resultado.textContent = texto;
  resultado.style.backgroundColor = color;
  resultado.focus();
  resultado.classList.add("activo");

  setTimeout(() => {
    resultado.classList.remove("activo");
    resultado.style.backgroundColor = "";
  }, 4000);
}

function reiniciarClima() {
  document.getElementById("dia").value = "lunes";
  mostrarClima();
}

function simularCiudad() {
  const ciudad = document.getElementById("ciudadTexto").value.trim();
  const resultado = document.getElementById("resultado-clima");

  if (ciudad === "") {
    resultado.textContent = "Por favor, escribe una ciudad.";
    resultado.style.backgroundColor = "mistyrose";
  } else {
    resultado.textContent = `Clima para ${ciudad}: Soleado, 25°C, humedad 50%.`;
    resultado.style.backgroundColor = "lightyellow";
  }

  resultado.focus();
  resultado.classList.add("activo");

  setTimeout(() => {
    resultado.classList.remove("activo");
    resultado.style.backgroundColor = "";
  }, 4000);
}
