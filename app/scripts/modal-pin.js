const modalPin = (pinContainer, data) => {
  const modal = $('.modal');
  pinContainer.on('click', '.post', function(){
    const id = $(this).attr('id');

    const [pin] = data.filter(pin => pin.id == id);

    modal.removeClass('inactive');

    const {title} = pin;

    modal.find('.post--title').text(pin.title);
    modal.find('.post--image').attr(`src`, `images/${pin.image_url}`);
    modal.find('.post--username').text(pin.username);
    modal.find('.post--user').text(pin.user);
    modal.find('.post--hashtag').text(pin.hashtag);
    modal.find('.post--description').text(pin.description);

    console.log(pin);

  });

  $('.close').on('click', function(){
    modal.addClass('inactive');
  });
};

export default modalPin;
