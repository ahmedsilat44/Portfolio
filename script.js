var btn = $('#backToTopButton');


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

