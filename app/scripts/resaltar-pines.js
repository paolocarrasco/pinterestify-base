const resaltarPin = (pinContainer, pines) => {
    pinContainer.on('click', '.post', function(){
    // const id = $(this).find('div').data('id');
    const id = $(this).attr('id');
    const modal = $('.modal');

    const [pin] = pines.filter(pin => pin.id == id);

    modal.removeClass('inactivo');

    const {title,image, description, username, user, hashtag} = pin;

    modal.find('h2').text(title);
    modal.find('img').attr('src',`images/${pin.image_url}`);
    modal.find('.post--description').text(description);
    modal.find('.post--username').html(username.slice(0,1).toUpperCase());
    modal.find('.post--user').text(user);
    modal.find('.post--hashtag').text(hashtag);

    modal.on('click', ()=>{
      modal.addClass('inactivo');
    });
  });
};

export default resaltarPin;
