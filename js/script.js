$(".content1").hide(1);
$(".content1").show(4000);

$(window).on('scroll', (e) => {
    if (window.scrollY < 50) {
        $( ".content2, .footer" ).hide( {
        duration: 2000, // продолжительность анимации
        easing: "linear" // скорость анимации
        });
    } 
    else {
        $(".content2, .footer").show( {
            duration: 4000, // продолжительность анимации
            easing: "swing" // скорость анимации
        });
    }
});

 