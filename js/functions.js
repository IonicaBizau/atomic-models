$(document).ready(function () {

    // set an interval for creating helium elements
    setInterval(function () {

        // create helium element
        var $helium = $("<div class=\"helium\"></div>");

        // append the helium to screen
        $(".screen").append($helium);

        // and animate it
        $(".helium").johnnysPath({d: 700}, [{x: 600}]);
    }, 300);
});
