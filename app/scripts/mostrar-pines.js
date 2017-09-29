const mostrarPines = (container, pines) => {
  const listaPines = [];

  pines.forEach(currentPin => {
    const pin = `
      <div class='post' id='${currentPin.id}' data-description='${currentPin.description}'>
        <img class='image' src='images/${currentPin.image_url}' alt='${currentPin.title}'>
        <div class='text'>
          <h4 class='title'>${currentPin.title}</h4>
          <p>${currentPin.description}</p>
          <div class='porcion-usuario'>
            <div class='circulo-color'>
              <span class='usuario-circulo username'>N</span>
            </div>
            <span class='usuario-nombre user'>${currentPin.user}</span>
            <span class='hashtag'>#Chic</span>
          </div>
        </div>
        <div class='views'>
          <span>
            <i class='fa fa-thumb-tack' aria-hidden='true'></i>
            36,6k <i class='fa fa-check' aria-hidden='true'>77</i>
          </span>
        </div>
      </div>`;
      
    listaPines.push(pin);
  });
  container.html(listaPines.join(''));
};
export default mostrarPines;
