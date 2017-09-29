const resaltarPines = (pinesContainer, data) => {
  const modal = $('.modal');

  pinesContainer.on('click', '.post', function () {
    const id = $(this).attr('id');
    console.log(id);

    const [pines] = data.filter(pines => pines.id == id);

    modal.removeClass('inactivo');

    const {title, description, user,username, image_url,hashtag} = pines;
    console.log(pines);

    modal.find('.post--title').text(title);
    modal.find('.post--image').attr('src', `images/${image_url}`);
    modal.find('.post--image').attr('alt', title);
    modal.find('.post--user').text(user);
    modal.find('.post--username').html(username.charAt(0).toUpperCase());
    modal.find('.post--description').text(description);
    modal.find('.post--hashtag').text(`#${hashtag}`);
  });
  modal.on('click', '.close', function () {
    modal.addClass('inactivo');

  });
}
export default resaltarPines;
