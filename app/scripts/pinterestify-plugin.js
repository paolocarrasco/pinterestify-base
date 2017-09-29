import mostrarPines from './mostrar-pines';
import resaltarPines from './resaltar-pines';

$.fn.pinterestify = function (opciones) {
	const {data:pines} = opciones;
	mostrarPines( pines, $(this));
	resaltarPines(pines, $(this));
};