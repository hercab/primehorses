/**
 * Created by yunior on 4/5/2017.
 */
(function ($){
    'use strict';

    $(document).load(function () {

        var slider = $('.slider');
        var allSlides = $('.slick-slide > div > *').clone();

        var trigger = $('.product-button');

        trigger.on('click', function() {

            var filtername = $(this).attr('id');
            var filterSlides = allSlides.filter('.' + filtername);
            slider.slick('unslick').empty().append(filterSlides).slick();
        });

    });




})(jQuery);

/*(function ($) {
    'use strict';
    // Custom javascript

    $('.product-button').on('click', function(){
        var filtername = $(this).attr('id');
        var currentclass = $(this).attr('class');
        if(currentclass == 'btn btn-xs btn-default product-button') {
            // currently filtered, turn the others off and this on
            $('#slick-views-tiles-list-block-1-1-slider').slick('slickUnfilter');
            $('#slick-views-tiles-list-block-1-1-slider').slick('slickFilter', '.' + filtername);
            $('#slick-views-tiles-list-block-1-1-slider').slick('slickGoTo', 0);
            $('.product-button').attr('class', 'btn btn-xs btn-default product-button');
            $(this).attr('class', 'btn btn-xs btn-primary product-button');
        } else {
            // is this the only currently selected vendor or are they all active?
            var numberactive = $('.vendors').find('.btn-default').length;
            if(numberactive > 0) {
                // toggle them all back on
                $('#slick-views-tiles-list-block-1-1-slider').slick('slickUnfilter');
                $('#slick-views-tiles-list-block-1-1-slider').slick('slickGoTo', 0);
                $('#slick-views-tiles-list-block-1-1-slider').attr('class', 'btn btn-xs btn-primary product-button');
            } else {
                // switch the others off
                $('#slick-views-tiles-list-block-1-1-slider').slick('slickUnfilter');
                $('#slick-views-tiles-list-block-1-1-slider').slick('slickFilter', '.' + filtername);
                $('#slick-views-tiles-list-block-1-1-slider').slick('slickGoTo', 0);
                $('.product-button').attr('class', 'btn btn-xs btn-default product-button');
                $(this).attr('class', 'btn btn-xs btn-primary product-button');
            }
        }
    });

})(jQuery);*/
