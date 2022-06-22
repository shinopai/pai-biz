$(function () {
  // question slide
  $(".qa__text--question").each(function () {
    $(this).click(function () {
      if ($(this).hasClass("arrow-down")) {
        $(this).removeClass("arrow-down");
        $(this).addClass("arrow-up");
      } else {
        $(this).removeClass("arrow-up");
        $(this).addClass("arrow-down");
      }
      $(this).next(".qa__text--answer").slideToggle();
    });
  });
});
