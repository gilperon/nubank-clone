document.addEventListener("DOMContentLoaded", function () {
  var slider = new KeenSlider("#carousel-icons", {
    loop: false,
    mode: "free-snap",
    slides: {
      perView: 4.5,
      spacing: 14,
    },
  });
});
