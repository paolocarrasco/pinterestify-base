const modalPin = (pinContainer, data) => {

  const modal = $('.modal');

  pinContainer.on('click', '.post', function(){
    const id = $(this).attr('id');
    const [pin] = data.filter(pin => pin.id == id);
    modal.removeClass('inactive');
    const {title, description, user, image_url, username, hashtag} = pin;

    modal.find('.post--title').text(title);
    modal.find('.post--image').attr(`src`, `images/${image_url}`);
    modal.find('.post--image').attr(`alt`, title);
    modal.find('.post--username').text(username.charAt(0).toUpperCase());
    modal.find('.post--user').text(user);
    modal.find('.post--hashtag').text(hashtag);
    modal.find('.post--description').text(description);

  });

  $('.close').on('click', function(){
    modal.addClass('inactive');
  });
};

export default modalPin;
