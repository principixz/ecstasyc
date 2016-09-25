<!DOCTYPE html>
<html lang="en">
<head>
	<title>Nosotros</title>
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
<body id="page3">
<div class="body1">
	<div class="main">
<!-- header -->
		<header>

			<div class="wrapper" style="margin-top:23px" style="background: #F2F2F2 !important;">
				<h1><img class="animate-in" data-anim-type="bounce-in-up-big" data-anim-delay="60" style="position:absolute; top:20px; left:200px;" id="logo"src="<?php echo base_url(); ?>public/images/gym3.png" alt=""></h1>
				<nav>
					<ul id="menu">
						<li><a href="<?php echo site_url('Portal_c'); ?>"><span><span>Inicio</span></span></a></li>

						<li id="menu_active" class="nav3"><a href="<?php echo site_url("Portal_c/vistas/nosotros"); ?>"><span><span>Nosotros</span></span></a></li>
						<li class="nav4"><a href="<?php echo site_url("Portal_c/vistas/dietas"); ?>"><span><span>Dietas</span></span></a></li>
						<li class="nav4"><a href="<?php echo site_url("Portal_c/vistas/galeria"); ?>"><span><span>Galeria</span></span></a></li>
						<?php if(isset($_SESSION["user"])){ ?>
						<li class="nav5"><a href="<?php echo site_url("Principal_c"); ?>"><span><span>Sistema</span></span></a></li>
						<?php } ?>
						<li ><a href="#"><span><span><i style="padding-top:15px !important;" id="candado" class="fa fa-unlock-alt fa-2x"></i></span></span></a></li>
					</ul>
				</nav>
			</div>
		</header><div class="ic">More Website Templates  at TemplateMonster.com!</div>
<!-- content -->

		<article id="content">
			<section id="videos">

				<article class="video1">
					<h3><span>Video de Pepe y Jacinto</span></h3>
					<video width="480" height="300" controls poster="<?php echo base_url(); ?>public/images/mision2.png">
						<source src="<?php echo base_url(); ?>public/images/video1.MP4">
						Tu Navegador No Es Compatible con HTML5
					</video>

				</article>

				<article class="video2">
					<h3><span>Video de Pepe y Jacinto</span></h3>
					<video width="480" height="300" controls poster="<?php echo base_url(); ?>public/images/nitro.png" >
						<source src="<?php echo base_url(); ?>public/images/video1.MP4">
						Tu Navegador No Es Compatible con HTML5
					</video>
				</article>

			</section>
			<section class="col22">

																															<!-- width="150" height="180 -->
				<img class="animate-in" data-anim-type="bounce-in-right-large" data-anim-delay="10" src="<?php echo base_url(); ?>public/images/Vision.png" width="190" height="250" alt="">
				<aside id="info">
					<article id="vision2" >
						<h3 class="animate-in" data-anim-type="fade-in-left-large" data-anim-delay="0">Visión</h3>
						<p class="animate-in" data-anim-type="bounce-in-right-large" data-anim-delay="50">“Ser reconocidos como la primera organización regional de mejoramiento del bienestar físico y mejor alternativa para la
						 recreación de jóvenes y adultos, a través de deportes aeróbicos y la musculación”.</p>
					</article>
					<article id="mision2">
						<h3 class="animate-in" data-anim-type="fade-in-left-large" data-anim-delay="100">Misión</h3>
						<p class="animate-in" data-anim-type="bounce-in-right-large" data-anim-delay="150">“Brindar un servicio especializado a nuestros clientes al
						aplicar las técnicas de entrenamiento físico más reconocidas para encaminarlos
						hacia sus metas y objetivos formando parte de la nueva era del fitness e inculcar en la vida de
						todos, a través de nuestras facilidades, programas y servicios, el estilo de vida de la salud y el fitness”. </p>
					</article> <!-- width="190" height="180" -->
				</aside>
				<article id="valores">
					<center><h3 class="animate-in" data-anim-type="fade-in-left-large" data-anim-delay="100">Valores Corporativos</h3></center>
						<ul class="ca-menu">
		                    <li id="bol1" class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="0">
		                        <a href="#">
		                           <!--  <span class="ca-icon">F</span> -->
		                            <div class="ca-content">
		                                <h2 class="ca-main">Bienestar</h2>
		                                <h3 style="display:none" class="ca-main2">BIENESTAR<br><br>Promover la importancia
		                                de
		                                estar saludable para alcanzar un estado de plenitud física y mental.</h3>
		                            </div>
		                        </a>
		                    </li>
		                    <li id="bol2" class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="100">
		                        <a href="#">

		                             <div class="ca-content">
		                                <h2 class="ca-main">Calidad</h2>
		                                <h3 style="display:none" class="ca-main2">CALIDAD<br>Renovar Constantemente nuestro compromiso para estar a la
		                                altura de las exigencias de nuestros clientes,
		                                logrando así su completa satisfacción.</h3>
		                            </div>
		                        </a>
		                    </li>
		                    <li id="bol3" class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="200">
		                        <a href="#">

		                             <div class="ca-content">
		                                <h2 class="ca-main">Disciplina</h2>
		                                <h3 style="display:none" class="ca-main2">DISCIPLINA<br><br>Fomentar la conciencia del compromiso diario
		                                para alcanzar un estado óptimo de salud.</h3>
		                            </div>
		                        </a>
		                    </li>
		                    <li id="bol4" class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="300">
		                        <a href="#">

		                             <div class="ca-content">
		                                <h2 class="ca-main">Especializacion</h2>
		                                <h3 style="display:none" class="ca-main2">ESPECIALIZACION<br><br>Contar con personal
		                                capacitado en las diferentes áreas de nuestra empresa.</h3>
		                            </div>
		                        </a>
		                    </li>
		                    <li id="bol5" class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="400">
		                        <a href="#">

		                             <div class="ca-content">
		                                <h2 class="ca-main">Innovación</h2>
		                                <h3 style="display:none" class="ca-main2">INNOVACION<br>Ofrece equipo de alta tecnología para el acondicionamiento físico,
		                                así como estar a la vanguardia en las tendencias de las actividades aeróbicas.</h3>
		                            </div>
		                        </a>
		                    </li>
		                </ul>
				</article>
       		</section>
			<section class="col11 animate-in"  data-anim-type="bounce-in-right-large" data-anim-delay="80" >
				<h3 class="pad_bot1">Ubicanos</h3>
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2357.199340143868!2d-76.37160075712849!3d-6.480974589223148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50f7e3687b7608a4!2sEcstasy+
				Gym!5e0!3m2!1ses!2s!4v1451000917016" width="259" height="450" frameborder="0" style="border:0" ></iframe>
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
$(".ca-content")
.mouseenter(function(){
	$(this).find(".ca-main").hide("normal");
		$(this).find(".ca-main2").show("normal");

	});

$(".ca-content").mouseleave(function(){
	$(this).find(".ca-main").show("normal");
		$(this).find(".ca-main2").hide("normal");
	});
</script>
</body>
</html>
