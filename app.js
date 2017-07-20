var o1={
    fname:"Navdeep",
    lname:"Siddhu",
    o2: function() {
        console.log("Hello", this.fname, this.lname);
    }
}

o1.o2();
console.log("Hii",o1['fname']);