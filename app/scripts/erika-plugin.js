import mostrarPines from './mostrar-pines';
//import resaltarPines from './resaltar-pines';

$.fn.pinterestify = function(opciones){

  const [data] = opciones;
  console.log(data);
  mostrarPines(data, $(this));
  //resaltarPines($(this), data);
};
