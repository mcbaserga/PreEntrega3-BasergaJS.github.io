const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "cardsProductos"
    content.innerHTML = `
    <div class="card">
    <img src="${product.img}" class="card-img-top" style="height: 100%">
    <div class="card-body text-center">
        <h5 class="card-title">${product.nombre} - ${product.peso} g</h5>
        <p class="card-text">${product.notas}</p>
        <p class="card-text">${product.precio} $</p>
    </div>
    </div>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerHTML = `
    <btn class="btn" id="btn" style="background-color: #F21D56; color:white">Lo quiero</btn>
    `;
    comprar.className = "btn"
    
    content.append(comprar)


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
        console.log(carrito)
        console.log(carrito.length)
        carritoCounter();
        saveLocal();
    }
    });
});

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

