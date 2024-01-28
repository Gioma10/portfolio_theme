//!NAVBAR
// navbar link
gsap.set(".nav-link", {
y: -200,
});
gsap.to(".nav-link", {
y: 0,
duration: 0.7,
stagger: 0.1,
ease: "power1.out",
});
// icon social
gsap.set("i", {
fontSize: 22,
y: -200,
x: -50,
});
gsap.to(".fa-brands", {
y: 0,
stagger: 0.1,
ease: "power1.out",
duration: 1.6,
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

const s1= document.querySelector('#aboutMe');

// animazione titolo section 1
gsap.set('#about-title', {
    y:0,
    x:250,
})
gsap.to('#about-title', {
    y:130,
    duration:3,
    ease:'power3.out'
})

// animazione immagine section 1
gsap.set('.about-img', {
    y:-100,
    autoAlpha:0,
})
gsap.to('.about-img', {
    autoAlpha:1,
    x:300,
    duration:3,
    ease:'power3.out',
})
// animazione testo section 1
gsap.set('.about-text', {
    y:0,
    x:200,
    autoAlpha:0,
})
gsap.to('.about-text', {
    autoAlpha:1,
    x:-200,
    duration:3,
    ease:'power3.out',
})