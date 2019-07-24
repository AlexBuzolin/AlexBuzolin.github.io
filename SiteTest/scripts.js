//Close/Open Horizontal Tabbar
let closeTabbarHorizontal = false;
function tabbarHorizontalOpnCls() {
        tabbarHorizontal = document.querySelector('.tabbar_GFBqnm64amWoxqfX_horizontal_forms');
        tabbarUpBtns = document.querySelector('.tabbar_GFBqnm64amWoxqfX_up_btns');
        tabbarBtnIcon = document.querySelector('.tabbar_GFBqnm64amWoxqfX_close_btn_icon');
        tabbarOrderBtn = document.querySelector('.tabbar_GFBqnm64amWoxqfX_order_btn');
        tabbarInfoPanel = document.querySelector('.tabbar_GFBqnm64amWoxqfX_horizontal_info_panel');
        tabbarInfoBtn = document.querySelector('.tabbar_GFBqnm64amWoxqfX_info_btn');

    if (closeTabbarHorizontal === false) {
        tabbarHorizontal.classList.remove('tabbar_GFBqnm64amWoxqfX_horizontal_forms_turn_off');
        tabbarUpBtns.classList.add('tabbar_GFBqnm64amWoxqfX_up_btns_on');
        tabbarUpBtns.style.background = 'none';
        tabbarBtnIcon.style.transform = 'rotateZ(0)';
        tabbarOrderBtn.style.display = 'none';
        tabbarInfoBtn.style.display = 'none';
        tabbarInfoPanel.style.height = '140px';

        closeTabbarHorizontal = true;
    } else if (closeTabbarHorizontal === true) {
        tabbarHorizontal.classList.add('tabbar_GFBqnm64amWoxqfX_horizontal_forms_turn_off');
        tabbarUpBtns.classList.remove('tabbar_GFBqnm64amWoxqfX_up_btns_on');
        tabbarUpBtns.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #bdbcbc 100%)';
        tabbarBtnIcon.style.transform = 'rotateZ(180deg)';
        tabbarOrderBtn.style.display = 'flex';
        tabbarInfoBtn.style.display = 'flex';
        tabbarInfoPanel.style.height = '0';

        closeTabbarHorizontal = false;
    }
}

//Close Tabbar info panel
function closeInfoPanel() {
    let tabbarInfoPanel = document.querySelector('.tabbar_GFBqnm64amWoxqfX_horizontal_info_panel');
    tabbarInfoPanel.style.display = 'none';
}

//Close/open pop-up slider script
let PopUpWrapper = document.querySelector('.pop-up_GFBqnm64amWoxqfX_slider_wrapper')

function openPopUp() {
    PopUpWrapper.style.display = 'flex';
}

function closePopUp() {
    PopUpWrapper.style.display = 'none';
}

//Scroll script
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.head_GFBqnm64amWoxqfX').style.top = "0";
  } else {
    document.querySelector('.head_GFBqnm64amWoxqfX').style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

//Slider Script
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('slider_GFBqnm64amWoxqfX_content');
    var circles = document.getElementsByClassName('slider_GFBqnm64amWoxqfX_circle');
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(' slider_GFBqnm64amWoxqfX_circle_active','');
    }
    slides[slideIndex-1].style.display = 'flex';  
    circles[slideIndex-1].className += ' slider_GFBqnm64amWoxqfX_circle_active';
}

//AddCart Animation
function addCartAnim() {
let tabbarHorizontalCartBadge = document.querySelector('.tabbar_GFBqnm64amWoxqfX_cart_badge');
    tabbarVerticalCartBadge = document.querySelector('#tabbar_GFBqnm64amWoxqfX_vertical_cart_badge');

    tabbarHorizontalCartBadge.style.transform = 'scale(1)';
    tabbarVerticalCartBadge.style.transform = 'scale(1)';
}