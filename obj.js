
function Person(fname,lname){
    this.fname=fname;
    this.lname=lname;
}

Person.prototype.greet=function() {
    console.log("Hello",this.fname,this.lname); 
}

var nav=new Person("Navdeep","Siddhu");
nav.greet();