//1.Student object
function studentobject(){
let student={
    Name:"Vyshnavi",
    age:21,
    Branch:"AIML",
    Year:"III",
    HtNo:"22TR1A05B7",
    semester:2,
    GPA:8.75,
}
console.log("The student details are:");
console.log(student);
}
studentobject()

//2.Product object
function productobject(){
let product={
    Name:"Laptop",
    price:50000,
    Quantity:2,
    company:"Dell",
    Inches:14.5,
    processor:"U",
}
console.log("The product details are:");
return product
}
console.log(productobject());

//3.Employee object
function Employeeobject(Name,age,id,salary,Role){
let Employee={
    Name,
    age,
    id,
    salary,
    Role,
}
console.log(Employee);
}
Employeeobject("Harshini",21,101,30000,"Frontend Developer")
//4.Car 
function Carobject(brand,model,year,color,seats,price){
let Car=new Object()
    Car.brand=brand;
    Car.model=model;
    Car.year=year;
    Car.color=color;
    Car.Seats=seats;
    Car.price=price;
    return Car;
}
console.log("The details of car are:");
console.log(Carobject("Toyota","Fortuner",2024,"Grey",4,50000));

//5.Book
function Bookobject(Name,Author,pages,rating,year,price,edition){
let Book=new Object()
    Book.Name=Name;
    Book.Author=Author;
    Book.pages=pages;
    Book.rating=rating;
    Book.year=year;
    Book.price=price;
    Book.edition=edition;
   console.log(Book);
}
console.log("The book details are:");
Bookobject("Javascript basics","John Smith",300,4.5,2024,500,"2nd edition")

//6.Mobile
function Mobileobject(){
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
    Mobile.display="6.2 inches";

   return Mobile
}
console.log(Mobileobject());
