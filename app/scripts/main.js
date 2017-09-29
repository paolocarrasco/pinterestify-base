import data from './data.js';
import './mery-plugin';

$(document).ready(function () {
  // Llamando al plugin para mostrar pines
  $("#imagenes").pinterestify(data);
});
