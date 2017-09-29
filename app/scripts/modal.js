const resaltarPin = (contenedor, pins) => {
  contenedor.on('click', '.post', function(){
    console.log("enter");
    const id = $(this).attr("id");
    const modal = $('.modal');

    const [pin] = pins.filter(pins => pins.id == id);

    console.log(pin);

    modal.removeClass('inactivo');

    const {title, description} = pins;

    modal.find('h2').text(title);
    modal.find('p').text(description);
  });
};

export default resaltarPin;
