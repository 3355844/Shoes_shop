
$(document).ready(function () {

    $('.inf').hide();
    $('#home').show();

    $('.nav_button img').bind('click', function (event) {
        $('.inf').hide();
        var classId = event.target.getAttribute('alt');
        var showElement = $('#' + classId);
        console.log(showElement);
        showElement.show();
        // alert(showElement);
    });


    // Show hide left menu
    $('.ins_menu').hide();
    $('.left_button').hover(
        function () {
            $(this).find('.ins_menu').slideDown();
        },
        function () {
            $(this).find('.ins_menu').slideUp();
        });
});

//Scroll nav bar
var h_hght = 110; // header`s height
var h_mrg = 0;    // 0 position
$(function () {
    var elem = $('#top_nav');
    var top = $(this).scrollTop();
    if (top > h_hght) {
        elem.css('top', h_mrg);
    }
    $(window).scroll(function () {
        top = $(this).scrollTop();
        if (top + h_mrg < h_hght) {
            elem.css('top', (h_hght - top));
        } else {
            elem.css('top', h_mrg);
        }
    });
});





