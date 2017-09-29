import mostrarPines from './app';

$.fn.pinterestify = function(x){
  const {pines} = x;
  mostrarPines (pines);
    
    $('#imagenes').on('click', '.post', function(){
    const id = $(this).attr('id');
    const modal = $('.modal');

    const [pin] = pines.filter(pin => pin.id == id);
    const {title, description, user, hashtag, image_url} = pin;

    modal.removeClass('inactivo');
    modal.find('.post--image').attr('src','images/'+image_url);
    modal.find('.post--title').text(title);
    modal.find('.post--description').text(description);
    modal.find('.post--user').text(user);
    modal.find('.post--hashtag').text(hashtag);
    modal.on('click',function () {
      modal.addClass('inactivo');
    });        

  });  
};
