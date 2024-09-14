// Class (ES6+)
class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }
  
  // Creating instances of the Person class
  const person1 = new Person("Adam", 24, "Male");
  const person2 = new Person("Gage", 30, "Male");
  
  // Constructor Function (Pre-ES6)
  function Car(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
  
  // Creating instances of the Car constructor
  const car1 = new Car("Mercedes", "S-Class", "Blue");
  const car2 = new Car("Jaguar", "XE", "Black");
  
  // Accessing properties of instances
  console.log(person1.name); // Output: "Adam"
  console.log(car1.model);   // Output: "S-Class"