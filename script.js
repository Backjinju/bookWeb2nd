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
// let first = scrollpotint[0].offsetTop; 
// let second = scrollpotint[1].offsetTop;
// let third = scrollpotint[2].offsetTop;
// console.log(scrollele[1])

// scrollele[0].addEventListener("click",function(){
//     window.scroll({top:first,behavior:"smooth"});
// })
// scrollele[1].addEventListener("click",function(){
//     window.scroll({top:second,behavior:"smooth"});
// })
// scrollele[2].addEventListener("click",function(){
//     window.scroll({top:third,behavior:"smooth"});
// })



//////////////////상호//////////////////
                                     
///////////////////////////////////////
//////////////////수근//////////////////
let slides = document.querySelector('.newBook_slides');
let slide = document.querySelectorAll('.newBook_slides li');
let currentIdx = 0; //클릭할때마다 이 값을 차감해서 슬라이드를 움직이기 위함
let slideCount = slide.length;
let slideWidth = 250;
let slideMargin = 30;
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

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

///////////////////////////////////////

////////////////////////양희시작///////////////////////////////

// 양쪽 화살표 클릭하면 넘어가기(4개씩) > 캐러셀
// 클릭하면 모달창뜨게하기
// 좋아요 누르면 하트 색꽉차게

var slidesY = document.querySelector('.reviewboxs'), //리뷰박스틀
    slideY = document.querySelectorAll('.reviewbox'), //리뷰박스하나하나
    slideCountY = slideY.length, //슬라이드개수
    slideWidthY = 250, 
    slideMarginY = 30,  
    currentIdxY = 0, 
    preBtnY = document.querySelector('.uil-angle-left-b'),
    nextBtnY = document.querySelector('.uil-angle-right-b');

    makeCloneY();

    //양쪽으로 5개씩 복제 총 15개
    function makeCloneY(){

        for(let i = 0; i < slideCountY; i++)
        {
            var cloneSlideY = slideY[i].cloneNode(true);
            cloneSlideY.classList.add('cloneY');
            slidesY.appendChild(cloneSlideY); 
        }
        for(let j = slideCountY-1; j >= 0; j--)
        {
            var cloneSlideY = slideY[j].cloneNode(true);
            cloneSlideY.classList.add('cloneYH');
            slidesY.prepend(cloneSlideY);
        }

        updateWidthY();
        setInitialPosY();

        //새로고침했을 때 이동하는게 보이는 것을 방지
        setTimeout(function(){
            slidesY.classList.add('animatedY');
        }, 100);
    }

    //너비를 늘어난 개수만큼 조절
    function updateWidthY(){
        var currentSlideY = document.querySelectorAll('.reviewbox');
        // console.log(currentSlideY);
        var newSlideCountY = currentSlideY.length;
        var newWidthY = ((slideWidthY + slideMarginY) * newSlideCountY - slideMarginY) + "px";
        slidesY.style.width = newWidthY;
    }


    //복제한 것부터가 아니라 가운데부터 위치해 있기 위해
    function setInitialPosY(){
        var initialTranslateValueY = -(slideWidthY + slideMarginY) * slideCountY;
        slidesY.style.transform = "translateX(" + initialTranslateValueY+ "px)";
    }

    //버튼을 눌렀을 때 이동 > 이벤트 구현 시작
    nextBtnY.addEventListener('click', function(){
        // moveSlideY라는 함수 생성하기
        moveSlideY(currentIdxY + 1);
    });

    preBtnY.addEventListener('click', function(){
        //moveSlideY라는 함수 생성하기
        moveSlideY(currentIdxY - 1);
    })

    //moveSlideY함수 기능
    function moveSlideY(numY){
        slidesY.style.left =  -numY * (slideWidthY + slideMarginY) + "px";
        currentIdxY = numY;
        if(currentIdxY == slideCountY || currentIdxY == -slideCountY) {
            //0으로 되돌아가기
            setTimeout(function(){
                slidesY.classList.remove('animatedY');
                slidesY.style.left = '0px';
                currentIdxY = 0;
            },500);
            //다시 animatedY효과추가
            setTimeout(function(){
                slidesY.classList.add('animatedY');
            },500); 
        } 
    }

//고쳐야 할 것
//무한으로 돌아가는 것처럼 보이는 것
//첫번째 클릭 때 transition이 적용없이 이동하는 것

// let heart = document.querySelector('.uil-heart');
// let arrow = document.querySelector('.uil-location-arrow-alt');


// heart.addEventListener('click', function(){

// });



//////////////////////양희끝////////////////////////