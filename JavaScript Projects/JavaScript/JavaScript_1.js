function Food() {
    var Food_Output; // declare a variable without asigning; it will have asigned different values for each case from switch
    var Foods = document.getElementById("Food_Input").value; // get the input from the user
    var str = " is delicious!";
    switch (Foods) {
        case "Lasagna": Food_Output = "Lasagna" + str;
        break;
        case "Pizza": Food_Output = "Pizza" + str;
        break;
        case "Salmon with mushrooms": Food_Output = "Salmon with mushrooms" + str;
        break;
        case "Roasted pork with vegs": Food_Output = "Roasted pork with vegs" + str;
        break;
        case "Chicken curry": Food_Output = "Chicken curry" + str;
        default: Food_Output = "Please select food from the list";
    }
    document.getElementById("Output").innerHTML = Food_Output; // output a qualificative to user's selection
}

function change_Heading_0 () {
    document.getElementsByClassName("Heading")[0].innerHTML = "Select your favorite food"; // only the first heading text gets changed after clicking it's text
}

var myCanvas = document.getElementById("name");
var canvas_context = myCanvas.getContext("2d");
var grad = canvas_context.createLinearGradient(0, 0, 410, 0);
grad.addColorStop(0, "brown");
grad.addColorStop(0.5, "blue");
grad.addColorStop(1, "white");
canvas_context.fillStyle = grad;
canvas_context.fillRect(0, 0, 400, 300);

