import mostrarImagenes from './mostrar-imagenes';
import resaltarImagen from './resaltar-imagen';

$.fn.pinterestify = function(array){
  // const {array} = opciones;
  // console.log(array);
  mostrarImagenes(array, $(this));
  resaltarImagen($(this), array);
};
