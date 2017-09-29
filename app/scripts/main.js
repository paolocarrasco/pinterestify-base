import mostrarPines from './mostrar-pines';
import pines from './data';
import './pinterestify-plugin';

$(() => {

  $("#imagenes").pinterestify({pines});

});
