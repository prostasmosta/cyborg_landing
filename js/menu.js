$(document).ready(function() {
    $('.burger-menu').click(function(){
        $('.burger-menu').toggleClass('open-menu');
        $('.header-nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});
