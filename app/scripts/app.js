const mostrarPines = pines =>{
  const listadoPines = [];
  pines.forEach(pin => {
    const htmlCiudad = `<h4>${pin.id}</h4>
    <p>${pin.title}</p>
    <img src="images/${pin.image_url}" alt="">`;
     listadoPines.push(htmlCiudad);
     console.log(listadoPines);

  });
  //seccion donde se va a mostrar la informacion
  const contenedorPines = document.querySelector('.imagenes');
  //contenedorPines.innerHTML = listadoPines.join('');
}

export default mostrarPines;
