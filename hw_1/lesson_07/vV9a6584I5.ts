{
    type DriverType = {
        name: string,
        surname: string
    }

    class Car {
        driver?: DriverType;

        constructor(private model: string,
                    private manufacturer: string,
                    private year: number,
                    private maxSpeed: number,
                    private engineCapacity: number,
        ) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engineCapacity = engineCapacity;
        }

        drive(): void {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }

        info(): void {
            for (const key in this) {
                console.log(`${key} – ${this[key]}`);
            }
        }

        increaseMaxSpeed(newSpeed: number): void {
            // this.maxSpeed = newSpeed;
            this.maxSpeed += newSpeed;
        }

        changeYear(newYear: number): void {
            if (newYear > 0) {
                this.year = newYear;
            }
        }

        addDriver(driver: DriverType): void {
            this.driver = driver;
        }
    }

    const car: Car = new Car('G20', "BMW", 2015, 270, 3.5);

    console.log(car);

    car.drive();
    car.info();
    // car.increaseMaxSpeed(280);
    car.increaseMaxSpeed(20);
    car.changeYear(2017);
    car.addDriver({name: 'Vitalii', surname: 'Surname'});
}