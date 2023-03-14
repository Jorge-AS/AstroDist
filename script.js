const button = document.getElementById("convertButton");
button.addEventListener("click", function () {
  const inputAnosLuz = document.getElementById("inputAnosLuz").value;
  const quilometros = inputAnosLuz * 9.461e12;
  document.getElementById("output").innerHTML = "Resultado: " + quilometros + " quilômetros";
  document.querySelector(".info").style.display = "block";
});