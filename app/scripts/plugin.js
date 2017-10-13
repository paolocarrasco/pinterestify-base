import showPines from './show-pins';
// import modalPines from './modal-pins';

$.fn.pinterestify = (options) => {
  const {data} = options;
  showPines(data, $(this));

  // $(this).on('click', '.post', modalPines());

};
