//Exercise:
//currently, this loop logs the integer "6" 5 times. Why is it doing that? 
//We can use the wicked cool "let" keyword to resolve this to the expected output of
// 1
// 2
// 3
// 4
// 5

//Do it!

for (i = 1; i <= 5; i++) {
  setTimeout(function(){
    console.log(i);
  }, 500);
}

//lastly, declare a const and try to change it. Checkout the error message.