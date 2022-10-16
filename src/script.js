document.addEventListener('DOMContentLoaded', ()=> {
  let inputs = document.querySelectorAll('.js-phone-input');
  
    for (let input of inputs) {
      let defaultPlaceholder = input.placeholder;
      let editStr;
      input.addEventListener('focus', () => {
        input.placeholder = '+'
      })
      input.addEventListener('blur', () => {
        input.placeholder = defaultPlaceholder;
        if (input.value === '+') {
          input.value = '';
        }
      })
      input.addEventListener('keydown', function (event) {
        if (input.value.length === 0) {
          input.value = '+';
        }
  
        if (
          event.keyCode == 46 ||
          event.keyCode == 8 ||
          event.keyCode == 9 ||
          event.keyCode == 27 ||
          (event.keyCode == 65 && event.ctrlKey === true) ||
          (event.keyCode >= 35 && event.keyCode <= 39)
        ) {
          return;
        } else {
          if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
            event.preventDefault();
          }
        }
        const changePlus = setTimeout(() => {
          if (input.value[0] !== '+') {
            editStr = input.value.split('');
            let position = editStr.indexOf('+');
            editStr.splice(position, 1);
            editStr.unshift('+');
            input.value = editStr.join('');
          }
        }, 1)
      });
  
    }
})
/*
function y() {
  let elem = $(".indicator");
  let x1 = elem.offset().left,
    y1 = elem.offset().top;
  let r = 6,
    x,
    y,
    isProcessed = false;
  $("body").mousemove(function (e) {
    if (!isProcessed) {
      isProcessed = true;
      var x2 = e.pageX,
        y2 = e.pageY;
      y =
        (r * (y2 - y1)) /
          Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) +
        y1;
      x = ((y - y1) * (x2 - x1)) / (y2 - y1) + x1;
      elem.css({
        marginTop: y - y1 + 1 + "px",
        marginLeft: x - x1 + "px",
      });
      isProcessed = false;
    }
  });
}
y();
*/
function y1() {
  let elem = $(".indicator1");
  let x1 = elem.offset().left,
    y1 = elem.offset().top;
  let r = 6,
    x,
    y,
    isProcessed = false;
  $("body").mousemove(function (e) {
    if (!isProcessed) {
      isProcessed = true;
      var x2 = e.pageX,
        y2 = e.pageY;
      y =
        (r * (y2 - y1)) /
          Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) +
        y1;
      x = ((y - y1) * (x2 - x1)) / (y2 - y1) + x1;
      elem.css({
        marginTop: y - y1 + 1 + "px",
        marginLeft: x - x1 + "px",
      });
      isProcessed = false;
    }
  });
}
y1();

function y2() {
  let elem = $(".indicator2");
  let x1 = elem.offset().left,
    y1 = elem.offset().top;
  let r = 6,
    x,
    y,
    isProcessed = false;
  $("body").mousemove(function (e) {
    if (!isProcessed) {
      isProcessed = true;
      var x2 = e.pageX,
        y2 = e.pageY;
      y =
        (r * (y2 - y1)) /
          Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) +
        y1;
      x = ((y - y1) * (x2 - x1)) / (y2 - y1) + x1;
      elem.css({
        marginTop: y - y1 + 1 + "px",
        marginLeft: x - x1 + "px",
      });
      isProcessed = false;
    }
  });
}
y2();

function y3() {
  let elem = $(".indicator3");
  let x1 = elem.offset().left,
    y1 = elem.offset().top;
  let r = 6,
    x,
    y,
    isProcessed = false;
  $("body").mousemove(function (e) {
    if (!isProcessed) {
      isProcessed = true;
      var x2 = e.pageX,
        y2 = e.pageY;
      y =
        (r * (y2 - y1)) /
          Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) +
        y1;
      x = ((y - y1) * (x2 - x1)) / (y2 - y1) + x1;
      elem.css({
        marginTop: y - y1 + 1 + "px",
        marginLeft: x - x1 + "px",
      });
      isProcessed = false;
    }
  });
}
y3();

$(document).ready(function () {
  var header = $(".header"),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50 && scrolled > scrollPrev) {
      header.addClass("out");
    } else {
      header.removeClass("out");
    }
    scrollPrev = scrolled;
  });
});
 
const form = document.querySelector(".form");
const URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc7PrIxV7xuEABlIsKun31gBYYMrpIrevsACGeJD_rw8-2OWg/formResponse";

const closeButtons = document.querySelectorAll('.js-close-button');
const popup = document.querySelector('.block-form__popup');

function popupClose() {
  popup.classList.remove('block-form__popup_active');
  document.body.style.overflow = '';
}

for (let closeButton of closeButtons) {
  closeButton.addEventListener('click', ()=> {
    popupClose();
  })
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const payload = new FormData(form);

  fetch(URL, {
    method: "POST",
    mode: "no-cors",
    body: payload,
  })
    .then((response) => {
      document.body.style.overflow = 'hidden';
      popup.classList.add('block-form__popup_active');
      e.target.reset();
    })
    .catch((error) => {
      console.log('owibka');
    });
});

$(document).keydown(function(e) {
  if (e.keyCode == 27) {
      popupClose();
  }
});


window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-DDY3BEVPP2');