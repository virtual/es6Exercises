class Animal {
  constructor(name) { // make me new instances of the class
    this.name = name;
  }

  getName(){
    return (this.name);
  }
}

var quokka = new Animal('mr smiles');
//quokka

// composition of subclass
class Quokka extends Animal()  {
  constructor() {
    super(); // calls parent constructor
    // If there is a constructor present in sub-class, it needs to first call super() before using "this".
  }
}

// let https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
/*
  let has a block scope
  
*/

// arrow functions
/*
  bar()=> {}
*/

/* import & export 
  module.exports = functionName;
*/