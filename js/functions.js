var animate = true;
$(document).ready(function () {

    $(".source").draggable({
        axis: "y",
        containment: "parent",
        drag: function () {
            console.log($(".source").position().top);
        }
    });

    // set an interval for creating helium elements
    setInterval(function () {

        var y = $(".source").position().top + 6;

        // create helium element
        var $helium = $("<div class=\"helium\"></div>")
                            .css("top", y);

        // append the helium to screen
        $(".screen").append($helium);

        if (y > 90) {
            y = 10;
        }

        if (!animate) { return; }
        // and animate it
        $helium.johnnysPath({d: 1000}, [
            {x: 405},
            {x: 600, y: y},
        ], function () {
            $(this).remove();
        });

    }, 300);
});
