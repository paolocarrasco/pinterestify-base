const mostrarPines = (pines,contenedorPines) =>{
  const listadoPines = [];
  pines.forEach(pin => {
     const htmlCiudad = `<div class='post' id='${pin.id}' data-description='${pin.description}'>
       <img class='image' src='images/${pin.image_url}' alt='Wisiz bibusbuc giji lesi kebise.'>
       <div class='text'>
         <h4 class='title'>${pin.title}</h4>
         <p>${pin.description}</p>
         <div class='porcion-usuario'>
           <div class='circulo-color'>
             <span class='usuario-circulo username'>B</span>
           </div>
           <span class='usuario-nombre user'>${pin.username}</span>
           <span class='hashtag'>#${pin.hashtag}/span>
         </div>
       </div>
       <div class='views'>
         <span>
           <i class='fa fa-thumb-tack' aria-hidden='true'></i>
           36,6k <i class='fa fa-check' aria-hidden='true'>88</i>
         </span>
       </div>
     </div>`;

      listadoPines.push(htmlCiudad);
      console.log(listadoPines);
  });
  //seccion donde se va a mostrar la informacion
  //const contenedorPines = document.querySelector('.imagenes');
  //contenedorPines.innerHTML = listadoPines.join('');
  contenedorPines.html(listadoPines.join(''));
}

export default mostrarPines;
