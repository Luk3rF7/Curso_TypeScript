export class Car {
  private readonly motor = new Motor();
  turnOn(): void {
    this.motor.turnOn();
  }
  turnOff(): void {
    this.motor.turnOff();
  }
  accellerate(): void {
    this.motor.accellerate();
  }

  stop(): void {
    this.motor.stop();
  }
}

export class Motor {
  turnOn(): void {
    console.log("Engine is starting...");
  }
  turnOff(): void {
    console.log("Engine shut off... ");
  }
  accellerate(): void {
    console.log("this engine accelerate..");
  }

  stop(): void {
    console.log("this engine shut stopping");
  }
}

const testCar = new Car();
testCar.turnOn();
testCar.accellerate();
testCar.stop();
testCar.turnOff();
