//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(name, age){
    this.name = name;
    this.age = age;
}

//Now create three instances of Person with data you make up

  //code here
var personInstance = new Person('Dale', 55);
var personInstance1 = new Person('John', 22);
var personInstance2 = new Person('Dave', 85);



//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
    console.log('Hello' + ' ' + this.name)
}

personInstance.sayName();
personInstance1.sayName();
personInstance2.sayName();