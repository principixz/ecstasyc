<!DOCTYPE html>
<html lang="en">
<head>
	<title>Dietas</title>
	<meta charset="utf-8">
	<?php include("includes/css_portal.inc"); ?>
	<?php include("includes/js_portal.inc"); ?>




<!--[if lt IE 9]>
	<script type="text/javascript" src="js/html5.js"></script>
	<style type="text/css">
		.bg {behavior:url(js/PIE.htc)}
	</style>
<![endif]-->
<!--[if lt IE 7]>
	<div style=' clear: both; text-align:center; position: relative;'>
		<a href="http://www.microsoft.com/windows/internet-explorer/default.aspx?ocid=ie6_countdown_bannercode"><img src="http://www.theie6countdown.com/images/upgrade.jpg" border="0"  alt="" /></a>
	</div>
<![endif]-->
</head>
<body id="page5">
<div class="body1">
	<div class="main">
<!-- header -->
		<header>

			<div class="wrapper" style="margin-top:23px" style="background: #F2F2F2 !important;">
				<h1><img class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="30" style="position:absolute; top:20px; left:200px;" id="logo"src="<?php echo base_url(); ?>public/images/gym3.png" alt=""></h1>
				<nav>
					<ul id="menu">
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="130"><a href="<?php echo site_url("portal_c"); ?>"><span><span >Inicio</span></span></a></li>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="230" class="nav3"><a href="<?php echo site_url("portal_c/vistas/nosotros"); ?>"><span><span>Nosotros</span></span></a></li>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="330" id="menu_active" class="nav5"><a href="<?php echo site_url("portal_c/vistas/dietas"); ?>"><span><span>Dietas</span></span></a></li>
						<?php if(isset($_SESSION["user"])){ ?>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="530"><a href="<?php echo site_url("portal_c/vistas/galeria"); ?>"><span><span>Galeria</span></span></a></li>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="430"><a href="<?php echo site_url("Principal_c"); ?>"><span><span>Sistema</span></span></a></li>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="630"><a href="#"><span><span><i style="padding-top:15px !important;" id="candado" class="fa fa-unlock-alt fa-2x"></i></span></span></a></li>

						<?php }else{ ?>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="430"><a href="<?php echo site_url("portal_c/vistas/galeria"); ?>"><span><span>Galeria</span></span></a></li>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="530"><a href="#"><span><span><i style="padding-top:15px !important;" id="candado" class="fa fa-unlock-alt fa-2x"></i></span></span></a></li>

						<?php } ?>

					</ul>
				</nav>
			</div>
		</header>
<!-- content -->
		<article id="content" >
			<section class="col1" >
				<article id="consejos">
					<h3 class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="100" class="pad_bot1">Dieta para quemar grasa y reducir medidas</h3>

					<h4 class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="200"  style="padding-top:10px;">Desayuno:</h4>
					<ol class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="300">
						<li>1. Primera Opcion:</li>
						<ul>
							<li>&nbsp;&nbsp; - Un vaso de jugo de naranja</li>
							<li>&nbsp;&nbsp; - Dos rebanadas de pan con queso</li>
						</ul>
						<li>2. Segunda Opcion:</li>
						<ul>
							<li>&nbsp;&nbsp; - Jugo de Papaya o platana(sin azúcar)</li>
							<li>&nbsp;&nbsp; - Una tortilla de brócoli con 2 huevos</li>
						</ul>
					</ol>
					<h4 class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="400">Almuerzo:</h4>
					<ol class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="500">
						<li>&nbsp;&nbsp; - Una porcion de verduras mixtas</li>
						<li>&nbsp;&nbsp; - Una papa mediana sancochada</li>
						<li>&nbsp;&nbsp; - 100 gramos de pollo, atun o pescado</li>
						<li>&nbsp;&nbsp; - Una manzanilla(con poca azúcar)</li>
					</ol>
					<h4 class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="600">Cena:</h4>
					<ol class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="700">
						<li>1. Primera Opcion:</li>
						<ul>
							<li>&nbsp;&nbsp; - Sopa de pollo con verduras</li>

						</ul>
						<li>2. Segunda Opcion:</li>
						<ul>
							<li>&nbsp;&nbsp; - Una porcion de verduras</li>
							<li>&nbsp;&nbsp; - 100 gramos de pollo a la plancha</li>
						</ul>
					</ol>
					<img class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="800" style="padding-top:15px" width="279" height="200" src="<?php echo base_url(); ?>public/images/desayuno.jpg" alt="">
				</article>
				<article id="nota" style="display:none">
					<h3 >Nota:</h3>
					<img width="279" height="170" src="<?php echo base_url(); ?>public/images/alimentos.jpg" alt="">
					<ol style="text-align:justify; padding-top:5px;">
						<li>- Consume de 2 a 3 litros de agua al día</li>
						<li>- Utiliza aceite de oliva en sus ensaladas</li>
						<li>- Si desea puede utilizar edulcorantes dietéticos en sus bebidas pero no abusar de ello</li>
						<li>- Reduzca en consumo de sal de preferencia en las noches </li>
						<li>- No consuma azúcar o frutas en la noche impiden el metabolismo de las grasas</li>
						<li>- Utiliza un quemador de grasa 20 minutos antes de su rutina de ejercicios ayuda a acelerar el metabolismo
						de las grasas y azucares</li>
						<li>- Cualquier duda o consulta no dude en preguntarnos</li>
					</ol>
					<img width="279" height="160" src="<?php echo base_url(); ?>public/images/nota.png" alt="">
				</article>
			</section>
			<section class="col2" style="padding-left: 15px;"><!-- style="" -->
				<h2 class="pad_bot1 animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="100" style="font-size:33px;">Dietas Para Desarrollar Músculo sin Ganar Grasa</h2>
				<article id="sin">
					<h3 class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="200" style="padding-top:0;">Dia sin Entrenamiento</h3>
					<section class="part animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="300">
						<h4 style="color:black">Comida 1: 8:00 a.m </h4>
						<ul>
							<li>- 10 claras de huevo</li>
							<li>- 2 rebanadas de tostada de pan de trigo con mermelada baja en azucar</li>
							<li><span style="color:black">Total Comida: </span> 344 calorías, 46 g proteína, 35 g carbohidratos, 2 g grasa</li>
						</ul>
						<h4 style="color:black">Comida 2: 11:00 a.m </h4>
						<ul>
							<li>- 8 oz. de pechugas de pollo</li>
							<li>- 1 patata pequeña-mediana</li>
							<li><span style="color:black">Total Comida: </span> 409 calorías, 56 g proteína, 37 g carbohidratos, 3 g grasa</li>
						</ul>
					</section>
					<section class="part animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="400">
						<h4 style="color:black">Comida 3: 1:00 p.m </h4>
						<ul>
							<li>- Batido de Proteina de suero(2 cucharadas)</li>

							<li><span style="color:black">Total Comida: </span> 170 calorías, 40 g proteína, 2 g carbohidratos, 0 g grasa</li>
						</ul>
						<h4 style="color:black">Comida 4: 3:00 p.m </h4>
						<ul>
							<li>- 8 oz. de pechuga de pavo</li>
							<li>- 1 taza de arroz integral</li>
							<li>- 2 tazas de verduras variadas</li>
							<li><span style="color:black">Total Comida: </span> 734 calorías, 75 g proteína, 70 g carbohidratos, 40 g grasa</li>
						</ul>
					</section>
					<section class="part animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="500">
						<h4 style="color:black">Comida 5: 6:00 p.m </h4>
						<ul>
							<li>- 8 oz. de carne picada(95% magro)</li>
							<li>- 1 loncha de queso bajo en grasa</li>
							<li>- 2 rebanadas de pan de trigo</li>
							<li><span style="color:black">Total Comida: </span> 483 calorías, 59 g proteína, 27 g carbohidratos, 13 g grasa</li>
						</ul>
						<h4 style="color:black">Comida 6: 9:00 p.m </h4>
						<ul>
							<li>- 8 oz. de pechuga de pollo</li>
							<li>- Ensalada verde de tamaño medio con alineo sin grasas</li>

						</ul>
					</section>
				</article>
				<div class="clear"></div>
				<article id="con">
					<h3 class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="600" style="padding-top:0;">Dia con Entrenamiento</h3>
					<section class="part animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="700">
						<h4 style="color:black">Comida 1: 8:00 a.m </h4>
						<ul >
							<li>- 10 claras de huevo</li>
							<li>- 1 1/4 taza de avena(medida en seco) ó 11/2 bollos de pasas</li>
							<li>- Zumo de naranja de 8 oz. ó 1 taza de varias frutas</li>
							<li><span style="color:black">Total Comida: </span> 669 calorías, 58 g proteína, 93 g carbohidratos, 7 g grasa</li>
						</ul>
						<h4 style="color:black">Comida 2: 11:00 a.m </h4>
						<ul >
							<li>- 8 oz. de pechugas de pollo</li>
							<li>- 1 patata pequeña-mediana</li>
							<li><span style="color:black">Total Comida: </span> 409 calorías, 56 g proteína, 37 g carbohidratos, 3 g grasa</li>
						</ul>
					</section>
					<section class="part animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="800">
						<h4 style="color:black">Comida 3: 1:00 p.m </h4>
						<ul>
							<li>- Batido de Proteina de suero(2 cucharadas)</li>
							<li>- 6-8 tortas de Arroz*</li>
							<li><span style="color:black">Total Comida: </span> 450 calorías, 48 g proteína, 58 g carbohidratos, 2 g grasa</li>
						</ul>
						<h4 style="color:black">Comida 4(post entrenamiento): 3:00 p.m </h4>
						<ul>
							<li>- 8 oz. de pechuga de pavo</li>
							<li>- 2-3 tazas de pasta cocinada o arroz blanco*</li>
							<li>- 1 panecillo de trigo</li>

							<li><span style="color:black">Total Comida: </span> 1.096 calorías, 78 g proteína, 177 g carbohidratos, 4 g grasa</li>
						</ul>
					</section>
					<section class="part animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="900">
						<h4 style="color:black">Comida 5: 6:00 p.m </h4>
						<ul>
							<li>- 8 oz. de carne picada(95% magro)</li>
							<li>- 1 loncha de queso bajo en grasas</li>
							<li>- 2 rebanadas de pan de trigo</li>
							<li>- 1 pieza de fruta**</li>
							<li><span style="color:black">Total Comida: </span> 593 calorías, 59 g proteína, 57 g carbohidratos, 13 g grasa</li>
						</ul>
						<h4 style="color:black">Comida 6: 9:00 p.m </h4>
						<ul>
							<li>- Batido de Proteína de Suero(2 cucharadas)</li>


						</ul>
					</section>
				</article>
       		</section>
		</article>
	</div>
</div>
<form method="post" action="<?php echo base_url(); ?>Portal_c/autentificar"  name="formLogin" id="login">


     <label>Usuario</label>
    <input type="text" id="usuario" name="usuario" placeholder=" Ingrese usuario">

    <label>Contraseña</label>
    <input type="password" id="pass" name="pass" placeholder=" Ingrese contraseña">
    <center><input id="btnLogin" type="submit" value="INGRESAR"></center>
  </form>
<div class="main">
<!-- footer -->
	<footer class="animate-in" data-anim-type="fade-in-right-big" data-anim-delay="40">
		<img  width="250" height="60" src="<?php echo base_url(); ?>public/images/gym3.png" alt="">
		<!-- {%FOOTER_LINK} -->
	</footer>
<!-- / footer -->
</div>
<script type="text/javascript"> Cufon.now();</script>

<script>
$("#consejos")
.mouseenter(function(){
	$("#consejos").hide("normal");
		$("#nota").show("normal");

	});

$("#nota").mouseleave(function(){
	$("#consejos").show("normal");
		$("#nota").hide("normal");
	});
</script>
</body>
</html>