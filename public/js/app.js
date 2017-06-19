$('.button-collapse').sideNav({
  edge: 'left',
  draggable: true,
});


$(document).ready(function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});