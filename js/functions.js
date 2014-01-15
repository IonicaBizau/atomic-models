$(document).ready(function () {

    $(".source").draggable({
        axis: "y",
        containment: "parent"
    });

    // set an interval for creating helium elements
    setInterval(function () {

        // create helium element
        var $helium = $("<div class=\"helium\"></div>")
                            .css("top", $(".source").position().top + 6);

        // append the helium to screen
        $(".screen").append($helium);

        // and animate it
        $(".helium").johnnysPath({d: 1000}, [{x: 600}], function () {
            $(this).remove();
        });

    }, 700);
});
