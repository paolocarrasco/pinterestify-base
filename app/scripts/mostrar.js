const mostrarPines = pines  => {
  const listadoPines = [];

  pines.forEach(pins => {
    const htmlPines = `

        <div class='post' id="${pins.id}" data-description=  >
          <img class='image' src="images/${pins.image_url}" alt='Fuke zisukje bu dibas sik.'>
          <div class='text'>
            <h4 class='title'>${pins.title}</h4>
            <p>${pins.descripcion}</p>
            <div class='porcion-usuario'>
              <div class='circulo-color'>
                <span class="usuario-circulo ${pins.username}">N</span>
              </div>
              <span class='usuario-nombre user'>Ernest Barber</span>
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
        // <div class="col-md-6 ciudad">
        //   <h4>${pins.title}</h4>
        //   <p data-id="${pins.id}"><span>20.5</span>°
        //
        //   </p>${pins.user}
        //   ${pins.image_url}
        //   ${pins.username}
        //   <p>${pins.descripcion}</p>
        // </div>

    listadoPines.push(htmlPines);
  });

$('#imagenes').html(listadoPines.join(''));
  // contenedorPines.html(listadoPines.join(''));
};
export default mostrarPines;
// <img src="http://openweathermap.org/img/w/01n.png" alt="">
