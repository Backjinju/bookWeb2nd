//////////////////성진//////////////////
let footerScroll = document.querySelector('.footerScroll')
let header = document.querySelector('.header')
let newBook = document.querySelector('.newBook')
let genreBook = document.querySelector('.genreBook')
let reviewBook = document.querySelector('.reviewBook')
let loading = document.querySelector('.loadingImg')
let loginIcon = document.querySelector('.loginIcon')
let loginModal = document.querySelector('.loginModal')
let body = document.querySelector('body')
let lgModal = document.querySelector('.lgModal')
let xmark = document.querySelector('.fa-xmark')

window.onload = () => {
    loadingPage();
}

function loadingFadeout(){
    loading.classList.add('fadeOut')
}
function loadingPage(){
    setTimeout(loadingFadeout,500) // 테스트할 때 로딩화면 기다리기 싫어서 0.05초로 만들어 둠
}

loginIcon.addEventListener('click',function(){
    if(loginModal.style.display == 'none'){
        loginModal.style.display = 'flex'
    }
})

xmark.addEventListener('click',function(){
    loginModal.style.display = 'none'
})

loginModal.addEventListener('click', function(){
    if(event.target.className == 'loginModal'){
        loginModal.style.display = 'none'
    }
})


footerScroll.addEventListener('click',function(e){
    if(e.target.innerText=='HOME'){
        header.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '신간도서'){
        newBook.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '장르별 도서'){
        genreBook.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '리뷰'){
        reviewBook.scrollIntoView({
            behavior: "smooth"}) 
    }
})
///////////////////////////////////////

//슬라이드이벤트 셀렉터
let btnR = document.querySelector("#btnR");
let btnL = document.querySelector("#btnL");
let item = document.querySelectorAll(".slideItem")
let slider = document.querySelector(".bestSeller-sell-move")

let itemlength =item.length
let itemIndex = 0

let firstChild = slider.firstElementChild;
let firstclone = firstChild.cloneNode(true);

console.log(slider)


btnL.addEventListener("click",function(){
    if(itemIndex <= item.length){
        slider.style.transform = "translate(" + 100 * (itemIndex + 1)+"px)"
    }
    console.log(itemIndex)
    item[++itemIndex]
    
    if(itemIndex === item.length -1){
    setTimeout(function(){
        
            slider.style.transition = "0ms"
            slider.style.transform = "translate(" + 100 * (itemIndex + 1)+"px)"
        },300);
        itemIndex = -1;
    }
    item[++itemIndex]
        
    
    
})
btnR.addEventListener("click",function(){
    if(itemIndex <= item.length - 1){
        slider.style.transform = "translate(-" + 100 * (itemIndex + 1)+"px)"
    }
    item[++itemIndex]
})


//네비바 픽스트 이벤트
let scrollNav_bar = document.querySelector(".nav-bar"); 

window.addEventListener("scroll",function(){
    console.log(window.pageYOffset)
    if(window.pageYOffset > 30){
        scrollNav_bar.className = "nav-bar-fixed"
    }
    else if(window.pageYOffset < 30){
        scrollNav_bar.className = "nav-bar"
    }

    
})


//네비바 스크롤 이동 이벤트 
let scrollele = document.querySelectorAll(".scroll-ele");
let scrollpotint = document.querySelectorAll(".scroll");
let first = scrollpotint[0].offsetTop; 
let second = scrollpotint[1].offsetTop;
let third = scrollpotint[2].offsetTop;
console.log(scrollele[1])

scrollele[0].addEventListener("click",function(){
    window.scroll({top:first,behavior:"smooth"});
})
scrollele[1].addEventListener("click",function(){
    window.scroll({top:second,behavior:"smooth"});
})
scrollele[2].addEventListener("click",function(){
    window.scroll({top:third,behavior:"smooth"});
})



//////////////////상호//////////////////
                                     
///////////////////////////////////////
//////////////////수근//////////////////
let slides = document.querySelector('.newBook_slides');
let slide = document.querySelectorAll('.newBook_slides li');
let currentIdx = 0; //클릭할때마다 이 값을 차감해서 슬라이드를 움직이기 위함
let slideCount = slide.length;
let slideWidth = 250;
let slideMargin = 30;
prevBtn = document.querySelector('.prev');
nextBtn = document.querySelector('.next');

makeClone();

function makeClone(){
    for(let i =0; i<slideCount; i++) {
        // a.cloneNode(), a.cloneNode(true) a의 자식 요소까지
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone')
        // a.appendChild(b)
        slides.appendChild(cloneSlide);
    }
    for(let i = slideCount-1; i>=0; i--) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone')
        // a.appendChild(b)
        slides.prepend(cloneSlide);
    } 
    updateWidth();
    setInitialPos();

    setTimeout(function(){
        slides.classList.add('animated');
    },100);
}

function updateWidth(){
    let currentSlide = document.querySelectorAll('.newBook_slides li')
    var newSlideCount = currentSlide.length;
    var newWidth = (slideWidth + slideMargin) * newSlideCount -slideMargin + 'px';
    slides.style.width = newWidth;
};

function setInitialPos() {
    let initialTranslateValue = -(slideWidth + slideMargin) * slideCount
    slides.style.transform = 'translateX(' +initialTranslateValue+ 'px)'
};

nextBtn.addEventListener('click', function(){
    moveSlide(currentIdx +1);
})
prevBtn.addEventListener('click', function(){
    moveSlide(currentIdx -1);
})

function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    // console.log(currentIdx, slideCount)
    if(currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(function(){
            slides.classList.remove('animated')
            slides.style.left = '0px';
            currentIdx = 0;
        },500);
        setTimeout(function(){
            slides.classList.add('animated')
        },600); 
    } 
}
///////////////////////////////////////
//////////////////진주//////////////////

$(document).ready(function(){

    var navHeight = $(".genre_mid_slide").height(); 
    //navHeight 의 높이를 구하기

    $(".genre_mid_slide_box").hide();
    //스크롤시 나타날 객체 미리 숨기기

    $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
        var rollIt = $(this).scrollTop() >= navHeight; 
// 스크롤의 정도가 navHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 navHeight 의 높이와 같거나 크다

/*
scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
*/

    if(rollIt){ 
		//윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
            $(".genre_mid_slide_box").show().css({"position":"fixed"});
        }
        else{
            $(".genre_mid_slide_box").hide();
        }
    });
    
});


//////////////////진주끝/////////////////////

////////////////////////양희시작///////////////////////////////

// 양쪽 화살표 클릭하면 넘어가기(4개씩) > 캐러셀
// 클릭하면 모달창뜨게하기
// 좋아요 누르면 하트 색꽉차게

let heart = document.querySelector('.uil-heart');
let arrow = document.querySelector('.uil-location-arrow-alt');



let slidesY = document.querySelector('.reviewboxs'),
    slideY = document.querySelectorAll('.reviewbox'),
    currentIdxY = 0,
    slideCountY = slideY.length,
    slideWidthY = 20,
    slideMarginY = 20,
    preBtnY = document.querySelector('#arrowleft');
    nextBtnY = document.querySelector('#arrowright');

    makeClone();

    function makeClone(){
        for(let i = 0; i < slideCount; i++)
        {
            let cloneSlideY = slideY[i].cloneNode(true);
            cloneSlideY.classList.add('clone');
            slidesY.appendChild(cloneSlideY); 
        }
        for(let j = slideCountY-1; j >= 0; j--)
        {
            let cloneSlideY = slideY[j].cloneNode(true);
            cloneSlideY.classList.add('clone');
            slidesY.prepend(cloneSlideY);
        }

        updateWidth();
        // setInitialPos();
        slidesY.classList.add('animated');
    }

    function updateWidth(){
        let currentSlideY = document.querySelectorAll('.reviewbox');
        // console.log(currentSlide);
        let newSlideCountY = currentSlideY.length;
        // console.log(newSlideCount);
        let newWidth = calc(slideWidthY + "%" + slideMarginY + "px")*newSlideCountY - slideMarginY +"px";
        console.log(newWidth);
        slidesY.style.width = newWidth;
    }

    function setInitialPos(){
        // let initialTranslateValue = calc(calc(slideWidth + "%" + slideMargin + "px")*slideCount);
        // slides.style.transform = "translateX(" + initialTranslateValue+ "%)";

    }
//////////////////////양희끝////////////////////////