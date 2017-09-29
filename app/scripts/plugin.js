import mostrarPins from './mostrar-pins';

$.fn.pinterestify = function(contenedorPins){
  const {data} = contenedorPins;
  mostrarPins(data, $(this));

};
