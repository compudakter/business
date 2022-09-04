 
const toggler = document.querySelector(".menu__toggler");
const menuNav = document.querySelector(".menu__nav");

if (toggler && menuNav) {
  toggler.addEventListener("click", (e) => { 
    if (menuNav) {
      toggler.classList.toggle("_active");
      document.body.classList.toggle("_lock-overflow");
      menuNav.classList.toggle("_active");
    }
  });
}

const menuItems = document.querySelectorAll('.menu__item') 
if(menuItems.length){
  menuItems.forEach(mi=>{
     
    const sectionClass = mi.getAttribute('data-section') 
    if(sectionClass){
      mi.addEventListener('click',()=>{ 
        const section = document.querySelector(sectionClass)
        const headerHeight = document.querySelector('header').clientHeight
        const top = section.getBoundingClientRect().top + scrollY - headerHeight
        toggler.classList.remove("_active");
        document.body.classList.remove("_lock-overflow");
        menuNav.classList.remove("_active");
        window.scrollTo({
          top,
          behavior:'smooth'
        })
      })
    }
     
  })
}