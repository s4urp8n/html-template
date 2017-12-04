$(document).ready(function () {

    $(function () {

        var slidesRoot = '/assets/images/slides/';

        $('body').vegas({
            slides: [
                {src: slidesRoot + '2.jpg'},
                {src: slidesRoot + '6.jpg'},
                {src: slidesRoot + '7.jpg'}
            ],
            overlay: true,
            shuffle: false,
            delay: 15000
        });
    });

});
