// target element = header element
// perform element = window
$(function () {
    $(window).scroll(function () {
        $c = $(this).scrollTop();
        if ($c > 0) {
            $("header").addClass("topheader")
        } else {
            $("header").removeClass("topheader")
        }
    })
})