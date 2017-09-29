import mostrarPines from './app.js';
import mostrarModal from './modal.js';

$.fn.pinterestify = function (opciones) {
  const {pines} = opciones;
  mostrarPines(pines,$(this));
  mostrarModal($(this),pines);
}
