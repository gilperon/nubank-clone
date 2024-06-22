document.addEventListener("DOMContentLoaded", function () {
  var slider1 = new KeenSlider("#carousel-icons", {
    loop: false,
    mode: "free",
    slides: {
      perView: 4.5,
      spacing: 14,
    },
  });

  var slider2 = new KeenSlider("#carousel-textos", {
    loop: false,
    mode: "free",
    slides: {
      perView: 1.5,
      spacing: 14,
    },
  });
});
