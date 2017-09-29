import './plugin';
import data from './data.js';
import mostrarPines from './app.js';


$(document).ready(function () {
  // $("#imagenes").pinterestify({
  //   data
  // });
  mostrarPines(data);
});
