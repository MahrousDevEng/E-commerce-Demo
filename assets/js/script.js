// Language Change Step 1
let selectedLang = sessionStorage.getItem("lang") || "en";
// Language Change Step 2
document.querySelector("html").dir = selectedLang === "en" ? "ltr" : "rtl";

$(function () {
  "use strict";

  // Language Change Step 3
  $(".change-lang").each(function () {
    selectedLang === "en" ? $(this).text("العربية") : $(this).text("English");
    $(this).on("click", function (e) {
      e.preventDefault();
      if (selectedLang === "en") {
        sessionStorage.setItem("lang", "ar");
        location.reload();
      } else {
        sessionStorage.setItem("lang", "en");
        location.reload();
      }
    });
  });

  // Fixed Header on Scroll
  const Header = $("#fixedHeader");
  const scrollTolerance = 1.25;

  if (
    Header.length &&
    $("body").height() > $(window).height() * scrollTolerance
  ) {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > Header.innerHeight()) {
        if (!Header.hasClass("fixed")) {
          Header.addClass("fixed");
        }
      } else {
        if (Header.hasClass("fixed")) {
          Header.removeClass("fixed");
        }
      }
    });
  }

  // Clear Search Button
  const searchField = $("#navSearch"),
    clearSearchBtn = $("#clearSearch");
  // Show / Hide Clear Button
  searchField.on("keyup", function () {
    if ($(this).val()) {
      !clearSearchBtn.hasClass("show") && clearSearchBtn.addClass("show");
    } else {
      clearSearchBtn.hasClass("show") && clearSearchBtn.removeClass("show");
    }
  });
  // Click on Clear Button
  clearSearchBtn.on("click", function (e) {
    e.preventDefault();
    searchField.val("");
  });
  // Show Mobile Search
  $(".mobile-search, .search-return").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".search-form").toggleClass("show");
  });

  // Lazy Load Images
  $(".lazy").lazy()
});
