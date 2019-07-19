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
        tabbarInfoPanel.style.height = '180px';

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

//Open/Close Vertical Tabbar
let closeTabbarVertical = false;
function tabbarVerticalOpnCls() {
    let tabbarVertical = document.querySelector('.tabbar_GFBqnm64amWoxqfX_vertical');
        tabbarVerticalHead = document.querySelector('.tabbar_GFBqnm64amWoxqfX_vertical_head');
        tabbarRightBtn = document.querySelector('.tabbar_GFBqnm64amWoxqfX_right_btn');
        tabbarRightBtnIcon = document.querySelector('.tabbar_GFBqnm64amWoxqfX_right_btn_icon');
        tabbarVerticalInfoPanel = document.querySelector('.tabbar_GFBqnm64amWoxqfX_vertical_info_panel');
        tabbarVerticalFormsPanel = document.querySelector('.tabbar_GFBqnm64amWoxqfX_vertical_forms_panel');
        tabbarPosBtns = document.querySelector('.tabbar_GFBqnm64amWoxqfX_vertical_pos_btns');
        tabbarClosePanel = document.querySelector('.tabbar_GFBqnm64amWoxqfX_vertical_close_panel_btns');
    
    if (closeTabbarVertical === false) {
        tabbarVertical.classList.remove('tabbar_GFBqnm64amWoxqfX_vertical_close');
        tabbarVerticalHead.style.display = 'flex'
        tabbarRightBtn.style.left = '320px';
        tabbarRightBtnIcon.style.transform = 'rotateZ(180deg)';
        tabbarVerticalInfoPanel.style.display = 'flex';
        tabbarVerticalFormsPanel.style.display = 'flex';
        tabbarPosBtns.style.display = 'flex';
        tabbarClosePanel.style.display = 'none';

        closeTabbarVertical = true;
    } else if (closeTabbarVertical = true) {
        tabbarVertical.classList.add('tabbar_GFBqnm64amWoxqfX_vertical_close');
        tabbarVerticalHead.style.display = 'none'
        tabbarRightBtn.style.left = '120px';
        tabbarRightBtnIcon.style.transform = 'rotateZ(0)';
        tabbarVerticalInfoPanel.style.display = 'none';
        tabbarVerticalFormsPanel.style.display = 'none';
        tabbarPosBtns.style.display = 'none';
        tabbarClosePanel.style.display = 'flex';

        closeTabbarVertical = false;
    }
}

//Close Tabbar info panel
function closeTabbarHorizontalInfoPanel() {
    let tabbarInfoPanel = document.querySelector('.tabbar_GFBqnm64amWoxqfX_horizontal_info_panel');
    tabbarInfoPanel.style.display = 'none';
}

function closeTabbarVerticalInfoPanel() {
    let tabbarVerticalInfoPanel = document.querySelector('.tabbar_GFBqnm64amWoxqfX_vertical_info_panel');
    tabbarVerticalInfoPanel.style.display = 'none';
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

//Position Script
function verticalPosition() {
var horizontalHead = document.querySelector('.head_GFBqnm64amWoxqfX');
    tabbarHorizontal = document.querySelector('.tabbar_GFBqnm64amWoxqfX_horizontal');
    tabbarUpBtns = document.querySelector('.tabbar_GFBqnm64amWoxqfX_up_btns');
    tabbarVertical = document.querySelector('.tabbar_GFBqnm64amWoxqfX_vertical');

    horizontalHead.style.display = 'none';
    tabbarHorizontal.style.display = 'none';
    tabbarUpBtns.style.display = 'none';
    tabbarVertical.style.display = 'flex';
}

function horizontalPosition() {
var horizontalHead = document.querySelector('.head_GFBqnm64amWoxqfX');
    tabbarHorizontal = document.querySelector('.tabbar_GFBqnm64amWoxqfX_horizontal');
    tabbarUpBtns = document.querySelector('.tabbar_GFBqnm64amWoxqfX_up_btns');
    tabbarVertical = document.querySelector('.tabbar_GFBqnm64amWoxqfX_vertical');

    horizontalHead.style.display = 'flex';
    tabbarHorizontal.style.display = 'flex';
    tabbarUpBtns.style.display = 'flex';
    tabbarVertical.style.display = 'none';
}

//AddCart Animation
function addCartAnim() {
let tabbarHorizontalCartBadge = document.querySelector('.tabbar_GFBqnm64amWoxqfX_cart_badge');
    tabbarVerticalCartBadge = document.querySelector('#tabbar_GFBqnm64amWoxqfX_vertical_cart_badge');

    tabbarHorizontalCartBadge.style.transform = 'scale(1)';
    tabbarVerticalCartBadge.style.transform = 'scale(1)';
}