$(document).ready(function(){
    $(window).scroll(function(){
    
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
   
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
       
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        
        $('html').css("scrollBehavior", "smooth");
    });

 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

  
    var typed = new Typed(".typing", {
        strings: ["Quality Items","Premimum Items", "Happiness","Pocket-Friendly Rate"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Quality Items","Premimum Items", "Happiness","Pocket-Friendly Rate"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// let cart = [];

// function addToCart(id, name, price) {
//     const product = { id, name, price };
//     cart.push(product);
//     updateCart();
// }
// function delToCart(id, name, price) {
//     const product = { id, name, price };
//     cart.pop(product);
//     updateCart();
// }

// function updateCart() {
//     const cartList = document.getElementById('cart-list');
//     const cartCount = document.getElementById('cart-count');
//     const cartTotal = document.getElementById('cart-total');
    
//     cartList.innerHTML = '';
//     let total = 0;
    
//     cart.forEach(product => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
//         cartList.appendChild(listItem);
//         total += product.price;
//     });
    
//     cartCount.textContent = cart.length;
//     cartTotal.textContent = total.toFixed(2);

// }
