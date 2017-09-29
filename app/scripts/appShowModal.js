const showModal = (contenedorPin) => {
     $(contenedorPin).on('click', '.post', function() {
        $('.modal').removeClass('inactiveModal');
           const title = $(this).find('h4').text();
           const url = $(this).find('img').attr('src');
           const alt = $(this).find('img').attr('alt');
           const username = $(this).find('.username').text();
           const user = $(this).find('.user').text();
           const hashtag = $(this).find('.hashtag').text();
           const description = $(this).find('p').text();

           $('.modal').find('.cuadro-blanco').empty()
                                             .append(`<div class='contenedor-save'>
                                                      <ul>
                                                        <li><a href='#'><i class='fa fa-upload fa-lg' aria-hidden='true'></i></a></li>
                                                        <li><a href='#'><i class='fa fa-check fa-lg' aria-hidden='true'></i></a></li>
                                                        <li><a href='#'><i class='fa fa-ellipsis-h fa-lg' aria-hidden='true'></i></a></li>
                                                        <li class='right'><a href='#'><i class='fa fa-thumb-tack fa-lg' aria-hidden='true'></i>Save</a></li>
                                                     </ul>
                                                     </div>`)
                                            .append(`<h2 class='post--title'>${title}</h2>
                                                    <img class='post--image' src=${url} alt=${alt}/>
                                                    <div class='contenedor-texto'>
                                                    <div class='circulo-color2'>
                                                    <span class='usuario-circulo2 post--username'>${username}</span>
                                                    </div>
                                                    <span class='post--user'>${user}</span>
                                                    <p class='hashtag2 post--hashtag'>#${hashtag}</p>
                                                    <div class='modal-descrip'>
                                                    <p class='post--description'>${description}</p>
                                                    </div>`).wrap('<div></div>');
        })

        $('.modal').on('click', function(){
            $(this).addClass('inactiveModal');
               
        })
           
};
export default showModal;