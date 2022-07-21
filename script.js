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


//////////////////상호//////////////////
                                     
///////////////////////////////////////
//////////////////수근//////////////////
let SGslides = document.querySelector('.newBook_slides'); //ul
let SGslide = document.querySelectorAll('.newBook_slides li'); //li를 다 넣기 위해 All를 씀
let SGcurrentIdx = 0; //클릭할때마다 이 값을 차감해서 슬라이드를 움직이기 위함
let SGslideCount = SGslide.length; //li의 길이  
let SGslideWidth = 250; //
let SGslideMargin = 50;
// let SGprevBtn = document.querySelector('.prev');
// let SGnextBtn = document.querySelector('.next');
// let SGimg = document.querySelectorAll('.newBook_slides li img')




SGmakeClone();

function SGmakeClone(){
    for(let i =0; i<SGslideCount; i++) { 
        var SGcloneSlide = SGslide[i].cloneNode(true); //li의 길이 만큼 클론을 만들어줌 
        SGcloneSlide.classList.add('clone') //clone 클래스명으로 클론을 추가
        SGslides.appendChild(SGcloneSlide); // ul의 뒤에 클론을 붙혀줌
    }
    for(let i = SGslideCount-1; i>=0; i--) { 
        var SGcloneSlide = SGslide[i].cloneNode(true);
        SGcloneSlide.classList.add('clone')
        SGslides.prepend(SGcloneSlide); //ul 앞에 클론을 붙혀줌
    } 
    SGupdateWidth();
    SGsetInitialPos();

    setTimeout(function(){
        SGslides.classList.add('animated');
    },1100);
}

function SGupdateWidth(){
    let SGcurrentSlide = document.querySelectorAll('.newBook_slides li')
    var SGnewSlideCount = SGcurrentSlide.length;
    var SGnewWidth = (SGslideWidth + SGslideMargin) * SGnewSlideCount -SGslideMargin + 'px';
    SGslides.style.width = SGnewWidth;
};

function SGsetInitialPos() {
    let SGinitialTranslateValue = -(SGslideWidth + SGslideMargin) * SGslideCount
    SGslides.style.transform = 'translateX(' +SGinitialTranslateValue+ 'px)'
};

// SGnextBtn.addEventListener('click', function(){
//     SGmoveSlide(SGcurrentIdx +1);
// })
// SGprevBtn.addEventListener('click', function(){
//     SGmoveSlide(SGcurrentIdx -1);
// })


function SGmoveSlide(num){
    SGslides.style.left = -num * (SGslideWidth + SGslideMargin) + 'px';
    SGcurrentIdx = num;
    // console.log(currentIdx, slideCount)
    if(SGcurrentIdx == SGslideCount || SGcurrentIdx == -SGslideCount) {
        setTimeout(function(){
            SGslides.classList.remove('animated')
            SGslides.style.left = '0px';
            SGcurrentIdx = 0;
        },1000);
        setTimeout(function(){
            SGslides.classList.add('animated')
        },1100); 
    } 
}

let timer = undefined;
function autoSlide(){
    if(timer == undefined){
        timer = setInterval(function(){
            SGmoveSlide(SGcurrentIdx +1);
        },3000);
    }
}
autoSlide();
function stopSlide(){
    clearInterval(timer);
    timer = undefined;
}
SGslides.addEventListener('mouseenter',function(){
    stopSlide();
})
SGslides.addEventListener('mouseleave',function(){
    autoSlide();
})


///////////////////////////////////////
//////////////////진주//////////////////

///////////////////////////////////////

////////////////////////양희시작///////////////////////////////

// 양쪽 화살표 클릭하면 넘어가기(4개씩) > 캐러셀
// 클릭하면 모달창뜨게하기
// 좋아요 누르면 하트 색꽉차게

// let heart = document.querySelector('.uil-heart');
// let arrow = document.querySelector('.uil-location-arrow-alt');



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