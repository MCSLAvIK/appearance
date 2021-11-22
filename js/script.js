$(".content1").hide(1);
$(".content1").show(4000);

$(window).on('scroll', (e) => {
    if (window.scrollY < 50) {
        $( ".content2, .contacts, .projects, .extra" ).hide( {
        duration: 1, // продолжительность анимации
        easing: "linear" // скорость анимации
        });
    } 
    else {
        $(".content2, .contacts, .projects, .extra").show( {
            duration: 4000, // продолжительность анимации
            easing: "swing" // скорость анимации
        });
    }
});

 