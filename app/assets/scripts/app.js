function Person(name, favColor) {
  this.name = name;
  this.favColor = favColor;
  this.greet = function(){
    console.log("Hllo my name is "+ this.name + " ! and my color " + this.favColor + " !");
  }

}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
