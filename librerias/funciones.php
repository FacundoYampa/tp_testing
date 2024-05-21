<?php

require_once('conexion.php');

function insertarRegistro()
{

global $con;

$UserName= $_POST ['Uname'];
$UserApellido= $_POST ['Uapellido'];
$UserEmail= $_POST ['UEmail'];
// $UserEdad= $_POST ['Uedad'];
// $UserFecha= $_POST ['Ufechadenacimiento'];



// $query= "insert into usuarios_php (Nombre, Apellido, Dni, Email, Nacimiento, Contrasena, RepContras) values('$UserName', '$UserApellido', '$UserDni', '$UserEmail', str_to_date('$Userfecha', '%d/%m/%Y'), '$UserContrasena', '$UserRepetir')  ";
$query= "insert into usuarios_tabla (nombre,apellido, email) values('$UserName','$UserApellido', '$UserEmail')  ";

$result= mysqli_query($con,$query);

        if($result)
        {
            echo ' El registro se creo exitosamente';
        }
        else
        {
            echo 'Por favor chequear la Query';
        }
}
?>