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
$email=$_POST["email"];
$password=$_POST["password"];
$phonenumber=$_POST["phonenumber"];

$sql = "INSERT into details (name,email,phone_no,password) values ('$username','$email','$phonenumber','$password')";

if($conn->query($sql)===TRUE) {
   header("Status: 301 Moved Permanently", false, 301);    
   header("Location: login.html");
}    
else
{
    echo "Server busy! try again later";
}
$conn->close();
?>



