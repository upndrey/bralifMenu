document.addEventListener("DOMContentLoaded", function(e) {
  let menuDom = document.querySelectorAll('.menu>.subLink');
  let headerDom = document.querySelector('header');
  let submenuDom = document.querySelectorAll('.submenu');

  menuDom.forEach((item, i) => {
    item.addEventListener("mouseenter", function () {
      submenuDom.forEach((item2, i) => {
        item2.classList.add("displaynone");
      });
      let currentSubmenuDom = document.querySelector('.submenu.'+item.classList[1]);
      currentSubmenuDom.classList.remove("displaynone");
    });
  });
  headerDom.addEventListener("mouseleave", function () {
    submenuDom.forEach((item, i) => {
      item.classList.add("displaynone");
    });
  });

  let leftHoverLiDom = document.querySelectorAll('.submenu__left>li');
  leftHoverLiDom.forEach((item, i) => {
    item.addEventListener("mouseenter", function (e) {
      let activeDom = document.querySelector('.submenu__left>li.active');
      let foundActiveElems = document.querySelectorAll("." + activeDom.classList[0]);
      foundActiveElems[0].classList.remove("active");
      foundActiveElems[1].classList.add("displaynone");

      let currentClass = e.target.classList[0];
      let foundElems = document.querySelectorAll("." + currentClass);
      foundElems[0].classList.add("active");
      foundElems[1].classList.remove("displaynone");
    })
  });


});
