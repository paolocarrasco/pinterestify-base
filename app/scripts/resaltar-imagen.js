const resaltarImagen = (imgContainer, imagenes) => {

  console.log(imagenes);
  
  imgContainer.on('click', '.post', function(){
  imgContainer.on('click', '.post', function(){

    console.log(imagenes);
     const id = $(this).attr('id');
     const modal = $('.modal');

     $.each(imagenes,function(i,e){

       const [imagen] = e.filter(imagen => imagen.id == id);
       console.log(imagen);
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
