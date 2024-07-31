
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

function underLine(element,elementId){
  console.log(element);
  const x = element.querySelector(elementId);
  x.classList.add('underline-right-hover');
}

function removeUnderLine(element,elementId){
  const x = element.querySelector(elementId);
  x.classList.remove('underline-right-hover');
}




$(document).ready(function() {
  const hiddenImg = document.querySelectorAll('.hidden_img');

  const hiddenText = document.querySelectorAll('.hidden_text');
  const observerTxt = new IntersectionObserver((entries) => {
    var heroImg = document.getElementById("heroImg");
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible_img');
        heroImg.classList.add('visible_img');
      }
      else {
        entry.target.classList.remove('visible_img');
        heroImg.classList.remove('visible_img');
      }
    });
  });
  
  
  hiddenText.forEach((element) => {
    observerTxt.observe(element);
  });
});



function toggleMenu(){
  var x = document.getElementById("navbar");
  if (x.classList.contains('active')) {
    x.classList.remove('active');
  } else {
    x.classList.add('active');
  }
}

function underLine(element,elementId){
  console.log(element);
  const x = element.querySelector(elementId);
  x.classList.add('underline-right-hover');
}

function removeUnderLine(element,elementId){
  const x = element.querySelector(elementId);
  x.classList.remove('underline-right-hover');
}


$('#closeI').on('click', function(){toggleMenu()});

$('#menuIcon').on('click', function(){toggleMenu()});


$('#about-a').on('click', function(){scrollFunction('about')});

$('#projects-a').on('click', function(){scrollFunction('projects')});


