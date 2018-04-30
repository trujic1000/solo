/* ====================================
                Preloader
/* ==================================*/
$(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});

/* ====================================
                Team
/* ==================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // Breakpoint from 0 up
            0: {
                items: 1
            },
            // Breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/* ====================================
                Progress Bars
/* ==================================*/
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/* ====================================
            Responsive Tabs
/* ==================================*/

$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/* ====================================
                Portfolio
/* ==================================*/

$(window).on("load", function () {
    // Initialize isotope
    var $isotopeContainer = $("#isotope-container").isotope({});

    // Filter Items On Button Click
    $("#isotope-filters").on("click", "button", function () {

        // Get Filter Value
        var filterValue = $(this).attr("data-filter");

        // Filter Portfolio
        $isotopeContainer.isotope({
            filter: filterValue
        });

        // Active Button        
        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});

/* ====================================
                Magnifier 
/* ==================================*/

$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* ====================================
                Testimonials
/* ==================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ====================================
                Stats
/* ==================================*/

$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/* ====================================
                Clients
/* ==================================*/

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ====================================
                Google Map
/* ==================================*/

$(window).on("load", function () {
    // Map Variables
    var addressString = '1001 College Drive, Mason City, Iowa, US';
    var myLatlng = {
        lat: 43.161181,
        lng: -93.131895
    };

    // 1. Render Google Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker 
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infoWindow = new google.maps.InfoWindow({
        content: addressString
    });

    // 4. Show Info Window On Marker Click
    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
});

/* ====================================
                Navigation
/* ==================================*/

// Show and Hide White Navigation

$(function () {
    // Show/Hide On Page Load
    showHideNav();

    $(window).scroll(function () {
        // Show/Hide On Scroll
        showHideNav();
    });
});

function showHideNav() {
    if ($(window).scrollTop() > 50) {
        // Show White Nav
        $("nav").addClass("white-nav-top");
        // Show Dark Logo
        $("#logoImg").attr("src", "img/logo/logo-dark.png");
        // Show Back To Top Button
        $("#back-to-top").fadeIn();
    } else {
        // Hide White Nav
        $("nav").removeClass("white-nav-top");
        // Show White Logo
        $("#logoImg").attr("src", "img/logo/logo.png");
        // Hide Back To Top Button
        $("#back-to-top").fadeOut();
    }
}

// Smooth Scrolling 

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        // Get Section Id 
        var dest = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(dest).offset().top - 64 // Getting an offset value of section
        }, 1250, "easeInOutExpo");
    });
});

/* ====================================
                Mobile Menu
/* ==================================*/

$(function () {

    // Show Mobile Nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide Mobile Nav
    $("#mobile-nav-close-btn, #mobile-nav ul li a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });
});

/* ====================================
                Animation
/* ==================================*/

// Animate on scroll
$(function () {

    // WOW Initialization
    new WOW().init();

});

// Home Animation On Page Load
$(window).on("load", function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});