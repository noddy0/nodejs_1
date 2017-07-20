
function Person(fname,lname){
    this.fname=fname;
    this.lname=lname;
}

var Person=new Person("Navdeep","Siddhu");
console.log(Person.fname,Person.lname);