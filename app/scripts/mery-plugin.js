import mostrarPines from './mostrar-pines.js';

$.fn.pinterestify = function(data){
  const [pines] = data;
  mostrarPines($(this), pines);
};
