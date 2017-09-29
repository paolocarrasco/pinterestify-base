const modalPines = (pinesContainer, pines) => {

	pinesContainer.on('click', '.post', function() {
		const id = $(this).attr('id');
		const modal = $('.modal');
		const [pin] = pines.filter(pin => pin.id == id);

		modal.removeClass('inactivo');

		const {title, description, image_url, user, username, hashtag} = pin;

		modal.find('.post--title').text(title);
		modal.find('.post--image').attr('src', `images/${image_url}`);
		modal.find('.post--username').text(`${(pin.username).charAt(0).toUpperCase()}`);
		modal.find('.post--user').text(user);
		modal.find('.post--hashtag').text(`#${hashtag}`);
		modal.find('.post--description').text(description);
	});

	$('.close').on('click', function() {
		$('.modal').addClass('inactivo');
	});
};

export default modalPines;