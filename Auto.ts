class Auto {
    constructor(marca, modelo, año) {
        this.marca = marca; 
        this.modelo = modelo; 
        this.año = año; 
    }

    get marca() {
        return this.marca;
    }

    set marca(marca) {
        this.marca = marca; 
    }

    get modelo() {
        return this.modelo; 
    }

    set modelo(modelo) {
        this.modelo = modelo; 
    }

    get año() {
        return this.año; 
    }

    set año(año) {
        this.año = año; 
    }
    toString() {
        return `${this.marca} ${this.modelo} (${this.año}) `;
    }
}
