//Left-Menu
TweenMax.from('.left_menu', 1, {
    delay: 1,
    opacity: 0,
    x: -50,
    ease: Expo.easeInOut
})

//Nav - end
TweenMax.from('.navbar-end', 1, {
    delay: 1,
    opacity: 0,
    x: 100,
    ease: Expo.easeInOut
}, 0.08)

//navbar-center
TweenMax.from('.navbar-center', 1, {
    delay: 1,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})

//pic-img
TweenMax.from('.pic-img', 1, {
    delay: 2,
    opacity: 0,
    x: -50,
    ease: Expo.easeInOut
})

//Nav - end
TweenMax.from('.hero-title', 1, {
    delay: 3,
    opacity: 0,
    x: 100,
    ease: Expo.easeInOut
}, 0.08)

//about-title
TweenMax.from('.about-title', 1, {
    delay: 4,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})

//header
function header() {
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 1.9
        },
        yPercent: -150
    })
    gsap.to('.header .stroke', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 1.9
        },
        xPercent: 50
    })
    gsap.to('.pic_img', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 1.9
        },
        xPercent: -70
    })
    gsap.to('.pic_img img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            scale: 1.3
        })
        // gsap.to('.hero-title', {
        //     scrollTrigger: {
        //         trigger: '.header',
        //         start: 'top top',
        //         scrub: 1.9
        //     },
        //     xPercent: -50
        // })
}
header();

//about-img
let bgImage = document.querySelector(".about-img");

//  Now registering thescrollTrigger plugin to gsap
gsap.registerPlugin(ScrollTrigger);

// Now we are going to animate
gsap.fromTo(
    bgImage, {
        clipPath: "circle(5% at 77% 40%)",
    }, {
        clipPath: "circle(75% at 50% 50%)",
        ease: "none",

        //  We want to do that animation on scroll
        scrollTrigger: {
            trigger: bgImage,
            scrub: 1,
            start: "top center",
            end: "top center-=200",
        },
    }
);

gsap.to('.about-img, about-title', {
    scrollTrigger: {
        trigger: '.about-pages',
        start: 'top top',
        scrub: 1.9
    },
    yPercent: -100
})

//skills
gsap.from('.skill-content', {
    x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
    scrollTrigger: {
        trigger: '.benefits__list',
        start: 'top bottom',
        scrub: 1.9
    }
})

//portfolio
function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".title-portfolio", 1.5, {
        translateY: 20,
        opacity: 0,
        ease: "expo.out",
        delay: .7
    })
    tl.from(".descript-portfolio", 1.5, {
        translateY: 20,
        ease: "expo.out",
        opacity: 0
    }, "-=1.3")
}

const boxes = document.querySelectorAll('.box');

const config = {
    threshold: 0.5
};

const tl = new TimelineMax();

let observer = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let overlap = '-=0.3';

            if (!tl.isActive()) {
                overlap = '+=0';
            }

            tl.to(entry.target, 0.5, { autoAlpha: 1 }, overlap);
            self.unobserve(entry.target);
        }
    });
}, config);

boxes.forEach(box => {
    observer.observe(box);
});

gsap.to('.overlay', { y: '-100vh', delay: 1.5 });
gsap.to('.layer-1', { y: '-100vh', delay: .5 });
gsap.to('.layer-2', { y: '-100vh', delay: .7 });
gsap.to('.layer-3', { y: '-100vh', delay: .9 });

//skills
const trigger3 = gsap.utils.toArray('.skills-page');
trigger3.forEach((item, i) => {
    const gridAnimation3 = gsap.fromTo(item, { y: 120, opacity: 0 }, { duration: 2, y: 0, opacity: 1, stagger: .2 });
    ScrollTrigger.create({
        trigger: item,
        animation: gridAnimation3,
        toggleActions: "play reverse play reverse",
    });
});

const trigger4 = gsap.utils.toArray('.contact-box');
trigger4.forEach((item, i) => {
    const gridAnimation4 = gsap.fromTo(item, { y: 120, opacity: 0 }, { duration: 3, y: 0, opacity: 1, stagger: .2 });
    ScrollTrigger.create({
        trigger: item,
        animation: gridAnimation4,
        toggleActions: "play reverse play reverse",
    });
});