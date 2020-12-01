(function ($) {



    var $menu = $('#menu'),
        $menu_openers = $menu.children('ul').find('.opener');
    var $window = $(window),
        $head = $('head'),
        $body = $('body');

    // Openers.
    $menu_openers.each(function () {

        var $this = $(this);

        $this.on('click', function (event) {

            // Prevent default.
            event.preventDefault();

            // Toggle.
            $menu_openers.not($this).removeClass('active');
            $this.toggleClass('active');

            // Trigger resize (sidebar lock).
            $window.triggerHandler('resize.sidebar-lock');

        });

    });

    $('li').append("<style>li::marker</style>");


})(jQuery);