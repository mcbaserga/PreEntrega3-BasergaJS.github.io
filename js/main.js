const tienda = document.getElementById("tienda")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

fetch("./js/productos.json")
    .then((response) => response.json())
    .then((productos) => {
        productos.forEach((product)=> {
        let fichas = document.createElement("div");
        fichas.className = "cardsProductos"
        fichas.innerHTML = `
        <div class="card">
        <img src="${product.img}" class="card-img-top" style="height: 100%">
        <div class="card-body text-center">
            <h5 class="card-title">${product.nombre} - ${product.peso} g</h5>
            <p class="card-text">${product.notas}</p>
            <p class="card-text">$${product.precio}</p>
        </div>
        </div>
        `;

        tienda.append(fichas);

        let comprar = document.createElement("div")
        comprar.className = "divBtn"
        comprar.innerHTML = `
        <btn class= "btn" id="btn" style="background-color: #F21D56; color:white;">Lo quiero</btn>
        `;
        fichas.append(comprar)


        comprar.addEventListener("click", () => {
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)
            
            if(repeat){
                carrito.map((prod) => {
                    if(prod.id === prod.id){
                        prod.cantidad++
                    }
                })
        } else {
            carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        })
            carritoCounter();
            saveLocal();
        }
        })
    })
})

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}