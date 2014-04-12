$(function () {
    "use strict";

    $("#prettyDrop").prettyDrop({
        active: function (menu) {
            menu.addClass("active");
        },
        deactive: function (menu) {
            menu.removeClass("active");
        },
        menuSelector: ".menu-item"
    });

    $("#notPrettyDrop").find(".menu-item").hover(
        function () {
            console.log("act");
            $(this).addClass("active");
        },
        function () {
            $(this).removeClass("active");
        }
    );
});