const pinModal = (divPin, imgPin) => {
 divPin.on('click', '.post', function(){
  const id = $(this).attr('id');
  const modal = $('.modal');
  
  const [pin] = imgPin.filter(pin => pin.id == id);
  
  modal.removeClass('inactivo');
  
  const {title, description, image_url, username, user, hashtag} = pin;
  modal.find('.post--title').text(title);
  modal.find('.post--image').attr('src', `images/${pin.image_url}`);
  modal.find('.post--description').text(description);
  modal.find('.post--hashtag').text(hashtag);
  modal.find('.post--user').text(user);
  modal.find('.post--username').html(username.slice(0,1).toUpperCase());
  
  modal.on('click', () => {
   modal.addClass('inactivo');
  })
   });
};

export default pinModal;







