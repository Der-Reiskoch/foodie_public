"use strict";

var groups = {};
var openBubbles = [];
var boundingGroup = new H.map.Group();
var HereHelper = (function() {

    /**
     * init the map
     * @param {*} appId 
     * @param {*} code 
     * @param {*} options
     * @param {*} venueTypes 
     * @param {*} venues 
     */

    function initMap(appId, code, options, venueTypes, venues) {
        
        var platform = new H.service.Platform({
            'app_id': appId,
            'app_code': code,
            'useCIT': true,
            'useHTTPS': true
        });
    
        var defaultLayers = platform.createDefaultLayers();
    
        var map = new H.Map(
            document.getElementById('mapContainer'),
            defaultLayers.normal.map,
            options
        );

        var ui = H.ui.UI.createDefault(map, defaultLayers, 'de-DE');
        var mapSettings = ui.getControl('mapsettings');
        mapSettings.setAlignment('top-left');

        var mapEvents = new H.mapevents.MapEvents(map);
        var behavior = new H.mapevents.Behavior(mapEvents);

        var geocoder = platform.getGeocodingService();

        HereHelper.findMissingCoordsForVenues(geocoder, venueTypes, venues);

        HereHelper.plotVenues(map, ui, venueTypes, venues);

        HereHelper.addMapEventListener(map, ui);

        HereHelper.restrictMapToBoundingGroup(map,ui);

    }


    /**
     * add a new marker to the group
     * @param {*} group 
     * @param {*} coords 
     * @param {*} color 
     * @param {*} html 
     */
    function addMarkerToGroup(group, coords, color, html) {
 
        var svgMarkup = '<svg width="32" height="42" enable-background="new -453 251.6 51.3 59.4" version="1.1" viewBox="-453 251.6 51.3 59.4" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><style type="text/css">.st0{fill:${FILL};}.st1{fill:#FFFFFF;}</style><path class="st0" d="m-427.4 310.8s25.4-19.5 25.4-33.6c0-14-11.4-25.4-25.4-25.4s-25.3 11.4-25.3 25.4 25.3 33.6 25.3 33.6"/><path class="st1" d="m-427.4 295.1c10.2 0 18.5-8.3 18.5-18.5s-8.3-18.5-18.5-18.5-18.5 8.3-18.5 18.5 8.3 18.5 18.5 18.5"/><path d="m-418.3 284s-4.9-4.9-5.3-5.4c-0.3-0.1-2-0.8-2.1-2.3 0.7-0.8 1.8-1.7 3.4-1.7 0.7 0 1.4-0.2 2-0.7l0.1-0.1 4-5-0.5-0.5-4.8 5.1-0.6-0.6 5-5-0.4-0.4-5 5-0.5-0.5 5-5-0.5-0.5-5 5-0.6-0.6 5.2-4.9-0.4-0.4-4.8 3.7s-0.2 0.1-0.2 0.2c-0.7 0.7-0.9 1.5-0.8 2.4-0.1 1.1-0.4 1.9-0.9 2.5-8.9-8.7-12.2-7.8-12.2-7.8l-0.3 0.3 9.7 9.7-7.5 7.5c-0.4 0.4-0.4 1.2 0 1.6s1.2 0.4 1.6 0l7.5-7.5 1.2 1.2c0.5 0.6 6.1 6.1 6.1 6.1 0.4 0.4 1.2 0.4 1.6 0 0.4-0.2 0.4-0.9 0-1.4z"/></svg>';
        var icon = new H.map.Icon(svgMarkup.replace('${FILL}', color));

        var marker = new H.map.Marker(coords, {icon: icon});
        marker.setData(html);
        group.addObject(marker);

    }

    /**
     * add coords to the bounding group
     * @param {*} coords 
     */
    function addCoordstoBoundingGroup(coords) {
        var marker = new H.map.Marker(coords);
        boundingGroup.addObject(marker);
    }

    /**
     * remove all open bubbles
     * @param {*} ui 
     */
    function closeAllOpenBubbles(ui) {
        for(var ii = 0; ii < openBubbles.length; ii++ ) {
            var openBubble = openBubbles[ii];
            ui.removeBubble(openBubble);
        }
    }

    /**
     * add event listener to group for showing InfoBubbles
     * @param {*} group 
     * @param {*} ui 
     */
    function addInfoBubbleEventListener(group, ui) {

        // add 'tap' event listener, that opens info bubble, to the group
        group.addEventListener('tap', function(evt) {

            evt.stopPropagation()

            HereHelper.closeAllOpenBubbles(ui)
    
            var bubble = new H.ui.InfoBubble(evt.target.getPosition(), {
                content: evt.target.getData()
            });

            // show info bubble
            ui.addBubble(bubble);
            openBubbles.push(bubble);
        }, false);
    }

    /**
     * add the eventlistener for the whole map
     * @param {*} map
     * @param {*} ui  
     */
    function addMapEventListener(map, ui) {
        map.addEventListener('tap', function (evt) {
            var coords =  map.screenToGeo(evt.currentPointer.viewportX, evt.currentPointer.viewportY);
            console.log(JSON.stringify(coords));
            HereHelper.closeAllOpenBubbles(ui);
          }, false);
    }

    /**
     * plots the coord of venues without coords to the console
     * @param {*} geocoder
     * @param {*} venueTypes 
     * @param {*} venues 
     */
    function findMissingCoordsForVenues(geocoder, venueTypes,venues) {

        var venueTypesKeys = Object.keys(venueTypes);

        for (var ii = 0; ii < venueTypesKeys.length; ii++) {
            var venuesOfType = venues[venueTypesKeys[ii]];

            for (var jj = 0; jj < venuesOfType.length; jj++) {

                var venue = venuesOfType[jj];

                if (venue.lat === 0 && venue.lng === 0) {

                    var geocodingParams = {
                        searchText: venue.address
                    };

                    geocoder.geocode(geocodingParams, function(result) {

                        var locations = result.Response.View[0].Result;

                        if (locations && locations.length === 1) {

                            var location = locations[0].Location;  
                
                            var position = {
                                lat: location.DisplayPosition.Latitude,
                                lng: location.DisplayPosition.Longitude
                            };    

                            var address = location.Address.Label;  
                            console.log('found missing coords for ' + address + ' ' + JSON.stringify(position));
                        }
                    },
                    function(e) {
                        alert(e);
                    });
                }
            }
        }

    }

    /**
     * plot all the venues
     * @param {*} map 
     * @param {*} ui 
     * @param {*} venueTypes 
     * @param {*} venues 
     */
    function plotVenues(map, ui, venueTypes, venues) {

        var venueTypesKeys = Object.keys(venueTypes);

        for (var ii = 0; ii < venueTypesKeys.length; ii++) {

            var venueType = venueTypes[venueTypesKeys[ii]];
            var venuesOfType = venues[venueTypesKeys[ii]];

            var group = new H.map.Group();
            map.addObject(group);
            groups[venueType.name] = group;

            for (var jj = 0; jj < venuesOfType.length; jj++) {
              var venue = venuesOfType[jj];   
                      
              var coords = {
                  lat: venue.lat,
                  lng: venue.lng
              };

              if (coords.lat != 0 && coords.lng != 0) {

                var imageSrc = 'https://foodie.yamwoonsen.de/teaserpic/?e=' + venue.entryId  + '&s=1';
                if (venue.hasOwnProperty('image')) {
                      var image = venue.image;
                      image = image.replace('.jpg', '_small.jpg')
                      imageSrc = 'https://foodie.yamwoonsen.de/media/' + venue.entryId + '/' + image; 
                }

                var venueName = venue.name;
        
                var html = '<p>' + venueName + '</p><a onclick="HereHelper.goToEntry(' + venue.entryId + ')"><p><image src="' + imageSrc + '" width="200" height="150"/></p><p>&gt;Artikel</p></a>';   
                HereHelper.addMarkerToGroup(group, coords, venueType.color, html);
                HereHelper.addCoordstoBoundingGroup(coords);
              }

            }

            HereHelper.addInfoBubbleEventListener(group,ui);
  
        }
    }

    /**
     * restrict the map the bounding group's coords
     * @param {*} map 
     */
    function restrictMapToBoundingGroup(map){
        
          var bounds = boundingGroup.getBounds();
        
          map.setViewBounds(bounds);

          map.getViewModel().addEventListener('sync', function() {
            var center = map.getCenter();
        
            if (!bounds.containsPoint(center)) {
              if (center.lat > bounds.getTop()) {
                center.lat = bounds.getTop();
              } else if (center.lat < bounds.getBottom()) {
                center.lat = bounds.getBottom();
              }
              if (center.lng < bounds.getLeft()) {
                center.lng = bounds.getLeft();
              } else if (center.lng > bounds.getRight()) {
                center.lng = bounds.getRight();
              }
              map.setCenter(center);
            }
          });
        
          //Debug code to visualize where your restriction is
          /*map.addObject(new H.map.Rect(bounds, {
            style: {
                fillColor: 'rgba(55, 85, 170, 0.1)',
                strokeColor: 'rgba(55, 85, 170, 0.6)',
                lineWidth: 8
              }
            }
          ));*/
    }

    /**
     * calling parents go to entry interface
     * @param {*} e 
     */
    function goToEntry(e) {

        if (window.parent) {
            window.parent.goToEntry(e);
        }
    }

    return {
        initMap: initMap,
        addMarkerToGroup: addMarkerToGroup,
        addCoordstoBoundingGroup: addCoordstoBoundingGroup,
        closeAllOpenBubbles: closeAllOpenBubbles,
        findMissingCoordsForVenues: findMissingCoordsForVenues,
        addInfoBubbleEventListener: addInfoBubbleEventListener,
        addMapEventListener: addMapEventListener,
        plotVenues: plotVenues,
        restrictMapToBoundingGroup: restrictMapToBoundingGroup,
        goToEntry: goToEntry
    };
})();