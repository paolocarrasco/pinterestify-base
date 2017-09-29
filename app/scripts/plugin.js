import mostrarImagenes from './app';

$.fn.pinterestify = function(options){
  console.log(options);
  const {data} = options;
  // mostrarImagenes(data);
  // console.log(options.data);
  mostrarImagenes(data, $(this));
  $(this).on('click', '.post', function(){
    const id = $(this).attr('id');
    console.log(this)
    const modal = $('.modal');

      const [detalle] = data.filter(detalle => detalle.id == id);

    modal.removeClass('inactivo');
    const{title, user, image_url, username, hashtag, description} = detalle;
    modal.find('h2').text(title);
    modal.find('.post--image').attr('src',`images/${image_url}`);
    modal.find('.post--username').html(username.charAt(0).toUpperCase());
    modal.find('.post--user').text(user);
    // modal.find('.post--user').html(user).splice(0,1).toUpperCase();
    modal.find('post--hashtag').text(hashtag);
    modal.find('post--description').text(description);

    modal.on('click', () =>{
      modal.addClass('inactivo');
    })


  }  )



}


