const resaltarImagen = (imgContainer, imagenes) => {

  imgContainer.on('click', '.post', function(){

     const id = $(this).attr('id');
     const modal = $('.modal');
     const close =$('.close');

     modal.on('click','.close', function(){
      modal.addClass('inactivo');
     })
     $.each(imagenes,function(i,e){

       const [imagen] = e.filter(imagen => imagen.id == id);
       
       modal.removeClass('inactivo');
       const {title,description ,user ,image_url,username , hashtag } = imagen;

       modal.find('.post--title').text(title);
       modal.find('.post--image').attr('src',`images/${image_url}`);
       modal.find('post--user').text(user);
       modal.find('post--hashtag').text(hashtag);
       modal.find('post--description').text(description);
      });

  });
};

export default resaltarImagen;
