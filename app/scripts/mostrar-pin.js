const mostrarPin = (pinContainer, pines) => {
    pinContainer.on('click', '.post', function(){
      const id = $(this).attr('id');
      const modal = $('.modal');
      const [pin] = pines.filter(pin => pin.id == id);
      modal.removeClass('inactivo');
      const {description, image_url, title, username, user, hashtag} = pin;
      modal.find('.post--title').text(title);
      modal.find('.post--image').attr('src', `images/${image_url}`);
      modal.find('.post--username').text(username);
      modal.find('.post--user').text(user);
      modal.find('.post--hashtag').text(`#${hashtag}`);
      modal.find('.post--description').text(description);
    });  
  };

  export default mostrarPin;