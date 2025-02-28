function mostrarDetalles(id) {
  let detalles = document.getElementById(id);
  if (detalles.style.display === "none" || detalles.style.display === "") {
    detalles.style.display = "block";
  } else {
    detalles.style.display = "none";
  }
}

function mostrarInfo(num) {
  // Oculta ambas informaciones
  document.getElementById("info1").style.display = "none";
  document.getElementById("info2").style.display = "none";
  document.getElementById("info3").style.display = "none";
  document.getElementById("info4").style.display = "none";
  document.getElementById("info5").style.display = "none";
  document.getElementById("info6").style.display = "none";
  document.getElementById("info7").style.display = "none";
  document.getElementById("info8").style.display = "none";
  document.getElementById("info6").style.display = "none";
  document.getElementById("info9").style.display = "none";
  document.getElementById("info10").style.display = "none";
  document.getElementById("info11").style.display = "none";
  document.getElementById("info12").style.display = "none";
  document.getElementById("info13").style.display = "none";
  document.getElementById("info14").style.display = "none";
  document.getElementById("info15").style.display = "none";
  document.getElementById("info16").style.display = "none";

  // Muestra solo la información correspondiente
  document.getElementById("info" + num).style.display = "block";
}
