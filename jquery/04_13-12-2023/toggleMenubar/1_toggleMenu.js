// target element  = nav class
// perform element = tbtn
// for change icon = icon id

$(document).ready(function () {
    $(".tbtn").click(function () {
        $i = $("#icon");
        $(".nav").toggleClass("navigation");
        if ($(".nav").hasClass("navigation") == true) {
            $i.removeClass("fa-chart-simple")
            $i.addClass("fa-xmark")
        } else {
            $i.removeClass("fa-xmark")
            $i.addClass("fa-chart-simple")
        }
    })
})