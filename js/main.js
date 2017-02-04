$(function() {
    $(".nav > li > a").on("click", function(){
        var link = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 500);
    });
});