import pinterestify from './plugin';
import pins from './data.js';

$(() => {
  $('#imagenes').pinterestify({pins});
});
