//business interface logic
function Pizza(size, crust, toppings, quantity) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity
}
var priceSize, priceCrust, priceTopping, priceQuantity;

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
            priceCrust = 100;
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
    priceQuantity= $("input#quantity").val();

    var pizzaTotal = (priceSize + priceCrust + priceTopping) * priceQuantity;
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
    //Continue button
    $("#continue").click(function(event) {
        event.preventDefault();
        $(".plate3").show();
        $(".plate2").hide();
        //get form values
        
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        var pizzaQuantity = $("input#quantity").val();
        var pizzaTopping = [];
        $("input:checkbox[name=toppings]:checked").each(function() {
            pizzaTopping.push($(this).val());
        });

        var total = price(pizzaSize, pizzaCrust, pizzaTopping, pizzaQuantity);
        var grandTotal = total;
        var order = new Pizza(pizzaSize, pizzaCrust, pizzaTopping, pizzaQuantity)
        $(".current-order").append('<tr><td id="size">' + order.size + '</td><td id="crust">' + order.crust + '</td><td id="toppings">' + order.toppings + '</td><td id="quantity">' + order.quantity + '</td><td id="total">' + total);

        //Pickup button
        $("#pick-up").click(function() {
            alert("Dear customer, your order will be ready for pickup in 1 hour. Your order total is: " + total);

            //refresh page
            location.reload();
        })

	    //Delivery button
    	$("#delivery").click(function() {
        	$(".table-buttons").hide();
        	$(".plate4").slideDown();
    	})

        //Checkout button
        $("#checkout").click(function() {
            //form data
            var clientName = $("#full-name").val();
            var clientNumber = $("#phone-number").val();
            var clientLocation = $("#address").val();

            if (clientName === "" || clientNumber === "" || clientLocation === "") {
                alert("Please fill in the delivery form. All fields are required")
            } else {
                alert("Dear " + clientName + " your order will be delivered to " + clientLocation + " Your order total is: " +
                    grandTotal + " Our rider will contact you before dispatch.");
            }
        })
    })

    
});