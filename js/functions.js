(function ($) {
    $.setLanguage = function (options) {

        // merge options
        var settings = $.extend({
            attribute: "data-lang",
            lang: "en"
        }, options);

        // hide all elements with this attirbute
        $("[" + settings.attribute + "]").hide();

        // show the elements with this language
        $("[" + settings.attribute + "='" + settings.lang + "']").show();
    }
})($)

$(document).ready(function () {

    var $activeScreen = $(".screen:visible");

    // first of all, set language
    $.setLanguage({lang: "ro"});

    // TODO jQuery plugin
    $("[data-show]").on("click", function () {
        var showQuery = $(this).attr("data-show")
          , hideQuery = $(this).attr("data-hide");

        $(showQuery).show();
        $(hideQuery).hide();

        $activeScreen = $(".screen:visible");
    });

    // both sources draggable
    $(".source").draggable({
        axis: "y",
        containment: "parent",
        drag: function () {
            console.log($(".source").position().top + 6);
        }
    });

    // set an interval for creating helium elements
    setInterval(function () {

        var y = $(".source", $activeScreen).position().top + 6
          , x = 600;

        // create helium element
        var $helium = $("<div class=\"helium\"></div>")
                            .css("top", y);

        if ($activeScreen.hasClass("rutherford")) {
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
        } else {

            if (y > 87 && y < 170) {

                // get delta
                var delta = y - 87

                    // get percent value
                  , percent = delta * 100 / 60;

                // compute the new y
                y = 150 * percent/100;

            } else if (y >= 170 && y < 210) {

                // get delta
                var delta = y - 160

                    // get percent value
                  , percent = delta * 100 / 60;

                // compute the new y
                y = 150 + 150 * percent/100;

            } else if (y >= 210) {
                y = y;
            }
        }

        // append the helium to screen
        $activeScreen.append($helium);

        // and animate it
        $helium.johnnysPath({d: 1000}, [
            {x: 385},
            {x: x, y: y, d: 550},
        ], function () {
            $(this).remove();
        });

    }, 200);
});
