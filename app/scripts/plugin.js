import viewPin from './app.js';
import viewModal from './modal.js'

$.fn.pinterestify = function(opciones){
    const {data} = opciones;
    viewPin(data, $(this));
    viewModal($(this), data);
};
