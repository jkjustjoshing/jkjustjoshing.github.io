(function($){
  $.fn.parallax = function(options){
    var defaults = {
      speed: 5,
      default: 10
    };

    var options =  $.extend(defaults, options);


    return this.each(function(){
      var $this = $(this);
      var $window = $(window);

      $this.children().css({
        position: "relative"
      });

      $window.scroll(function(){
        var yOffset = $this.offset().top - $window.scrollTop();
        //console.log(yOffset);
        var yParallax = yOffset * (options.speed / 10) + options.default;
        var yParallaxBottom = -yOffset * (options.speed / 10) + options.default;

        $this.children().css("top", yParallax+"px");
      });
    });
  };
})(jQuery);