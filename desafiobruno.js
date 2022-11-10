document.getElementById("formObj").addEventListener("submit", agregarProducto);

function agregarProducto(e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let color = document.getElementById("color").value;
  let peso = document.getElementById("peso").value;
  let cantidad = document.getElementById("cantidad").value;

  let producto = {
    nombre,
    color,
    peso,
  };

  let carrito = [];

  if (cantidad > 1) {
    for (let i = 0; i < cantidad; i++) {
      carrito.push(producto);
    }
  } else {
    carrito.push(producto);
  }

  for (let i = 0; i < carrito.length; i++) {
    let div = document.createElement("div");
    div.classList.add("productos");
    div.innerHTML = `<span>Nombre </span>  ${nombre} <br/> <span>Color </span> ${color} <br/> <span>Peso </span> ${peso}`;
    document.querySelector("#lista").appendChild(div);
  }
}
