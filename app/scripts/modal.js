const viewModal = (containerModal, pin) => {
  containerModal.on('click', '.post', function(){
    const id = $(this).attr('id');
    const [pines] = pin.filter(pines => pines.id == id);
      console.log(pines);
    const modal = $('.modal');

    modal.removeClass('inactivo');

    const {title, image_url, descripction, username, hashtag} = pines;

    $('.post--title').text(title);
    $('.post--image').attr('src', `./images/${image_url}`);
    $('.post--username').text(username.charAt(0).toUpperCase());
    $('.post--user').text(username);
    $('.post--hashtag').text(hashtag);
    $('.post--description').text(descripction);
      
      
  });
    $('.close').on('click', function(){
        $('.modal').addClass('inactivo');
    })
};

export default viewModal;