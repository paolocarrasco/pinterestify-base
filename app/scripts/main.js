import './plugin';
import data from './data';

$(document).ready(function () {
   $("#imagenes").pinterestify({pins:data});
});