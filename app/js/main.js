const body = document.querySelector('body');
//отображение отзывов
if (document.querySelector('.train-reviews__still')) {

  const showBtnAdd = document.querySelector('.train-reviews__still');
  const showBtnHide = document.querySelector('.train-reviews__still-remove');

  const reviewsShow = () => {
    showBtnHide.classList.add('train-reviews__still--hide');
    let reviewsList = document.querySelectorAll('.train-reviews__item');
    if (reviewsList.length > 3) {
      for (let i = 3; i < reviewsList.length; i++) {
        reviewsList[i].classList.add('train-reviews__item--hidden')
      }
    } else {
      showBtnAdd.classList.add('train-reviews__still--hide');
    }
  }

  function addReviews() {
    let reviesHidden = [...document.querySelectorAll('.train-reviews__item--hidden')].slice(0, 3);
    reviesHidden.forEach(item => item.classList.remove('train-reviews__item--hidden'));
  }

  showBtnAdd.addEventListener('click', function () {
    addReviews();
    let reviesHidden = document.querySelectorAll('.train-reviews__item--hidden');
    if (reviesHidden.length == 0) {
      showBtnAdd.classList.add('train-reviews__still--hide')
      showBtnHide.classList.remove('train-reviews__still--hide')
    }
  })

  reviewsShow();
  showBtnHide.addEventListener('click', () => {
    showBtnAdd.classList.remove('train-reviews__still--hide')
    reviewsShow();
  })
}

//мобильное меню
const menuTitle = () => {
  const menuLink = document.querySelectorAll('.header__nav-title');
  const navBox = document.querySelectorAll('.header__nav-box');

  menuLink.forEach((item, i) => {
    item.addEventListener('click', function () {
      if (this.classList.contains('header__nav-title')) {
        if (navBox[i].classList.contains('header__nav-box--active')) {
          navBox[i].classList.remove('header__nav-box--active')
        } else {
          navBox[i].classList.add('header__nav-box--active')
        }
      }
    })
  })
};
menuTitle()

//Поиск по сайту
const searchMob = () => {
  const headHeader = document.querySelector('.head__header');
  const header = document.querySelector('.header');

  body.addEventListener('click', (e) => {

    if (document.querySelector('.head__header')) {
      if (e.target.classList.contains('head__search-btn--mobile')) {
        headHeader.classList.add('head__header--search-show')
      } else if (e.target.classList.contains('head__header--search-show') ||
        e.target.classList.contains('head__title') ||
        e.target.classList.contains('header__burger')) {
        headHeader.classList.remove('head__header--search-show')
      }
    };

    if (document.querySelector('.header')) {
      if (e.target.classList.contains('header__search-btn--mobile')) {
        header.classList.add('head__header--search-show')
      } else if (e.target.classList.contains('head__header--search-show') ||
        e.target.classList.contains('head__title') ||
        e.target.classList.contains('header__burger')) {
        header.classList.remove('head__header--search-show')
      }
    }
  })
}
searchMob();

//прилипающая менюшка
const scrollMenu = () => {
  if (document.querySelector('.top__buttons')) {
    const topBtn = document.querySelectorAll('.top__buttons-btn');
    const topInner = document.querySelector('.top__inner');

    const hotel = document.getElementById('hotel');
    const transfer = document.getElementById('transfer');
    const reviews = document.getElementById('reviews');
    const timetable = document.getElementById('timetable');

    topBtn.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const id = item.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });

    const btnInner = document.querySelector('.top__buttons');
    const btnInnerOffsetTop = btnInner.offsetTop;

    window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY;

      if (scrollDistance > btnInnerOffsetTop) {
        topInner.classList.add('top__inner--active');
      } else if (scrollDistance < btnInnerOffsetTop) {
        topInner.classList.remove('top__inner--active');
      }

      if (timetable.offsetTop - btnInner.clientHeight <= scrollDistance) {
        topBtn.forEach((el) => {
          if (el.classList.contains('top__buttons-btn--active')) {
            el.classList.remove('top__buttons-btn--active');
          }
        });
        topBtn[0].classList.add('top__buttons-btn--active');
      };
      if (hotel.offsetTop - btnInner.clientHeight <= scrollDistance) {
        topBtn.forEach((el) => {
          if (el.classList.contains('top__buttons-btn--active')) {
            el.classList.remove('top__buttons-btn--active');
          }
        });
        topBtn[1].classList.add('top__buttons-btn--active');
      };
      if (transfer.offsetTop - btnInner.clientHeight <= scrollDistance) {
        topBtn.forEach((el) => {
          if (el.classList.contains('top__buttons-btn--active')) {
            el.classList.remove('top__buttons-btn--active');
          }
        });
        topBtn[2].classList.add('top__buttons-btn--active');
      };
      if (reviews.offsetTop - btnInner.clientHeight <= scrollDistance) {
        topBtn.forEach((el) => {
          if (el.classList.contains('top__buttons-btn--active')) {
            el.classList.remove('top__buttons-btn--active');
          }
        });
        topBtn[3].classList.add('top__buttons-btn--active');
      };
    });
  }
};
scrollMenu();

//бургер меню
const burgerMenu = () => {
  const burger = document.querySelector('.header__burger');
  const headerNav = document.querySelector('.header__nav');
  const userIcon = document.querySelector('.header__lk-svg');

  burger.addEventListener('click', () => {
    if (document.querySelector('.header__lk-svg')) {
      if (burger.classList.contains('header__burger--open')) {
        burger.classList.remove('header__burger--open')
        headerNav.classList.remove('header__nav--open')
        userIcon.classList.remove('header__lk-svg--open')
        body.classList.remove('body-mob-open')
      } else if (burger.classList.contains('header__burger')) {
        burger.classList.add('header__burger--open')
        headerNav.classList.add('header__nav--open')
        userIcon.classList.add('header__lk-svg--open')
        body.classList.add('body-mob-open')
      }
    } else {
      if (burger.classList.contains('header__burger--open')) {
        burger.classList.remove('header__burger--open')
        headerNav.classList.remove('header__nav--open')
        body.classList.remove('body-mob-open')
      } else if (burger.classList.contains('header__burger')) {
        burger.classList.add('header__burger--open')
        headerNav.classList.add('header__nav--open')
        body.classList.add('body-mob-open')
      }
    }
  })
}
burgerMenu();

//Обрезание текста отзыва
const textClipping = () => {
  let textReview = document.querySelectorAll('.slider-reviews__text > p');

  textReview.forEach((item) => {
    if (item.textContent.trim().length > 262) {
      item.textContent = item.textContent.trim().substring(0, 262).concat('...');
    }
  })
}
textClipping();

const wagonTop = () => {
  const wagonTrain = document.querySelectorAll('.tickets-search-one__wagon-top-train');

  wagonTrain.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.classList.contains('tickets-search-one__wagon-top-train--active')) {
        this.classList.remove('tickets-search-one__wagon-top-train--active');
      } else {
        wagonTrain.forEach((item) => {
          item.classList.remove('tickets-search-one__wagon-top-train--active');
        });
        this.classList.add('tickets-search-one__wagon-top-train--active')
      }
    })
  });
};
wagonTop();

//добавление отзыва
const modalReview = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalForm = document.querySelector('.modal');
  const modalSendCom = document.querySelector('.modal-sendcomment');

  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('slider-reviews__add') || e.target.classList.contains('train-reviews__btn')) {
      modalOverlay.style.display = 'block';
      modalForm.classList.add('modal--active');
    }
    if (e.target.classList.contains('modal__close') || e.target.classList.contains('modal-overlay')) {
      modalOverlay.style.display = 'none';
      modalForm.classList.remove('modal--active');
    }
    if (e.target.classList.contains('modal-sendcomment__end') || e.target.classList.contains('modal-sendcomment__close')) {
      modalOverlay.style.display = 'none';
      modalSendCom.classList.remove('modal-sendcomment--active');
    }
    if (e.target.classList.contains('modal__form-btn')) {
      e.preventDefault();
      modalForm.classList.remove('modal--active');
      modalSendCom.classList.add('modal-sendcomment--active');
    }
  });
};
modalReview();

//модальное окно
const linkLk = document.querySelector('.header__lk-link');
const modalLk = document.querySelector('.header__modal');
linkLk.addEventListener('click', () => {
  modalLk.classList.toggle('header__modal--open')
});

//Скролл на верх
const scrollBtn = document.querySelector('.scroll-top');
window.onscroll = () => {

  if (window.pageYOffset > document.documentElement.clientHeight) {
    scrollBtn.style.opacity = '1';
    scrollBtn.style.pointerEvents = 'auto';
  } else {
    scrollBtn.style.opacity = '0';
    scrollBtn.style.pointerEvents = 'none';
  }
}
scrollBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

const transferSwipe = () => {
  const transgerInputOne = document.querySelector('.transfer__search-input--one');
  const transgerInputTwo = document.querySelector('.transfer__search-input--two');

  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('transfer__search-swipe')) {
      e.preventDefault();
      let who = transgerInputOne.value;
      let where = transgerInputTwo.value;
      transgerInputOne.value = where;
      transgerInputTwo.value = who;
    }
  });
};
transferSwipe();

const ticketsSwipe = () => {
  const transgerInputOne = document.querySelector('.branded-search__input-to');
  const transgerInputTwo = document.querySelector('.branded-search__input-where');

  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('search__content-swap')) {
      e.preventDefault();
      let who = transgerInputOne.value;
      let where = transgerInputTwo.value;
      transgerInputOne.value = where;
      transgerInputTwo.value = who;
    }
  });
};
ticketsSwipe();

//Изменение value input
const swap = () => {
  const inputWho = document.querySelector('.search__content-input--one');
  const inputWhere = document.querySelector('.search__content-input--where');
  const inputWhereMob = document.getElementById('where-mobile');
  const inputWhoMob = document.getElementById('who-mobile');

  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('search__content-swap')) {
      e.preventDefault();
      let who = inputWho.value;
      let where = inputWhere.value;
      inputWho.value = where;
      inputWhere.value = who;
    } else if (e.target.classList.contains('search__content-swap--mobile')) {
      e.preventDefault();
      let whoMob = inputWhoMob.value;
      let whereMob = inputWhereMob.value;
      inputWhoMob.value = whereMob;
      inputWhereMob.value = whoMob;
    };
  });
};
swap();

//покупка билетов свап
const ticketSwap = () => {
  const stationOne = document.getElementById('station-one');
  const stationTwo = document.getElementById('station-two');

  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('tickets-search-one__search-swap')) {
      e.preventDefault();
      let one = stationOne.value;
      let two = stationTwo.value;
      stationOne.value = two;
      stationTwo.value = one;
    }
  });
};
ticketSwap();

//Слайдер покупка билетов
new Swiper('.tickets-buy__inner', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".tickets-buy__btn-next",
    prevEl: ".tickets-buy__btn-prev",
  },
  breakpoints: {
    470: {
      spaceBetween: 26,
      slidesPerView: 3,
    },
    768: {
      spaceBetween: 22,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 45,
      slidesPerView: 3,
    },
  },
});
//Слайдер фирменные поезда
new Swiper('.branded-train-table__inner', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".branded-train-table__btn-next",
    prevEl: ".branded-train-table__btn-prev",
  },
  breakpoints: {
    768: {
      paceBetween: 26,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 45,
      slidesPerView: 3,
    },
  },
});
// Слайдер №1
new Swiper('.slider-direct__inner', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".slider-direct__btn-next",
    prevEl: ".slider-direct__btn-prev",
  },
  breakpoints: {
    470: {
      spaceBetween: 8,
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 17,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 45,
      slidesPerView: 3,
    },
  },
});
// Слайдер №2
new Swiper('.slider-reviews__inner', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".slider-reviews__btn-next",
    prevEl: ".slider-reviews__btn-prev",
  },
  breakpoints: {
    600: {
      spaceBetween: 8,
      slidesPerView: 2,
    },
    915: {
      spaceBetween: 17,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 45,
      slidesPerView: 3,
    },
  },
});
//hotel__slider №1
new Swiper('.hotel__slider', {
  loop: true,
  navigation: {
    nextEl: ".hotel__btn-next",
    prevEl: ".hotel__btn-prev",
  }
});

//hotel__slider №2
new Swiper('.hotel__slider-two', {
  loop: true,
  navigation: {
    nextEl: ".hotel__btn-next-two",
    prevEl: ".hotel__btn-prev-two",
  }
});
//hotel__slider №3
new Swiper('.hotel__slider-three', {
  loop: true,
  navigation: {
    nextEl: ".hotel__btn-next-three",
    prevEl: ".hotel__btn-prev-three",
  }
});
//календарь
new Swiper('.calendar__content', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//слайдер поезда
new Swiper('.branded-train-info__slider', {
  loop: true,
  navigation: {
    nextEl: ".branded-train-info__info-btn-next",
    prevEl: ".branded-train-info__info-btn-prev",
  }
});
//слайдер вагона
new Swiper('.branded-train-info__slider-railway', {
  loop: true,
  navigation: {
    nextEl: ".branded-train-info__railway-btn-next",
    prevEl: ".branded-train-info__railway-btn-prev",
  }
});

//Переключатель расписание и бронь
const tabHead = () => {
  const searchContent = document.querySelector('.search__content');
  const searchBooking = document.querySelector('.search__booking');
  const searchTop = document.querySelector('.search__top');
  const btnTable = document.querySelector('.head__btn-table');
  const btnBooking = document.querySelector('.head__btn-booking');

  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('head__btn-table')) {
      btnBooking.classList.remove('head__btn-booking--active')
      searchTop.classList.remove('search__top--active')
      btnTable.classList.add('head__btn-table--active')
      searchBooking.style.display = 'none';
      searchContent.style.display = 'block';
    } else if (e.target.classList.contains('head__btn-booking')) {
      btnTable.classList.remove('head__btn-table--active')
      btnBooking.classList.add('head__btn-booking--active')
      searchTop.classList.add('search__top--active');
      searchContent.style.display = 'none';
      searchBooking.style.display = 'block';
    }
  });
}
tabHead();

//Переключатель виджетов
const tabHomePage = () => {
  const menuListHome = document.querySelectorAll('.search__item-link');
  const searchContent = document.querySelectorAll('.search__content-tab');

  menuListHome.forEach((item, i) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      if (this.classList.contains('search__item-link--active')) {} else {
        menuListHome.forEach((item, i) => {
          item.classList.remove('search__item-link--active');
          searchContent[i].classList.remove('search__content-tab--active');
        });
        this.classList.add('search__item-link--active');
        searchContent[i].classList.add('search__content-tab--active');
      };
    });
  });
};
tabHomePage();

const tabTimetable = () => {
  const timetableBtn = document.querySelectorAll('.timetable__btn');
  const timetableContent = document.querySelectorAll('.timetable__inner');

  const falseBtn = document.querySelector('.timetable__false-btn');

  timetableBtn.forEach((item, i) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.classList.contains('timetable__btn--active')) {} else {
        timetableBtn.forEach((item, i) => {
          item.classList.remove('timetable__btn--active');
          timetableContent[i].classList.remove('timetable__inner--active');
        });
        this.classList.add('timetable__btn--active');
        timetableContent[i].classList.add('timetable__inner--active');
      };
    })
  })
  if (document.querySelector('.timetable__false-btn')) {
    falseBtn.addEventListener('click', () => {
      timetableContent[0].classList.add('timetable__inner--active');
      timetableBtn[0].classList.add('timetable__btn--active');
      timetableContent[1].classList.remove('timetable__inner--active');
      timetableBtn[1].classList.remove('timetable__btn--active');
    })
  }
}
tabTimetable();

// Таб Train page
const tabTrainPage = () => {
  const menuTrainHome = document.querySelectorAll('.search__top-item');
  const searchItem = document.querySelectorAll('.search__content-item');

  menuTrainHome.forEach((item, i) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      if (this.classList.contains('search__top-item--active')) {} else {
        menuTrainHome.forEach((item, i) => {
          item.classList.remove('search__top-item--active');
          searchItem[i].classList.remove('search__content-item--active');
        });
        this.classList.add('search__top-item--active');
        searchItem[i].classList.add('search__content-item--active');
      };
    });
  });
};
tabTrainPage();

//изменение количества звёзд
const trainStar = () => {
  let trainReviewsStar = document.querySelectorAll('.train-reviews__star');
  let trainReviewsNum = document.querySelectorAll('.train-reviews__star-num');
  trainReviewsStar.forEach((item, i) => {
    trainReviewsNum[i].textContent = item.getAttribute('data-rateyo-rating');
  })
};
trainStar();

// jQuery
$(function () {

  $(".tickets-search-one__price-range").ionRangeSlider({
    type: "double",
    min: 0,
    max: 200000,
    from: 2500,
    to: 112567,
    onStart: function (data) {
      $('.tickets-search-one__price-box-num--start').text(data.from);
      $('.tickets-search-one__price-box-num--end').text(data.to);
    },
    onChange: function (data) {
      $('.tickets-search-one__price-box-num--start').text(data.from);
      $('.tickets-search-one__price-box-num--end').text(data.to);
    },
  });

  $(".tickets-search-one__time-range").ionRangeSlider({
    type: "double",
    min: 0,
    max: 200000,
    from: 2500,
    to: 112567,
    onStart: function (data) {
      // $('.tickets-search-one__price-box-num--start').text(data.from);
      // $('.tickets-search-one__price-box-num--end').text(data.to);
    },
    onChange: function (data) {
      // $('.tickets-search-one__price-box-num--start').text(data.from);
      // $('.tickets-search-one__price-box-num--end').text(data.to);
    },
  });

  $(".tickets-search-one__input-date").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm',
    beforeShow(input) {
      if (input.closest('.tickets-search-one__input-date')) {
        document.querySelector('#ui-datepicker-div').classList.add('tickets-search-one__search-calendar');
      }
    },
  });

  $(".tickets-search-one__search-input-date").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm',
    beforeShow(input) {
      if (input.closest('.tickets-search-one__search-input-date')) {
        document.querySelector('#ui-datepicker-div').classList.add('tickets-search-one__calendar');
      }
    },
  });

  $(".tickets-search-two__search-input-date").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm',
    beforeShow(input) {
      if (input.closest('.tickets-search-two__search-input-date')) {
        document.querySelector('#ui-datepicker-div').classList.add('tickets-search-two__calendar');
      }
    },
  });

  $(".tickets-search-three__search-input-date").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm',
    beforeShow(input) {
      if (input.closest('.tickets-search-three__search-input-date')) {
        document.querySelector('#ui-datepicker-div').classList.add('tickets-search-three__calendar');
      }
    },
  });

  $(".tickets-buy__input-date").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm.yy',
    beforeShow(input) {
      if (input.closest('.tickets-buy__input-date')) {
        document.querySelector('#ui-datepicker-div').classList.add('tickets-buy__calendar');
      }
    },
  });

  $(".branded-search__input-date").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm.yy',
    beforeShow(input) {
      if (input.closest('.branded-search__input-date')) {
        document.querySelector('#ui-datepicker-div').classList.add('branded-search__calendar-tickets');
      }
    },
  });

  $(".search__booking-input--date").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm.yy',
    beforeShow(input) {
      document.querySelector('#ui-datepicker-div').classList.add('search__booking-calendar');
    },
  });
  $(".search__mobile-input--route").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm.yy',
    beforeShow(input) {
      document.querySelector('#ui-datepicker-div').classList.add('search__mobile-calendar--route');
    },
  });
  $(".search__mobile-route--input").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm.yy',
    beforeShow(input) {
      document.querySelector('#ui-datepicker-div').classList.add('search__mobile-route--calendar');
    },
  });
  $(".search__mobile-station--input").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm.yy',
    beforeShow(input) {
      document.querySelector('#ui-datepicker-div').classList.add('search__mobile-station--calendar');
    },
  });

  $(".search__mobile-input--station").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm.yy',
    beforeShow(input) {
      document.querySelector('#ui-datepicker-div').classList.add('search__mobile-date--route-train');
    },
  });

  $(".branded-search__mobile-input").datepicker({
    language: ['ru'],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    dateFormat: 'DD, d.mm.yy',
    beforeShow(input) {
      if (input.closest('.branded-search__input-date')) {
        document.querySelector('#ui-datepicker-div').classList.add('branded-search__calendar');
      }
      if (input.closest('.branded-search__input--train-date')) {
        document.querySelector('#ui-datepicker-div').classList.add('branded-search__calendar-train');
      }
    },
  });

  $(".search__mobile-input--date").datepicker({
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    dateFormat: 'd MM yy',
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    firstDay: 1,
    numberOfMonths: 2,
    beforeShow(input) {
      if (input.closest('.search__mobile-input--train')) {
        document.querySelector('#ui-datepicker-div').classList.add('search__mobile-date--train');
      }
      // if (input.closest('.search__mobile-input--route')) {
      //   document.querySelector('#ui-datepicker-div').classList.add('search__mobile-date--route');
      // }
    },
  });

  $(".search-to").datepicker({
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    dateFormat: 'DD, d.mm',
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    numberOfMonths: 2,
    // beforeShow(input, obj) {
    //   if (input.closest('.search-to')) {
    //     document.querySelector('#ui-datepicker-div').classList.add('search__mobile-to-calendar');
    //   };
    //   obj.dpDiv[0].style.marginTop = input.offsetTop + input.offsetHeight + 5 + 'px'
    //   obj.dpDiv[0].dataset.title = input.dataset.title
    // },
  });

  $(".search__mobile-date").datepicker({
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    dateFormat: 'd MM yy',
    prevText: '',
    nextText: '',
    showOtherMonths: true,
    numberOfMonths: 2,
    beforeShow(input) {
      if (input.closest('.search__mobile-date')) {
        document.querySelector('#ui-datepicker-div').classList.add('search__mobile-date--calendar');
      }
    },
  });

  // Звёздный рейтинг
  $(".slider-reviews__star").rateYo({
    starWidth: "20px",
    normalFill: "transparent",
    maxValue: 5,
    spacing: "2px",
    readOnly: true,
    starSvg: '<svg width="21" height="20" viewBox="0 0 21 20 "fill="none"><path d = "M10.8898 0.48938L13.9797 6.75073L20.8896 7.75505L15.8896 12.6285L17.0699 19.5107L10.8898 16.2616L4.70943 19.5107L5.88974 12.6285L0.889648 7.75505L7.79963 6.75073L10.8898 0.48938Z"fill= "#F8991D"/></svg>',
  });

  $(".train-reviews__star").rateYo({
    starWidth: "20px",
    normalFill: "transparent",
    spacing: "2px",
    readOnly: true,
    starSvg: '<svg width="21" height="20" viewBox="0 0 21 20 "fill="none"><path d = "M10.8898 0.48938L13.9797 6.75073L20.8896 7.75505L15.8896 12.6285L17.0699 19.5107L10.8898 16.2616L4.70943 19.5107L5.88974 12.6285L0.889648 7.75505L7.79963 6.75073L10.8898 0.48938Z"/></svg>',
  });

  $(".hotel__info-star").rateYo({
    starWidth: "20px",
    normalFill: "transparent",
    ratedFill: "#ffcc00",
    spacing: "2px",
    readOnly: true,
    starSvg: '<svg width="21" height="20" viewBox="0 0 21 20 "fill="none"><path d = "M10.8898 0.48938L13.9797 6.75073L20.8896 7.75505L15.8896 12.6285L17.0699 19.5107L10.8898 16.2616L4.70943 19.5107L5.88974 12.6285L0.889648 7.75505L7.79963 6.75073L10.8898 0.48938Z"/></svg>',
  });

  $(".modal__form-star").rateYo({
    starWidth: "30px",
    normalFill: "#d2d2d2",
    ratedFill: "#EDB867",
    maxValue: 5,
    spacing: "5px",
    fullStar: true,
    rating: 4,
  });
  // Стилизация селекта
  $('.select-style').styler();
  $('.tickets-search-one__select').styler();
  $('.tickets-select').styler();
  $('.tickets-payment__document-select').styler();
});