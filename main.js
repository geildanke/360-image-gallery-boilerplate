'use strict';

$(document).ready(function() {
  let button = $('#links');
  console.log(button);

  setTimeout(function() {
    console.log('Changing');
    button.attr('position', '0 -1 -4');
  }, 2000);
});
