console.log("RUN==========");

const toggler = document.querySelector(".menu__toggler");
if (toggler) {
  toggler.addEventListener("click", (e) => {
    console.log("click");
    const menuNav = document.querySelector(".menu__nav");
    if (menuNav) {
      toggler.classList.toggle("_active");
      document.body.classList.toggle("_lock-overflow");
      menuNav.classList.toggle("_active");
    }
  });
}
