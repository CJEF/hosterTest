$(document).ready(function () {
  $(".slider").slick({
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slick-arrow").clone().appendTo(".slick-slider");

    $(".slick-prev:last").addClass("slick-prev_clonned slick-arrow_cloned");
    $(".slick-next:last").addClass("slick-next_clonned slick-arrow_cloned");

    $('.slick-prev_clonned').click(function () {
        $(".slider-1").slick('slickPrev');
    });
    $('.slick-next_clonned').click(function () {
        $(".slider-1").slick('slickNext');
    });

  $(".accordion__title").on("click", function () {
    if ($(this).parent().hasClass("accordion__item--active")) {
      $(this).parent().removeClass("accordion__item--active");
    } else {
      $(".accordion__item").removeClass("accordion__item--active");
      $(this).parent().addClass("accordion__item--active");
    }
  });

  let block = $("#sidebar"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)

  $(".burger").click(function () {
    block.addClass("active");
  });

  $(document).mouseup(function (e) {
    // отслеживаем событие клика по веб-документу

    if (
      !block.is(e.target) && // проверка условия если клик был не по нашему блоку
      block.has(e.target).length === 0
    ) {
      // проверка условия если клик не по его дочерним элементам
      block.removeClass("active"); // если условия выполняются - скрываем наш элемент
    }
  });

  $(".default-option").click(function () {
      $(this).parent().toggleClass("active");
  });

  $(".select-ul li").click(function () {
    let currentelem = $(this).html();
    $(".default-option li").html(currentelem);
    $(this).parents(".select_wrap").removeClass("active");
  });

  $(".tab").click(function () {
      $(".tab-item").removeClass("active");
      $(this).parent().addClass("active");
  });

  $(".tab-2").click(function () {
      $(".tab-item-2").removeClass("active");
      $(this).parent().addClass("active");
  });

  $(".tabs__base-item").click(function () {
      $(".tabs__base-item").removeClass("active");
      $(this).addClass("active");
  });

  $(".tabs__base-item-3").click(function () {
      $(".tabs__base-item-3").removeClass("active");
      $(this).addClass("active");
  });

  $(".tabs__little-item-3").click(function () {
    $(".tabs__little-item-3").removeClass("active");
    $(this).addClass("active");
  });

  $(".tabs__little-item").click(function () {
    $(".tabs__little-item").removeClass("active");
    $(this).addClass("active");
  });

  $(".prompt-span-1").hover(function () {
    $(".prompt__hint-1").addClass("active");
    $(".prompt-span-1").addClass("active");
  });

  $(".prompt-span-1").mouseleave(function () {
    $(".prompt__hint-1").removeClass("active");
    $(".prompt-span-1").removeClass("active");
  });

  $(".prompt-span-2").hover(function () {
    $(".prompt__hint-2").addClass("active");
    $(".prompt-span-2").addClass("active");
  });

  $(".prompt-span-2").mouseleave(function () {
    $(".prompt__hint-2").removeClass("active");
    $(".prompt-span-2").removeClass("active");
  });

  $(".dots__item").click(function () {
    $(".dots__item").removeClass("active");
    $(this).addClass("active");
  });

  $(".form__left-input").focus(function () {
    $(".form__left-input").removeClass("active");
    $(this).parent().addClass("active");
  });

  $(".form-item").focus(function () {
    $(this).parent().addClass("questions__form-item_active");
  });

  $(".form-item").blur(function () {
    $(this).parent().removeClass("questions__form-item_active");
  });

  $(".form__left-input").focus(function () {
    $(this).parent().addClass("form__left-input_active");
  });

  $(".form__left-input").blur(function () {
    $(this).parent().removeClass("form__left-input_active");
  });

  $(".first-tab-js").click(function () {
    if ($(window).width() < 761) {
      $(this).toggleClass("close-select");

      const wrapper = $(this).closest(".tabs-wrap-js");
      const tabUl = wrapper.find(".tab-ul-js");

      tabUl.toggleClass("tab-ul--active");
    }
  });

  $(".tab-js").on("click", function () {
    if ($(window).width() < 761) {
      // console.log($(this).text());
      const wrapper = $(this).closest(".tabs-wrap-js");
      const tabTitle = wrapper.find(".first-tab-js");
      // const tabTitleText = tabTitle.find(".tabs__base-div");
      const tabUl = wrapper.find("ul.tab-ul-js");
      tabTitle.text($(this).text());
      tabUl.removeClass("tab-ul--active");
      tabTitle.removeClass("close-select");
    }
  });

  // function textReplacer(elem) {

  // }

  // second tabs
  // $(".first-tab-js-2").click(function () {
  //   if ($(window).width() < 761) {
  //     $(this).toggleClass("close-select");
  //     $(".tab-ul-js-2").toggleClass("tab-ul--active");
  //   }
  // });

  // $(".tab-js-2").on("click", function () {
  //   if ($(window).width() < 761) {
  //     // console.log($(this).text());
  //     $(".first-tab-js-2").text($(this).text());
  //     $(".tab-ul-js-2").removeClass("tab-ul--active");
  //     $(".first-tab-js-2").removeClass("close-select");

  //     const wrapper = $(this).closest('.default-tab');
  //     console.log(wrapper);
  //     const firstTab = wrapper.find('.first-tab');

  //     firstTab.removeClass("tab-ul--active");
  //   }
  // });
});
