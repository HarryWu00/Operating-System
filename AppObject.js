function App(n,mb,s){

    //Declare your instance variables here.
    this.name = n;
    this.memory = mb;
    this.state = s;

    //Declare the instance function open here.
    this.open = function(){
    this.state = active
      };
    //Declare the instance function sleep here.
this.sleep = function(){
  if (this.state = active){
    this.state = sleep;
    this.memory = 1/2*this.memory;
  }
}

    //Declare the instance function active here.
this.active = function(){
  if (this.state = sleep){
  this.states = active;
  this.memory= 2*this.memory;
  }
}

    //Declare the instance function close here.
this.close = function(){
  if (this.state != null){
    this.states = null
    this.memory = 0
  }
}
}
//Use the constructor to create 4 App objects below.
var myApp = new App ("Showbie",76,active);
var herapp = new App ("iBooks", 2100,sleep);
var yourapp = new App ("C",16,null);



//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
