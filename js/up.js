var btn = $('#up'); //создаем переменную для кнопки

    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) { //отслеживаем высоту от верха страницы в 100px
        btn.addClass('show'); // присваиваем кнопке класс show для управления видимостью
      } else {
        btn.removeClass('show'); // если меньше 500px от верха страницы убираем класс show
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300'); //при клике на кнопку плавно прокручиваем до верха body
    });