const mostrarPines = pines  => {
  const listadoPines = [];

  pines.forEach(pins => {
    const htmlPines = `

        <div class='post' id="${pins.id}" data-description=  >
          <img class='image' src="images/${pins.image_url}" alt='Fuke zisukje bu dibas sik.'>
          <div class='text'>
            <h4 class='title'>${pins.title}</h4>
            <p>${pins.description}</p>
            <div class='porcion-usuario'>
              <div class='circulo-color'>
                <span class="usuario-circulo ${pins.username}">N</span>
              </div>
              <span class='usuario-nombre user'>${pins.user}</span>
              <span class='hashtag'>#Chic</span>
            </div>
          </div>
          <div class='views'>
            <span>
              <i class='fa fa-thumb-tack' aria-hidden='true'></i>
              36,6k <i class='fa fa-check' aria-hidden='true'>77</i>
            </span>
          </div>
        </div>
        `;

    listadoPines.push(htmlPines);
  });

$('#imagenes').html(listadoPines.join(''));
};
export default mostrarPines;
