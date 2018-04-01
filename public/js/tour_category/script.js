$(document).ready(function (){
    let date = new Date();
    let beforeScroll = $(window).scrollTop();
    $("#BALocal").on("click", function(){
        let sum = $(window).height() - $(window).scrollTop();
        $('html,body').animate({
            scrollTop: $(window).scrollTop() + sum
        }, "slow", 'swing');
    });

    imgSize();
    scrollAnimation();
    $( window ).resize(function() {
        imgSize();
    });
    $(document).scroll(function () {
        scrollAnimation();
    });
});
