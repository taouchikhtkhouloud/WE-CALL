<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include './connect.php';
$objDb = new Connect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case "GET":
        $sql="select * from cdr ";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            
            $sql .= " WHERE id_user = :userID";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':userID', $path[3]);
            $stmt->execute();
            $cdr = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
       
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $cdr = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($cdr);
        break;
    
}
?>
