<?

class ContentLoader {

    public static function load($query) {

		$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
		$server =  $_SERVER['SERVER_NAME'];

		$baseURL = $protocol . $server . '/';
		

		$url = $baseURL . $query;
		include ($url);
    }

    public static function loadEntry($entryId) {
        ContentLoader::load($entryId);    
    }

    public static function loadPage($pageId) {
        ContentLoader::load('?p=' . $pageId);    
    }

    public static function loadCategory($category) {
        ContentLoader::load('?c=' . $category);    
    }

    public static function loadSearchPage($searchString) {
        ContentLoader::load('?q=' . $searchString);    
    }

    public static function loadTagPage() {
        ContentLoader::load('?x=tagpage');    
    }

    public static function loadHome() {
        ContentLoader::load('');    
    }

}
?>