import mostrarBoards from './pinterestify-boards';

$.fn.pinterestify = function(dataPines){
  const {data} = dataPines;
  mostrarBoards(data, $(this));
  
  
  $(this).on('click', '.post', function (){
      const id = $(this).attr('id');
      const [board] = data.filter(board => board.id == id);
      const modal = $('.modal');
      const {title, description, image_url, user, hashtag} = board;
      modal.removeClass('inactivo');
      
      modal.find('.post--title').text(title);
      modal.find('.post--image').attr('src', `images/${image_url}`);
      modal.find('.post--username').text(user);
      modal.find('.post--user').text(user);
      modal.find('.post--hashtag').text(`#${hashtag}`);
      modal.find('.post--description').text(description);
  });
  $('.close').on('click', function(){
     $('.modal').addClass('inactivo'); 
  });
};

