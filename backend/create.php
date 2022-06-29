<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$titel = $data['titel'];
$regie = $data['regie'];

$q = mysqli_query($con, "INSERT INTO 'jakob' (titel', 'regie') VALUES ($titel', '$regie')"

if($q){
  http_response_code(201);
  $message['status'] = "SUCCESS";

  }
  else {
    http_response_code(422)
    $message['status'] = "ERROR";
  }

  echo json_encode($message);
  echo mysqli_error($con);
