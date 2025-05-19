const arrows = document.querySelectorAll('.nav__arrow');

document.addEventListener("click", (e) => {
  const targetElement = e.target;


  // arrows.forEach(arrow => {
  //   let arrowParent = arrow.closest('.nav__item');
  //   let sublist = arrowParent.querySelector('.nav-sublist');
  //   if(!targetElement.closest('.nav-sublist')) {
  //     arrow.classList.remove('nav__arrow--open');
  //     sublist.classList.remove('nav-sublist--open');
  //     arrow.setAttribute("aria-expanded", "false");
  //     sublist.setAttribute("aria-hidden", "true");
  //   }
  //   if(targetElement === arrow) {
  //     if(!targetElement.classList.contains('nav__arrow--open')) {
  //       arrow.classList.add('nav__arrow--open');
  //       sublist.classList.add('nav-sublist--open');
  //       arrow.setAttribute("aria-expanded", "true");
  //       sublist.setAttribute("aria-hidden", "false");
  //     } else {
  //       arrow.classList.remove('nav__arrow--open');
  //       sublist.classList.remove('nav-sublist--open');
  //       arrow.setAttribute("aria-expanded", "false");
  //       sublist.setAttribute("aria-hidden", "true");
  //     }
  //   }
  // })


  // if(targetElement.closest('.nav__arrow')) {
  //   let currentArrow = targetElement.closest('.nav__arrow');
  //   let currentArrowParent = currentArrow.closest('.nav__item');
  //   let currentSubList = currentArrowParent.querySelector('.nav-sublist');

  //   if(!currentArrow.classList.contains('nav__arrow--open')) {
  //     currentArrow.classList.add('nav__arrow--open');
  //     currentSubList.classList.add('nav-sublist--open');
  //     currentArrow.setAttribute("aria-expanded", "true");
  //     currentSubList.setAttribute("aria-hidden", "false");
  //   } else {
  //     currentArrow.classList.remove('nav__arrow--open');
  //     currentSubList.classList.remove('nav-sublist--open');
  //     currentArrow.setAttribute("aria-expanded", "false");
  //     currentSubList.setAttribute("aria-hidden", "true");
  //   }
  // } else if (!targetElement.closest('.nav-sublist')) {
  //     arrows.forEach(arrow => {
  //       let arrowParent = arrow.closest('.nav__item');
  //       let sublist = arrowParent.querySelector('.nav-sublist');
  //       arrow.classList.remove('nav__arrow--open');
  //       sublist.classList.remove('nav-sublist--open');
  //       arrow.setAttribute("aria-expanded", "false");
  //       sublist.setAttribute("aria-hidden", "true");
  //   })
  // }


  if(targetElement.closest('.nav__arrow')) {
    let currentArrow = targetElement.closest('.nav__arrow');
    let currentParent = currentArrow.closest('.nav__item');
    let currentSublist = currentParent.querySelector('.nav-sublist');
    if(!currentArrow.classList.contains('nav__arrow--open')) {
        arrows.forEach(arrow => {
        let arrowParent = arrow.closest('.nav__item');
        let sublist = arrowParent.querySelector('.nav-sublist');
        arrow.classList.remove('nav__arrow--open');
        sublist.classList.remove('nav-sublist--open');
        arrow.setAttribute("aria-expanded", "false");
        sublist.setAttribute("aria-hidden", "true");
      })
        currentArrow.classList.add('nav__arrow--open');
        currentSublist.classList.add('nav-sublist--open');
        currentArrow.setAttribute("aria-expanded", "true");
        currentSublist.setAttribute("aria-hidden", "false");
    } else {
        currentArrow.classList.remove('nav__arrow--open');
        currentSublist.classList.remove('nav-sublist--open');
        currentArrow.setAttribute("aria-expanded", "false");
        currentSublist.setAttribute("aria-hidden", "true");
    }
  } else if(!targetElement.closest('.nav-sublist')) {
    arrows.forEach(arrow => {
        let arrowParent = arrow.closest('.nav__item');
        let sublist = arrowParent.querySelector('.nav-sublist');
        arrow.classList.remove('nav__arrow--open');
        sublist.classList.remove('nav-sublist--open');
        arrow.setAttribute("aria-expanded", "false");
        sublist.setAttribute("aria-hidden", "true");
      })
  }




})

