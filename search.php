<?php
include 'config.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json; charset=utf-8');
//receives query from service api
$query = $_GET['sql'];
$pdo = new PDO('mysql:host=localhost;dbname=filmkunstverleih', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try {

  //$result = array
  //wird zu json encodiert
  $statement = $pdo->prepare($query);
  $statement->execute();
  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  $json = json_encode($results);
  echo $json;


} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
};




