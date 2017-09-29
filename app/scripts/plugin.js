import infoPin from './info-pin';
import modalPin from './modal-pin';

$.fn.pinterestify = function(opciones){
    const {data} = opciones;
    infoPin(data, $(this));
    modalPin($(this), data);
};
