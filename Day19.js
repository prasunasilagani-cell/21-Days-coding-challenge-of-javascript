//1.Student object
let student={
    Name:"Vyshnavi",
    age:21,
    Branch:"AIML",
    Year:"III",
    HtNo:"22TR1A05B7",
    semester:2,
    GPA:8.75,
}
console.log("=======Accessing the data=======");
console.log(student);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the student is",student.Name );
student.section="A"
console.log("After Adding:The data is",student);
console.log();

//Updating Data
student.Year="IV"
student.semester=1
console.log("===Updating the data====");
console.log("After updating: ",student);
console.log();

//Deleting
delete student.section
console.log("======Deleting the data=====");
console.log("After deleting: ",student);
console.log();

//2.Product object
let product={
    Name:"Laptop",
    price:50000,
    Quantity:2,
    company:"Dell",
    Inches:14.5,
    processor:"U",
}
console.log("=======Accessing the data=======");
console.log(product);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the product is",product.Name );
product.Storage="512GB"
console.log("After Adding:The data is",product);
console.log();

//Updating Data
product.processor="P"
console.log("===Updating the data====");
console.log("After updating: ",product);
console.log();

//Deleting
delete product.Quantity
console.log("======Deleting the data=====");
console.log("After deleting: ",product);
console.log();

//3.Employee object
let Employee={
    Name:"Harshini",
    age:21,
    id:101,
    salary:30000,
    Role:"Frontend Developer",
}
console.log("=======Accessing the data=======");
console.log(Employee);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the Employee is",Employee.Name );
Employee.Experience="2years"
console.log("After Adding:The data is",Employee);
console.log();

//Updating Data
Employee.id=103
Employee.salary=32000
console.log("===Updating the data====");
console.log("After updating: ",Employee);
console.log();

//Deleting
delete Employee.age
console.log("======Deleting the data=====");
    console.log("After deleting: ",Employee);
console.log();

//4.Car object
let Car=new Object()
    Car.brand="Toyota",
    Car.model="Fortuner",
    Car.year=2024,
    Car.color="Grey",
    Car.Seats=4,
    Car.price=50000,
   console.log(Car);
console.log("=======Accessing the data=======");
console.log(Car);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the car brand is",Car["brand"]);
Car["Fueltype"]="Petrol",
console.log("After Adding:The data is",Car);
console.log();

//Updating Data
Car["year"]=2020,
console.log("===Updating the data====");
console.log("After updating: ",Car);
console.log();

//Deleting
delete Car["Seats"]
console.log("======Deleting the data=====");
    console.log("After deleting: ",Car);
console.log();
   
//5.Book object
let Book=new Object()
    Book.Name="Javascript basics",
    Book.Author="John",
    Book.pages=300,
    Book.rating=4.5,
    Book.year=2020,
    Book.price=500,
    Book.edition="1st edition",
   console.log(Book);
console.log("=======Accessing the data=======");
console.log(Book);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The title of the book is",Book["Name"]);
Book["publisher"]="Tech publications",
console.log("After Adding:The data is",Book);
console.log();

//Updating Data
Book["year"]=2025,
Book["Author"]="John Smith",
Book["Edition"]="2nd edition",
console.log("===Updating the data====");
console.log("After updating: ",Book);
console.log();

//Deleting
delete Book["pages"]
console.log("======Deleting the data=====");
    console.log("After deleting: ",Book);
console.log();

//6.Mobile object
let Mobile=new Object()
    Mobile.brand="Samsung",
    Mobile.model="Galaxy S24",
    Mobile.storage="256GB",
    Mobile.color="Black",
    Mobile.ram="8GB",
    Mobile.price=60000,
    Mobile.processor="snapdragon",
    Mobile.warranty="1 Year",
    Mobile.battery="400mAh",
    Mobile.display="6.2 inches",
   console.log(Mobile);
console.log("=======Accessing the data=======");
console.log(Mobile);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The MObile brand is",Mobile["brand"]);
Mobile["camera"]="50MP",
Mobile["Operating_system"]="Android"
console.log("After Adding:The data is",Mobile);
console.log();

//Updating Data
Mobile["color"]="purple",
console.log("===Updating the data====");
console.log("After updating: ",Mobile);
console.log();

//Deleting
delete Mobile["battery"]
delete Mobile["warranty"]
console.log("======Deleting the data=====");
    console.log("After deleting: ",Mobile);
console.log();
