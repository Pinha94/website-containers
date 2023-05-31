$(document).ready(function(){
    'use strict';
    let icon = $('<i class="fa-solid fa-spinner">')

    function loader() {
        $('#loader').append(icon);
        setTimeout(() => {
            $('#loader').fadeOut();
            $('body').removeClass('overflow-hidden');
        }, 3000);
    }
    loader();
});