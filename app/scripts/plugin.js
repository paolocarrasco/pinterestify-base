import showPins from './app';

$.fn.pinterestify = function(data) {
    const {pins} = data;
    const modal = $('.modal');

    showPins(pins, $(this));

    $(this).on('click', '.post', function() {
        const id = $(this).attr('id');
        const [pin] = pins.filter(pin => pin.id == id);
        const {title, image_url, username, user, hashtag, description} = pin;
        modal.show();

        $.each(pin, function(key, value) {
            const tagToFind = key === 'image_url' ? $('.post--image') : $(`.post--${key}`);
            if (key === 'image_url') {
                modal.find(tagToFind).attr('src', `images/${value}`);
                modal.find(tagToFind).attr('alt', title); 
            } else if (key === 'hashtag') {
                modal.find(tagToFind).text(`#${value}`);
            } else if (key === 'username') {
                modal.find(tagToFind).text(value.split('')[0].toUpperCase());
            } else {
                modal.find(tagToFind).text(value);
            }
        });
    });

    $('.modal').on('click', '.close', function() {
        modal.hide();
    });
}