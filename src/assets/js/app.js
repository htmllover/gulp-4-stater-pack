/*==================================
 Template Name: GoSofto - Software Landing Page Responsive HTML Template
 Description: Gosofto is a powerful 100% Responsive Multipurpose Software landing page template.
 Version: 1.0
 Author: https://themeforest.net/user/htmllover/portfolio
 ==================================== */

// TABLE OF CONTENTS

//  1. preloader
//  2. easeScroll
//  3. navbar or menu
//  4. client testimonial
//  5. hero background slider
//  6. customers slider
//  7. magnify popup video
//  8. ytplayer for hero background video
//  9. typed
// 10. back to top

jQuery(function ($) {

    'use strict';


    /* ===================================
     counter number reset while scrolling
     ====================================== */
    $(document.body).on('appear', '.timer', function (e) {
        // this code is executed for each appeared element
        if (!$(this).hasClass('appear')) {
            animatecounters();
            $(this).addClass('appear');
        }
    });

    //countdown one
    $('.countdown').countdown($('.countdown').attr("data-enddate")).on('update.countdown', function (event) {
        $(this).html(event.strftime('' +
            '<div class="row">' +
            '<div class="col">' +
            '<h5 class="mb-0">%-D</h5>' +
            '<small>Day%!d</small>' +
            '</div>' +
            '<div class="col">' +
            '<h5 class="mb-0">%H</h5>' +
            '<small>Hours</small>' +
            '</div>' +
            '<div class="col">' +
            '<h5 class="mb-0">%M</h5>' +
            '<small>Minutes</small>' +
            '</div>' +
            '<div class="col">' +
            '<h5 class="mb-0">%S</h5>' +
            '<small>Seconds</small>' +
            '</div>' +
            '</div>'));
    });

    //countdown one
    $('.countdown-1').countdown($('.countdown').attr("data-enddate")).on('update.countdown', function (event) {
        $(this).html(event.strftime('' +
            '<div class="row">' +
            '<div class="col primary-bg">' +
            '<h5 class="mb-0">%-D</h5>' +
            '<small>Day%!d</small>' +
            '</div>' +
            '<div class="col secondary-bg">' +
            '<h5 class="mb-0">%H</h5>' +
            '<small>Hours</small>' +
            '</div>' +
            '<div class="col accent-bg">' +
            '<h5 class="mb-0">%M</h5>' +
            '<small>Minutes</small>' +
            '</div>' +
            '<div class="col dark-bg">' +
            '<h5 class="mb-0">%S</h5>' +
            '<small>Seconds</small>' +
            '</div>' +
            '</div>'));
    });

    $('#clock').countdown('2019/3/30', function(event) {
        $(this).html(event.strftime('' +
            '<div class="row text-center">' +
            '<div class="col primary-bg">' +
            '<h5 class="mb-0 border-bottom">%-D</h5>' +
            '<small>Day%!d</small>' +
            '</div>' +
            '<div class="col secondary-bg">' +
            '<h5 class="mb-0 border-bottom">%H</h5>' +
            '<small>Hours</small>' +
            '</div>' +
            '<div class="col accent-bg">' +
            '<h5 class="mb-0 border-bottom">%M</h5>' +
            '<small>Minutes</small>' +
            '</div>' +
            '<div class="col dark-bg">' +
            '<h5 class="mb-0 border-bottom">%S</h5>' +
            '<small>Seconds</small>' +
            '</div>' +
            '</div>'));
    });


    // material design style form
    function checkValue(element) {
        // check if the input has any value (if we've typed into it)
        if ($(element).val())
            $(element).addClass('has-value');
        else
            $(element).removeClass('has-value');
    }

    $(document).ready(function () {
        // Run on page load
        $('.form-control').each(function () {
            checkValue(this);
        })
        // Run on input exit
        $('.form-control').blur(function () {
            checkValue(this);
        });
    });


    /* Ytplayer - Video Background Header */
    $(".player").mb_YTPlayer();


    // 7. magnify popup video
    $('.video').magnificPopup({
        type: 'iframe'
    });


    //lightbox
    $('.zoom-gallery, .gallery').magnificPopup({
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

    $('.popup-youtube, .popup-vimeo, .popup-gmaps, .video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    // Function to reveal lightbox and adding YouTube autoplay
    function revealVideo(div, video_id) {
        var video = document.getElementById(video_id).src;
        document.getElementById(video_id).src = video + '&autoplay=1'; // adding autoplay to the URL
        document.getElementById(div).style.display = 'block';
    }

    // Hiding the lightbox and removing YouTube autoplay
    function hideVideo(div, video_id) {
        var video = document.getElementById(video_id).src;
        var cleaned = video.replace('&autoplay=1', ''); // removing autoplay form url
        document.getElementById(video_id).src = cleaned;
        document.getElementById(div).style.display = 'none';
    }

    // mega menu
    var megamenuItems = $('.custom-nav-item')

    function getPos(el) {
        // yay readability
        for (var lx = 0, ly = 0;
             el != null;
             lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent) ;
        return {x: lx, y: ly};
    }

    function get_siblings_width(item) {
        var aggregatedWidth = 0
        $(item).nextAll().each(function (i, it) {
            aggregatedWidth += $(it).width()
        })
        return aggregatedWidth
    }

    function resize_single_dropdown(i, item) {
        var dropdownItem = $(item).children('.dropdown-menu')

        if (dropdownItem.length > 0) dropdownItem = dropdownItem[0]
        else return // no dropdown so return

        var menuItemWidth = $(item).width()
        var dropdownWidth = $(dropdownItem).width()

        // go right half of dropdown width - half of menu item width px
        var calcMiddle = (dropdownWidth / 2) - (menuItemWidth / 2)

        // if on right side small width then half of dropdown width
        // then shif menu to left half of dropdown width - sum of all item right to the current menu item
        var maxRightWidth = get_siblings_width(item) + (menuItemWidth / 2)
        if (dropdownWidth / 2 > maxRightWidth) {
            calcMiddle -= (dropdownWidth / 2 - maxRightWidth)
        }
        $(dropdownItem).css('right', '-' + Math.round(calcMiddle) + 'px')

    }

    megamenuItems.each(resize_single_dropdown)


    //new menu style
    var flag = true;
    $('.navmain-trigger').on('click', function () {
        if (flag) {
            $('header').addClass('navmain-active');
            flag = false;
            console.log(flag)
        } else {
            $('header').removeClass('navmain-active');
            flag = true;
            console.log(flag);
        }
    });

    $('.hasdrop').on('click', function () {
        if ($(this).hasClass('drop-active')) {
            $(this).removeClass('drop-active')
            $(this).find('.dropdown').css("display", "none");
        } else {
            $('.hasdrop').removeClass('drop-active')
            $(this).addClass('drop-active')
            $('.dropdown').css("display", "none")
            $(this).find('.dropdown').css("display", "block");
        }

    });


    //team carousel
    $(".team-carousel").owlCarousel({
        dots: true,
        margin: 15,
        rewind: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    /*------------------------------------------
       = TESTIMONIALS SLIDER
   -------------------------------------------*/
    $('.testimonial-1-slider').owlCarousel({
        dots: true,
        margin: 15,
        rewind: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
    $('.testimonial-2-slider').owlCarousel({
        dots: true,
        margin: 15,
        rewind: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    //client slider
    $('.our-client-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin:15,
        dots:true,
        slideTransition:'linear',
        autoplayTimeout:4500,
        autoplayHoverPause:true,
        autoplaySpeed:4500,
        responsive:{
            0:{
                items:2
            },
            500: {
                items:3
            },
            600:{
                items:4
            },
            800:{
                items:5
            },
            1200:{
                items:6
            }

        }

    });

    //client carousel two
    $('.our-client-carousel-2').owlCarousel({
        autoplay: true,
        loop: true,
        margin:15,
        dots:true,
        responsive:{
            0:{
                items:2
            },
            500: {
                items:3
            },
            600:{
                items:4
            },
            800:{
                items:5
            },
            1200:{
                items:5
            }

        }

    });
    //client slider
    $('.feature-content-carousel').owlCarousel({
        loop: false,
        margin:15,
        dots:true,
        slideTransition:'linear',
        autoplayTimeout:4500,
        autoplayHoverPause:true,
        autoplaySpeed:4500,
        responsive:{
            0:{
                items:2
            },
            500: {
                items:2
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            1200:{
                items:2
            }

        }

    });

    //tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    // typed text
    // var typed = $(".typed");
    // $(function() {
    //     typed.typed({
    //         strings: ["Startup", "WebApps.", "Digital Agency", "Software Company"],
    //         typeSpeed: 130,
    //         loop: true
    //     });
    // });


//    counter up js
    $('.count-number').rCounter();

}); // JQuery end
