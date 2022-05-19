const scrollMenu = () => {
  const topBtn = document.querySelectorAll('.top__buttons-btn');
  const btnInner = document.querySelector('.top__buttons');
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
};
scrollMenu();