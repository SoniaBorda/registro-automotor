import { Auto } from "./Auto";
import { Camion } from "./camion";
import { Moto } from "./Moto";
import { RegistroAutomotor } from "./registroautomotor";

// crear auto
const Auto1 = new Auto("Toyota", "Corolla", 2012);
const Auto2 = new Auto("Chevrolet", "Corsa", 2015);
const Auto3 = new Auto("Ford", "Focus", 2010);

// Crear Camión
const camion1 = new Camion("Scania", "P340", 2008);
const camion2 = new Camion("Iveco", "170 E25", 2013);
const camion3 = new Camion("Volvo", "FH", 2016);

// Crear Moto
const Moto1 = new Moto("Yamaha", "YZF R3", 2015);
const Moto2 = new Moto("Zanella", "ZR 150", 2017);
const Moto3 = new Moto("BMW", "F 650 GS", 2012);


// Crear registro automotor
const registro = new RegistroAutomotor();

// Agregar vehículos al registro
const gestorVehiculos = new GestorVehiculos();

// Agregar vehículos
gestorVehiculos.agregarVehiculo('Auto', { marca: 'Toyota', modelo: 'Corolla' , año: 2018});
gestorVehiculos.agregarVehiculo('Moto', { marca: 'Yamaha', modelo: 'MT-07', año:2021 });
gestorVehiculos.agregarVehiculo('Camion', { marca: 'Ford', modelo: 'F-150', año:2023 });

// Mostrar todos los vehículos registrados
console.log("Vehículos registrados:", registro.Auto, registro.Moto, registro.camion);

// Modificar un vehículo
registro.modificarVehiculo('Auto', 0);
// Dar de baja un vehículo
registro.darDeBaja('Moto', 1);

// Mostrar vehículos después de modificaciones
console.log("Vehículos después de modificaciones:", registro.Auto,registro.Moto, registro.camion);