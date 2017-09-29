import mostrarPines from './mostrar-pines.js';
import mostrarPinDetalle from './mostrar-pin-detalle.js';

$.fn.pinterestify = function(data){
  const [pines] = data;
  mostrarPines($(this), pines);
  mostrarPinDetalle($(this), pines);
};
