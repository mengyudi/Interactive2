$(function() {
  $('.block1').css({
    opacity: '1'
  });
  $('.block2').css({
    opacity: '0'
  });
  $('.block3').css({
    opacity: '0'
  });
  $('.block4').css({
    opacity: '0'
  });
  $('.block5').css({
    opacity: '0'
  });
  $('.block6').css({
    opacity: '0'
  });
  $('.block7').css({
    opacity: '0'
  });
  $('.block8').css({
    opacity: '0'
  });
  // $('.block6').css({opacity: '0'});
  // $('.block7').css({opacity: '0'});
  // $('.block8').css({opacity: '0'});
  $(window).scroll(function() {


    var position = $(window).scrollTop();

    if (position > 0 && position < 600) {
      //$('body').css('background', 'white');
      $('.block1').css({
        opacity: '1'
      });
      $('.block2').css({
        opacity: '0'
      });
      $('.block3').css({
        opacity: '0'
      });
      $('.block4').css({
        opacity: '0'
      });
      $('.block5').css({
        opacity: '0'
      });
      $('.block6').css({
        opacity: '0'
      });
      $('.block7').css({
        opacity: '0'
      });
      $('.block8').css({
        opacity: '0'
      });

      $('.stick1, .stick2, .stick3, .stick4').css('background', 'white');

      $('.stick1').css({
        transform: 'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '400px'
      });
      $('.stick2').css({
        transform: 'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '400px'
      });
      $('.stick3').css({
        transform: 'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '400px'
      });
      $('.stick4').css({
        transform: 'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '400px'
      });

$('.font1').fadeIn(20);
    } else if (position > 600 && position < 1200) {

      // $('body').css('background', 'blue');

      $('.block1').css({
        opacity: '0'
      });
      $('.block2').css({
        opacity: '1'
      });
      $('.block3').css({
        opacity: '0'
      });
      $('.block4').css({
        opacity: '0'
      });
      $('.block5').css({
        opacity: '0'
      });
      $('.block6').css({
        opacity: '0'
      });
      $('.block7').css({
        opacity: '0'
      });
      $('.block8').css({
        opacity: '0'
      });
      $('.stick1, .stick2, .stick3, .stick4').css('background', 'white');

      $('.stick1').css({
        transform: 'rotate(5deg)',
        left: '-550px',
        top: '-50px',
        height: '800px'
      });
      $('.stick2').css({
        transform: 'rotate(-30deg)',
        left: '-374px',
        top: '-90px',
        height: '800px'
      });
      $('.stick3').css({
        transform: 'rotate(15deg)',
        left: '-167px',
        top: '52px',
        height: '630px'
      });
      $('.stick4').css({
        transform: 'rotate(-60deg)',
        left: '0px',
        top: '-4px',
        height: '450px'
      });

    $('.font1').fadeOut(0);
    $('.font2').fadeIn(20);

    } else if (position > 1200 && position < 1800) {

      // $('body').css('background', 'red');
      $('.block2').css({
        opacity: '0'
      });
      $('.block3').css({
        opacity: '1'
      });
      $('.block1').css({
        opacity: '0'
      });
      $('.block4').css({
        opacity: '0'
      });
      $('.block5').css({
        opacity: '0'
      });
      $('.block6').css({
        opacity: '0'
      });
      $('.block7').css({
        opacity: '0'
      });
      $('.block8').css({
        opacity: '0'
      });
      $('.stick1, .stick2, .stick3, .stick4').css('background', 'white');

      $('.stick1').css({
        transform: 'rotate(15deg)',
        left: '84px',
        top: '-45px',
        height: '630px'
      });
      $('.stick2').css({
        transform: 'rotate(-40deg)',
        left: '335px',
        top: '-105px',
        height: '790px'
      });
      $('.stick3').css({
        transform: 'rotate(-15deg)',
        left: '467px',
        top: '-27px',
        height: '650px'
      });
      $('.stick4').css({
        transform: 'rotate(-50deg)',
        left: '480px',
        top: '-50px',
        height: '375px'
      });
      $('.font2').fadeOut(0);
      $('.font3').fadeIn(20);

    } else if (position > 1800 && position < 2400) {
      // $('body').css('background', 'yellow');
      $('.block3').css({
        opacity: '0'
      });
      $('.block4').css({
        opacity: '1'
      });
      $('.block1').css({
        opacity: '0'
      });
      $('.block2').css({
        opacity: '0'
      });
      $('.block5').css({
        opacity: '0'
      });
      $('.block6').css({
        opacity: '0'
      });
      $('.block7').css({
        opacity: '0'
      });
      $('.block8').css({
        opacity: '0'
      });
      $('.stick1, .stick2, .stick3, .stick4').css('background', 'white');

      $('.stick1').css({
        transform: 'rotate(25deg)',
        left: '-550px',
        top: '-50px',
        height: '420px'
      });
      $('.stick2').css({
        transform: 'rotate(-20deg)',
        left: '-398px',
        top: '-58px',
        height: '800px'
      });
      $('.stick3').css({
        transform: 'rotate(10deg)',
        left: '-250px',
        top: '88px',
        height: '640px'
      });
      $('.stick4').css({
        transform: 'rotate(-50deg)',
        left: '-88px',
        top: '35px',
        height: '520px'
      });
      $('.font3').fadeOut(0);
      $('.font4').fadeIn(20);

    } else if (position > 2400 && position < 3000) {
      // $('body').css('background', 'white');
      $('.block4').css({
        opacity: '0'
      });
      $('.block1').css({
        opacity: '0'
      });
      $('.block2').css({
        opacity: '0'
      });
      $('.block3').css({
        opacity: '0'
      });
      $('.block5').css({
        opacity: '1'
      });
      $('.block6').css({
        opacity: '0'
      });
      $('.block7').css({
        opacity: '0'
      });
      $('.block8').css({
        opacity: '0'
      });
      $('.stick1, .stick2, .stick3, .stick4').css('background', 'white');

      $('.stick1').css({
        transform: 'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });
      $('.stick2').css({
        transform: 'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });
      $('.stick3').css({
        transform: 'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });
      $('.stick4').css({
        transform: 'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });
      $('.font4').fadeOut(0);
      $('.font5').fadeIn(20);

    }else if (position > 3000 && position < 3600) {

    // $('body').css('background', 'blue');

    $('.block1').css({
      opacity: '0'
    });
    $('.block2').css({
      opacity: '0'
    });
    $('.block3').css({
      opacity: '0'
    });
    $('.block4').css({
      opacity: '0'
    });
    $('.block5').css({
      opacity: '0'
    });
    $('.block6').css({
      opacity: '1'
    });
    $('.block7').css({
      opacity: '0'
    });
    $('.block8').css({
      opacity: '0'
    });
    $('.stick1, .stick2, .stick3, .stick4').css('background', 'white');

    $('.stick1').css({
      transform: 'rotate(5deg)',
      left: '-550px',
      top: '-50px',
      height: '800px'
    });
    $('.stick2').css({
      transform: 'rotate(-30deg)',
      left: '-374px',
      top: '-90px',
      height: '800px'
    });
    $('.stick3').css({
      transform: 'rotate(15deg)',
      left: '-167px',
      top: '52px',
      height: '630px'
    });
    $('.stick4').css({
      transform: 'rotate(-60deg)',
      left: '0px',
      top: '-4px',
      height: '450px'
    });

  $('.font5').fadeOut(0);
  $('.font6').fadeIn(20);
}else if (position > 3600 && position < 4200) {

  // $('body').css('background', 'red');
  $('.block2').css({
    opacity: '0'
  });
  $('.block3').css({
    opacity: '0'
  });
  $('.block1').css({
    opacity: '0'
  });
  $('.block4').css({
    opacity: '0'
  });
  $('.block5').css({
    opacity: '0'
  });
  $('.block6').css({
    opacity: '0'
  });
  $('.block7').css({
    opacity: '1'
  });
  $('.block8').css({
    opacity: '0'
  });
  $('.stick1, .stick2, .stick3, .stick4').css('background', 'white');

  $('.stick1').css({
    transform: 'rotate(15deg)',
    left: '84px',
    top: '-45px',
    height: '630px'
  });
  $('.stick2').css({
    transform: 'rotate(-40deg)',
    left: '335px',
    top: '-105px',
    height: '790px'
  });
  $('.stick3').css({
    transform: 'rotate(-15deg)',
    left: '467px',
    top: '-27px',
    height: '650px'
  });
  $('.stick4').css({
    transform: 'rotate(-50deg)',
    left: '480px',
    top: '-50px',
    height: '375px'
  });
  $('.font6').fadeOut(0);
  $('.font7').fadeIn(20);
}




  });
});
