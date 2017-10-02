//You might find yourself needing to use multiple async functions. 
//For example, perhaps you need to query your mongo database for 
//several documents before you can render a webpage. Here's some code
//that simulates 3 async function calls:

function queryFirstDoc(callback) {
  setTimeout(() => {
    var doc1 = {dumbProp: "dumbValue"};
    callback(doc1);
  }, 2000);
};

function querySecondDoc(callback) {
  setTimeout(() => {
    var doc2 = {dumbProp2: "dumbValue2"};
    callback(doc2);
  }, 2000);
};

function queryThirdDoc(callback) {
  setTimeout(() => {
    var doc3 = {dumbProp3: "dumbValue3"};
    callback(doc3);
  }, 2000);
};


//Exercise: using these functions, generate a string that says 
// We finally have all our docs - {dumbProp1}, {dumbProp2}, {dumpProp3}