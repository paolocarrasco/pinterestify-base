import './plugin';
import items from './dataSubMenu.js';
import pines from './dataPines.js';

$(document).ready(function () {
  //contenedor.pluging(data);
  $('.sub-menu').menu({items});
  $('.imagenes').pinterestify({pines});
 
  
});
