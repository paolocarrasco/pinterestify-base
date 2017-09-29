import mostrarPines from './mostrar-pines';
import mostrarPin from './mostrar-pin';
$.fn.pinterestify = function(options){
    const {data} = options;
    mostrarPines(data, $(this));
    mostrarPin($(this), data);
};