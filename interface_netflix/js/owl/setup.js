$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,          //flexas p o proximo item
    responsive:{
        0:{             //quantidade de pixeis
            items:1     //quantidade de itens por pagina
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})