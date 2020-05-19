//business interface logic
function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
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