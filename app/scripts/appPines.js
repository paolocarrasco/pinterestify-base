const showPines = (array, contenedorPines) => {
    const listadoPines = [];
    $.each(array, function (index, obj) {
        $.each(obj,function (key,value){
       
        const {id,description,title,image_url,username,user,hashtag} = value;

        const htmlPines = `<div class='post' id=${id} data-description=${description}>
                                <img class='image' src='images/${image_url}' alt=${title}>
                                <div class='text'>
                                    <h4 class='title'>${title}</h4>
                                    <p>${description}</p>
                                    <div class='porcion-usuario'>
                                        <div class='circulo-color'>
                                            <span class='usuario-circulo username'>${(username).substring(0,1).toUpperCase()}</span>
                                        </div>
                                        <span class='usuario-nombre user'>${user}<</span>
                                        <span class='hashtag'>#${hashtag}</span>
                                    </div>
                                </div>
                                <div class='views'>
                                    <span>
                                        <i class='fa fa-thumb-tack' aria-hidden='true'></i> 36,6k <i class='fa fa-check' aria-hidden='true'>77</i>
                                    </span>
                                </div>
                            </div>`;
        listadoPines.push(htmlPines);   
        });
      });
      contenedorPines.html(listadoPines.join(''));
      };
    
      export default showPines;
