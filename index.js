const numarCurentElement = document.getElementById("numar-curent");
const butonPlusElement = document.getElementById("buton-plus");
const butonMinusElement = document.getElementById("buton-minus");

let numarCurent = 0;

function actualizeazaNumar() {
  numarCurentElement.textContent = numarCurent;
}

butonPlusElement.addEventListener("click", function() {
  numarCurent++;
  actualizeazaNumar();
});

butonMinusElement.addEventListener("click", function() {
  numarCurent--;
  actualizeazaNumar();
});

// Salvarea valorii in localStorage
function salveazaNumar() {
  localStorage.setItem("numarCurent", numarCurent);
}

// Incarcarea valorii din localStorage
function incarcaNumar() {
  const numarSalvat = localStorage.getItem("numarCurent");
  if (numarSalvat !== null) {
    numarCurent = parseInt(numarSalvat);
  }
}

incarcaNumar();
actualizeazaNumar();

// Salvare la refresh
window.addEventListener("beforeunload", salveazaNumar);