var btn = $('#backToTopButton');
var navbar = $('#header');
var cart = []
var emptyText = document.getElementById('emptyText');

if (localStorage.getItem('cart') == null) {
  localStorage.setItem('cart', JSON.stringify([]));
  
}else{
  cart = JSON.parse(localStorage.getItem('cart'));
  
}


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

const hiddenImg = document.querySelectorAll('.hidden_img');

const hiddenText = document.querySelectorAll('.hidden_text');


// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible_img');
//     }
//     else {
//       entry.target.classList.remove('visible_img');
//     }
//   });
// });

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

// hiddenImg.forEach((element) => {
//   observer.observe(element);
// });

hiddenText.forEach((element) => {
  observerTxt.observe(element);
});

function toggleMenu(){
  var x = document.getElementById("navbar");
  if (x.classList.contains('active')) {
    x.classList.remove('active');
  } else {
    x.classList.add('active');
  }
}

function addToCart(item) {
  var data = JSON.parse(item);
  console.log(data);
  var dataItem = data['item']
  console.log(dataItem);
  var existingItem = cart.find(e => e.item === dataItem);
  console.log(existingItem);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ item: dataItem, quantity: 1, price : data['price'] });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(cart);

}

function removeFromCart(item,element) {
  element.parentElement.remove();
  cart = cart.filter(e => e.item !== item);
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(cart);

}

function clearCart() {
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(cart);
}



//Usage:
// add js-menu__open class to menu icon
// add data-menu attr with the id of the menu to be expanded
// add id to the menu element and the js-menu class
// wrap menu in js-menu__context class
// add js-menu--right or js-menu--left to set the slide direction 

jQuery(function($){
  $('.js-menu__open').on('click', function(){
    
      console.log(cart.length );
        if(cart.length == 0){
          emptyText.style.display = 'block';
          document.getElementById('cartItem').style.display = 'none';
        }else{
          document.getElementById('cartItem').style.display = 'block';
          emptyText.style.display = 'none';
          document.getElementById('cartList').innerHTML = '';
          var cartItem = document.getElementById('cartList');
          for (let i = 0; i < cart.length; i++) {
            var element = cart[i];
            var item = document.createElement('li');
            item.innerHTML = `
                            <p style="margin: 0px 0px;"><span style="font-size: 16px;" class="cd-qty">`+ element.quantity +`x </span>`+ element.item +`</p>
                            <div class="cd-price"><p style="margin: 0px 0px;"><span style="font-size: 16px;margin: 0 0;" class="cd-qty">PKR </span>`+ JSON.stringify(element.quantity * element.price) +`</p></div>
                            <a  onclick="removeFromCart('`+ element.item + `',this)" class="cd-item-remove cd-img-replace"></a>
                        
            `;
            cartItem.appendChild(item);
           
        }
      }
        
        var menu = $(this).attr('data-menu');
        
        $(menu).toggleClass('js-menu__expanded');
        $(menu).parent().toggleClass('js-menu__expanded');
        if(window.innerWidth < 768){
        toggleMenu()
        }

});

$('.js-menu__context, .js-menu__close').on('click', function(event){
    if ( $(event.target).hasClass('js-menu__context') || $(event.target).hasClass('js-menu__close') ) {
         $('.js-menu__expanded').removeClass('js-menu__expanded');
    }
});
  
});


function checkout(){
  if (cart.length == 0) {
    alert("Please add items to the cart");
    return;
  }
  var total = 0;
  whatsappText = "Hi, I would like to order the following items: \n";
  for (let i = 0; i < cart.length; i++) {
    var element = cart[i];
    total += element.quantity * element.price;
    whatsappText += element.quantity + "x " + element.item + " PKR " + element.quantity * element.price + "\n";
  }
  whatsappText += "Total: PKR " + total;
  var url = "https://wa.me/923112206216?text=" + encodeURIComponent(whatsappText);
  window.open(url, '_blank');
  
}

$('.extraImg').on('click', function(){
  var img = $(this).attr('src');
  document.getElementById('MainImg').src = img;
});





const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
	button.addEventListener('click', cartClick);
});

function cartClick() {
	let button = this;
	button.classList.add('clicked');
  setTimeout(function(){
    button.classList.remove('clicked');
  }, 2000);
}