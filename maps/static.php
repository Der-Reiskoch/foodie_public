<?

$address = (isset($_REQUEST['a'])) ? $_REQUEST['a']: null;

$appId = 'HjWXPM4InDB8nNfI3Z47';
$appCode = '_giEo6jbpZgQZip6e5jV_w';

if (!is_null($address)) {

    $splitters = explode(',' , $address);
    $streetAndNumber = $splitters[0];
    list($street, $housenumber) = explode(" ", $streetAndNumber);
    $zipAndCity = $splitters[1];
    list($zipCode, $city) = explode(" ", $zipAndCity);
    $country = $splitters[2];

    $width = 150;
    $height = 150;
    $zoom = 15;

    $url = sprintf(
        'https://image.maps.cit.api.here.com/mia/1.6/mapview?app_id=%s&app_code=%s&co=%s&ci=%s&zi=%s&s=%s&n=%s&h=%s&w=%s&z=%s',
        $appId ,
        $appCode,
        trim($country),
        trim($city),
        trim($zipCode),
        trim($street),
        trim($housenumber),
        $height,
        $width,
        $zoom
    ); 
    
    printf('<img src="%s" border="0"/>', $url);

}
?>