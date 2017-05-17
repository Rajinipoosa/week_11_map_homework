var initialize  = function(){
  var center = {lat: 51.5, lng: -0.12};
  var zoom =  10;
 var container = document.getElementById("main-map");

  var mainMap = new MapWrapper(center,zoom,container);
     mainMap.addMarker(center);
     mainMap.addClickEvent();
     
  }

  window.addEventListener('load', initialize);