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


// (B) SHOW COMMENTS
if ($_GET['sid'] && ($_GET['pid'])) {
    // (B1) GET ALL COMMENTS
    try {
      $stmt = $pdo->prepare("SELECT `name`, `timestamp`, `message` FROM `comments` WHERE `section_id`=? AND `post_id`=? ORDER BY `timestamp` ASC");
     $stmt->execute([$_GET['sid'], $_GET['pid']]);
    } catch (Exception $ex) {
      die($ex->getMessage());
    }

    // (B2) LOOP & GENERATE HTML
    while ($r = $stmt->fetch(PDO::FETCH_NAMED)) { ?>
    <div class="crow">
      <div class="chead">
        <div class="cname"><?=$r['name']?></div>
        <div class="ctime">[<?=$r['timestamp']?>]</div>
      </div>
			<div class="cmsg"><?=$r['message']?></div>
    </div>
    <?php }
}


  // (C) ADD COMMENT
if ($_POST['sid'] && ($_POST['pid'])) {
    // (C1) CHECKS
    if (!isset($_POST['pid']) || !isset($_POST['name']) || !isset($_POST['msg'])) {
      die("Please provide the Post ID, name, and message");
    }

    // (C2) INSERT
    try {
      $stmt = $pdo->prepare("INSERT INTO `comments` (`post_id`, `name`, `message`) VALUES (?,?,?)");
      $stmt->execute([$_POST['pid'], htmlentities($_POST['name']), htmlentities($_POST['msg'])]);
    } catch (Exception $ex) {
      die($ex->getMessage());
    }
    echo "OK";
  }
}

// (D) CLOSE DATABASE CONNECTION
$stmt = null;
$pdo = null;