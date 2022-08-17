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
        $sql="select * from revenus";
        $path = explode('/', $_SERVER['REQUEST_URI']);
   
       
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $revenus = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($revenus);
        break;
        case "PUT":
            $revenus = json_decode(file_get_contents('php://input'));
            $sql = "UPDATE revenus SET Total=:Total WHERE id=:id";       
         $stmt = $conn->prepare($sql);
         $stmt->bindParam(':id', $revenus->id);

            $stmt->bindParam(':Total', $revenus->Total);
          
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

    }
       
      
?>
