/**
 * Created by yunior on 6/6/2017.
 */

(function ($, Drupal) {

    'use strict';

    Drupal.behaviors.colorboxSlick = {
        attach: function (context, settings) {
           /** $(context).find('#slick-node-125-gallery-full-1-slider').once('myCustomBehavior').each(function () {
                //Apply the myCustomBehaviour effect to the elements only once.
            }); */

            jQuery.colorbox.settings.onComplete = function(){
                $(document).find('#slick-node-125-gallery-full-1-slider').slick();
            };
        }
    };
})(jQuery, Drupal);
