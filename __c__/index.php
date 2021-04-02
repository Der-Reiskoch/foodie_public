<?php
// https://code-boxx.com/simple-php-comment-system/

// (A) CONNECT TO DATABASE
// ! CHANGE SETTINGS TO YOUR OWN !
$dbhost = 'localhost';
$dbname = 'usr_web247_1';
$dbchar = 'utf8';
$dbuser = 'web247';
$dbpass = 'Anzbe64G';
try {
    $pdo = new PDO(
        "mysql:host=$dbhost;dbname=$dbname;charset=$dbchar",
        $dbuser, $dbpass,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (Exception $ex) {
    die($ex->getMessage());
}

if ($_GET['sid'] && ($_GET['pid'])) {

    try {
        $stmt = $pdo->prepare("SELECT `name`, `website`, `timestamp`, `message` FROM `comments` WHERE `section_id`=? AND `post_id`=? AND `approved`=1 ORDER BY `timestamp` DESC");
        $stmt->execute([$_GET['sid'], $_GET['pid']]);
    } catch (Exception $ex) {
        die($ex->getMessage());
    }

    while ($r = $stmt->fetch(PDO::FETCH_NAMED)) {

        $name = $r['name'];

        if ($r['website'] !== '') {

            preg_match_all('#\bhttps?://[^,\s()<>]+(?:\([\w\d]+\)|([^,[:punct:]\s]|/))#', $r['website'], $match);
            $cleanedWebsite = $match[0][0];

            if (isset($cleanedWebsite) && $cleanedWebsite !== '') {
                $name = sprintf('<a href="%s" target="_blank" rel="noopener">%s</a>', $cleanedWebsite, $name);
            }

        }

        $phpdate = strtotime($r['timestamp']);
        $formatedDate = date('d.m.Y H:i', $phpdate);

        ?>
    <div class="crow">
      <div class="chead">
        <div class="cname"><?=$name?></div>
        <div class="ctime"><?=$formatedDate?></div>
      </div>
			<div class="cmsg"><?=$r['message']?></div>
    </div>
    <?}

    try {
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM `comments` WHERE `section_id`=? AND `post_id`=? AND `approved`=0");
        $stmt->execute([$_GET['sid'], $_GET['pid']]);
    } catch (Exception $ex) {
        die($ex->getMessage());
    }

    $r = $stmt->fetch(PDO::FETCH_NUM);

    $countMessagesToApprove = $r[0];

    if ($countMessagesToApprove !== '0') {

        $message = $countMessagesToApprove === '1' ? "Ein Kommentar wartet auf Freigabe" : sprintf("%s Kommentare warten auf Freigabe", $countMessagesToApprove);
        printf('<div class="cnote">%s</div>', $message);

    }

}

if ($_POST['sid'] && ($_POST['pid'])) {

    if (!isset($_POST['sid']) || !isset($_POST['pid']) || !isset($_POST['name']) || !isset($_POST['msg'])) {
        die("Bitte gib Deinen Namem und eine Nachricht ein.");
    }

    try {
        $stmt = $pdo->prepare("INSERT INTO `comments` (`section_id`, `post_id`, `name`, `email`, `website`,  `message`) VALUES (?,?,?,?,?,?)");
        $stmt->execute([$_POST['sid'], $_POST['pid'], htmlentities($_POST['name']), htmlentities($_POST['email']), htmlentities($_POST['website']), htmlentities($_POST['msg'])]);

        $mailtext = implode(",<br>", $_POST) . sprintf('<br> Artikel https://der.reisko.ch/%s/%s', $_POST['sid'], $_POST['pid'] ) . '<br> Freischalten: https://myadmin-alfa3097.alfahosting-server.de/';

        $to = "der@reisko.ch"; // Mailadresse
        $from = "der@reisko.ch";
        $subject = "Neuer Kommentar";
        $reply = $_POST['email'];

        $header = "MIME-Version: 1.0\r\n";
        $header .= "Content-type: text/html; charset=utf-8\r\n";

        $header .= "From: $from\r\n";
        $header .= "Reply-To: $reply\r\n";
        $header .= "X-Mailer: PHP " . phpversion();

        mail($to,
            $subject,
            $mailtext,
            $header);

    } catch (Exception $ex) {
        die($ex->getMessage());
    }
    echo "OK";
}

$stmt = null;
$pdo = null;