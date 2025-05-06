<?php
$conn = new mysqli("localhost", "root", "", "blood_donation");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$blood_group = $_POST['blood_group'];
$address = $_POST['address'];

$sql = "INSERT INTO donors (name, email, phone, blood_group, address) VALUES ('$name', '$email', '$phone', '$blood_group', '$address')";

if ($conn->query($sql) === TRUE) {
    echo "Thank you for registering as a blood donor!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
