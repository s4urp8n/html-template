$(document).ready(function () {

    $(function () {

        var slidesRoot = '/assets/images/slides/';

        $('body').vegas({
            slides: [
                {src: slidesRoot + '2.jpg'},
                {src: slidesRoot + '6.jpg'},
                {src: slidesRoot + '7.jpg'}
            ],
            overlay: false,
            shuffle: false,
            delay: 15000
        });
    });

//------------------------------
//ONLY FOR DEMO
//------------------------------
    $('.header-menu-item').on('click', function (event) {

        $('.header-menu-item').removeClass('header-menu-item--active');
        $(this).addClass('header-menu-item--active');

        if ($(this).attr('href') == '#') {
            $('.page').removeClass('page--home');
        } else {
            $('.page').addClass('page--home');
        }

        event.preventDefault();
    });
});
