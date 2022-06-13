`use strict`;

class Vehicle {
    constructor(name, fuel, wheels, doors) {
        this.name = name;
        this.wheels = wheels;
        this.fuel = fuel;
        this.doors = doors;
    }
    highwayDrive() {
        console.log(`${this.name} is running on the highway.`);
    }
}

class Car extends Vehicle {
    constructor(name, fuel) {
        super(name, fuel);
        this.wheels = 4;
        this.doors = 5;
    }
}

class Bus extends Vehicle {
    constructor(name, fuel) {
        super(name, fuel);
        this.wheels = 8;
        this.doors = 2;
    }
}

class Motorcycle extends Vehicle {
    constructor(name, fuel) {
        super(name, fuel);
        this.wheels = 2;
        this.doors = 0;
    }
    highwayDrive() {
        console.log(`${this.name} is driving on the highway on a special lane.`);
    }
}

const ferrari = new Car(`Ferrari`, `gasoline`);
const volkswagenBus = new Bus(`VolkswagenBus`, `gasoline`);
const yamaha = new Motorcycle(`Yamaha`, `gas`);

yamaha.highwayDrive();
ferrari.highwayDrive();

class Highway {
    constructor(...carType) {
        carType.forEach(elem => {
            console.log(`${elem.name} can be found on the highway!`);
        });
    }
}

const x = new Highway(ferrari, yamaha, volkswagenBus);