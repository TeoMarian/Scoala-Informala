`use strict`;

function Vehicle(colour, name, engine, fuel, wheels) {
    this.colour = colour;
    this.name = name;
    this.engine = engine;
    this.fuel = fuel;
    this.wheels = wheels;
}

Vehicle.prototype.drive = function () {};
Vehicle.prototype.park = function () {};

function Car(name, colour) {
    Vehicle.call(this, name, colour, Car.ENGINE, Car.FUEL, Car.WHEELS);
}
Car.FUEL = `gas`;
Car.ENGINE = 2;
Car.WHEELS = 4;
Car.prototype = Object.create(Vehicle.prototype);

function Moto(name, colour) {
    Vehicle.call(this, name, color, Moto.ENGINE, Car.FUEL, Moto.WHEELS);
}
Moto.WHEELS = 2;
Moto.ENGINE = ` 1000 cmc`;
Moto.prototype = Object.create(Vehicle.prototype);

function Bus(name, engine, fuel) {
    Vehicle.call(this, name, Bus.WHEELS, engine, fuel, Bus.WHEELS);
}
Bus.WHEELS = 20;
Bus.COLOUR = "yellow";
Bus.prototype = Object.create(Vehicle.prototype);

function Engine(name, capacity) {
    this.name = name;
    this.capacity = capacity;
}
Engine.prototype.run = function () {
    console.log("Running");
};
Engine.prototype.start = function () {
    console.log("Starting");
    this.run();
};
Engine.prototype.stop = function () {
    console.log("Has stopped running");
};

function CarFleet(lotNumber, vehicle, color) {
    this.lotNumber = lotNumber;
    this.vehicle = vehicle;
    this.fleet = [];
    for (let i = 0; i < this.lotNumber; i++) {
        this.fleet.push(new Car(vehicle, color));
    }
}

function MotoFleet(lotNumber, name, color) {
    this.lotNumber = lotNumber;
    this.vehicle = name;
    this.fleet = [];
    for (let i = 0; i < this.lotNumber; i++) {
        this.fleet.push(new Moto(name, color));
    }
}