//!NAVBAR
// navbar link
gsap.set(".nav-link", {
y: -500,
});
gsap.to(".nav-link", {
y: 0,
duration: 0.7,
stagger: 0.1,
ease: "power1.out",
});
// icon social
gsap.set(".fa-brands-navbar", {
fontSize: 22,
y: -500,
x: -50,
});
gsap.to(".fa-brands-navbar", {
y: 0,
stagger: 0.1,
ease: "power1.out",
duration: 2,
});

// click link navbar
const changeColor= document.querySelectorAll('.click-color');
let linkNavbar= 5;
for(let i=0;i<linkNavbar;i++){
    changeColor[i].addEventListener('click',()=>{
        gsap.to(changeColor, {
            color:'grey',
            duration:0.1,
        })
        gsap.to(changeColor[i], {
            color:'white',
            duration:0.1,
        })
    });
}


//! HEADER
// apetura e chiusura banner hero
gsap.set('.banner-hero', {
    x:-1530,
})
const arrowHero= document.querySelector('.arrow-hero');
let arrowValidation= true;
// evento click freccettina
arrowHero.addEventListener('click',()=>{
    
    if(arrowValidation){
        // apertura banner
        gsap.to('.banner-hero', {
            x:-700,
            duration:1,
            ease:'power3.inOut',
        })
        // arrow animation open 
        gsap.to(arrowHero, {
            rotate:540,
            repeat:1,
        })
        arrowValidation=false;
        // bowling loghi
        gsap.to('.logo_pro_custom', {
            x:500,
            y:'random(200,-200)',
            rotate:'random(20,360)',
            delay:0.5,
        })
        // banner image animation open
        gsap.to('.banner-img', {
            x: -200,
            duration:1,
            delay:0.7,
            ease:'power1.out'
        })
        // banner text animation open
        gsap.to('.banner-text', {
            x: 200,
            duration:1,
            delay:0.7,
            ease:'power1.out'
        })
    }else{
        // chiusura banner
        gsap.to('.banner-hero', {
            x:-1530,
            duration:1,
            ease:'power3.inOut'
        })
        // arrow animation close
        gsap.to(arrowHero, {
            rotate:0,
            repeat:1,
        })
        arrowValidation=true;
        // ritorno loghi
        gsap.to('.logo_pro_custom', {
            x:0,
            y:0,
            rotate:0,
            delay:0.5,
            duration:2,
            ease:'power3.in'
        })
        // banner image animation close
        gsap.to('.banner-img', {
            x: 0,
            duration:0.5,
            ease:'power1.out'
        })
        // banner text animation close
        gsap.to('.banner-text', {
            x: 0,
            duration:0.5,
            ease:'power1.out'
        })
    }
 
    
})


//! SECTION ABOUT ME

//* Animazione gsap
// const aboutMe= document.querySelector('#aboutMe');

// // animazione titolo section 1
// function s1TitleAnimate(){
//     gsap.set('#about-title', {
//         y:0,
//         x:800,
//     })
//     gsap.to('#about-title', {
//         y:180,
//         duration:3,
//         ease:'power3.out'
//     })

// }

// // animazione immagine section 1
// function s1ImgAnimate(){

//     gsap.set('.about-img', {
//         y:130,
//         autoAlpha:0,
//     })
//     gsap.to('.about-img', {
//         autoAlpha:1,
//         x:300,
//         duration:3,
//         ease:'power3.out',
//     })
// }
// // animazione testo section 1
// function s1TextAnimate(){

//     gsap.set('.about-text', {
//         y:230,
//         x:-100,
//         autoAlpha:0,
//     })
//     gsap.to('.about-text', {
//         autoAlpha:1,
//         x:-200,
//         duration:3,
//         ease:'power3.out',
//     })
// }

// // observe
// let observer = new IntersectionObserver((entries) => {
//     entries.forEach((entrie) => {
//         console.log(entrie);
//         if (entrie.isIntersecting) {
//             s1TitleAnimate();
//             s1ImgAnimate();
//             s1TextAnimate();
//         console.log(entrie);
//         }
//     })
// })
// observer.observe(aboutMe);





//! SECTION WORK
gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "ease",
//     scrollTrigger: {
//         marker:true,
//       trigger: ".s2",
//       pin: true,
//       scrub: 1,
//       snap: {
//         snapTo: 1 / (sections.length - 1),
//         duration: 0.1,
//         delay: 0.1,
//         ease: "power1.inOut"
//       },
//       // base vertical scrolling on how wide the container is so it feels more natural.
//       end: "+=3500"
//     }
//   });

//! SECTION CARD

let working=[
    {img: './media/section2/static.jpeg', title: 'STATIC', price: '500'},
    {img: './media/section2/portfolio.jpeg', title: 'PORTFOLIO', price: '1000'},
    {img: './media/section2/e-commerce.jpeg', title: 'E-COMMERCE', price: '1500'},
];

let cardWrapper= document.querySelector('#card-wrapper');

working.forEach((work)=>{
    let div= document.createElement('div');
    div.classList.add('col-12', 'col-md-4', 'h-100');
    div.innerHTML= `
        <div class="s2-card-container">
            <div class="card-custom p-4">
                <div class="h-50 w-100">
                    <img class="img-fluid card-img-custom" src="${work.img}" alt="">
                </div>
                <div class="card-body-custom my-3 w-100">
                    <h4>${work.title}</h4>
                    <p>${work.price}$</p>
                </div>
                <button class="btn-card"><a class="no-decoration" href="#contact">BUY</a></button>
            </div>
        </div>
    `
    cardWrapper.appendChild(div);

})

//animazione card
let cards = document.querySelectorAll('.card-custom');

cards.forEach((card, index) =>{
    card.setAttribute("data-aos","flip-left");
    // card.setAttribute("data-aos","zoom-in"); --> alternative animation 
    card.setAttribute("data-aos-duration","1000");
    if(index==1){
        card.setAttribute("data-aos-delay", "200");
    }else if (index==2){
        card.setAttribute("data-aos-delay", "300");
    }
});


//! SECTION FEEDBACK AND SKILLS
//Feedback

//Feedback card dinamiche
let users=[
    {img: 'user1', name: 'Daniele', work: 'Medico', feedback: 'Fantastico lavoro!!!', social:'instagram'},
    {img: 'user2', name: 'Rebecca', work: 'Ingegnere', feedback: 'Prezzo troppo basso per le capacità che dimostra...', social:'linkedin'},
    {img: 'user3', name: 'Anna', work: 'Avvocato', feedback: 'Troppo bravo e gentile, lo consiglio a tutti.', social:'youtube'},
    {img: 'user4', name: 'Andrea', work: 'Insegnante', feedback: 'Il sito è stato fatto esattamente come lo volevo', social:'twitter'},
    {img: 'user5', name: 'Gabriele', work: 'Psicologo', feedback: 'Il migliore per realizzare il vostro sito personale', social:'tiktok'},  
];

let feedSlider= document.querySelector('#feedSlider');

users.forEach((user)=>{
    let div= document.createElement('div');
    div.classList.add('feed');
    div.innerHTML= `
        <div class="d-flex justify-content-center rounded-5 w-100 my-4">
            <div class="feed-container-img">
                <div class="feed-img-${user.img} ps-2"></div>
            </div>
            <div class="feed-name">
                <h5 class="m-0">${user.name}</h5>
                <h6 class="fst-italic">${user.work}</h6>
            </div>
            <div class="feed-container-icon">
                <i class="fa-brands fa-2xl fa-${user.social}"></i>
            </div>
        </div>
        <div class="feed-text px-3 pt-4">
            <p>${user.feedback}</p>
        </div>
    `
    feedSlider.appendChild(div);
})


//Feedback animazione
const feeds = document.querySelectorAll(".feed");
const offset = 20;

gsap.set(feeds, {
  x: (index) => offset * index,
  y: (index) => -offset * index,
  zIndex: (index) => feeds.length - index,
});


function diagonalLoop(feeds) {
    let totalFeeds = feeds.length;
    // console.log(totalFeeds);

    let currentFeed = 0;
  
    function updatePositions() {
      for (let i = 0; i < totalFeeds; i++) {
        let feedIndex = (currentFeed + i) % totalFeeds;
        let feed = feeds[feedIndex];
        gsap.to(feed, {
          x: offset * i,
          y: -offset * i,
          zIndex: totalFeeds - i,
          scale: 1,
          opacity: 1
        });
      }
    }
    function moveToNext() {
      const movingFeed = feeds[currentFeed];
  
      gsap.to(movingFeed, {
        // scale: 0.5,
        // y: "+=100",
        // opacity: 0,
        // duration: 0.1,
        onComplete: () => {
          currentFeed = (currentFeed + 1) % totalFeeds;
        //   console.log(currentFeed);
          updatePositions();
  
          gsap.to(movingFeed, {
            scale: 1,
            y: "-=50",
            opacity: 0,
            duration: 0.2,
          });
        }
      });
    }
  
    setInterval(moveToNext, 2000);
  
    updatePositions();
  }
  
  document.addEventListener("DOMContentLoaded", function () {
      diagonalLoop(feeds);
  });

//Skills animazione
gsap.from('.bar-text >span',{
    scrollTrigger:'.bar-text',
    left:0,
    duration:3,
    ease:'power2.out',
    stagger: 0.1,
})
gsap.from('.bar >span',{
    scrollTrigger:'.bar',
    width:'0px',
    duration:3,
    ease:'power2.out',
    stagger: 0.1,
})



//Inizializzazione AOS
AOS.init();