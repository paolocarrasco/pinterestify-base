import data from './data.js';
import './pinterestify-plugin';


$(() => {
  $('.imagenes').pinterestify({data});
  // console.log(data);
});
