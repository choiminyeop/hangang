const toggleBtn = document.querySelector('.kr-en-box');
const menu = document.querySelector('.main-menu');

toggleBtn.addEventListener('click',()=>{
  menu.classList.toggle('active');
});

setInterval(function(){
    $('.hello').fadeOut(3200)
});





$(function(){
  $('.li1').mouseover(function(){
    $('.sec02-text-li1').fadeIn(1000)
    $('.sec02-text-li2').css('display','none');
    $('.sec02-text-li3').css('display','none');
    $('.sec02-text-li4').css('display','none');
    $('.sec02-text-line').css('position','absolute').css('top','41%');
    $('.sec02-text-li2-img').css('display','none');
    $('.sec02-text-li3-img').css('display','none');
    $('.sec02-text-li4-img').css('display','none');
    $('.sec02-text-li1-img').fadeIn(1500);

  });
});
$(function(){
  $('.li2').mouseover(function(){
    $('.sec02-text-li2').fadeIn(1000);
    $('.sec02-text-li1').css('display','none');
    $('.sec02-text-li3').css('display','none');
    $('.sec02-text-li4').css('display','none');
    $('.sec02-text-line').css('position','absolute').css('top','54%');
    $('.sec02-text-li1-img').css('display','none');
    $('.sec02-text-li3-img').css('display','none');
    $('.sec02-text-li4-img').css('display','none');
    $('.sec02-text-li2-img').fadeIn(1500);
  });
});
$(function(){
  $('.li3').mouseover(function(){
    $('.sec02-text-li3').fadeIn(1000);
    $('.sec02-text-li1').css('display','none');
    $('.sec02-text-li2').css('display','none');
    $('.sec02-text-li4').css('display','none');
    $('.sec02-text-line').css('position','absolute').css('top','68%');
    $('.sec02-text-li1-img').css('display','none');
    $('.sec02-text-li2-img').css('display','none');
    $('.sec02-text-li4-img').css('display','none');
    $('.sec02-text-li3-img').fadeIn(1500);
  });
});
$(function(){
  $('.li4').mouseover(function(){
    $('.sec02-text-li4').fadeIn(1000);
    $('.sec02-text-li1').css('display','none');
    $('.sec02-text-li3').css('display','none');
    $('.sec02-text-li2').css('display','none');
    $('.sec02-text-line').css('position','absolute').css('top','81%');
    $('.sec02-text-li1-img').css('display','none');
    $('.sec02-text-li3-img').css('display','none');
    $('.sec02-text-li2-img').css('display','none');
    $('.sec02-text-li4-img').fadeIn(1500);
  });
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: { //반응형 조건 속성
    0: { //640 이상일 경우
      slidesPerView: 1, //레이아웃 2열
    },
    768: {
      slidesPerView: 2,
    },
    1500: {
      slidesPerView: 3,
    },
  }
  
});



$(function(){
  $('.sec03-btn-1').click(function(){
    $('.wind-surfing-content').css('display','flex');
    $('.kayak-content').css('display','none');
    $('.paddleboard-content').css('display','none');
    $('.sec03-btn-1').css('background-color','#f9b233').css('color','#ffffff').css('border','none');
    $('.sec03-btn-2').css('background-color','#ffffff').css('border','1px solid lightgrey').css('color','gray');
    $('.sec03-btn-3').css('background-color','#ffffff').css('border','1px solid lightgrey').css('color','gray');
  });
});
$(function(){
$('.sec03-btn-2').click(function(){
  $('.kayak-content').css('display','flex');
  $('.wind-surfing-content').css('display','none');
  $('.paddleboard-content').css('display','none');
  $('.sec03-btn-2').css('background-color','#f9b233').css('color','#ffffff').css('border','none');
  $('.sec03-btn-1').css('background-color','#ffffff').css('border','1px solid lightgrey').css('color','gray');
  $('.sec03-btn-3').css('background-color','#ffffff').css('border','1px solid lightgrey').css('color','gray');
});
});
$(function(){
$('.sec03-btn-3').click(function(){
  $('.paddleboard-content').css('display','flex');
  $('.kayak-content').css('display','none');
  $('.wind-surfing-content').css('display','none');
  $('.sec03-btn-3').css('background-color','#f9b233').css('color','#ffffff').css('border','none');
  $('.sec03-btn-2').css('background-color','#ffffff').css('border','1px solid lightgrey').css('color','gray');
  $('.sec03-btn-1').css('background-color','#ffffff').css('border','1px solid lightgrey').css('color','gray');
});
});










$(function(){
  $('.sec05-img-box-1>img').mouseover(function(){
    $('.sec05-img-box-1-text').fadeIn(500);
  });
  $('.sec05-img-box-1-text').mouseover(function(){
    $('.sec05-img-box-1-text').css('display','block')
  });
  $('.sec05-img-box-1-text').mouseleave(function(){
    $('.sec05-img-box-1-text').fadeOut(500);
  });
});
$(function(){
  $('.sec05-img-box-2>img').mouseover(function(){
    $('.sec05-img-box-2-text').fadeIn(500);
  });
  $('.sec05-img-box-2-text').mouseover(function(){
    $('.sec05-img-box-2-text').css('display','block')
  });
  $('.sec05-img-box-2-text').mouseleave(function(){
    $('.sec05-img-box-2-text').fadeOut(500);
  });
});
$(function(){
  $('.sec05-img-box-3>img').mouseover(function(){
    $('.sec05-img-box-3-text').fadeIn(500);
  });
  $('.sec05-img-box-3-text').mouseover(function(){
    $('.sec05-img-box-3-text').css('display','block')
  });
  $('.sec05-img-box-3-text').mouseleave(function(){
    $('.sec05-img-box-3-text').fadeOut(500);
  });
});
$(function(){
  $('.sec05-img-box-4>img').mouseover(function(){
    $('.sec05-img-box-4-text').fadeIn(500);
  });
  $('.sec05-img-box-4-text').mouseover(function(){
    $('.sec05-img-box-4-text').css('display','block')
  });
  $('.sec05-img-box-4-text').mouseleave(function(){
    $('.sec05-img-box-4-text').fadeOut(500);
  });
});