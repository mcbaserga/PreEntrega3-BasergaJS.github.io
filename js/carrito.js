const renderizarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div")
    modalHeader.className = "modalHeader"
    modalHeader.innerHTML= `
    <h2 class= "tituloModal">Mi Carrito de Compras</h2>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h2")
    modalButton.innerText = "x"
    modalButton.className = "botonHeader"

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
    let contenido = document.createElement("div")
    contenido.className = "modal-content"
    contenido.innerHTML = `
        <img src="${product.img}">
        <p>${product.nombre}</p>
        <p>$${product.precio}</p>
        <p class = "restar"> - </p>
        <p>${product.cantidad}</p>
        <p class = "sumar"> + </p>
        <p>Total: $${product.cantidad * product.precio}</p>
        <p class="delete-product"> X </p>
    `;
    
    modalContainer.append(contenido)
    
    let sumar = contenido.querySelector(".sumar")
    sumar.addEventListener("click", () => {
        product.cantidad++
        saveLocal()
        renderizarCarrito()
    })

    let restar = contenido.querySelector(".restar")
    restar.addEventListener("click", ()=> {
        if (product.cantidad !== 1) {
        product.cantidad--
    }
        saveLocal()
        renderizarCarrito()
    })
    
    let eliminar = contenido.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
        eliminarProducto(product.id);
    })
})

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalCarrito = document.createElement("div")
    totalCarrito.className = "totalTexto"
    totalCarrito.innerHTML = `Total a pagar: $${total}`
    modalContainer.append(totalCarrito)

    const finalizarCompraButton = document.createElement("button")
    finalizarCompraButton.className = "finalizarCompra"
    finalizarCompraButton.innerHTML = `<btn class="finalizarCompra">Finalizar compra</btn>`
    modalContainer.append(finalizarCompraButton)

        finalizarCompraButton.addEventListener(
            "click", () => {
                Swal.fire({
                    title: "¿Desea confirmar la compra? El total a pagar es: $" + total,
                    text: "¡Gracias por elegir Kaffee!",
                    icon: "success",
                    showCancelButton: true,
                    cancelButtonText: "Seguir comprando",
                    confirmButtonText: "Confirmar compra",
                    confirmButtonColor: "#F21D56",
                }) .then((result) => {
                    if(result.isConfirmed){
                        const procesandoCompra = new Promise((resolve, reject) => {
                            setTimeout(()=>{
                                Swal.fire("¡Tu compra ha sido realizada con éxito!")
                    }, 1500) 
                    Swal.fire({
                        title:"Procesando compra, espere unos segundos...",
                        showConfirmButton: false,
                    })
                }) .catch((error)=>{
                    Swal.fire("Ups, algo salió mal")
                    console.log(error)
                })
            }
        })
    })
}

verCarrito.addEventListener("click", renderizarCarrito)

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })
    carritoCounter()
    saveLocal()
    renderizarCarrito()
}

const carritoCounter = () => {
    cantidadCarrito.style.display = "block"
    
    const carritoLength = carrito.length
    
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}

carritoCounter()
