<?php
ob_start();
include('header.php');?>
<div class="container">
		<div class="margin-top">
			<div class="row">
			<div class="span12">

             <div class="alert alert-info">Seleccionar Base de Datos</div>
	<div class="addstudent">
	<div class="details"> Configurar Base de Datos</div>
	<form class="form-horizontal" method="POST" action="x.php" enctype="multipart/form-data">

		<div class="control-group">
			<label class="control-label" for="inputEmail">Gestor :</label>
			<div class="controls">
			<select name="gestor" id="c" class="form">
				<option value="MYSQL">MYSQL</option>
				<option value="POSTGRES">POSTGRES</option>
				<option value="SQL">SQL</option>
				<option value="ORACLE">ORACLE</option>
			</select>
			</div>
		</div><br>

		<div class="control-group">
			<label class="control-label" for="inputEmail">Host :</label>
			<div class="controls">
			<input type="text" class="span4" id="inputEmail" name="host"  placeholder="Host" required>
			</div>
		</div><br>

		<div class="control-group">
			<label class="control-label" for="inputEmail">Usuario :</label>
			<div class="controls">
			<input type="text" class="span4" id="inputEmail" name="usuario"  placeholder="Usuario" required>
			</div>
		</div><br>

		<div class="control-group">
			<label class="control-label" for="inputEmail">Clave :</label>
			<div class="controls">
			<input type="text" class="span4" id="inputEmail" name="clave"  placeholder="Contraseña" >
			</div>
		</div><br>

		<div class="control-group">
			<label class="control-label" for="inputEmail">Base de Datos :</label>
			<div class="controls">
			<input type="text" class="span4" id="inputEmail" name="basedatos"  placeholder="Nombre Base Datos" required>
			</div>
		</div><br>
		<div class="control-group">
			<label class="control-label" for="inputEmail">Driver :</label>
			<div class="controls">
			<input type="text" class="span4" id="inputEmail" name="driver"  placeholder="Driver" required>
			</div>
		</div><br>

		<div class="control-group" >
			<div class="controls" >
			<button name="submit" style="float:right;" type="submit" class="btn btn-success"><i class="icon-save icon-large"></i>&nbsp;Guardar</button>
			</div>
		</div><br>
    </form>
			</div>
			</div>
			</div>
		</div>
    </div>
<?php
if(isset($_POST['submit'])){
	$host=trim($_POST['host']);
	$usuario=trim($_POST['usuario']);
	$clave=trim($_POST['clave']);
	$basedatos=trim($_POST['basedatos']);
	$driver=trim($_POST['driver']);
	$gestor=trim($_POST['gestor']);
unlink('../application/config/config.txt');
if ((strlen($host)>0) && (strlen($usuario)>0) && (strlen($basedatos)>0) && (strlen($driver)>0)) {
    $file=fopen("../application/config/config.txt","a");   //fopen intenta abrir el archivo 'fichero.txt' con permisos de lectura y escritura, y con el parametro 'a' si no existe lo crea
    $linea ="[database]\r\n";
    $cad= $linea ;
    fputs($file,$cad);

    $linea ="host =";
    $cad=$host;
    $cad =$linea."$cad"."\r\n";
    $cad= $cad;
    fputs($file,$cad);

    $linea ="driver =";
    $cad=$driver;
    $cad =$linea."$cad"."\r\n";
    $cad= $cad;
    fputs($file,$cad);

    $linea ="usuario =";
    $cad=$usuario;
    $cad =$linea."$cad"."\r\n";
    $cad= $cad;
    fputs($file,$cad);

    $linea ="password =";
    $cad=$clave;
    $cad =$linea."$cad"."\r\n";
    $cad= $cad;
    fputs($file,$cad);

    $linea ="basedatos =";
    $cad=$basedatos;
    $cad =$linea."$cad"."\r\n";
    $cad= $cad;
    fputs($file,$cad);

    $linea ="gestor =";
    $cad=$gestor;
    $cad =$linea."$cad"."\r\n";
    $cad= $cad;
    fputs($file,$cad);
    header('Location:http://localhost:8080/ecstasyd');
} else {
    echo "Algún campo del formulario esta vacio.";
}
ob_end_flush();
}
?>
