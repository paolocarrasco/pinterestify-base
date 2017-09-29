// const mostrarPines = pines =>{
//   const imgList = [];
//   pines.forEach(pin=>{
//     const htmlImg = `<img src="images/${pin.image_url}">`;
//     imgList.push(htmlImg);
//   });
//   const contenedorImagenes = document.querySelector('.imagenes');
//    contenedorImagenes.innerHTML = imgList.join('');
// };
//
// export default mostrarPines;


import mostrarPines from './mostrar-pines';
import resaltarPines from './resaltar-pines';

$.fn.pinterestify = function(opciones){
  const {data} = opciones;
  mostrarPines(data, $(this));
  resaltarPines($(this), data);
};
