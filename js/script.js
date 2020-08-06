$(document).ready(function(){
	     // Fancy Box
    $('[data-fancybox]').fancybox();
    // Isotope = Sort and Filtering
    $('.items').isotope({
        filter : '*',
        animationOption:{
            duration: 1500,
            easing: 'linear',
            queue : false,
        }
    });
     // Apply Sort and Filtering
    $("#filter a").click(function() {
        $("#filter .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });
        // == owl carousel
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});
});