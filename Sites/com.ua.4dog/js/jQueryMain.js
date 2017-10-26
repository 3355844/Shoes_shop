
$(document).ready(function () {

    //hide all inf & show home
    $('.inf').hide();
    $('#home').show();

    //Show left menu content
    $('.ins_menu').bind('click', function () {
        $('.inf').hide();
        var classId = event.target.getAttribute('alt');
        var showElement = $('#' + classId);
        showElement.show('slow');
    });

    //Show nav panel content
    $('.nav_button img').bind('click', function (event) {
        $('.inf').hide();
        var classId = event.target.getAttribute('alt');
        var showElement = $('#' + classId);
        showElement.show('slow');
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





