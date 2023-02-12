class OpcionesDeCafes{
    constructor(origen = "", precio = 0, molido = "", peso = 0, tostado = "", sabor = "", notas = "", cantidad = 0){
        this.origen = origen;
        this.precio = precio;
        this.molido = molido;
        this.peso = peso;
        this.tostado = tostado;
        this.sabor = sabor;
        this.notas = notas;
        this.cantidad = cantidad;
    }
}

const cafe1 = new OpcionesDeCafes("Colombia", 1000, "En granos", 250, "medio", "chocolate", "carambola, caramelo, chocolate con leche", 1);
const cafe2 = new OpcionesDeCafes("El Salvador", 1000, "En granos", 250, "medio", "frutal", "miel, maracuyá, melón", 1)
const cafe3 = new OpcionesDeCafes("Etiopía", 1000, "En granos", 250, "medio", "frutal", "quinotos, frutas de carozo, naranja", 1)
const cafe4 = new OpcionesDeCafes("Guatemala", 1000, "En granos", 250, "medio", "vainilla", "vainilla, almendra, melaza", 1)
const cafe5 = new OpcionesDeCafes("Kenia", 1000, "En granos", 250, "medio", "caramelo", "lima, papaya, caramelo y pimienta negra", 1)
const cafe6 = new OpcionesDeCafes("Nicaragua", 1000, "En granos", 250, "medio", "chocolate", "papaya, cacao en grano, licor de cereza", 1)