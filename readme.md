<h1>Project<h1>

<h3>Idea</h3>

<p>
	Input list of addresses you're interested in 1-many<br>
	those will be ranked by 'accessability'<br>
	accesability determined by distance /time via transit options<br>
	user can specify transit options by travelmode<br>
</p>

<h3>Getting Started</h3>

<ul>
	<li>Origins and destinations: Arrays of strings denoting place names /addresses</li>
	<li>Query: Object, keys for the origins, destinations, travelMode and unitSystem</li>
	<li>travelMode: walking, driving, etc. Capitalized. 'google.maps.TravelMode.WALKING</li>

	`
		magic map variables: 

		   var map, dms;
		   var dirService, dirRenderer;

		   		dirService = new google.maps.DirectionsService();
    			dirRenderer = new google.maps.DirectionsRenderer({preserveViewport:true});

		   var bounds;
		   var panning = false;
	`

	<li>Set dirService and dirRenderer as shown above</li>
	<li>Set a bunch of map specific stuff:</li>

	`
		dirService.route(query, function(result, status) {

			//passing in query above

		  if (status == google.maps.DirectionsStatus.OK) {
		    dirRenderer.setDirections(result);
		    bounds = new google.maps.LatLngBounds();
		    bounds.extend(result.routes[0].overview_path[0]);
		    var k = result.routes[0].overview_path.length;
		    bounds.extend(result.routes[0].overview_path[k-1]);
		    panning = true;
		    map.panTo(bounds.getCenter());        
		  }
		});

	`
</ul>