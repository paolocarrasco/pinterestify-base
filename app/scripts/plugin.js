import mostrarPines from './mostrar';
import resaltarPin from './modal';

$.fn.pinterestify = function(opciones){
  const {pines} = opciones;
mostrarPines(pines, $(this));
resaltarPin( $(this),pines);
};
