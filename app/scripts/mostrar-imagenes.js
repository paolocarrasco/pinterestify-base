const mostrarImagenes = (imagenes, contenedorImagenes) => {
  const listadoImagenes = [];
  $.each(imagenes,function(i,e){
    $.each(e,function (key, value){
      const htmlImagen = `
      <div class='post' id='${value.id}' data-description='${value.description}'>
        <img class='image' src='images/${value.image_url}' alt='${value.title}'>
        <div class='text'>
          <h4 class='title'>${value.title}</h4>
          <p>${value.description}</p>
          <div class='porcion-usuario'>
            <div class='circulo-color'>
              <span class='usuario-circulo username'>N</span>
            </div>
            <span class='usuario-nombre user'>${value.username}</span>
            <span class='hashtag'>${value.hashtag}</span>
          </div>
        </div>
        <div class='views'>
          <span>
            <i class='fa fa-thumb-tack' aria-hidden='true'></i>
            36,6k <i class='fa fa-check' aria-hidden='true'>77</i>
          </span>
        </div>
      </div>`;

      listadoImagenes.push(htmlImagen);
    })
  });
  contenedorImagenes.html(listadoImagenes.join(''));
};

export default mostrarImagenes;
