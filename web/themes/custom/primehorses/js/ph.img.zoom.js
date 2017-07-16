/**
 * Created by yunior on 7/14/2017.
 */

(function($, Drupal)
{
    'use strict';

    Drupal.behaviors.imgZoom = {
        attach: function (context, settings) {

            var handleBreakpointActivated = function (e, breakpoint) {
                // SM breakpoint and above, initialize Zoom effect
                if (breakpoint === 'xs') {
                    jQuery('.image-zoom').trigger('zoom.destroy');

                }
            };

            var handleBreakpointDeactivated = function (e, breakpoint) {
                // below SM breakpoint, destroy Zoom effect
                if (breakpoint === 'xs') {
                    jQuery('.image-zoom').zoom();
                }
            };

            $(window).on('breakpointActivated', handleBreakpointActivated);
            $(window).on('breakpointDeactivated', handleBreakpointDeactivated);
        }
    };
})(jQuery, Drupal);
