const showSubMenu = (array, contenedorSubMenu) => {

const listarItems = [];

$.each(array, function( index, obj ) {
    $.each(obj,function(key,value){
    const htmlBotons = `<div class="botones botones-${key+1}">
                            <p class="light">${value[`item${key+1}`]}</p>
                        </div>`;
    listarItems.push(htmlBotons);   
    });
  });
    contenedorSubMenu.html(listarItems.join(''));
  };

  export default showSubMenu;