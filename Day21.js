//1.Student details 
let student={
    Name:"Sahithya",
    age:21,
    Htno:"22TR1A05B7",
    Year:"III",
    semester:1,
    display:function(){
        console.log("=========The details of student========");
        console.log("Name:"+student.Name);
        console.log("Age:"+student.age);
        console.log("Htno:"+student.Htno);
        console.log("Year:"+student.Year);
        console.log("Semester:"+student.semester);
    }
}
student.display();
console.log();

//2.Employee salary calculation
let employee={
     details:function(name,salary,bonus){
        let total=salary+bonus
        console.log("Employee:"+name);
        console.log("Total salary:"+total);
     }
}
console.log("===The employee salary details===");
employee.details("Rahul",30000,5000)
employee.details("Suresh",40000,3000)
employee.details("Naresh",30000,5000)
console.log();

//3.Product price calculation
let product = {
    name: "Laptop",
    price: 50000,
    quantity: 2,
    calculatePrice: function() {
        let total = product.price*product.quantity;
        console.log("Product: " +product.name);
        console.log("Total Price: "+total);
    }
};
product.calculatePrice();
console.log();

//4.Rectangle area calculation
let rectangle = {
    length: 10,
    width: 5,
    area: function() {
        let result =rectangle.length*rectangle.width;
        console.log("Length of rectangle:"+rectangle.length);
        console.log("Width of rectangle:"+rectangle.width);
        console.log("Area of Rectangle: "+result);
    }
};
rectangle.area();
console.log();

//5.Circle area method
let circle = {
    radius: 7,
    area: function() {
        let result = 3.14 *circle.radius*circle.radius;
        console.log("Radius:"+circle.radius);
        console.log("Area of Circle: "+result);
    }
};
circle.area();
console.log();

//6.Bank balance 
let bank = {
    accountHolder: "Akshitha",
    balance: 10000,
    deposit: function(amount) {
        this.balance = bank.balance+amount;
        console.log("Acountholder Name:"+bank.accountHolder);
        
        console.log("Deposited: "+amount);
        console.log("Current Balance: " +bank.balance);
    }
};
bank.deposit(5000);