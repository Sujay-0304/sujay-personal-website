///////                    GSAP ANIMATIONS ON LOADING  
// "to" tween (animate to provided values)
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();
tl.from(".navbar",{
  y:-1000,
  opacity:0,
  duration:0.5,
  ease:"bounce",

})
tl.from("#particles-js",{
  opacity:0,
  y:-900,
  duration: 1.5,
  ease:"bounce",
});
// tl.from(".border",{
//   x:-300,
//   opacity:0,
//   ease:"bounce",
  
// })
tl.from(".alpha_loading", { 
  x: 10, // any properties (not limited to CSS)
 opacity:0,
  duration: 1,
  ease: "bounce",
  stagger:{
    each:0.1,
    from:"random"
  } // stagger start times
});

// tl.from(".navbar",{
//   y:-100,
//   opacity:0,
//   duration:0.5,
//   ease:"bounce",

// })
tl.from(".scrollbar_center",{
  y:-100,
  opacity:0,
  duration:1,
  ease:"bounce",

})
//////scrrolltrigger on alpha particles///////////////
gsap.from(".alpha_first",{
  x:10,
  scrollTrigger: {
    trigger:".alpha_first",
    scrub: 1,
  },
  stagger:{
    each:0.1,
    from:"start",
    
  },
  //duration:1,
  opacity:0,
  ease:"bounce",
})
gsap.from(".alpha_side_one",{
  x:10,
  stagger:{
    each:0.1,
    from:"start",
  },
  duration:1.5,
  opacity:0,
  ease:"bounce",
})
gsap.from(".alpha_second",{
  x:10,
  scrollTrigger: {
    trigger:".alpha_second",
    scrub: 2,
  },
  stagger:{
    each:0.1,
    from:"start",
  },
  //duration:1.5,
  opacity:0,
  ease:"bounce",
})
gsap.from(".alpha_side_two",{
  x:10,
  stagger:{
    each:0.1,
    from:"start",
  },
  duration:1.5,
  opacity:0,
  ease:"bounce",
})
gsap.from(".alpha_third",{
  x:10,
  scrollTrigger: {
    trigger:".alpha_third",
    scrub: 2,
  },
  stagger:{
    each:0.1,
    from:"start",
    
  },
  //duration:3,
  opacity:0,
  ease:"bounce",
})
gsap.from(".alpha_side_three",{
  x:10,
  stagger:{
    each:0.1,
    from:"start",
  },
  duration:1.5,
  opacity:0,
  ease:"bounce",
})
gsap.from(".alpha_four",{
  x:10,
  scrollTrigger: {
    trigger:".alpha_four",
    scrub: 2,
  },
  stagger:{
    each:0.1,
    from:"start",
    
  },
  //duration:1,
  opacity:0,
  ease:"bounce",
})
gsap.from(".alpha_side_four",{
  x:10,
  stagger:{
    each:0.1,
    from:"start",
  },
  duration:1.5,
  opacity:0,
  ease:"bounce",
})
///////////////////////alpha scroll trigger animation end////////////////

////////////////////////para animation///////////////////////////
gsap.from(".para_first",{
  y:100,
  scrollTrigger: {
    trigger:".para_first",
    
    scrub: 4,
  },
  stagger:{
    each:0.1,
    from:"start",
  },
  duration:1,
  opacity:0,
  ease:"bounce",
})
gsap.from(".para_first_side",{
  y:100,
  stagger:{
    each:0.1,
    from:"start",
  },
  duration:1.5,
  opacity:0,
  ease:"bounce",
})
gsap.from(".para_second",{
  y:100,
  scrollTrigger: {
    trigger:".para_second",
    
    scrub: 4,
  },
  stagger:{
    each:0.1,
    from:"start",
  },
  duration:1,
  opacity:0,
  ease:"bounce",
})
gsap.from(".para_second_side",{
  y:100,
  stagger:{
    each:0.1,
    from:"start",
  },
  duration:1.5,
  opacity:0,
  ease:"bounce",
})
////////image animations////////
gsap.from(".col_22",{
  x:200,
  scrollTrigger:{
    trigger:".col_22",
    scrub:1,
  },
  opacity:0,
  ease:"power4",
})
gsap.from(".col_22_side",{
  x:200,
  duration:2,
  opacity:0,
  ease:"power4",
})
/////////////////////////image animation end//////////////////////
///////////////////////porgress and skill animation///////////////
gsap.from(".skills",{
  x:-80,
  scrollTrigger:{
    trigger:".skills",
    scrub:1,
  },
   opacity: 0,
   ease:"power4",
})

gsap.from(".skill_side",{
  x:-80,
   duration:1,
   opacity: 0,
   ease:"power4",
})

gsap.from(".skillname",{
  x:90,
  scrollTrigger:{
    trigger:".skillname",
    scrub:1,
  },
  stagger:{
    each:0.1,
    from:"start",
  },
  opacity:0,
  ease:"power4",
})

gsap.from(".skillname_side",{
  x:-90,
  
  stagger:{
    each:0.1,
    from:"start",
  },
  duration:2,
  opacity:0,
  ease:"power4",
})

gsap.from(".progressbar",{
  x:-80,
  scrollTrigger:{
    trigger:".progressbar",
    scrub:1,
  },
  stagger:{
    each:0.1,
    from:"start",
  },
  opacity:0,
  ease:"power4",
})

gsap.from(".progressbar_side",{
  x:-80,
  stagger:{
    each:0.1,
    from:"start",
  },
  duration:1,
  opacity:0,
  ease:"power4",
})


gsap.from(".progressone1",{
  x:-80,
  
  scrollTrigger:{
    trigger:".progressone",
    scrub:1,
  },
  duration:1,
  opacity:0,
  ease:"power4",
})
gsap.from(".progresstwo2",{
  x:-80,
  
  scrollTrigger:{
    trigger:".progresstwo2",
    scrub:1,
  },
  opacity:0,
  ease:"power4",
})
gsap.from(".progressthree3",{
  x:-80,
  
  scrollTrigger:{
    trigger:".progressthree3",
    scrub:1,
  },
  opacity:0,
  ease:"power4",
})
gsap.from(".progressfour4",{
  x:-80,
 
  scrollTrigger:{
    trigger:".progressfour4",
    scrub:1,
  },
  opacity:0,
  ease:"power4",
})
/////////////////////////////////progress and skilll animation end///////////////////////////

//////////////////////////////////card animation start//////////////////////////////////////////
gsap.from(".cardone",{
  x:-100,
  scrollTrigger:{
    trigger:".cardone",
    scrub:1,
  },
  opacity:0,
  ease:"power4",
})
gsap.from(".cardone_side",{
  x:-150,
 duration:1.5,
  opacity:0,
  ease:"power4",
})
gsap.from(".gaming",{
  y:100,
  scrollTrigger:{
    trigger:".gaming",
    scrub:1,
  },
  
  ease:"power4",
})
gsap.from(".gaming_side",{
  y:200,
 duration:2,
 
  ease:"power4",
})
gsap.from(".cardthree",{
  x:100,
  scrollTrigger:{
    trigger:".cardthree",
    scrub:1,
  },
  opacity:0,
  ease:"power4",
})
gsap.from(".cardthree_side",{
  x:150,
  duration:1.5,
  opacity:0,
  ease:"power4",
})

//////////////////////////////////card animation start//////////////////////////////////////////

/////////////////////////////////contact animation start////////////////////////////////////////
gsap.from(".contact_form",{
  y:100,
  scrollTrigger:{
    trigger:".contact_form",
    scrub:1,
  },
  opacity:0,
  ease:"power4",
})
gsap.from(".contact_form_side",{
  y:100,
 
  opacity:0,
  ease:"power4",
})
gsap.from(".btn",{
  // x:-50,
  scrollTrigger:{
    trigger:".contact_form",
    start:"top 100%",
    scrub:2,
  },
  duration:1,
  opacity:0,
  ease:"power1",
})

//////////////////////////////// contacst  animation end//////////////////////////////////////////

/// navbar animation starts
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

///navbar animation ends

// mouseover Animation start
var elements = document.getElementsByClassName('alpha');

var span_elements = document.getElementsByClassName('span-alpha');




for (let i = 0; i<=elements.length; i++)
{
    elements[i].addEventListener('animationend',function(e){
        elements[i].classList.remove('animated');
    });

   

    elements[i].addEventListener('mouseover',function(e){
        elements[i].classList.add('animated')
    });

  }

  // for (let j = 0; j<=span_elements.length; j++)
  // {
  //     span_elements[j].addEventListener('animationend',function(e){
  //         span_elements[j].classList.remove('animate');
  //     });
  
     
  
  //     span_elements[j].addEventListener('mouseover',function(e){
  //         span_elements[j].classList.add('animate')
  //     });
   
  // }


//mouseover animation ends


