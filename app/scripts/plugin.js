import mostrarPines from './app';

$.fn.pinterestify = function(options){
    const {data} = options;

    mostrarPines(data, $(this));
   
};