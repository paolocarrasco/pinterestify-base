const mostrarModal = (modalContainer, pines) => {
  const modal = $('.modal');
  modalContainer.on('click', '.post', function () {
    const id = $(this).attr('id');


    const [pin] = pines.filter(pin => pin.id == id);

    modal.removeClass('inactivo');

    const {
      description,
      hashtag,
      image_url,
      title,
      user,
      username
    } = pin;

    $('.post--title').text(title);
    $('.post--image').attr('src', `images/${image_url}`);
    $('.post--image').attr('alt', title);
    $('.post--user').text(user);
    $('.post--username').text(username.charAt(0).toUpperCase());
    $('.post--hashtag').text(hashtag);
    $('.post--description').text(description);
  });

  $('.close').on('click', function (e) {
    e.preventDefault();
    $('.modal').addClass('inactivo');
  });
};

export default mostrarModal;
