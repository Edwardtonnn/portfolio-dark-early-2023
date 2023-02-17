// Register GSAP 
gsap.registerPlugin(ScrollTrigger);
// let openerBtn = document.getElementById('opener')

// Opening sequence 
const tl = gsap.timeline({defaults:{ease:'power1.out',duration:1}});


window.addEventListener('load', ()=>{
  let openerWrapper = document.querySelector('.opener-wrapper');
  openerWrapper.setAttribute('style','overflow:visible;position:absolute;');
  window.scrollTo(0, 0);

    
  tl.to('.logo-opener',{      
    display:'none',
    top:"45%",
    delay:1,
    duration:.5,
    opacity:0
  })
  tl.to('.container-opener',{
    y:"-100vh",
    duration:.75
 
    
  })
  tl.to(openerWrapper,{
    display:'none'
  });
  

  
});
 


// Set the horizontal containers 
let sections = gsap.utils.toArray(".container-hz");
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".portfolioWrapper",
      pin: true,
      scrub: .1,
      snap: .1,     
      end: "+=3000",
    }    
  });

  
 

  // Apply background color overlays to horizontal section 
  function applyColorOverlay(ele){
    // Set color value 
    let compStyles = window.getComputedStyle(ele);
    // let bgColor = ele.id;
    let bgColor = compStyles.getPropertyValue('background-color')
    let colorOverlayBg = document.querySelector('.color-overlay');   

    colorOverlayBg.setAttribute('style','background-color:' + bgColor + '; transition:.2s ease;')     
  }
 
  function removeColorOverlay(){
    // Set color value 
    let colorOverlayBg = document.querySelector('.color-overlay');
    colorOverlayBg.setAttribute('style','background-color: transparent'+ '; transition:.2s ease;')    
  }
  function applyColorOverlay2(ele){
    // Set color value 
    let compStyles = window.getComputedStyle(ele);
    // let bgColor = ele.id;
    let bgColor = compStyles.getPropertyValue('background-color');
    let colorOverlayBg = document.querySelector('.color-overlay-2');   

    colorOverlayBg.setAttribute('style','background-color:' + bgColor + '; transition:.2s ease;')     
  }
 
  function removeColorOverlay2(){
    // Set color value 
    let colorOverlayBg = document.querySelector('.color-overlay-2');

    colorOverlayBg.setAttribute('style','background-color: transparent'+ '; transition:.2s ease;')    
  }

  function applyColorOverlay3(ele){
    // Set color value 
    let compStyles = window.getComputedStyle(ele);
    // let bgColor = ele.id;
    let bgColor = compStyles.getPropertyValue('background-color')
    let colorOverlayBg = document.querySelector('.color-overlay-3');   

    colorOverlayBg.setAttribute('style','background-color:' + bgColor + '; transition:.2s ease;')     
  }
 
  function removeColorOverlay3(){
    // Set color value 
    let colorOverlayBg = document.querySelector('.color-overlay-3');
    colorOverlayBg.setAttribute('style','background-color: transparent'+ '; transition:.2s ease;')    
  }
 

  // Homepage Browse my social functionality 
  let socialText = document.getElementById('social-Text');
  const tlSocial = gsap.timeline({ paused: true, ease: Expo.easeInOut, duration:.5 });
  tlSocial.from('.container-social-text',{
    x:"-40px"
  },"-=.5")
  tlSocial.from('.container-social',{      
     x:"40px"
  },"-=.5")
  tlSocial.play();

  socialText.addEventListener('click',()=>{
    tlSocial.reversed() ? tlSocial.play() : tlSocial.reverse();   
  })

