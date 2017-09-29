
/*const pins = images => {
 const gallery = []; //To storage of pins
 images.forEach(pin => {
  const webPin = `<img src="images/${pin.image_url}">`; //Get the url
  gallery.push(webPin); //Fill the gallery
 })
 
 const divGallery = document.querySelector('.imagenes'); //Class of the div
 divGallery.innerHTML = gallery.join('');
};

export default pins;*/

const pins = (imgPin, divPin) => {
 const gallery = []; //To storage pins
 imgPin.forEach(pin => {
  const webPin = `<div class='post' id='${pin.id}' data-description='${pin.description}'>
        <img class='image' src='images/${pin.image_url}' alt='${pin.description}'>
        <div class='text'>
          <h4 class='title'>${pin.title}</h4>
          <p>${pin.description}</p>
          <div class='porcion-usuario'>
            <div class='circulo-color'>
              <span class='usuario-circulo username'>${pin.user.slice(0,1).toUpperCase()}</span>
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
      </div>`; //Get the url
  gallery.push(webPin); //Fill the gallery
 });
 
 $('.imagenes').html(gallery.join(''));
};

export default pins;

