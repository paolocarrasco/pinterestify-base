 const mostrarpines = pines => {
 	const imgList = [];
 	pines.forEach(pin => {
 		const htmlImg = `<img src="images/${pin.image_url}">`;
 		imgList.push(htmlImg);
 	})
 	const contenedorImagenes = document.querySelector('.imagenes');
 	contenedorImagenes.innerHTML = imgList.join('');

 };

 export default mostrarpines;