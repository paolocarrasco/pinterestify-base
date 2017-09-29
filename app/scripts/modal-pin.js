const modalPin = (contenedorImagen, data ) => {
    const modal = $('.modal');
    contenedorImagen.on ('click', '.post', function(){
        const id = $(this).attr('id');
        const [dataImg] = data.filter(dataImg => dataImg.id == id);
        modal.removeClass('inactive');

        const {title, description, user,username, image_url,hashtag} = dataImg; 
        console.log(dataImg);
        
        modal.find('.post--title').text(title);
        modal.find('.post--image').attr('src', `images/${image_url}`);
        modal.find('.post--image').attr('alt', title);
        modal.find('.post--user').text(user);
        modal.find('.post--username').html(username.charAt(0).toUpperCase());
        modal.find('.post--description').text(description);
        modal.find('.post--hashtag').text(`#${hashtag}`);
    });
    
    $('.close').on('click', function(){
        modal.addClass('inactive');
    });
}
export default modalPin;