"use strcit";

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
  constructor(name, surName, moneyForDay, workDays) {
    this.name = name;
    this.surName = surName;
    this.moneyForDay = moneyForDay;
    this.workDays = workDays;
  }

  getMoneyForAllDays() {
    return `${this.moneyForDay*this.workDays} this worker have`;
  }
  
}
const worker1 = new Worker('Worker1','W1',120,10);
