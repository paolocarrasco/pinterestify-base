const pins = images => {
 const gallery = []; //To storage of pins
 images.forEach(pin => {
  const webPin = `<img src="images/${pin.image_url}">`; //Get the url
  gallery.push(webPin); //Fill the gallery
 })
 
 const divGallery = document.querySelector('.imagenes'); //Class of the div
 divGallery.innerHTML = gallery.join('');
};

export default pins;