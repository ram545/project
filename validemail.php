<?php
$servername = "localhost";
$username = "root";
$password = "2716";
$dbname = "library";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$username=$_POST["username"];
$password=$_POST["password"];

$sql = "SELECT * FROM login where username='$username' and password='$password'";
$result = $conn->query($sql);

if ($result->num_rows == 0) {
    $error = "Invalid Username or Password";  
} 
else {
    header('Status: 301 Moved Permanently', false, 301);    
    header('Location: main.html');    
    exit();   
}
$conn->close();
?>




