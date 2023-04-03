function function1() {
    var randomNumber = Math.floor(Math.random() * 6);
    return "6 sided dice: " + randomNumber;
  }
  
  function function2() {
    var randomNumber = Math.floor(Math.random() * 12);
    return "12 sided dice: " + randomNumber;
  }
  
  
  function callFunction() {
    var select = document.getElementById("mySelect");
    var value = select.value;
    var result = "";


    
    if (value === "function1") {
      result = function1();
    } else if (value === "function2") {
      result = function2();
    } else if (value === "function3") {
      result = function3();
    }


    var h1 = document.createElement("h1");
    h1.textContent = result;
    
    var existingH1 = document.querySelector("h1"); 

    if (existingH1) {
      existingH1.remove(); 
    }
    
    document.body.appendChild(h1);


}
