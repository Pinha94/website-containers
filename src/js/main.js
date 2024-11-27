$(document).ready(function(){
    'use strict';
    app();
});
function multiplicar(element, padre, cant) {
    for (let i = 0; i < cant; i++) {
        let clone = element.clone();
        padre.append(clone);
    }
}

function app() {
    
}