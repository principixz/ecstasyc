<?php 
 
session_start(); //esta linea tiene que ir antes de cualquier cosa, incluso de espacios 
ob_start();
require ("Conectar.php"); 
#verificar que me lleguen las variabales POST
#echo "<pre>";
#print_r($_POST);
$idinstitucion = $_POST["idinstitucion"];
$nombre = $_POST["ins_nombre"];
$cantalumnos = $_POST["ins_cantalumnos"];
$responsable = $_POST["ins_responsable"];
$departamento=$_SESSION['departamento'];
$provincia=$_SESSION['provincia'];
$distrito=$_SESSION['distrito'];

if($idconductor == ""){
	$idlo=0;

	$id=pg_query("SELECT id_localidad FROM localidades WHERE loc_departamento='$departamento' and 
	loc_provincia='$provincia' and loc_distrito='$distrito'");
	while ($row2 = pg_fetch_array($id)){
	$idlo=$row2['id_localidad']};

	$sql = " INSERT INTO instituciones (ins_nombre,ins_cantaalumnos,idlocalidad,ins_responsable) 
		 VALUES ('".$nombre."','".$cantalumnos."','".$idlo."','".$responsable."') ";
}else{
	$sql = " UPDATE instituciones  
			 SET ins_nombre = '".$nombre."', ins_cantaalumnos = '".$cantalumnos."' ,idlocalidad = '".$idlo."',
			 ins_responsable = '".$responsable."' WHERE idinstitucion = $idinstitucion
			 " ; 

}



#print $sql; exit();		 

pg_query($sql) or die("Error al grabar datos ");

echo "<script>alert('Se guardo exitosamente'); window.location='institucion.php'; </script>";		 


?>