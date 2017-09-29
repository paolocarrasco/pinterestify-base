import mostrarPines from './mostrar-pines';

$.fn.pinterestify = function(settings) {
  
  const {pines} = settings;
  mostrarPines(pines, $(this));
};