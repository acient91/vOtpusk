//накручивание лайков
const addLike = () => {
  const likeBtn = document.querySelectorAll('.faq__btn-like');
  const disLikeBtn = document.querySelectorAll('.faq__btn');
  const likeNum = document.querySelectorAll('.faq__btn-like>span')

  likeBtn.forEach((item, i) => {
    item.addEventListener('click', function () {
      let numAdd = +likeNum[i].textContent + 1;
      likeNum[i].textContent = +numAdd;
    });
  });

  disLikeBtn.forEach((item, i) => {
    item.addEventListener('click', function () {
      let numDis = +likeNum[i].textContent;
      likeNum[i].textContent = numDis - 1;
    });
  });
}
addLike();
//Обрезание строки
const delStr = () => {
  const reviewsText = document.querySelectorAll('.train-reviews__text>p');

  reviewsText.forEach((item) => {
    let itemStr
    itemStr = item.textContent.replace(/ /g, "").length;
    if (itemStr > 200) {
      console.log('Длина строки больше 200 символов');
      // itemStr.slice(0, 200) + `...`;
      console.log(itemStr);
      // console.log(itemStr.length);
      // item.textContent = itemStr
    }
    console.log(itemStr);

    // console.log(itemStr.textContent.);
    // console.log(item.textContent.length);
  })
}
// delStr();

const asideTab = () => {
  const asideLink = document.querySelectorAll('.tickets-payment__aside-link');
  const asideContent = document.querySelectorAll('.tickets-payment__aside-content');

  asideLink.forEach((item, i) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.classList.contains('tickets-payment__aside-link--active')) {
        asideContent[i].style.display = 'none';
        this.classList.remove('tickets-payment__aside-link--active');
        item.textContent = 'открыть';
      } else {
        asideContent[i].style.display = 'block';
        this.classList.add('tickets-payment__aside-link--active')
        item.textContent = 'cкрыть';
      }
    })
  })
}
asideTab();

const rait = () => {
  const raitBtn = document.querySelectorAll('.tickets-search-one__btn');
  raitBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.target.classList.toggle('tickets-search-one__btn--active');
    })
  });
};
rait();

const filterMenu = () => {
  const filterBtn = document.querySelectorAll('.tickets-search-one__price-btn');
  const filterBox = document.querySelectorAll('.tickets-search-one__price');

  filterBtn.forEach((item, i) => {
    item.addEventListener('click', function () {
      if (this.classList.contains('tickets-search-one__price-btn--active')) {
        this.classList.remove('tickets-search-one__price-btn--active');
        filterBox[i].style.height = '80px';
      } else {
        this.classList.add('tickets-search-one__price-btn--active');
        filterBox[i].style.height = 'auto';
      }
    });
  });
};
filterMenu();

const wagonTabs = () => {
  const wagonBtn = document.querySelectorAll('.tickets-search-one__wagon-top-btn');
  const wagonContent = document.querySelectorAll('.tickets-search-one__wagon');

  wagonBtn.forEach((item, i) => {
    item.addEventListener('click', function () {
      if (this.classList.contains('tickets-search-one__wagon-top-btn--active')) {
        this.classList.remove('tickets-search-one__wagon-top-btn--active');
        wagonContent[i].classList.remove('tickets-search-one__wagon--active');
      } else {
        wagonBtn.forEach((item, i) => {
          item.classList.remove('tickets-search-one__wagon-top-btn--active');
          wagonContent[i].classList.remove('tickets-search-one__wagon--active');
        });
        this.classList.add('tickets-search-one__wagon-top-btn--active');
        wagonContent[i].classList.add('tickets-search-one__wagon--active');
      }
    });
  });
};
wagonTabs();

const ticketsSwap = () => {
  const body = document.querySelector('body');
  const inputWho = document.querySelector('.tickets-search-one__input-to');
  const inputWhere = document.querySelector('.tickets-search-one__input-where');


  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('tickets-search-one__swap')) {
      e.preventDefault();
      let who = inputWho.value;
      let where = inputWhere.value;
      inputWho.value = where;
      inputWhere.value = who;
    }
  });
};
ticketsSwap();

const choiceDate = () => {
  const dateLink = document.querySelectorAll('.tickets-search-one__date-link');

  dateLink.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.classList.contains('tickets-search-one__date-link--active')) {
        this.classList.remove('tickets-search-one__date-link--active');
      } else {
        dateLink.forEach((item) => {
          item.classList.remove('tickets-search-one__date-link--active');
        });
        this.classList.add('tickets-search-one__date-link--active')
      }
    })
  });
};
choiceDate();

$(function () {
  $('.tickets-search-one__date-list').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M1 1.80005L7 7.80005L13 1.80005"stroke = "black"stroke-width= "2"stroke - linecap = "round" stroke - linejoin = "round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M1 1.80005L7 7.80005L13 1.80005"stroke = "black"stroke-width= "2"stroke - linecap = "round" stroke - linejoin = "round"/></svg></button>',
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 469,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});