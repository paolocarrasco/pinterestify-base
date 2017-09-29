import mostrarPins from './mostrar-pins';
import modalPin from './modal-pin';

$.fn.pinterestify = function(contenedorPins){
  const {data} = contenedorPins;
  mostrarPins(data, $(this));
  modalPin($(this), data);
};
