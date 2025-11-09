"use strict";
{
    class Car {
        constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engineCapacity = engineCapacity;
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engineCapacity = engineCapacity;
        }
        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        info() {
            for (const key in this) {
                console.log(`${key} – ${this[key]}`);
            }
        }
        increaseMaxSpeed(newSpeed) {
            // this.maxSpeed = newSpeed;
            this.maxSpeed += newSpeed;
        }
        changeYear(newYear) {
            if (newYear > 0) {
                this.year = newYear;
            }
        }
        addDriver(driver) {
            this.driver = driver;
        }
    }
    const car = new Car('G20', "BMW", 2015, 270, 3.5);
    console.log(car);
    car.drive();
    car.info();
    // car.increaseMaxSpeed(280);
    car.increaseMaxSpeed(20);
    car.changeYear(2017);
    car.addDriver({ name: 'Vitalii', surname: 'Surname' });
}
