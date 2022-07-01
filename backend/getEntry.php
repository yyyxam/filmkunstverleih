<?php
include "config.php";
$data = array();
$q = mysqli_query($con, "SELECT * FROM 'jacob'");

while ($row = mysqli_fetch_object($q)){
  $data[ = $row;]
}
echo json_encode($data);
echo mysqli_error($con);


try{
  $bdd = new \pdo('mysql:host=localhost;dbname=test', 'root', '',
  array(PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_ERRMODE =>PDO::ERRMODE_EXCEPTION;));
}
catch(Exception $e{
  echo "Verbindungsprobleme: " -$e->getMessage().'<br\>';
 }
 $data = json_decode(file_get_contents('php://input'));
 if ($data) {
 $name = filter_var($data->name, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

 }

