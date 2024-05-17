var globalVar = "global";

function scope() {
  var foo = "1";

  if (true) {
    var bar = "2";
  }
  console.log(globalVar);
  console.log(window.globalVar);
  console.log(foo);
  console.log(bar);
  // if we run the code, bar can be accesed even it was inside a if block, because var is hoisted all the variable (hoisted = listed in global scope)
}

scope();
