var map;

//create and draw the map in the mash-up
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8708 , lng: -87.6505},
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
   map.setTilt(45);
}
