
class Person {

    
    constructor(name,age){   // here we  are define constructor :  Initialize variable 
        
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    }
}
// const std1 = new Person("ram" , 19);

// console.log(std1);

// console.log(std1.greeting());


class Man {

    constructor(name ,age , ID ){
        this.name = name;
        this.age = age;
        this.ID = ID
    }

    // adding method to Man class ok 
    greeting(){
        console.log(
         `man name is ${this.name} 
         his age is ${this.age}
          his ID is : ${this.ID}`);
    }
}

const man = new Man("prathmesh",20, "10234")  // here we are create instance of class Man ok 
console.log(man);
console.log(man.greeting());


// Activity 2 : Class Inheritance 

class Student extends Person{

    constructor(name,age,studentID)  // inintialize the object variables 
    {
        super(name,age)
        this.studentID = studentID
    }
    greeting(){
        console.log(`studnetID is : ${this.studentID}`);
    }
}

// here we are create instance of class object ok : 

const student = new Student("Sanika",19,"prathy101");

console.log(student);
console.log(student.greeting());


// Activity 3 : static methods and property 


class Playboy{

    constructor(money,gf)
    {
        this.money = money;
        this.gf = gf
    }
     static TrustLove(){
        console.log(`I AM DEVELOPER`);
    }

}

const boy = new Playboy(1000,"Sanu");
console.log(boy);

console.log(Playboy.TrustLove());


// --------------------------------------------------------------------------------------

class Account {   // here is account :   
  

    #balance;
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
      }
      console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
      }
      console.log(`Withdrew: ${amount}, New Balance: ${this.#balance}`);
    }
    getBalance() {
      return this.#balance;
    }
  }


  const account = new Account(1000);
  account.deposit(500);
  account.withdraw(200);
  console.log(`Final Balance: ${account.getBalance()}`);
  


