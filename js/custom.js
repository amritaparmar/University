/*! 
 
 =========================================================
 
 *University Javascript
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 */
/**<!-- jdcreators-->**/

(function ($) {

    //tooltip
    $('[data-toggle="tooltip"]').tooltip()

    //slider section
    $('.student-slider').slick({
        dots: false,
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //home1 banner slider
    $('.banner-slide').slick({
        dots: true,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // Back to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
        backToTop();
        $(window).on("scroll", function () {
            backToTop();
        });
        $('#back-to-top').on("click", function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    // Count Time 
    function makeTimer() {
        var endTime = new Date("feb  3, 2021 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function () {
        makeTimer();
    }, 300);

    //collection_slider
    $('.collection_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider_nav'
    });

    $('.slider_nav').slick({
        vertical: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.collection_slider',
        arrows: false,
        dots: false,
        focusOnSelect: true
    });

    // Quantity Box
    $(".qty_number").append('<div class="inc button"><span>+</span></div><div class="dec button"><span>-</span></div>');
    $(".button").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if (oldValue === "") {
            oldValue = 0;
        }
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    
    //Tab js
    $(".tab_content_h").hide();
    $(".tab_content_h:first").show();
    $("ul.tabs_h li").click(function () {

        $(".tab_content_h").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs_h li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading_h").removeClass("d_active");
        $(".tab_drawer_heading_h[rel^='" + activeTab + "']").addClass("d_active");

    });
    $(".tab_drawer_heading_h").click(function () {

        $(".tab_content_h").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading_h").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs_h li").removeClass("active");
        $("ul.tabs_h li[rel^='" + d_activeTab + "']").addClass("active");
    });
    $('ul.tabs_h li').last().addClass("tab_last");
    

})(jQuery);

//zoom gallery
$(document).ready(function () {
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });
});

//mega menu
!(function (n, i, e, a) {
    ;
    (n.navigation = function (t, s) {
        var o = {
            responsive: !0,
            mobileBreakpoint: 991,
            showDuration: 200,
            hideDuration: 200,
            showDelayDuration: 0,
            hideDelayDuration: 0,
            submenuTrigger: "hover",
            effect: "fadeIn",
            submenuIndicator: !0,
            submenuIndicatorTrigger: !1,
            hideSubWhenGoOut: !0,
            visibleSubmenusOnMobile: !1,
            fixed: !1,
            overlay: !0,
            overlayColor: "rgba(0, 0, 0, 0.5)",
            hidden: !1,
            hiddenOnMobile: !1,
            offCanvasSide: "left",
            offCanvasCloseButton: !0,
            animationOnShow: "",
            animationOnHide: "",
            onInit: function () {},
            onLandscape: function () {},
            onPortrait: function () {},
            onShowOffCanvas: function () {},
            onHideOffCanvas: function () {}
        },
                r = this,
                u = Number.MAX_VALUE,
                d = 1,
                l = "click.nav touchstart.nav",
                f = "mouseenter focusin",
                c = "mouseleave focusout"
        r.settings = {}
        var t = (n(t), t)
        n(t).find(".nav-search").length > 0 &&
                n(t)
                .find(".nav-search")
                .find("form")
                .prepend(
                        "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
                        ),
                (r.init = function () {
                    ;
                    (r.settings = n.extend({}, o, s)),
                            r.settings.offCanvasCloseButton &&
                            n(t)
                            .find(".nav-menus-wrapper")
                            .prepend(
                                    "<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
                                    ),
                            "right" == r.settings.offCanvasSide &&
                            n(t)
                            .find(".nav-menus-wrapper")
                            .addClass("nav-menus-wrapper-right"),
                            r.settings.hidden &&
                            (n(t).addClass("navigation-hidden"),
                                    (r.settings.mobileBreakpoint = 99999)),
                            v(),
                            r.settings.fixed && n(t).addClass("navigation-fixed"),
                            n(t)
                            .find(".nav-toggle")
                            .on("click touchstart", function (n) {
                                n.stopPropagation(),
                                        n.preventDefault(),
                                        r.showOffcanvas(),
                                        s !== a && r.callback("onShowOffCanvas")
                            }),
                            n(t)
                            .find(".nav-menus-wrapper-close-button")
                            .on("click touchstart", function () {
                                r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas")
                            }),
                            n(t)
                            .find(".nav-search-button, .nav-search-close-button")
                            .on("click touchstart keydown", function (i) {
                                i.stopPropagation(), i.preventDefault()
                                var e = i.keyCode || i.which
                                "click" === i.type ||
                                        "touchstart" === i.type ||
                                        ("keydown" === i.type && 13 == e)
                                        ? r.toggleSearch()
                                        : 9 == e && n(i.target).blur()
                            }),
                            n(t).find(".megamenu-tabs").length > 0 && y(),
                            n(i).resize(function () {
                        r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m()
                    }),
                            r.initNavigationMode(C()),
                            r.settings.hiddenOnMobile && m(),
                            s !== a && r.callback("onInit")
                })
        var h = function () {
            n(t)
                    .find(".nav-submenu")
                    .hide(0),
                    n(t)
                    .find("li")
                    .removeClass("focus")
        },
                v = function () {
                    n(t)
                            .find("li")
                            .each(function () {
                                n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
                                        (n(this)
                                                .children(".nav-dropdown,.megamenu-panel")
                                                .addClass("nav-submenu"),
                                                r.settings.submenuIndicator &&
                                                n(this)
                                                .children("a")
                                                .append(
                                                        "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                                                        ))
                            })
                },
                m = function () {
                    n(t).hasClass("navigation-portrait")
                            ? n(t).addClass("navigation-hidden")
                            : n(t).removeClass("navigation-hidden")
                }
        ;
        (r.showSubmenu = function (i, e) {
            C() > r.settings.mobileBreakpoint &&
                    n(t)
                    .find(".nav-search")
                    .find("form")
                    .fadeOut(),
                    "fade" == e
                    ? n(i)
                    .children(".nav-submenu")
                    .stop(!0, !0)
                    .delay(r.settings.showDelayDuration)
                    .fadeIn(r.settings.showDuration)
                    .removeClass(r.settings.animationOnHide)
                    .addClass(r.settings.animationOnShow)
                    : n(i)
                    .children(".nav-submenu")
                    .stop(!0, !0)
                    .delay(r.settings.showDelayDuration)
                    .slideDown(r.settings.showDuration)
                    .removeClass(r.settings.animationOnHide)
                    .addClass(r.settings.animationOnShow),
                    n(i).addClass("focus")
        }),
                (r.hideSubmenu = function (i, e) {
                    "fade" == e
                            ? n(i)
                            .find(".nav-submenu")
                            .stop(!0, !0)
                            .delay(r.settings.hideDelayDuration)
                            .fadeOut(r.settings.hideDuration)
                            .removeClass(r.settings.animationOnShow)
                            .addClass(r.settings.animationOnHide)
                            : n(i)
                            .find(".nav-submenu")
                            .stop(!0, !0)
                            .delay(r.settings.hideDelayDuration)
                            .slideUp(r.settings.hideDuration)
                            .removeClass(r.settings.animationOnShow)
                            .addClass(r.settings.animationOnHide),
                            n(i)
                            .removeClass("focus")
                            .find(".focus")
                            .removeClass("focus")
                })
        var p = function () {
            n("body").addClass("no-scroll"),
                    r.settings.overlay &&
                    (n(t).append("<div class='nav-overlay-panel'></div>"),
                            n(t)
                            .find(".nav-overlay-panel")
                            .css("background-color", r.settings.overlayColor)
                            .fadeIn(300)
                            .on("click touchstart", function (n) {
                                r.hideOffcanvas()
                            }))
        },
                g = function () {
                    n("body").removeClass("no-scroll"),
                            r.settings.overlay &&
                            n(t)
                            .find(".nav-overlay-panel")
                            .fadeOut(400, function () {
                                n(this).remove()
                            })
                }
        ;
        (r.showOffcanvas = function () {
            p(),
                    "left" == r.settings.offCanvasSide
                    ? n(t)
                    .find(".nav-menus-wrapper")
                    .css("transition-property", "left")
                    .addClass("nav-menus-wrapper-open")
                    : n(t)
                    .find(".nav-menus-wrapper")
                    .css("transition-property", "right")
                    .addClass("nav-menus-wrapper-open")
        }),
                (r.hideOffcanvas = function () {
                    n(t)
                            .find(".nav-menus-wrapper")
                            .removeClass("nav-menus-wrapper-open")
                            .on(
                                    "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
                                    function () {
                                        n(t)
                                                .find(".nav-menus-wrapper")
                                                .css("transition-property", "none")
                                                .off()
                                    }
                            ),
                            g()
                }),
                (r.toggleOffcanvas = function () {
                    C() <= r.settings.mobileBreakpoint &&
                            (n(t)
                                    .find(".nav-menus-wrapper")
                                    .hasClass("nav-menus-wrapper-open")
                                    ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas"))
                                    : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")))
                }),
                (r.toggleSearch = function () {
                    "none" ==
                            n(t)
                            .find(".nav-search")
                            .find("form")
                            .css("display")
                            ? (n(t)
                                    .find(".nav-search")
                                    .find("form")
                                    .fadeIn(200),
                                    n(t)
                                    .find(".nav-search")
                                    .find("input")
                                    .focus())
                            : (n(t)
                                    .find(".nav-search")
                                    .find("form")
                                    .fadeOut(200),
                                    n(t)
                                    .find(".nav-search")
                                    .find("input")
                                    .blur())
                }),
                (r.initNavigationMode = function (i) {
                    r.settings.responsive
                            ? (i <= r.settings.mobileBreakpoint &&
                                    u > r.settings.mobileBreakpoint &&
                                    (n(t)
                                            .addClass("navigation-portrait")
                                            .removeClass("navigation-landscape"),
                                            S(),
                                            s !== a && r.callback("onPortrait")),
                                    i > r.settings.mobileBreakpoint &&
                                    d <= r.settings.mobileBreakpoint &&
                                    (n(t)
                                            .addClass("navigation-landscape")
                                            .removeClass("navigation-portrait"),
                                            k(),
                                            g(),
                                            r.hideOffcanvas(),
                                            s !== a && r.callback("onLandscape")),
                                    (u = i),
                                    (d = i))
                            : (n(t).addClass("navigation-landscape"),
                                    k(),
                                    s !== a && r.callback("onLandscape"))
                })
        var b = function () {
            n("html").on("click.body touchstart.body", function (i) {
                0 === n(i.target).closest(".navigation").length &&
                        (n(t)
                                .find(".nav-submenu")
                                .fadeOut(),
                                n(t)
                                .find(".focus")
                                .removeClass("focus"),
                                n(t)
                                .find(".nav-search")
                                .find("form")
                                .fadeOut())
            })
        },
                C = function () {
                    return (
                            i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
                            )
                },
                w = function () {
                    n(t)
                            .find(".nav-menu")
                            .find("li, a")
                            .off(l)
                            .off(f)
                            .off(c)
                },
                O = function () {
                    if (C() > r.settings.mobileBreakpoint) {
                        var i = n(t).outerWidth(!0)
                        n(t)
                                .find(".nav-menu")
                                .children("li")
                                .children(".nav-submenu")
                                .each(function () {
                                    n(this)
                                            .parent()
                                            .position().left +
                                            n(this).outerWidth() >
                                            i
                                            ? n(this).css("right", 0)
                                            : n(this).css("right", "auto")
                                })
                    }
                },
                y = function () {
                    function i(i) {
                        var e = n(i)
                                .children(".megamenu-tabs-nav")
                                .children("li"),
                                a = n(i).children(".megamenu-tabs-pane")
                        n(e).on("click.tabs touchstart.tabs", function (i) {
                            i.stopPropagation(),
                                    i.preventDefault(),
                                    n(e).removeClass("active"),
                                    n(this).addClass("active"),
                                    n(a)
                                    .hide(0)
                                    .removeClass("active"),
                                    n(a[n(this).index()])
                                    .show(0)
                                    .addClass("active")
                        })
                    }
                    if (n(t).find(".megamenu-tabs").length > 0)
                        for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
                            i(e[a])
                },
                k = function () {
                    w(),
                            h(),
                            navigator.userAgent.match(/Mobi/i) ||
                            navigator.maxTouchPoints > 0 ||
                            "click" == r.settings.submenuTrigger
                            ? n(t)
                            .find(".nav-menu, .nav-dropdown")
                            .children("li")
                            .children("a")
                            .on(l, function (e) {
                                if (
                                        (r.hideSubmenu(
                                                n(this)
                                                .parent("li")
                                                .siblings("li"),
                                                r.settings.effect
                                                ),
                                                n(this)
                                                .closest(".nav-menu")
                                                .siblings(".nav-menu")
                                                .find(".nav-submenu")
                                                .fadeOut(r.settings.hideDuration),
                                                n(this).siblings(".nav-submenu").length > 0)
                                        ) {
                                    if (
                                            (e.stopPropagation(),
                                                    e.preventDefault(),
                                                    "none" ==
                                                    n(this)
                                                    .siblings(".nav-submenu")
                                                    .css("display"))
                                            )
                                        return (
                                                r.showSubmenu(
                                                        n(this).parent("li"),
                                                        r.settings.effect
                                                        ),
                                                O(),
                                                !1
                                                )
                                    if (
                                            (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                                                    "_blank" === n(this).attr("target") ||
                                                    "blank" === n(this).attr("target"))
                                            )
                                        i.open(n(this).attr("href"))
                                    else {
                                        if (
                                                "#" === n(this).attr("href") ||
                                                "" === n(this).attr("href") ||
                                                "javascript:void(0)" === n(this).attr("href")
                                                )
                                            return !1
                                        i.location.href = n(this).attr("href")
                                    }
                                }
                            })
                            : n(t)
                            .find(".nav-menu")
                            .find("li")
                            .on(f, function () {
                                r.showSubmenu(this, r.settings.effect), O()
                            })
                            .on(c, function () {
                                r.hideSubmenu(this, r.settings.effect)
                            }),
                            r.settings.hideSubWhenGoOut && b()
                },
                S = function () {
                    w(),
                            h(),
                            r.settings.visibleSubmenusOnMobile
                            ? n(t)
                            .find(".nav-submenu")
                            .show(0)
                            : (n(t)
                                    .find(".submenu-indicator")
                                    .removeClass("submenu-indicator-up"),
                                    r.settings.submenuIndicator &&
                                    r.settings.submenuIndicatorTrigger
                                    ? n(t)
                                    .find(".submenu-indicator")
                                    .on(l, function (i) {
                                        return (
                                                i.stopPropagation(),
                                                i.preventDefault(),
                                                r.hideSubmenu(
                                                        n(this)
                                                        .parent("a")
                                                        .parent("li")
                                                        .siblings("li"),
                                                        "slide"
                                                        ),
                                                r.hideSubmenu(
                                                        n(this)
                                                        .closest(".nav-menu")
                                                        .siblings(".nav-menu")
                                                        .children("li"),
                                                        "slide"
                                                        ),
                                                "none" ==
                                                n(this)
                                                .parent("a")
                                                .siblings(".nav-submenu")
                                                .css("display")
                                                ? (n(this).addClass("submenu-indicator-up"),
                                                        n(this)
                                                        .parent("a")
                                                        .parent("li")
                                                        .siblings("li")
                                                        .find(".submenu-indicator")
                                                        .removeClass("submenu-indicator-up"),
                                                        n(this)
                                                        .closest(".nav-menu")
                                                        .siblings(".nav-menu")
                                                        .find(".submenu-indicator")
                                                        .removeClass("submenu-indicator-up"),
                                                        r.showSubmenu(
                                                                n(this)
                                                                .parent("a")
                                                                .parent("li"),
                                                                "slide"
                                                                ),
                                                        !1)
                                                : (n(this)
                                                        .parent("a")
                                                        .parent("li")
                                                        .find(".submenu-indicator")
                                                        .removeClass("submenu-indicator-up"),
                                                        void r.hideSubmenu(
                                                                n(this)
                                                                .parent("a")
                                                                .parent("li"),
                                                                "slide"
                                                                ))
                                                )
                                    })
                                    : n(t)
                                    .find(".nav-menu, .nav-dropdown")
                                    .children("li")
                                    .children("a")
                                    .on(l, function (e) {
                                        if (
                                                (e.stopPropagation(),
                                                        e.preventDefault(),
                                                        r.hideSubmenu(
                                                                n(this)
                                                                .parent("li")
                                                                .siblings("li"),
                                                                r.settings.effect
                                                                ),
                                                        r.hideSubmenu(
                                                                n(this)
                                                                .closest(".nav-menu")
                                                                .siblings(".nav-menu")
                                                                .children("li"),
                                                                "slide"
                                                                ),
                                                        "none" ==
                                                        n(this)
                                                        .siblings(".nav-submenu")
                                                        .css("display"))
                                                )
                                            return (
                                                    n(this)
                                                    .children(".submenu-indicator")
                                                    .addClass("submenu-indicator-up"),
                                                    n(this)
                                                    .parent("li")
                                                    .siblings("li")
                                                    .find(".submenu-indicator")
                                                    .removeClass("submenu-indicator-up"),
                                                    n(this)
                                                    .closest(".nav-menu")
                                                    .siblings(".nav-menu")
                                                    .find(".submenu-indicator")
                                                    .removeClass("submenu-indicator-up"),
                                                    r.showSubmenu(n(this).parent("li"), "slide"),
                                                    !1
                                                    )
                                        if (
                                                (n(this)
                                                        .parent("li")
                                                        .find(".submenu-indicator")
                                                        .removeClass("submenu-indicator-up"),
                                                        r.hideSubmenu(n(this).parent("li"), "slide"),
                                                        "_blank" === n(this).attr("target") ||
                                                        "blank" === n(this).attr("target"))
                                                )
                                            i.open(n(this).attr("href"))
                                        else {
                                            if (
                                                    "#" === n(this).attr("href") ||
                                                    "" === n(this).attr("href") ||
                                                    "javascript:void(0)" === n(this).attr("href")
                                                    )
                                                return !1
                                            i.location.href = n(this).attr("href")
                                        }
                                    }))
                }
        ;
        (r.callback = function (n) {
            s[n] !== a && s[n].call(t)
        }),
                r.init()
    }),
            (n.fn.navigation = function (i) {
                return this.each(function () {
                    if (a === n(this).data("navigation")) {
                        var e = new n.navigation(this, i)
                        n(this).data("navigation", e)
                    }
                })
            })
})(jQuery, window, document)

        ;
(function ($) {
    "use strict"

    var $window = $(window)

    if ($.fn.navigation) {
        $("#navigation1").navigation()
        $("#always-hidden-nav").navigation({
            hidden: true
        })
    }

    $window.on("load", function () {
        $("#preloader").fadeOut("slow", function () {
            $(this).remove()
        })
    })
})(jQuery)

// Preloader
jQuery(window).on('load', function () {
    $('.preloader').fadeOut();
});


// Header Sticky
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 150) {
        $('.main_header_area').addClass("is-sticky");
    } else {
        $('.main_header_area').removeClass("is-sticky");
    }
});


$(document).ready(function () {
    //wow js
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    $(window).imagesLoaded(function () {
        wow.init();
    });

    //parallex
    if ($('.parallax-window').length > 0) {
        $('.parallax-window').parallax({imageSrc: 'img/e17.jpg'});
    }

// PrevScrollpos
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            if ($("#header").length > 0) {
                document.getElementById("header").style.top = "0";
            }
        }
        //            else {
        //                document.getElementById("header").style.top = "-100px";
        //            }
        prevScrollpos = currentScrollPos;
    }

//tab js
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");


    });
    $(".tab_container").css("min-height", function () {
        return $(".tabs").outerHeight() + 50;
    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });

    //choosefile
    $('#chooseFile').bind('change', function () {
        var filename = $("#chooseFile").val();
        if (/^\s*$/.test(filename)) {
            $(".file-upload").removeClass('active');
            $("#noFile").text("No file chosen...");
        } else {
            $(".file-upload").addClass('active');
            $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
        }
    });


});

//delete product
jQuery(document).on("click", ".td.remove_cart", function () {
    jQuery(this).parents("div.tr").remove();
    jQuery(".cart_subtotal.text-right").remove();
});

//table clone
jQuery(document).ready(function () {
    jQuery(".save-button").click(function () {
        jQuery(".cart_table").clone().appendTo("#save-later");
    });
});