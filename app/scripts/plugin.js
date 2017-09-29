import mostrarPines from './mostrar';

$.fn.pinterestify = function(opciones){
  const {pines} = opciones;
mostrarPines(pines)
  // resaltarCiudad($(this), pines);
};
