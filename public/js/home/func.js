function imgSize(){
    $(".img").each(function(){
        $(this).css({
            "height" : $(window).width()*0.1875
        });
    });
}
function scrollAnimation() {
    let y = $(this).scrollTop();
    if (y >= $(window).height()*(2/4)) {
        $('.view').animate({
            "opacity" : "1"
        });
        $(".box").each(function(i){
            $(this).delay(50*i).fadeIn();
        });
    }
}
let keys = {37: 1, 38: 1, 39: 1, 40: 1};
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
