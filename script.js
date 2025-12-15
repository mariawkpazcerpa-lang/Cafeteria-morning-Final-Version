alert("script cargado");
let carrito = []; 
let productos = []; 


fetch('productos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then( data => {
        productos = data;
        const contenedor = document.getElementById("ListaProductos");

        data.forEach(producto => {
           
            const productoCard = ` 
            <li>
            <div class="producto-card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>${producto.precio}</p>
                <button class="btn-agregar-carrito" data-id="${producto.id}">Añadir al carrito</button>
            </div>
            </li>
            `;
            contenedor.innerHTML += productoCard;

        });
        
       document.querySelectorAll(".btn-agregar-carrito").forEach(btn => {
    btn.addEventListener("click", () => {
      agregarAlCarrito(btn.dataset.id);
      alert("Producto agregado al carrito");
        });
    });  
    })
    .catch(error => {
        console.error('Error en la comunicación de la API:', error);
    });

document.getElementById("botonCarrito").addEventListener("click", () => {
  document.getElementById("carrito").classList.toggle("oculto");
});

function agregarAlCarrito(id) {
  const producto = productos.find(p => Number(p.id) === Number(id));

   if (!producto) {
    console.error("Producto no encontrado", id);
    return;
  }

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);

  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarrito();
}

function cargarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const totalSpan = document.getElementById("totalCarrito")
  lista.innerHTML = "";

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let total = 0;

  carrito.forEach(p => {
    if(!p) return;

    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = p.nombre;
    const tdPrecio = document.createElement("td");
    tdPrecio.textContent = `$${p.precio}`;

    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio)
    lista.appendChild(tr);

    total += Number(p.precio)
  });

  totalSpan.textContent = `$${total}`;
}

document.getElementById("vaciarCarrito").addEventListener("click", () => {
  localStorage.removeItem("carrito");
  cargarCarrito();
})


