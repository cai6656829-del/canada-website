$(window).scroll(function () {
  if ($(document).scrollTop() > 150) {
    $(".header-middle").addClass("nav-fix");
  } else {
    $(".header-middle").removeClass("nav-fix");
  }
});

// AOS Animations
$(document).ready(function () {
  AOS.init();
});

$(document).ready(function () {
  var lazyImageSelection = $("img.lazyload");
  var delay = 75; // Delay time in milliseconds

  if (lazyImageSelection.length > 0) {
    lazyImageSelection.each(function (index) {
      var $img = $(this);
      setTimeout(function () {
        $img.lazyload({
          src: "data-src",
          srcset: "data-srcset",
          selector: ".lazyload",
          root: null,
          rootMargin: "0px",
          threshold: 0,
        });
      }, index * delay);
    });
  }
});

$(document).ready(function () {
  var trigger = $(".hamburger"),
    overlay = $(".overlay"),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $("#wrapper").toggleClass("toggled");
  });
});

(function ($) {
  var $main_nav = $("#main-nav");
  var $toggle = $(".toggle");

  var defaultData = {
    maxWidth: false,
    customToggle: $toggle,
    levelTitles: true,
    position: "right",
    insertClose: 2,
    closeLevels: false,
    levelOpen: "expand",
  };

  // add new items to original nav
  $main_nav
    .find("li.add")
    .children("a")
    .on("click", function () {
      var $this = $(this);
      var $li = $this.parent();
      var items = eval("(" + $this.attr("data-add") + ")");

      $li.before('<li class="new"><a>' + items[0] + "</a></li>");

      items.shift();

      if (!items.length) {
        $li.remove();
      } else {
        $this.attr("data-add", JSON.stringify(items));
      }

      Nav.update(true);
    });

  // call our plugin
  var Nav = $main_nav.hcOffcanvasNav(defaultData);

  // demo settings update
})(jQuery);

//
$(".subMenu").hide();

// Shows SubMenu when its parent is hovered.
$(".subMenu")
  .parent("li")
  .hover(
    function () {
      $(this).find(">.subMenu").stop(true, true).fadeIn(300);
      $(this).addClass("active");
    },
    function () {
      $(this).find(">.subMenu").stop(true, true).fadeOut(150);
      $(this).removeClass("active");
    }
  );

// Prevents scroll to top when clicking on <a href="#">
$('a[href="#"]').click(function () {
  return false;
});

//start search
$(document).ready(function () {
  //   $(".search-toggle").addClass("closed");
  $(".search-toggle .search-open-cls ").click(function (e) {
    if ($(".search-toggle").hasClass("closed")) {
      $(".search-toggle").removeClass("closed").addClass("opened");
      $(".search-toggle, .search-container-control").addClass("opened");
    } else {
      $(".search-toggle").removeClass("opened").addClass("closed");
      $(".search-toggle, .search-container-control").removeClass("opened");
    }
  });
  // $('.search-close-icon').click(function (e) {
  //     e.preventDefault();
  //     $('.search-toggle').removeClass('opened').addClass('closed');
  //     $('.search-toggle, .search-container-control').removeClass('opened');
  // });
});
