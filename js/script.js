//business interface logic
function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
var priceSize, priceCrust, priceTopping;

//calculate pizza price
var price = function(pizzaSize, pizzaCrust, pizzaTopping) {
    switch (pizzaSize) {
        case "":
            priceSize = 0;
            break;
        case "large":
            priceSize = 1200;
            break;
        case "medium":
            priceSize = 800;
            break;
        case "small":
            priceSize = 400;
            break;
        default:
            location.reload();
            alert("Please select a pizza size");
    };

    switch (pizzaCrust) {
        case "":
            priceCrust = 0;
            break;
        case "crispy":
            priceCrust = 100;
            break;
        case "stuffed":
            priceCrust = 200;
            break;
        case "gluten":
            priceCrust = 150;
            break;
        default:
            location.reload();
            alert("Please choose a crust");
    };

    if (pizzaSize == 'large') {
        priceTopping = pizzaTopping.length * 150;
    } else if (pizzaSize == 'medium') {
        priceTopping = pizzaTopping.length * 100;
    } else if (pizzaSize == 'small') {
        priceTopping = pizzaTopping.length * 50;
    }

    var pizzaTotal = priceSize + priceCrust + priceTopping;
    return pizzaTotal;
}


//user interface logic
$(document).ready(function() {
    $("#orders").click(function() {
        $(".plate2").show();
        $(".plate1").hide();
    })
    $("#order").click(function() {
        $(".plate2").show();
        $(".plate1").hide();
    })
})