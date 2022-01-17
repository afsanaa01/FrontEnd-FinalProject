$(function () {
  AOS.init();
  updateNav();
  updateScroller();

  $(window).scroll(function () {
    updateNav();
    updateScroller();
  });

  function updateNav() {
    if ($(window).scrollTop() > 30) {
      $(".navbar").addClass("scrolled");
      $(".logo-img").attr("src", "https://demo.graygrids.com/themes/craft/assets/images/logo/logo.svg");
      $(".upper").removeClass("d-none")
    } else {
      $(".navbar").removeClass("scrolled");
      $(".logo-img").attr("src", "https://demo.graygrids.com/themes/craft/assets/images/logo/white-logo.svg");
      $(".upper").addClass("d-none")
    }
  }

  function updateScroller() {
    if ($(window).scrollTop() > 100) {
      $(".scroll-top").fadeIn(200);
    } else {
      $(".scroll-top").fadeOut(200);
    }
  }

  $(document).on("click", ".scroll-top", function () {
    $(window).scrollTop(0);
  })

  $(".team-info1").hover(function () {
    $(".social-media1").toggleClass("d-none");
  });
  $(".team-info2").hover(function () {
    $(".social-media2").toggleClass("d-none");
  });
  $(".team-info3").hover(function () {
    $(".social-media3").toggleClass("d-none");
  });
  $(".team-info4").hover(function () {
    $(".social-media4").toggleClass("d-none");
  });

  $(document).on("click", ".myh1", function () {
    $(this).next().slideToggle(500);
    $(this).prevAll(".accordion-p").slideUp(500);
    $(this).nextUntil(this).nextAll(".accordion-p").slideUp(500);
  })
  $(document).on("click", ".scroll-top", function () {
    $(window).scrollTop(0);
  })

  $(".all").click(function () {
    $(".branding").removeClass("back-color")
    $(".marketing").removeClass("back-color")
    $(".web-desing").removeClass("back-color")
    $(".graphic-desing").removeClass("back-color")
    $(".all").addClass("back-color")
    $("#work-item1").removeClass("d-none");
    $("#work-item2").removeClass("d-none");
    $("#work-item3").removeClass("d-none");
    $("#work-item4").removeClass("d-none");
    $("#work-item5").removeClass("d-none");
    $("#work-item6").removeClass("d-none");
  });

  $(".branding").click(function () {
    $(".branding").addClass("back-color")
    $(".marketing").removeClass("back-color")
    $(".web-desing").removeClass("back-color")
    $(".graphic-desing").removeClass("back-color")
    $(".all").removeClass("back-color")
    $("#work-item1").removeClass("d-none");
    $("#work-item3").removeClass("d-none");
    $("#work-item2").addClass("d-none");
    $("#work-item4").addClass("d-none");
    $("#work-item5").addClass("d-none");
    $("#work-item6").addClass("d-none");
  });

  $(".marketing").click(function () {
    $(".branding").removeClass("back-color")
    $(".marketing").addClass("back-color")
    $(".web-desing").removeClass("back-color")
    $(".graphic-desing").removeClass("back-color")
    $(".all").removeClass("back-color")
    $("#work-item1").removeClass("d-none");
    $("#work-item2").removeClass("d-none");
    $("#work-item3").addClass("d-none");
    $("#work-item4").addClass("d-none");
    $("#work-item5").addClass("d-none");
    $("#work-item6").addClass("d-none");
  });

  $(".web-desing").click(function () {
    $(".branding").removeClass("back-color")
    $(".marketing").removeClass("back-color")
    $(".web-desing").addClass("back-color")
    $(".graphic-desing").removeClass("back-color")
    $(".all").removeClass("back-color")
    $("#work-item4").removeClass("d-none");
    $("#work-item6").removeClass("d-none");
    $("#work-item1").addClass("d-none");
    $("#work-item2").addClass("d-none");
    $("#work-item3").addClass("d-none");
    $("#work-item5").addClass("d-none");
  });

  $(".graphic-desing").click(function () {
    $(".branding").removeClass("back-color")
    $(".marketing").removeClass("back-color")
    $(".web-desing").removeClass("back-color")
    $(".graphic-desing").addClass("back-color")
    $(".all").removeClass("back-color")
    $("#work-item5").removeClass("d-none");
    $("#work-item2").removeClass("d-none");
    $("#work-item1").addClass("d-none");
    $("#work-item3").addClass("d-none");
    $("#work-item4").addClass("d-none");
    $("#work-item6").addClass("d-none");
  });
  $(document).on("click", ".upper", function () {
    $(window).scrollTop(0);
  })

  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
}); 