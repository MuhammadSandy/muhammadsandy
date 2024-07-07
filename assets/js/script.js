$('.owl-carousel').owlCarousel({
    loop:true,
    center: false,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
        },
    },
});

document.getElementById("tahun").innerText = new Date().getFullYear();