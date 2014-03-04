/*!
* SOZO SEO Convert - for jQuery 1.7+
* https://github.com/clivewalkden/SOZOSEOConvert
*
* @package SOZO SEO Convert
* @author Clive Walkden (https://github.com/clivewalkden)
* @version 1.0.1
* @license Proprietary
* @copyright Copyright (c) 2014 Clive Walkden (https://github.com/clivewalkden)
* @date: 2014-03-04
*/

(function($){
    $.fn.SOZOSEOConvert = function(custom) {

        // Default plugin settings
        var defaults = {
            minChars   : 3
        };

        // Merge default and user settings
        var settings = $.extend({}, defaults, custom);

        var methods = {
            trim: function(){
                String.prototype.trim = function () {
                    return this.replace(/^\s+/, '').replace(/\s+$/, '');
                };
            },
            replace: function(string){
                return string.trim().toLowerCase().replace(/[^a-z0-9-\s]/g,'').replace(/\s/g,'-');
            }
        };

        this.each(function(){

            var self = this;

            var charCount = $(self).val().length;

            $(self).on(
                'blur', function(){
                    charCount = $(self).val().length;

                    if (charCount >= settings.minChars) {
                        var value = methods.replace($(self).val());
                        $(self).val(value);
                    }
                }
            );
        });

    };

})(jQuery);