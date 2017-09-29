const showPins = (pins, pinsContainer) => {
   const pinsArray = [];
   pins.forEach(pins => {
     const htmlPin = `<div class='post' id='${pins.id}' data-description='${pins.title}'>
                     <img class='image' src='../images/${pins.image_url}' alt='${pins.title}'>
                     <div class='text'>
                       <h4 class='title'>${pins.title}</h4>
                       <p>${pins.description}</p>
                       <div class='porcion-usuario'>
                         <div class='circulo-color'>
                           <span class='usuario-circulo username'>N</span>
                         </div>
                         <span class='usuario-nombre user'>${pins.user}</span>
                         <span class='hashtag'>${pins.hashtag}</span>
                       </div>
                     </div>
                     <div class='views'>
                       <span>
                         <i class='fa fa-thumb-tack' aria-hidden='true'></i>
                         36,6k <i class='fa fa-check' aria-hidden='true'>77</i>
                       </span>
                     </div>
                   </div>`;

     pinsArray.push(htmlPin);
   });
   $(pinsContainer).html(pinsArray.join(''));
 };
 
 export default showPins;
