<?
require_once('./ContentLoader.class.php');
$entry = $_REQUEST['e'];
$targetLanguage = 'en';

if (!is_null($entry)) {
    
    setcookie("googtrans", '/de/' . $targetLanguage, time()+3600);     

    $map = array (
        '642' => 'rezept/moo-grob-nam-ma-prao',
        '750' => 'rezept/khanom-jeen-nam-ya-talee'
    );


    $entryId = $entry;
    if (is_numeric($entryId)) {

        if (array_key_exists($entryId,$map)) {
            ContentLoader::loadEntry($map[$entryId]);    
        } else {
            ContentLoader::loadEntry($entryId);
        }  
    }
    else {
        ContentLoader::loadEntry($entryId);    
    }

    include("styles.css");

    $output= '<script type="text/javascript">';

    $output.= 'function initTrans(){';
    $output.= 'new google.translate.TranslateElement({pageLanguage: \'de\'},\'google_translate_element\');';
    $output.= '}';
    
    $output.= 'function hideWip(){';
    $output.= 'var wipDiv = document.getElementById("wip");';
    $output.= 'wipDiv.style.display = "none";';
    $output.= '}';

    $output.= 'setTimeout(hideWip, 2500)';    


    $output.= '</script>';

    $output.= '<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=initTrans"></script>';
    $output.= '<style type="text/css">iframe.goog-te-banner-frame{ display: none !important;}</style>';
    $output.= '<style type="text/css">body {position: static !important; top:0px !important;}</style>';    
    
    $output.= '<div id="wip"><div class="lds-ring"><div></div><div></div><div></div><div></div></div><div class="wip-text">Translating ...</div></div>';
     




    print($output);


}
?>