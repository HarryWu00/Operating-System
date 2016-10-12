function App(n,mb,s){

    //Declare your instance variables here.
    this.name = n;
    this.memory = mb;
    this.state = s;

    //Declare the instance function open here.
    this.open = function(){
      state = active
      };
    //Declare the instance function sleep here.
this.sleep = function(){
  if (state = active){
    state = sleep;
    mb = 1/2*this.memory;
  }
}

    //Declare the instance function active here.
this.active = function(){
  if (state = sleep){
    new states = active;
    new mb = 2*this.memory;
  }
}

    //Declare the instance function close here.
this.close = function(){

}



}

//Use the constructor to create 4 App objects below.



//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
