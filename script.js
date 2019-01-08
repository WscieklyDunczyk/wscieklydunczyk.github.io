function myMap() {
    var myCenter = new google.maps.LatLng(52.751897, 16.987988);
    var mapProp = {
      center: myCenter,
      zoom: 12,
      scrollwheel: false,
      draggable: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );
    var marker = new google.maps.Marker({
      position: myCenter
    });
    marker.setMap(map);
  }
  // Menu-toggle button
  $(document).ready(function () {
    $(".menu-icon").on("click", function () {
      $("nav ul").toggleClass("showing");
    });
  });
  // Scrolling Effect
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });