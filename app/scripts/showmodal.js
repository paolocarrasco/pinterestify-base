const showmodal = (modalContainer, pin) => {
   modalContainer.on('click', '.post', function () {
     const id = $(this).attr('id');
     const modal = $('.modal');
     console.log(id);
     const [post] = pin.filter(post => post.id == id);

     modal.removeClass('inactivo');
     $('.close').on('click', function (e) {
         modal.addClass('inactivo');
     });
     console.log(post);
     const {
         description,
         hashtag,
         image_url,
         title,
         user,
         username
     } = post;
     console.log(post);
     $('.post--title').text(title);
     $('.post--image').attr('src', `../images/${image_url}`);
     $('.post--image').attr('alt', title);
     $('.post--user').text(user);
     $('.post--username').text(username.charAt(0).toUpperCase());
     $('.post--hashtag').text(hashtag);
     $('.post--description').text(description);
   });
 };

 export default showmodal;
