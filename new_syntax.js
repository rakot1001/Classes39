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
  IsAdult(){
    if(this.age>=18){
      return `${this.name} is ${this.age} old and he is adult`;
    }
    return false;
  }
}

const user1 = new UserClass("User1", "Test", 21);
const user2 = new UserClass("User2", "Test", 17);
