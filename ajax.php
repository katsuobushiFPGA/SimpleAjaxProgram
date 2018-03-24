<?php
//ajax
include_once "const.php";

$pref_cd = $_REQUEST['pref_cd'];
$response = [];
if ($pref_cd) {
	$response = $city[$pref_cd];
}
echo json_encode($response, JSON_UNESCAPED_UNICODE);