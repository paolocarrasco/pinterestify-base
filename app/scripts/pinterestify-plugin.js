import mostrarPines from './mostrar-pines';
import modalPines from './modal-pines';

$.fn.pinterestify = function(settings) {
  
  const {pines} = settings;
  mostrarPines(pines, $(this));
  modalPines($(this), pines);
};