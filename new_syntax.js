"use strcit";

const MIN_ZP = 6000 / 21;
class UserClass {
  constructor(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.surName}`;
  }
  IsAdult() {
    if (this.age >= 18) {
      return `${this.name} is ${this.age} old and he is adult`;
    }
    return false;
  }
}

const user1 = new UserClass("User1", "Test", 21);
const user2 = new UserClass("User2", "Test", 17);

/*Реализовать класс Рабочий(Worker)
У рабочего есть имя. фамилия, ставка за день, количество отработаных дней
Метод, который возвращает з.п рабочего
*/
class Worker {
  constructor(name, surName, workDays = 0, moneyForDay = MIN_ZP) {
    this.name = name;
    this.surName = surName;
    this.moneyForDay = moneyForDay;
    this.workDays = workDays;
  }

  getMoneyForAllDays() {
    return `${this.moneyForDay * this.workDays} this worker have`;
  }
}
const worker1 = new Worker("Worker1", "W1", 120, 10);

/* Собственный вес ownWeight */
/*Масса топлива
Fuel
volume
destiny */

class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }
  getMassFuel() {
    return this.volume * this.density;
  }
}

class Auto {
  constructor(ownWeight, fuel) {
    this.ownWeight = ownWeight;
    this.fuel = fuel;
  }
  getAllAutoMass() {
    return this.ownWeight + this.fuel.getMassFuel();
  }
}

const benzin = new Fuel(50, 0.9);
const auto = new Auto(2000, benzin);
