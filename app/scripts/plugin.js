import showPins from './mostrarpines';
import showModal from './mostrarmodal';

$.fn.pinterestify = function (settings) {
    const {pins} = settings;
    showPins(pins, $(this));
    showModal($(this), pins);
};