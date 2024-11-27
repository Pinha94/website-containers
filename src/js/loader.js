$(document).ready(function(){
    'use strict';
    preLoader();
    loader();
});

function preLoader() {
    let icon = $('<i class="fa-solid fa-spinner">')
    $('body').addClass('overflow-hidden');
    $('#loader').append(icon);
    setTimeout(() => {
        $('#loader').fadeOut();
        $('body').removeClass('overflow-hidden');
    }, 2000);
}

function loader() {
    // Obtiene los elementos con lazy load
    let secciones = $('.lazy');
    // Obtiene la altura del viewport
    var windowHeight = $(window).height();
    
    $(window).scroll(function() { 
        // Obtiene la posición del scroll
        var scrollTop = $(window).scrollTop();
        
        $.each(secciones, function (index, seccion) { 
            // obtiene el borde superior del elemento lazy en relacion con la web
            var elementTop = $(seccion).offset().top;
            // Valida que el elemento esté en pantalla y que no esté activo ya
            if ( elementTop - (windowHeight / 1.5) < scrollTop && !$(seccion).hasClass('lazy-active')) {
                $(seccion).addClass('lazy-active')
                // valida si el lazy tiene articulos dentro
                if ($(seccion).find('article').length > 0) { 
                    let articulos = $(seccion).find('article');
                    let wait = 0;
                    // Muestra el elemento Lazy
                    $(seccion).css('opacity', 1);
                    // Aplica slide Up a cada article con un retraso de +100 por cada uno
                    articulos.each(function (index, articulo) {
                        slideUp(articulo, wait);
                        wait += 100;
                    });
                } else {
                    // Si el lazy no tiene article dentro aplica el slide Up al mismo elemento
                    slideUp($(seccion), 300);
                }
            }
        });
    });

    // Animación de slideUp in
    function slideUp(element, wait) {
        // Aplica unos pre estilos con css
        $(element).css({
            'position': 'relative',
            'bottom': '-100px',
            'opacity': 0
        })
        // aplica la animacion slideUp
        setTimeout(() => {
            $(element).animate({
                bottom: 0,
                opacity: 1
            }, {duration: 500, easing: 'linear'});
        }, wait);
    }
}