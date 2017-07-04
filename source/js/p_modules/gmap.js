var map;

function init(map_id) {
	var mapOptions = {
		center: new google.maps.LatLng(50.450918, 30.519815),
		zoom: 15,
		zoomControl: false,
		disableDoubleClickZoom: false,
		mapTypeControl: false,
		scaleControl: false,
		scrollwheel: false,
		panControl: false,
		streetViewControl: false,
		draggable : true,
		overviewMapControl: false,
		overviewMapControlOptions: {
			opened: false,
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
		{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#444444"
			}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [
			{
				"color": "#f2f2f2"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
			{
				"saturation": -100
			},
			{
				"lightness": 45
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "simplified"
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
			{
				"color": "#86a77a"
			},
			{
				"visibility": "on"
			}
			]
		}
		],
	}
	var mapElement 	= document.getElementById('map_wrapper'),
			map 				= new google.maps.Map(mapElement, mapOptions);
	google.maps.event.addListener(map, 'click', function (event) {
    addMarker(event.latLng);
  });//добавляем событие нажание мышки

	var locations = [
    {
      title: 'Frontend Developer Here',
      position: {lat: 50.450408, lng: 30.534801},
      icon: {
        url: "assets/img/markers/mark.svg",
        scaledSize: new google.maps.Size(39, 53)
      }
    }
  ];

  locations.forEach (function (element, index){
      var marker = new google.maps.Marker({
        position: element.position,
        map: map,
        title: element.title,
        icon: element.icon,
      });
  });
}

module.exports ={
	init : init
};

