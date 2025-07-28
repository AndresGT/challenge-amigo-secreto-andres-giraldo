let amigos = [];

function agregarAmigo() {
  let inputNombre = document.getElementById("amigo");
  if (inputNombre.value.trim() !== "") {
    amigos.push(inputNombre.value);
    inputNombre.value = "";
    mostrarAmigos();
  } else {
    alert("Por favor, ingrese un nombre");
  }
}

function mostrarAmigos() {
  let amigosList = document.getElementById("listaAmigos");
  amigosList.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    amigosList.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debe haber al menos dos amigos para sortear.");
    return;
  }
  if (amigos.length > 10) {
    alert("No se pueden sortear más de 10 amigos.");
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];
  const resultadoLista = document.getElementById("resultado");
  const li = document.createElement("li");
  li.textContent = "Tu amigo secreto es " + amigoSorteado;
  resultadoLista.appendChild(li);
}
