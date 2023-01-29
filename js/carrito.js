const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML= `
    <h2 class= "modal-header-title">Mi Carrito de Compras</h2>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h2")
    modalButton.innerText = "x"
    modalButton.className = "modal-header-button"

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
        <img src="${product.img}">
        <p>${product.nombre}</p>
        <p>${product.precio} $</p>
        <p class = "restar"> - </p>
        <p>${product.cantidad}</p>
        <p class = "sumar"> + </p>
        <p>Total: ${product.cantidad * product.precio} $</p>
        <p class="delete-product"> X </p>
    `;
    
    modalContainer.append(carritoContent)
    
    let sumar = carritoContent.querySelector(".sumar")
    sumar.addEventListener("click", () => {
        product.cantidad++
        saveLocal()
        pintarCarrito()
    })

    let restar = carritoContent.querySelector(".restar")
    restar.addEventListener("click", ()=> {
        if (product.cantidad !== 1) {
        product.cantidad--
    }
        saveLocal()
        pintarCarrito()
    })
    
    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
        eliminarProducto(product.id);
    })
})

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: ${total} $`
    modalContainer.append(totalBuying)
}

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })
    carritoCounter()
    saveLocal()
    pintarCarrito()
}

const carritoCounter = () => {
    cantidadCarrito.style.display = "block"
    
    const carritoLength = carrito.length
    
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}

carritoCounter()