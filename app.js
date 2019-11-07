let BASE_URL =
  "https://raw.githubusercontent.com/anilrayamajhi/padControllers/master/sounds/sounds";

let dict = {
  56: true,
  57: true,
  48: true,
  45: true,
  117: true,
  105: true,
  111: true,
  112: true
};

let pads = document.querySelectorAll(".key-pad");
console.log(pads);
//Este for agrega la clase .pulso a cada elemento
for (let pad of pads) {
  pad.classList.add("pulso");
  //Aqui agrega la el evento "click" a cada elemento
  pad.addEventListener("click", onPress);
}

//En este punto del programa, primero se agrego la clase .pulso a cad elemento
//de la

function onPress(e) {
  e.target.classList.remove("pulso");
  e.target.classList.add("push");
  setTimeout(() => {
    e.target.classList.remove("push");
    e.target.classList.add("pulso");
  }, 300);
  //find code
  let id = e.target.id;

  let keyCode = id.split("-")[1];
  console.log(keyCode);
  var audio = new Audio(`${BASE_URL}/${keyCode}.wav`);
  audio.play();
}
function onPressNode(node) {
  node.classList.toggle("pulso");
  node.classList.toggle("push");
  setTimeout(() => {
    node.classList.toggle("pulso");
    node.classList.toggle("push");
  }, 300);
  //find code
  let id = node.id;

  let keyCode = id.split("-")[1];
  console.log(keyCode);
  var audio = new Audio(`${BASE_URL}/${keyCode}.wav`);
  audio.play();
}

//TAREA: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Primero asegurate de ver todas las clases de esta semana
// Después lee la documentación para el evento "keypress"
// Intenta crear el event listener en document para el evento keypress
addEventListener("keypress", soundFromKeyboard);
// Crea una función para que sirva de callback al observado anterior
function soundFromKeyboard(e) {
  // obtengo codigo de tecla
  let node = e.keyCode;
  //concateno el evento con el ID del elemento
  let newNode = document.getElementById(`pad-${node}`);
  console.log(`Valor de e.target ${newNode}`);
  // Paso por parametro el nodo a la function indicada
  onPressNode(newNode);
}
// Por último dentro de esta nueva función invoca a la función onPressNode

// Recuerda que onPressNode necesita un nodo para funcionar, ahí radica el reto, con el dato keyCode debes seleccionar el nodo correcto del DOM para entregárselo a onPressNode.

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// AQUI VA TU OBSERVADOR keypress

// AQUI VA TU FUNCION CALLBACK
