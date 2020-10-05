<?
require_once('../pivotx/CurlConnector.class.php');


$appId = 'HjWXPM4InDB8nNfI3Z47';
$appCode = '_giEo6jbpZgQZip6e5jV_w';
$city = (isset($_REQUEST['city'])) ? $_REQUEST['city'] : '';
?>

<html>
    <head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <script src="https://js.api.here.com/v3/3.0/mapsjs-core.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://js.api.here.com/v3/3.0/mapsjs-service.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://js.api.here.com/v3/3.0/mapsjs-mapevents.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://js.cit.api.here.com/v3/3.0/mapsjs-ui.js" type="text/javascript" charset="utf-8"></script>
    <link rel="stylesheet" type="text/css" href="map.min.css?cachebreaker=<?= rand() ?>" />
    <script src="HereHelper.js?cachebreaker=<?= rand() ?>" type="text/javascript" charset="utf-8"></script>
    
    <style>
        #mapContainer {
          width: 100%;
          height: 100%;
        }
    </style>
    </head>
    <body>
<?


  function debug($obj) {
    // print_r($obj);
    // print('<hr>');
  }  


  if ($appId != "" && $appCode != "" && $city != "") {

    $url =  'http://api.foodieyamwoonsen.de/venue/types/?m=' . urlencode($city);
    $venueTypes  = CurlConnector::getContent($url);

    // TODO: create an endpoint which returns the venues grouped by type
    $url =  'http://api.foodieyamwoonsen.de/venue/grouped/by/type/?m=' . urlencode($city);
    $venues = CurlConnector::getContent($url);

    debug($venueTypes);
    debug($venues);

    $options = file_get_contents( './options.json');

?>
    <div id="mapContainer"></div>
    <script>

      HereHelper.initMap(
        '<?= $appId ?>', 
        '<?= $appCode ?>',
        <?= ($options) ? $options : '{}' ?>,  
        <?= ($venueTypes) ? $venueTypes : '{}' ?>, 
        <?= ($venues) ? $venues : '{}' ?>
      );

    </script>
<?
  }
  else {
    print('<p>Keine Karte gefunden</p>');
  }
?>
  </body>
</html>

