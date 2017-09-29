import showPins from './showpines';
import showModal from './showmodal';

$.fn.pinterestify = function (settings) {
   const {pins} = settings;
   showPins(pins, $(this));
   showModal($(this), pins);
 };
