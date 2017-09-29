const mostrarPinDetalle = (container, pines) => {
  console.log("soy modal");
  container.on('click', '.post', function() {
    const id = $(this).attr('id');
    const modal = $('.modal');
    const [pin] = pines.filter(pin => pin.id == id);

    modal.removeClass('inactivo');

    const {title, description, user, image_url} = pin;

    modal.find('.post--title').text(title);
    modal.find('.post--image').attr('src', `images/${image_url}`);
    modal.find('.post--image').attr('alt', title);
    modal.find('.post--user').text(user);
    modal.find('.post--description').text(description);
    modal.find('.close').on('click', function() {
      modal.addClass('inactivo');
    });
  });
};
export default mostrarPinDetalle;
