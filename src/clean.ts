import * as $ from 'jquery';
import './styles/style.css';

$(function() {
  $('img').addClass('toggleable');
  $('img').addClass('blur-img');
  //   $('img').click(function() {
  //     $(this).toggleClass('blur-img');
  //     console.log('hola');
  //   });
  var imgs = document.getElementsByClassName('toggleable');
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener(
      'click',
      function(element) {
        console.log('Hola');
        this.classList.toggle('blur-img');
      },
      false
    );
  }
});
