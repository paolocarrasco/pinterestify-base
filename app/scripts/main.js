import './plugin';
import data from './data';
// import mostrarImagenes from './app';

// $(() => {
  console.log(data);
  // console.log(mostrarImagenes);
  // mostrarImagenes(data);
  $("#imagenes").pinterestify({data});
  // });
