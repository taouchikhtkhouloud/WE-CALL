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
        $sql="select * from destination";
        $path = explode('/', $_SERVER['REQUEST_URI']);
   
        if(isset($path[4]) && is_numeric($path[4])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $destination = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $destination = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($destination);
        break;
    case "POST":
        $destination = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO destination(prefix, cost, description, create_timstamp, update_timestamp) VALUES(:prefix, :cost, :description, :create_timstamp, :update_timestamp)";       
     $stmt = $conn->prepare($sql);
     $create_timstamp = date('Y-m-d');
     $update_timestamp = date('Y-m-d');

        $stmt->bindParam(':prefix', $destination->prefix);
        $stmt->bindParam(':description', $destination->description);
        $stmt->bindParam(':cost', $destination->cost);

        $stmt->bindParam(':create_timstamp', $create_timstamp);
        $stmt->bindParam(':update_timestamp', $update_timestamp);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
       
            case "DELETE":
                $sql = "DELETE FROM destination WHERE id = :id";
                $path = explode('/', $_SERVER['REQUEST_URI']);
        
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $path[3]);
        
                if($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                }
                echo json_encode($response);
                break;
}
?>
