const mostrarPin = (pinContainer, pines) => {
    pinContainer.on('click', '.post', function(){
      const id = $(this).find('p').data('id');
      const modal = $('.modal');
      const [pin] = pines.filter(pin => pin.id == id);
      modal.removeClass('inactivo');
      const {description, imagen_url, title, username, user, hashtag} = pin;
      modal.find('.post--title').text(title);
      modal.find('.post--image').src('images/'+imagen_url);
      modal.find('.post--username').text(username);
      modal.find('.post--user').text(user);
      modal.find('.post--hashtag').text(`#${hashtag}`);
      modal.find('.post--description').text(description);
    });  
  };

  export default mostrarPin;