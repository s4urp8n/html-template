$(document).ready(function () {

    $(".photobox_container").photobox("a", {
        time: 1000,
        autoplay: false,
        history: true,
        loop: true,
        thumbs: true,
        hideFlash: true,
        counter: true
    });

    setTimeout(window._photobox.history.load, 100);

});
