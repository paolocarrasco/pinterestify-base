const resaltarImagen = (imgContainer, imagenes) => {

  imgContainer.on('click', '.post', function(){

    const id = $(this).attr('id');


    const modal = $('.modal');
    console.log(imagenes);
    const [imagen] = imagenes.filter(imagen => imagen.id == id);

    modal.removeClass('inactivo');

    const {nombre, descripcion} = ciudad;

    modal.find('h2').text(nombre);
    modal.find('span').text(descripcion);
  });
};

export default resaltarImagen;
