
    new WOW().init();
    let count = "";
    $('#navbar > a').click(function () {
      if (count === "") {
        count = $(this).attr('id');
        $(this).addClass('active');
        if (count === '2' || count === '22') {
          if (count === '2') {
            $('#22').addClass('active');
          } else {
            $('#2').addClass('active');
          }
          $('#vehicles').css('display', 'block');
          $('.vehicle_close').addClass('animate__fadeInRight');
          $('.vehicles__nav').addClass('animate__fadeInDown');
          $('.vehicles__list').addClass('animate__fadeInUp');
        } else {
          $('#shoppingTool').css('display', 'block');
        }
      } else {
        if (count === $(this).attr('id')) {
          count = "";
          $(this).removeClass('active');
          if ($(this).attr('id') === '2' || $(this).attr('id') === '22') {
            if ($(this).attr('id') === '2') {
              $('#22').removeClass('active');
            } else {
              $('#2').removeClass('active');
            }

            $('.vehicles__nav').addClass('animate__fadeOutUp');
            $('.vehicles__list').addClass('animate__fadeOutDown');
            $('.vehicle_close').addClass('animate__fadeOutRight');
            setTimeout(function () {
              $('#vehicles').css('display', 'none');
              $('.vehicles__nav').removeClass('animate__fadeOutUp');
              $('.vehicles__list').removeClass('animate__fadeOutDown');
              $('.vehicle_close').removeClass('animate__fadeOutRight');
            }, 300);

          }
        } else {
          $('#navbar > a').removeClass('active');
          $(this).addClass('active');
          //Trường hợp ấn vào lần 2, lần trc là id 2 hoặc 22, giờ kiểm tra từng trường hợp
          if (count === '2' || count === '22') {
            if (count === '2' && $(this).attr('id') === '22') {
              $('#navbar > a').removeClass('active');
              $('.vehicles__nav').addClass('animate__fadeOutUp');
              $('.vehicles__list').addClass('animate__fadeOutDown');
              $('.vehicle_close').addClass('animate__fadeOutRight');
              setTimeout(function () {
                $('#vehicles').css('display', 'none');
                $('.vehicles__nav').removeClass('animate__fadeOutUp');
                $('.vehicles__list').removeClass('animate__fadeOutDown');
                $('.vehicle_close').removeClass('animate__fadeOutRight');
              }, 300);
              count = "";
              return;
            }
            if (count === '22' && $(this).attr('id') === '2') {
              $('#navbar > a').removeClass('active');
              $('.vehicles__nav').addClass('animate__fadeOutUp');
              $('.vehicles__list').addClass('animate__fadeOutDown');
              $('.vehicle_close').addClass('animate__fadeOutRight');
              setTimeout(function () {
                $('#vehicles').css('display', 'none');
                $('.vehicles__nav').removeClass('animate__fadeOutUp');
                $('.vehicles__list').removeClass('animate__fadeOutDown');
                $('.vehicle_close').removeClass('animate__fadeOutRight');
              }, 300);
              count = "";
              return;
            }
          }
          count = $(this).attr('id');
          if ($(this).attr('id') === '2' || $(this).attr('id') === '22') {
            if ($(this).attr('id') === '2') {
              $('#22').addClass('active');
            } else {
              $('#2').addClass('active');
            }
            $('#shoppingTool').css('display', 'none');
            $('#vehicles').css('display', 'block');
            $('.vehicle_close').addClass('animate__fadeInRight');
            $('.vehicles__nav').addClass('animate__fadeInDown');
            $('.vehicles__list').addClass('animate__fadeInUp');
          } else {
            $('.vehicles__nav').addClass('animate__fadeOutUp');
            $('.vehicles__list').addClass('animate__fadeOutDown');
            $('.vehicle_close').addClass('animate__fadeOutRight');
            setTimeout(function () {
              $('#vehicles').css('display', 'none');
              $('.vehicles__nav').removeClass('animate__fadeOutUp');
              $('.vehicles__list').removeClass('animate__fadeOutDown');
              $('.vehicle_close').removeClass('animate__fadeOutRight');
            }, 300);

            $('#shoppingTool').css('display', 'block');

          }

        }
      }
    })

    $('.vehicle_close').click(function () {
      $('.vehicles__nav').addClass('animate__fadeOutUp');
      $('.vehicles__list').addClass('animate__fadeOutDown');
      $('.vehicle_close').addClass('animate__fadeOutRight');
      setTimeout(function () {
        $('#vehicles').css('display', 'none');
        $('.vehicles__nav').removeClass('animate__fadeOutUp');
        $('.vehicles__list').removeClass('animate__fadeOutDown');
        $('.vehicle_close').removeClass('animate__fadeOutRight');
      }, 300);
      $(`#${count}`).removeClass('active');
      count = "";

    })

    $(".active_indicators > li").click(function () {
      $(".active_indicators > li").removeClass("active");
      $(this).addClass("active");

    })

    $('.indicatos_xs_header').click(function () {
      $('.carousel_indicators_xs ul').slideToggle();
      if ($('.indicatos_xs_header i').hasClass('transform_rotate')) {
        $('.indicatos_xs_header i').removeClass('transform_rotate');
      } else {
        $('.indicatos_xs_header i').addClass('transform_rotate');
      }

    })

    $('.carousel_indicators_xs ul li').click(function () {
      if ($('.indicatos_xs_header i').hasClass('transform_rotate')) {
        $('.indicatos_xs_header i').removeClass('transform_rotate');
      }
      $('.indicatos_xs_header span').html($(this).html());
      $('.carousel_indicators_xs ul').slideUp();
    })

    //xử lý thêm active cho thẻ li ở carousel our_vehicles khi ấn vào nút prev hoặc next
    let count1 = 0;
    $('.carousel-control-prev').click(function () {
      $('.my_indicators li').removeClass('active');
      if (count1 === 0) {
        count1 = 4;
      } else {
        count1--;
      }
      $('.my_indicators li').each(function (i) {
        if (i === count1) {
          $(this).addClass('active');
          $('.indicators_title span').html($(this).html());
        } else {
          i++;
        }
      })
    })

    $('.carousel-control-next').click(function () {
      $('.my_indicators li').removeClass('active');
      if (count1 === 4) {
        count1 = 0;
      } else {
        count1++;
      }
      $('.my_indicators li').each(function (i) {
        if (i === count1) {
          $(this).addClass('active');
          $('.indicators_title span').html($(this).html());
        } else {
          i++;
        }
      })
    })

    $('.back_to_top').click(function () {
      $('html, body').scrollTop(0);
    });

    function collapse(){
      let screenSize = $(window).width();
      console.log(screenSize);
      if (screenSize >= 751){
        $('.footer_collapse_nav').removeClass('collapse');
      } else {
        $('.footer_collapse_nav').addClass('collapse');
      }
    }
    $(window).resize(function(){
      collapse();
    })
    $(document).ready(function(){
      collapse();
    })