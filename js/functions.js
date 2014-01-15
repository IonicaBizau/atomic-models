$(document).ready(function () {

    $(".source").draggable({
        axis: "y",
        containment: "parent",
        drag: function () {
            console.log($(".source").position().top + 6);
        }
    });

    // set an interval for creating helium elements
    setInterval(function () {

        var y = $(".source").position().top + 6;

        // create helium element
        var $helium = $("<div class=\"helium\"></div>")
                            .css("top", y);

        if (y > 87 && y < 128) {
            y = 10;
        } else if (y > 164) {
            y = $(".screen").height();
        } else if (y <= 87) {
            /* do nothing */
        } else {
            return;
        }

        // append the helium to screen
        $(".screen").append($helium);

        // and animate it
        $helium.johnnysPath({d: 1000}, [
            {x: 405},
            {x: 600, y: y},
        ], function () {
            $(this).remove();
        });

    }, 300);
});
