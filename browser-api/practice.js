// 1. use setTimeout method to show something after 3.5 s 
const showSomething = () => {
    setTimeout(function(){
        console.log("I am showing after 3.5s"); 
   }, 3500);
}
showSomething();

// 2. take user input and added 200 and alert them.
const addNumber = () => {
    var num1 = prompt('Enter your number please');
    num1 = parseFloat(num1);
    var result = num1 + 200;
    alert("your result is : " + result);
}

// 3. if user confirmed yes then show the website location and href.
const userConfirmation = () => {
    var webLocation = confirm("do you want to see the website location");
    if (webLocation == true) {
    console.log(window.location.href)
    } else {
    return;
    }
}

