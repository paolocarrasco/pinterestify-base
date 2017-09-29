import mostrarPines from './mostrar-pines.js';
import mostrarPinDetalle from './mostrar-pin-detalle.js';

$.fn.pinterestify = function(pines){
  mostrarPines($(this), pines);
  mostrarPinDetalle($(this), pines);
};
