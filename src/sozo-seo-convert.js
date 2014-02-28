/*
 * SOZO SEO Convert
 * 
 *
 * Copyright (c) 2014 SOZO Design
 * Licensed under the Proprietary license.
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