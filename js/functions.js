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

        var y = $(".source").position().top + 6
          , x = 600;

        // create helium element
        var $helium = $("<div class=\"helium\"></div>")
                            .css("top", y);

        // don't compute anything in this case
        if (y > 132 && y < 159) {
            x = -10;
            y += 20;
        } else if (y > 87 && y < 160) {
            
            // get delta
            var delta = 110 - y

                // get percent value
              , percent = delta * 100 / 41;

            // compute the new y
            y = 150 * percent/100;

        } else if (y >= 160 && y < 210) {

            // get delta
            var delta = 65 - y + 160

                // get percent value
              , percent = delta * 100 / 41;

            // compute the new y
            y = 150 + 150 * percent/100;

        } else if (y >= 210) {
            y = y;
        }

        // append the helium to screen
        $(".screen").append($helium);

        // and animate it
        $helium.johnnysPath({d: 1000}, [
            {x: 385},
            {x: x, y: y, d: 550},
        ], function () {
            $(this).remove();
        });

    }, 300);
});
