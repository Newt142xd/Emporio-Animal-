function mostrarDetalles(id) {
  let detalles = document.getElementById(id);
  if (detalles.style.display === "none" || detalles.style.display === "") {
    detalles.style.display = "block";
  } else {
    detalles.style.display = "none";
  }
}
