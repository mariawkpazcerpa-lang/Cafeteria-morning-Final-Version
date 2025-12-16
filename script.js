alert("script cargado");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let productos = []; 


fetch('productos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
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
        actualizarContador();
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
  if (!producto) return;


  const index = carrito.findIndex(p => p.id === producto.id);
  if (index !== -1) {
    carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
  } else {
    producto.cantidad = 1; 
    carrito.push(producto);
  }

 
  localStorage.setItem("carrito", JSON.stringify(carrito));


  cargarCarrito();
  actualizarContador();
}


document.getElementById("vaciarCarrito").addEventListener("click", () => {
  localStorage.removeItem("carrito");
  cargarCarrito();
  actualizarContador();
});


function cargarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const totalSpan = document.getElementById("totalCarrito");
  lista.innerHTML = ""; 

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let total = 0;

  
  carrito.forEach((p, index) => {  
    if (!p) return;

    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = p.nombre;

    const tdPrecio = document.createElement("td");
    tdPrecio.textContent = `$${p.precio}`;

    const tdCantidad = document.createElement("td");
    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.min = 1;
    inputCantidad.value = p.cantidad || 1;
    tdCantidad.appendChild(inputCantidad);

   
    inputCantidad.addEventListener("change", () => {
      const nuevaCantidad = Number(inputCantidad.value);
      if (nuevaCantidad < 1) {
        inputCantidad.value = 1;
        return;
      }
      carrito[index].cantidad = nuevaCantidad;
      localStorage.setItem("carrito", JSON.stringify(carrito)); 
      cargarCarrito();
      actualizarContador();
    });

   
    const tdEliminar = document.createElement("td");
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));  
      cargarCarrito(); 
      actualizarContador(); r
    });
    tdEliminar.appendChild(btnEliminar);

    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdCantidad);
    tr.appendChild(tdEliminar);

    lista.appendChild(tr);

    total += Number(p.precio) * (p.cantidad || 1);  
  });

  totalSpan.textContent = `$${total}`;  
}


function actualizarContador() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let totalProductos = 0;

  carrito.forEach(p => {
    totalProductos += p.cantidad || 1; 
  });

  document.getElementById("contador-carrito").textContent = totalProductos;  
}


window.onload = () => {
  cargarCarrito();  
  actualizarContador();  
};


const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function validarForm(form) {
    const nombre = form.querySelector('input[name="nombre"]');
    const email = form.querySelector('input[name="email"]');
    
    form.addEventListener("submit", (e) => {
        let errores = [];

        if (!nombre.value.trim() || !regexNombre.test(nombre.value.trim())) {
            errores.push("Nombre inválido. Solo se permiten letras y espacios.");
        }

      
        if (!email.value.trim() || !regexEmail.test(email.value.trim())) {
            errores.push("Email inválido.");
        }

        if (errores.length > 0) {
            e.preventDefault(); 
            alert(errores.join("\n"));
            return false;
        }
    });
}


document.querySelectorAll("form").forEach(form => validarForm(form));
