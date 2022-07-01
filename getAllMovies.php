<?php
include 'config.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json; charset=utf-8');


$sql = "SELECT * FROM film"; //from film
try {

  //$result = array
  //wird zu json encodiert
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  $json = json_encode($results);
  echo $json;


} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
};




