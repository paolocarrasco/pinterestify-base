import mostrarPines from './mostrar_pines';
//import resaltarCiudad from './resaltar-ciudad';

$.fn.pinterestify = function(opciones){
  const {pines} = opciones;
  mostrarPines(pines, $(this));
 // resaltarCiudad($(this), ciudades);
};