let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

if (document.querySelectorAll('.team-member__link')) {
  if (!isMobile.any() && window.innerWidth >= 767.98) {
    const teamMember = document.querySelectorAll('.team-member');
    teamMember.forEach(member => {
      const team = member.querySelector('.team-member__pro');
      const memberLink = member.querySelector('.team-member__link');
      const memberSocials = member.querySelector('.team-member__social');
      memberSocials.style.opacity = "0";
      memberSocials.style.translate = "0 10px";
      memberLink.addEventListener("mouseover", function (e) {
        memberSocials.style.opacity = "1";
        memberSocials.style.translate = "0 0";
      })
      memberLink.addEventListener("mouseout", function (e) {
        memberSocials.style.opacity = "0";
        memberSocials.style.translate = "0 10px";
      })
      team.addEventListener("mouseover", function (e) {
        memberSocials.style.opacity = "1";
        memberSocials.style.translate = "0 0";
      })
      memberLink.addEventListener("focusin", function (e) {
        memberSocials.style.opacity = "1";
        memberSocials.style.translate = "0 0";
      })
    })
  }
}

if (document.querySelectorAll('.item-service')) {
  if (!isMobile.any() && window.innerWidth >= 767.98) {
    const itemService = document.querySelectorAll('.item-service');
    itemService.forEach(item => {
      const btn = item.querySelector('.item-service__btn');
      btn.addEventListener("focusin", function(e) {
        btn.style.opacity = "1";
        item.classList.add('visible');
      })
      btn.addEventListener("focusout", function(e) {
        btn.style.opacity = "0";
        item.classList.remove('visible');
      })
    })
  }
}

if(document.querySelector('.tariff-plan')) {
  
}

