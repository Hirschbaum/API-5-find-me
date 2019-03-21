//function ready

$(() => {

    var map = undefined;


    //------------------ DEFINING THE MAP ----- default: New York (in key: center)--------------

    mapboxgl.accessToken = 'pk.eyJ1IjoiaGlyc2NoYmF1bSIsImEiOiJjanRlNng2b3EwazMyNDVxaThnb2MxOGtoIn0.2ZK2MPVV9Zoq_-EBVrafLg';
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/basic-v9',
        zoom: 13,
        center: [-74.005974, 40.712776]
    });

    //------------------CHOOSE YOUR MAP LAYER----mapbox--------------

    var layerList = document.getElementById('menu');
    var inputs = layerList.getElementsByTagName('input');

    //-----------------TO SWITCH BETWEEN THE LAYERS----mapbox--------

    function switchLayer(layer) {
        var layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
    }

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = switchLayer;
    };
  
    //-----------------pointMyLocation() function------------------
   //---on click on the button: run the built-in geolocation function  
   //---and do this: run the findMyLocation function with the parameters longitude and latitude and use the map from mapbox

    $('.button').click(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            findMyLocation(position.coords.latitude, position.coords.longitude);
        });

        function findMyLocation(latitude, longitude) {
            console.log(latitude, longitude);
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/basic-v9',
                zoom: 13,
                center: [longitude, latitude]
            });
        }
    });
});