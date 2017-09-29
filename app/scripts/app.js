const viewPin = pines => {
    const listPin = [];

    pines.forEach(pin => {
        const allPines = `
        <div class="post" data-id="${pin.id}" data-description="${pin.description}">
        <img class="image" src="images/${pin.image_url}" alt="${pin.title}">
        <div class='text'>
        <h4 class="title">${pin.title}</h4>
        <p>${pin.description}</p>
        <div class='circulo-color'>
        <span class='usuario-circulo username'>${pin.username.charAt(0).toUpperCase()}</span>
        <span class='hashtag'>${pin.hashtag}</span>
        </div>
        </div>
        <div class='views'>
        <span>
        <i class='fa fa-thumb-tack' aria-hidden='true'></i>
        36,6k <i class='fa fa-check' aria-hidden='true'>77</i>
        </span>
        </div>
        </div>`;

        listPin.push(allPines);
    });

    $('#imagenes').html(listPin.join(''));

};
export default viewPin;
