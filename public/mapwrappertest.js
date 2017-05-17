var MapWrapper = function(coords,zoom,container,content){

 this.googleMap = new google.maps.Map(container,{
   zoom: zoom,
   center: coords,
  });


 

     // markernew = document.getElementById(marker);
  

}

  
MapWrapper.prototype ={
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
       });
     infowindow = new google.maps.InfoWindow({
         content:"London is capital and largest city"
       });
    marker.addListener('click', function() {
           infowindow.open(this.googleMap, marker)
         }); 
    
  },
  
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
         var position = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          
      };
      this.addMarker(position);
    }.bind(this));
    
}



  

}



   



     
  
     
      // this.googleMap.open(map, marker);
    
  
