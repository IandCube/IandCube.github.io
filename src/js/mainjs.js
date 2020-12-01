/*
	GEPT全民英檢 by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function ($) {

    var $window = $(window),
        $banner = $('#banner'),
        $body = $('body');

    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });



    $(".to_menu").click(function () {
        $body.addClass("is-menu-visible");
    });

    $(".close").click(function () {
        $body.removeClass();
    });

    // Menu.
    $('#menu')
        // .append('<a href="#menu" class="close"></a>')
        // .appendTo($body)
        .panel({
            target: $body,
            visibleClass: 'is-menu-visible',
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right'
        });





})(jQuery);