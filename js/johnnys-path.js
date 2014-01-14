/*
 *  jQuery-johnnys-path
 *
 *  A small jQuery plugin that animates an absolute positioned
 *  element according to a path you give.
 *
 *  Example:
 *
 *      var options = {};
 *      $("...").johnnysPath(options, [
 *          { x: 100, y: 0   },
 *          { x: 100, y: 100 },
 *          { x: 000, y: 100 },
 *          { x: 0,   y: 0   }
 *      ]);
 *
 *  Copyright (c) 2014 Ionică Bizău <bizauionica@gmail.com>
 *
 * */
(function ($) {

    // default options
    var defaults = {
        d: 400,
        e: "linear"
    };

    /*
     *  - options: an object containing the following keys:
     *     * d - duration (default: 400 ms)
     *     * e - easing (default: "linear")
     *
     *  - points: an array like in the following example:
     *    [
     *      { x: 100, y: 0   },
     *      { x: 100, y: 100 },
     *      { x: 000, y: 100 },
     *      { x: 0,   y: 0   }
     *    ]
     *
     *  - callback: a function that will be called after the
     *              animation is finished
     * */
    $.fn.johnnysPath = function (options, points, callback) {
        
        // merge defaults with options
        var settings = $.extend(defaults, options)

            // get the selected elements
          , $self = this;

        // default callback function
        callback = callback || function () {};

        /*
         *  This function will animate the elements
         *  moving them to the new point.
         *
         *  When `p` (point) will be undefined, the function
         *  will not be called again
         *
         * */
        // current point
        var i = 0;
        function animateRecursive (p) {
            
            // no point, animation finished
            if (!p) { return callback.call($self); }

            // get duration
            var duration = p.d || settings.d

                // get easing
              , easing =  p.e || settings.e

            // animate elements
            $self.animate({
                "top":  p.y,
                "left": p.x,
            }, duration, easing, function () {

                // finished? Animate again!
                animateRecursive(points[++i]);
            });
        }

        // start animation
        animateRecursive(points[i]);

        // return selected elements
        return $self;
    };

})($);
