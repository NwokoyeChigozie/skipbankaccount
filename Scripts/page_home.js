"use strict";
var Main = {
    toggleResponsiveNav: function toggleResponsiveNav() {
        $(document).on("click", ".mobile-toggler", function () {
            $(this).toggleClass("is-active");
            if ($(this).hasClass("is-active")) {
                $(".navbar").addClass("is-active");
                Main.disablePageScroll();
            } else {
                $(".navbar").removeClass("is-active");
                Main.enablePageScroll();
                Main.resetNavbar();
            }
        });
    },
    disablePageScroll: function disablePageScroll() {
        $("body").addClass("is-freezed");
    },
    enablePageScroll: function enablePageScroll() {
        $("body").removeClass("is-freezed");
    },
    resetNavbar: function resetNavbar() {
        $(".navbar, .mobile-toggler").removeClass("is-active");
    },
    activateHeaderBg: function activateHeaderBg() {
        var scrollTop = $("html, body").scrollTop();
        var $header = $("header");
        if (scrollTop > 50) {
            $header.addClass("is-scrolled");
        } else {
            $header.removeClass("is-scrolled");
        }
    }
};
$(document).ready(function () {
    Main.toggleResponsiveNav();
    $(window).resize(function () {
        if ($(window).width() > 769) {
            Main.resetNavbar();
        }
    });
    $(window).scroll(function () {
        if ($(window).width() <= 768) {
            Main.activateHeaderBg();
        }
    });
});
