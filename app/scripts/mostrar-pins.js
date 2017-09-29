const mostrarPins = (pin, contenedorPins) => {
  const ListaPins = [];
  pin.forEach(item => {
    console.log(item);
    const htmlPins = `<div class='post' id="${item.id}" data-description="${item.description}">
                        <img class='image' src="images/${item.image_url}" alt='Fuke zisukje bu dibas sik.'>
                        <div class='text'>
                          <h4 class='title'>${item.title}</h4>
                          <p>Jusola mud afeafu ti mu.</p>
                          <div class='porcion-usuario'>
                            <div class='circulo-color'>
                              <span class='usuario-circulo username'>${item.username}</span>
                            </div>
                            <span class='usuario-nombre user'>${item.user}</span>
                            <span class='hashtag'>${item.hashtag}</span>
                          </div>
                        </div>
                        <div class='views'>
                          <span>
                            <i class='fa fa-thumb-tack' aria-hidden='true'></i>
                            36,6k <i class='fa fa-check' aria-hidden='true'>77</i>
                          </span>
                        </div>
                      </div>`;



    ListaPins.push(htmlPins);
  });

  contenedorPins.html(ListaPins.join(''));
};

export default mostrarPins;
