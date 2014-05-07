
      /*// Show shaddow on header if scrolled down at all
      var $body = $(document.getElementsByTagName("body")[0]);
      var $header = $(document.getElementsByTagName("header")[0]);
      $(window).scroll(function(){
        var scrollTop = $body.scrollTop();
        if(scrollTop < 25){
          $header.css("box-shadow", "0 0em " + scrollTop/25 + "em 0px #020100");
        }else{
          $header.css("box-shadow", "0 0em 1em 0px #020100");          
        }
      });

*/      // Noscript is having shaddow always. Remove on load if javascript is enabled
$("header").css("box-shadow", "0 0em 0em 0px #020100");

$(".carousel").carousel({interval:false, pause:true});

$(".no-touch section").parallax();

$("div.mask").parent().on("mousemove", function(event){
  var offset = $(this).offset();
  var x = event.pageX - offset.left-200;
  var y = event.pageY - offset.top -200;

  $(this).children(".mask").css({
    top: y+"px",
    left: x+"px",
    "background-position": (-1*x)+"px "+(-1*y)+"px"
  });

});

$("#projects").find(".details > div").hide().end().find("ul a").click(function(event){
  var details = $(this).parent().parent().parent().find(".details");
  var current = details.attr("data-currently-selected");
  var next = $(this).attr("href");
  details.attr("data-currently-selected", next);
  if(next !== current){
    if(current !== undefined) details.children("div"+current).slideUp();
    details.children("div"+next).slideDown();
  }
  event.preventDefault();
});

// Delay scrollspy being applied, so the heights of the sections
// are reported properly
setTimeout(function(){
  $(".no-touch body").scrollspy({
    offset: 100
  });
}, 100);