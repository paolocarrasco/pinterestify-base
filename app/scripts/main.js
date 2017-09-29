import './plugin';
import data from './data.js';

// $(document).ready(function () {
  // $("#imagenes").pinterestify({
  //   data
  // });
  // mostrarPines(data);
// });
//
$(() => {
  $('#imagenes').pinterestify({data});
});
