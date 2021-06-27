$(function () {
  $('.b-slogan__button-play').magnificPopup({
    //delegate: '.b-slogan__url', // child items selector, by clicking on it popup will open
    type: 'iframe',
    tLoading: 'Loading video #%curr%...',
    modal: false,
    markup: '<div class="mfp-iframe-scaler">' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      '</div>',
    callbacks: {
      open: function () {
        $('.mfp-close').remove();//удаление старой кнопки
        $('<button title="" type="button" class="mfp-close"></button>').appendTo('.mfp-container');
        //var content = $(".mfp-iframe");
      }
    }
  });
});