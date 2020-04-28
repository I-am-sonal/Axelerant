import $ from "jquery";
import "./sass/styles.scss";
import "./slick/slick.min.js";

if ($(window).width() <= 767) {
  $(document).ready(function() {
    $(".slick-slider-testi").slick({
      arrows: false
    });
  });
}
