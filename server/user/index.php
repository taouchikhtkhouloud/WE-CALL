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
        $sql="select * from utilisateurs";
        $path = explode('/', $_SERVER['REQUEST_URI']);
   
        if(isset($path[4]) && is_numeric($path[4])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $utilisateurs = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $utilisateurs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($utilisateurs);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        
        $sql = "INSERT INTO utilisateurs(first_name, last_name, email, phone) VALUES(:first_name, :last_name, :email, :phone)";       
     $stmt = $conn->prepare($sql);
        $stmt->bindParam(':first_name', $user->first_name);
        $stmt->bindParam(':last_name', $user->last_name);

        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':phone', $user->phone);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
        case "PUT":
            $user = json_decode(file_get_contents('php://input'));
            $sql = "UPDATE utilisateurs SET first_name=:first_name, last_name=:last_name, email=:email, phone=:phone WHERE id=:id";       
         $stmt = $conn->prepare($sql);
         $stmt->bindParam(':id', $user->id);

            $stmt->bindParam(':first_name', $user->first_name);
            $stmt->bindParam(':last_name', $user->last_name);
    
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':phone', $user->phone);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
            case "DELETE":
                $sql = "DELETE FROM utilisateurs WHERE id = :id";
                $path = explode('/', $_SERVER['REQUEST_URI']);
        
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $path[4]);
        
                if($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                }
                echo json_encode($response);
                break;
}
?>
