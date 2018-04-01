$(document).ready(function (){
    let date = new Date();
    let firstTime = true;
    let scrollBar = true;
    let beforeScroll = $(window).scrollTop();
    $("footer").append("<p>© 2017-" + date.getFullYear() + " TapTap Co. ALL RIGHTS RESERVED</p>");
    $("#BALocal").on("click", function(){
        let sum = $(window).height() - $(window).scrollTop();
        $('html,body').animate({
            scrollTop: $(window).scrollTop() + sum
        }, "slow", 'swing');
    });
    $("#sign_in").on("click", function(){
        scrollBar = false;
        $('.main').addClass('blur');
        $('#sign_in_modal').fadeIn();
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            scrollBar = true;
            $('.main').removeClass('blur');
            $('.modal').fadeOut();
        }
    });
    $(document).mouseup(function(e)
    {
        var container = $('.modal > .content');
        if (!container.is(e.target) && container.has(e.target).length === 0 && !scrollBar)
        {
            scrollBar = true;
            $('.main').removeClass('blur');
            $('.modal').fadeOut();
        }
    });
    imgSize();
    scrollAnimation();
    $( window ).resize(function() {
        imgSize();
    });
    $(document).scroll(function () {
        scrollAnimation();
        console.log(scrollBar);
        if(!scrollBar)
            $(window).scrollTop(beforeScroll);
        else
            beforeScroll = $(window).scrollTop();
    });
});
