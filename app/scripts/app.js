const mostrarImagenes = (data, contenedorImagen) => {
  const listadoImagenes = [];
  data.forEach(pinInfo => {
    const htmlData = `
    <div class='post' id="${pinInfo.id}" data-description="${pinInfo.description}">
    <img class='image' src='images/${pinInfo.image_url}' alt="${pinInfo.title}">
    <div class='text'>
      <h4 class='title'>${pinInfo.title}</h4>
      <p>${pinInfo.description}</p>
      <div class='porcion-usuario'>
        <div class='circulo-color'>
          <span class='usuario-circulo username'>${pinInfo.username.charAt(0).toUpperCase()}N</span>
        </div>
        <span class='usuario-nombre user'>${pinInfo.user}</span>
        <span class='hashtag'>#${pinInfo.hashtag}</span>
      </div>
    </div>
    <div class='views'>
      <span>
        <i class='fa fa-thumb-tack' aria-hidden='true'></i>
        36,6k <i class='fa fa-check' aria-hidden='true'>77</i>
      </span>
    </div>
  </div>`;
  listadoImagenes.push(htmlData);

  });
  $("#imagenes").html(listadoImagenes.join(''));
  // contenedorImagen.html(listadoImagenes.join(''));

}

export default mostrarImagenes;
