import showSubMenu from './appSubMenu';
import showPines from './appPines';
import showModal from './appShowModal';

$.fn.menu = function(opciones){
    showSubMenu(opciones,$(this));
  };

$.fn.pinterestify = function(post){
    showPines(post,$(this));
    showModal($(this));
   
};