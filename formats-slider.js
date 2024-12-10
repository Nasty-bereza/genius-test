const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spacrBetween: 20,
      breakpoints: {
   
    780: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    }
  },

  pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button--active'
  },
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});