function Mapbox(mapbox_token){

mapboxgl.accessToken = mapbox_token;
	var map = new mapboxgl.Map({
	    container: 'map', // container id
	    style: 'mapbox://styles/mapbox/dark-v9',
	    center: [-122.3078, 47.6542], // starting position
	    zoom: 15, // starting zoom
	    maxZoom: 19,
	});

	map.addControl(new mapboxgl.NavigationControl());
	
	map.addControl(new mapboxgl.GeolocateControl({
	    positionOptions: {
	        enableHighAccuracy: true
	    }
	}));

	map.on('load', function(){
		map.addSource('streetlamp',{
			type: 'geojson',
			data: '../bundle/data-bundle.js'
		})
		map.addLayer({
			id: 'streetlamp',
			type: 'circle',
			source: 'streetlamp',
			paint:{
				'circle-color': '#ffbb00',
				'circle-opacity': 0.6,
				'circle-radius': {
					'base': 2.5,

					//do some math to make it stay the same in meters
					'stops': [[15,2.5],[17,25],[20, 270]]
				},
				'circle-blur': 0.3
			}
		})
		//make a request, get this url, turn it into geojson
		//Use map.getSource('streetlamp').setData(data);
	})
}

