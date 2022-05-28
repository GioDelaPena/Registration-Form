<?php
include 'connect.php';

if(isset($_POST['Submit'])){
    $FirstName = $_POST['FirstName'];
    $LastName = $_POST['LastName'];
    $Age = $_POST['Age'];
    $Email = $_POST['Email'];
    $PhoneNumber = $_POST['PhoneNumber'];
    $Gender = $_POST['Gender'];
    $DateOfBirth = $_POST['DateOfBirth'];
    $Address = $_POST['Address'];
    $Province = $_POST['Province'];
    $PostalCode = $_POST['PostalCode'];
    $Department = $_POST['Department'];
    $Year = $_POST['Year'];
    $Password = $_POST['Password'];

    $query = "INSERT INTO newmembers(FirstName, LastName, Age, Email, PhoneNumber, Gender, DateOfBirth, Address, Province, PostalCode, Department, Year, Password) VALUES('$FirstName', '$LastName', '$Age', '$Email', '$PhoneNumber', '$Gender', '$DateOfBirth', '$Address', '$Province', '$PostalCode', '$Department' ,'$Year', '$Password')";
    $query_run = mysqli_query($con, $query);
    if($query_run){
        
    }
    else{
        
    }
}
?>