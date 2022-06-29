<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$id = $_GET['id'];
$titel = $data['titel'];
$regie = $data['regie'];

$q = mysqli_query($con, "UPDATE 'jacob' SET ('titel', 'regie') VALUES ('$titel', '$regie') WHERE 'id' = '($id)' LIMIT 1")

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
