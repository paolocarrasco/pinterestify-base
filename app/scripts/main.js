import './plugin';
import pines from './data.js'; // se exporta pines de data.js
//import mostrarPines from './app.js';


// $(document).ready(function () {
//   // $("#imagenes").pinterestify({
//   //   data
//   // });
//   mostrarPines(data);
// });

$(document).ready(function () {
  $("#imagenes").pinterestify({
     pines // este objeto se tiene que llamar igual al del plugin
  });
});
