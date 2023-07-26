const menus = [
  {
    id: 1,
    title: "Khám bệnh tổng quát",
  },
  {
    id: 2,
    title: "Khám bệnh ngoại khoa",
  },
  {
    id: 3,
    title: "Chuẩn đoán hình ảnh",
  },
  {
    id: 4,
    title: "Xét nghiệm",
  },
];
var myPhongkham = new Swiper(".myPhongkham", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<li class="w-auto bg-transparent ' +
        className +
        '">' +
        menus.find(menu => menu.id == index + 1).title +
        "</li>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function myFunction() {
  var x = document.getElementById("myMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var myService = new Swiper(".myService", {
  watchSlidesProgress: true,
  spaceBetween: 10,
  slidesPerView: 3,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var quytrinh = new Swiper(".quytrinh", {
  watchSlidesProgress: true,
  spaceBetween: 10,
  slidesPerView: 4,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var myDoctor = new Swiper(".myDoctor", {
  watchSlidesProgress: true,
  spaceBetween: 10,
  slidesPerView: 4,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var myComment = new Swiper(".myComment", {
  watchSlidesProgress: true,
  spaceBetween: 10,
  slidesPerView: 3,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function() {
  $('#toggle').click(function() {
      $('nav').slideToggle();
  });
})