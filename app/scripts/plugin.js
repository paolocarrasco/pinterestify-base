import mostrarPines from './mostrar_pines';
import mostrarModal from './mostrar_modal';

$.fn.pinterestify = function(opciones){
  const {pines} = opciones;
  mostrarPines(pines, $(this));
  mostrarModal($(this), pines);
};
