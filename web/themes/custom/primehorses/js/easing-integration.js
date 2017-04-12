/**
 * Created by yunior on 3/27/2017.
 */
(function($) {

    'use strict';
    /*
     var defaults = {
     containerID: 'toTop', // fading element id
     containerHoverID: 'toTopHover', // fading element hover id
     scrollSpeed: 1200,
     easingType: 'linear'
     };
     */

    $(".scroll").click(function(event){
        event.preventDefault();

        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });

})(jQuery);
