const showModal = (contenedorPin) => {
     $(contenedorPin).on('click','.post',function(){

           const title = $(this).find('h4').text();
           const image = $(this).find('img').attr('src');
        /*
        <h2 class='post--title'>Fuke zisukje bu dibas sik.</h2>
        <img class='post--image' src='images/1.jpg' alt='Fuke zisukje bu dibas sik.'/>
        <div class='contenedor-texto'>
          <div class='circulo-color2'>
            <span class='usuario-circulo2 post--username'>N</span>
          </div>
          <span class='post--user'>Ernest Barber</span>
          <p class='hashtag2 post--hashtag'>#Chic</p>
          <div class='modal-descrip'>
            <p class='post--description'>Jusola mud afeafu ti mu.</p>
          </div>
        */


           $('.modal').toggle();
           $('.modal').on('click','cuadro-blanco',function(){
               $(this).find
           })
           $('.modal').find('.cuadro-blanco').find('h2').val(title);
        })
        
           
          };
        
          export default showModal;