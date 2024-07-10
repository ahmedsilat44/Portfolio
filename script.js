var btn = $('#backToTopButton');
var navbar = $('#header');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
    navbar.addClass('translucent');
  } else {
    btn.removeClass('show');
    navbar.removeClass('translucent');
  }
});
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

function scrollFunction(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }


const hiddenImg = document.querySelectorAll('.hidden_img');

const hiddenText = document.querySelectorAll('.hidden_text');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible_img');
    }
    else {
      entry.target.classList.remove('visible_img');
    }
  });
});

const observerTxt = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible_img');
    }
    else {
      entry.target.classList.remove('visible_img');
    }
  });
});

hiddenImg.forEach((element) => {
  observer.observe(element);
});

hiddenText.forEach((element) => {
  observerTxt.observe(element);
});