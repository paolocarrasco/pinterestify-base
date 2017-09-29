const mostrarModal = (contenedorPines,pines) =>{
  contenedorPines.on('click','.post',function () {
    const id = $(this).attr('id');
    const modal = $('.modal');

    console.log(modal);
    console.log(id);

    const [pin] = pines.filter(pin => pin.id == id);
    const {title, description, user, hashtag} = pin;

    modal.removeClass('inactivo');
    modal.find('h4').text(title);
    modal.find('p').text(description);
    modal.find('.user').text(user);
    modal.find('.hashtag').text(hashtag);
    modal.on('click',function () {
      modal.addClass('inactivo');
    });
  });
}

export default mostrarModal;
