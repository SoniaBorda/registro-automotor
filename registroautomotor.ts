import { Auto } from "./Auto";
import {Camion } from "./camion";
import { Moto } from "./Moto";
import { } from "./main"

export class RegistroAutomotor {
    Auto = [];
    Moto= [];
    camion= [];

    constructor() {
    }

    agregarVehiculo(tipo, datosVehiculo) {
        const tiposVehiculos = {
            Auto: Auto,
            Moto: Moto,
            Camion: Camion,
        };
    
        const VehiculoClase = tiposVehiculos[tipo];
    
        if (VehiculoClase) {
            const nuevoVehiculo = new VehiculoClase(datosVehiculo.marca, datosVehiculo.modelo);
            
            // Agregar el vehículo a la lista correspondiente
            this[tipo].push(nuevoVehiculo);
            console.log(`${tipo} agregado:`, nuevoVehiculo.toString());
        } else {
            console.log('Tipo de vehículo no válido.');
        }
    }

    modificarVehiculo(indice, nuevosDatos) {
        let vehiculo;
        
        if (indice >= 0 && indice < this.Auto.length) {
            vehiculo = this.Auto[indice];
        } else if (indice >= 0 && indice < this.Moto.length) {
            vehiculo = this.Moto[indice];
        } else if (indice >= 0 && indice < this.camion.length) {
            vehiculo = this.camion[indice];
        } else {
            console.log('Índice de vehículo no válido.');
            return; // Salir de la función si el índice no es válido
        }
    
        // Modificar el vehículo
        Object.assign(vehiculo, nuevosDatos);
    }

    darDeBaja(indice) {
        if (indice >= 0 && indice < this.Auto.length) {
            this.Auto.splice(indice, 1);
            console.log('Vehículo de Auto dado de baja.');
        } else if (indice >= 0 && indice < this.Moto.length) {
            this.Moto.splice(indice, 1);
            console.log('Vehículo de Moto dado de baja.');
        } else if (indice >= 0 && indice < this.camion.length) {
            this.camion.splice(indice, 1);
            console.log('Vehículo de Camión dado de baja.');
        } else {
            console.log('Índice de vehículo no válido.');
        }
    }
}