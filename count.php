<?php

$title = $_GET['title'];

define("_BBC_PAGE_NAME", $title);
define("_BBCLONE_DIR", "/var/www/web247/html/stats/");
define("COUNTER", _BBCLONE_DIR . "mark_page.php");
if (is_readable(COUNTER)) {
    include_once COUNTER;
}

php?>
