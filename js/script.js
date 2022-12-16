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

  // Work History Section 
  let workImg = document.querySelector('.work-experience-overlay');
  let lawebBtn = document.getElementById('workLaWebClub');
  let cheefBtn = document.getElementById('workCheef');
  let tlgBtn = document.getElementById('workTlg');
  let workHoverText = document.getElementById('workHover');


  function showMoreBtn(x){
    x.innerHTML = 'Show More';
    x.classList.add('btn-dark') 
    x.classList.remove('btn-danger') 
    x.classList.remove('clicked')
    workHoverText.innerHTML = ''    
    return 

  }

  function showLessBtn(x){
    x.innerHTML = 'Hover over black & white image';
    x.classList.remove('btn-dark') 
    x.classList.add('btn-danger') 
    x.classList.add('clicked')       
    return

  }

  
  // LA Web Club 
  lawebBtn.addEventListener('click',()=>{

    if(workImg.classList.contains('show-img')){
      workImg.setAttribute('style','background-image:none;')
      workImg.classList.remove('show-img')
      showMoreBtn(lawebBtn);
      showMoreBtn(cheefBtn)      
      showMoreBtn(tlgBtn)      
    } else{
      workImg.setAttribute('style','background-image:url("../images/work-laweb.png");opacity:1;z-index:1;display:block;');
      workImg.classList.add('show-img');
      showLessBtn(lawebBtn)      
    }
  })
 

  // Cheef 
  cheefBtn.addEventListener('click',()=>{
    workImg.setAttribute('style','background-image:url("../images/work-cheef.png");opacity:1;z-index:1');

    if(workImg.classList.contains('show-img')){
      workImg.setAttribute('style','background-image:none;')
      workImg.classList.remove('show-img')
      showMoreBtn(cheefBtn)
      showMoreBtn(lawebBtn)
      showMoreBtn(tlgBtn)
    } else{

      workImg.setAttribute('style','background-image:url("../images/work-cheef.png");opacity:1;z-index:1;display:block;');
      workImg.classList.add('show-img');      
      showLessBtn(cheefBtn)
 
    }
  })
 
  // TLG 
  tlgBtn.addEventListener('click',()=>{

    workImg.setAttribute('style','background-image:url("../images/work-tlg.png");opacity:1;z-index:1');

    if(workImg.classList.contains('show-img')){
      workImg.setAttribute('style','background-image:none;')
      workImg.classList.remove('show-img')
      showMoreBtn(tlgBtn)
      showMoreBtn(lawebBtn)
      showMoreBtn(cheefBtn)
    } else{

      workImg.setAttribute('style','background-image:url("../images/work-tlg.png");opacity:1;z-index:1;display:block;');
      workImg.classList.add('show-img');
      showLessBtn(tlgBtn) 
    }
  })

  // On Scroll Remove Class 
 
  addEventListener('scroll',()=>{
    workImg.setAttribute('style','opacity:0;z-index:-1;background-image:none;');

    // LA Web Club 
    if(lawebBtn.classList.contains('clicked')){
      showMoreBtn(lawebBtn);
    }
    else if(cheefBtn.classList.contains('clicked')){
      showMoreBtn(cheefBtn); 
    }
    else if(tlgBtn.classList.contains('clicked')){
      showMoreBtn(tlgBtn); 
    }    
  })

 

  // On Hover Add color image 
  workImg.addEventListener('mouseenter',()=>{
    if(lawebBtn.classList.contains('clicked')){      
      workImg.setAttribute('style','background-image:url("../images/work-laweb-color.png");z-index:2;display:block;');
    }
    else if(cheefBtn.classList.contains('clicked')){
      workImg.setAttribute('style','background-image:url("../images/work-cheef-color.png");z-index:2;display:block;');
    }
    else if(tlgBtn.classList.contains('clicked')){
      workImg.setAttribute('style','background-image:url("../images/work-tlg-color.png");z-index:2;display:block;');
    }
  })
  workImg.addEventListener('mouseleave',()=>{
    if(lawebBtn.classList.contains('clicked')){
      workImg.setAttribute('style','background-image:url("../images/work-laweb.png");z-index:2;display:block;');
    }
    else if(cheefBtn.classList.contains('clicked')){
      workImg.setAttribute('style','background-image:url("../images/work-cheef.png");z-index:2;display:block;');
    }
    else if(tlgBtn.classList.contains('clicked')){
      workImg.setAttribute('style','background-image:url("../images/work-tlg.png");z-index:2;display:block;');
    }
  })

  

  function removelaweb(){
    workImg.setAttribute('style','opacity:0;background-image:none;');
  }

  function cheef(){
    workImg.setAttribute('style','background-image:url("../images/poster-cheef.jpg");opacity:1;');
  }

  function removecheef(){
    workImg.setAttribute('style','opacity:0');
  }

  function tlg(){
    workImg.setAttribute('style','background-image:url("../images/Poster-tlg.jpg");opacity:1;');
  }

  function removetlg(){
    workImg.setAttribute('style','opacity:0');
  }
// Navbar Transparency 
  let navBarBtn = document.querySelector('.navbar-toggler');
  let navBackground = document.querySelector('.navbar')

  let ulDiv = document.getElementById('navbarSupportedContent');

  navBarBtn.addEventListener('click',()=>{

    if( ulDiv.classList.contains('show')){
      navBackground.setAttribute('style','background-color:transparent;')
    }else{
      navBackground.setAttribute('style','background-color:#000000;')
    }
  })
 

