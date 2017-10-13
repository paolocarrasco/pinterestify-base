const showPines = (pines, containerPin) => {
  const listPin = [];

  pines.forEach(pin => {
    const htmlPin = `
    <div class='post' id='${pin.id}' data-description='${pin.description}'>
          <img class='image' src='images/${pin.image_url}' alt='${pin.title}'>
          <div class='text'>
            <h4 class='title'>${pin.title}</h4>
            <p>${pin.description}</p>
            <div class='porcion-usuario'>
              <div class='circulo-color'>
                <span class='usuario-circulo username'>${pin.username}</span>
              </div>
              <span class='usuario-nombre user'>${pin.user}</span>
              <span class='hashtag'>#${pin.hashtag}</span>
            </div>
          </div>
          <div class='views'>
            <span>
              <i class='fa fa-thumb-tack' aria-hidden='true'></i>
              36,6k <i class='fa fa-check' aria-hidden='true'>77</i>
            </span>
          </div>
        </div>`;

    listPin.push(htmlPin);
  });
console.log(listPin.join(''));
  containerPin.html(listPin.join(''));
};
export default showPines;
