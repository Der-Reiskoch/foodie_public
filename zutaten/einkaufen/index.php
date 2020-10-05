<?
require_once('../../pivotx/ContentLoader.class.php');
$pantryItemId = (isset($_REQUEST['z']) && $_REQUEST['z'] != '') ? $_REQUEST['z'] : '';
ContentLoader::load('?p=fehlende-zutaten-einkaufen&z=' . $pantryItemId);
?>