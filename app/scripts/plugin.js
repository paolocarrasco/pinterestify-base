import pins from './pines.js';
import pinModal from './modal.js';

$.fn.pinterestify = function(op) {
 const {data} = op;
 pins(data, $(this));
 pinModal($(this), data);
};