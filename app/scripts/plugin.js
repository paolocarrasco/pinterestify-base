
$.fn.pinterestify = function(e){
  const pines = [];
  const modal = $('.modal');
  e.data.map(function(x){
    const pin = $(`<div class='post' id='${x.id}' data-description='${x.description}'>
      <img class='image' src='images/${x.image_url}' alt='x.title'>
      <div class='text'>
        <h4 class='title'>${x.title}</h4>
        <p>${x.description}</p>
        <div class='porcion-usuario'>
          <div class='circulo-color'>
            <span class='usuario-circulo username'>N</span>
          </div>
          <span class='usuario-nombre user'>${x.user}</span>
          <span class='hashtag'>#${x.hashtag}</span>
        </div>
      </div>
      <div class='views'>
        <span>
          <i class='fa fa-thumb-tack' aria-hidden='true'></i>
          36,6k <i class='fa fa-check' aria-hidden='true'>77</i>
        </span>
      </div>
    </div>`);
    pines.push(pin);
  });
  //this es el elemento, en este caso seria #imagenes
  this.html(pines);
  this.on('click', '.post', function () {
    const id = $(this).attr('id');
    const imgSelec = e.data.filter( y => y.id == id);

    modal.removeClass('ocultar-modal');
    modal.find('.post--title').text(imgSelec[0].title);
    modal.find('.post--image').attr('src', `images/${imgSelec[0].image_url}`);
    modal.find('.post--image').attr('alt', imgSelec[0].title);
    modal.find('.post--user').text(imgSelec[0].user);
    modal.find('.post--username').html(imgSelec[0].username);
    modal.find('.post--description').text(imgSelec[0].description);
    modal.find('.post--hashtag').text(`#${imgSelec[0].hashtag}`);
  });
  modal.on('click', '.close', function () {
      modal.addClass('ocultar-modal');
    });
}
