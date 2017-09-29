const resaltarPines = (pines, pinesContainer) => {
	pinesContainer.on('click', '.post', function() {
		const dataDescription = $(this).attr('id');
		const modal = $('.modal');

		const [pin] = pines.filter(pin => pin.id == dataDescription);

		modal.removeClass('inactivo');

		const {title, description, image_url, user, username,hashtag} = pin;

		modal.find('.post--title').text(title);
		modal.find('.post--image').attr('src',`images/${image_url}`);
    	modal.find('.post--description').text(description);
    	modal.find('.post--hashtag').text(`#${hashtag}`)
    	modal.find('.post--user').text(user);
    	modal.find('.post--username').html(username.slice(0,1).toUpperCase());
    	modal.on('click',() => {
    		$('.modal').addClass('inactivo');
    	})
	});
};

export default resaltarPines;