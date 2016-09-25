<!DOCTYPE html>
<html lang="en">
<head>
	<title>Home</title>
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
<div id="fb-root"></div>

</head>

<body id="page1">

<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div class="body1">
	<div class="main">
<!-- header -->

		<header >


			<div class="wrapper" style="margin-top:23px" style="background: #F2F2F2 !important;">
				<h1><img class="animate-in" data-anim-type="fade-in-up" data-anim-delay="60" style="position:absolute; left:200px; top:20px;" id="logo" src="<?php echo base_url(); ?>public/images/gym3.png" alt=""></h1>
				<nav>
					<ul id="menu" >
						<li id="menu_active"><a href="<?php echo site_url("Portal_c"); ?>"><span><span>Inicio</span></span></a></li>
						<li class="nav3"><a href="<?php echo site_url("Portal_c/vistas/nosotros"); ?>"><span><span>Nosotros</span></span></a></li>
						<li class="nav4"><a href="<?php echo site_url("Portal_c/vistas/dietas"); ?>"><span><span>Dietas</span></span></a></li>
						<li class="nav4"><a href="<?php echo site_url("Portal_c/vistas/galeria"); ?>"><span><span>Galeria</span></span></a></li>
						<?php if(isset($_SESSION["user"])){ ?>
						<li class="nav5"><a href="<?php echo site_url("Principal_c"); ?>"><span><span>Sistema</span></span></a></li>
						<?php } ?>
						<li ><a href="<?php echo site_url("Portal_c/login"); ?>"><span><span><i style="padding-top:15px !important;" id="candado" class="fa fa-unlock-alt fa-2x"></i></span></span></a></li>
					</ul>
				</nav>
			</div>
			<div class="wrapper">
				<div class="text" >
					<span class="tittle animate-in" data-anim-type="fade-in-down-big" data-anim-delay="60">Bienvenidos<span> Ecstasy Gym</span></span>
					<ul class="animate-in" data-anim-type="fade-in-up-large" data-anim-delay="100" >
						<li>Lunes - Viernes: 6:00 a.m - 10:00 p.m</li>
						<li>Sabado: 6:00 a.m - 6:00 p.m</li>
					</ul>

				</div>
				<div id="gallery">


					<div id="slider">
				        <ul class="bjqs">
				            <li>
				                <img src="<?php echo base_url(); ?>public/images/rojo.jpg" alt=""  />
				            </li>
				            <li>
				                <img src="<?php echo base_url(); ?>public/images/delicioso.jpg" alt=""  />
				            </li>
				            <li>
				                <img src="<?php echo base_url(); ?>public/images/vita.jpg" alt=""  />
				            </li>
				        </ul>
				    </div>

				</div>
			</div>
		</header><div class="ic">More Website Templates  at TemplateMonster.com!</div>
<!-- content -->

		<article id="content" style="margin-top: -5px;">

			<section class="col2">
				<article id="parte1">
					<h3 class="pad_bot1 animate-in" data-anim-type="fade-in-down-big" data-anim-delay="0" style="padding-top: 0px;">Musculación para Principiantes</h3>

					<div class="wrapper">
						<img class="animate-in" data-anim-type="panic" data-anim-delay="10" src="<?php echo base_url(); ?>public/images/principiante.jpg" width="222" height="120" alt="">
						<br><p class="principiante animate-in" data-anim-type="bounce-in-right-large" data-anim-delay="10">Los motivos por los que las personas se apuntan por primera vez al gimnasio pueden ser por varias razones. Quizás quieras ganar más fuerza, ser más resistente o, como la mayoría, resultar más atractivo/a para el sexo opuesto mientras mejoras tu salud.
						No importa cual sea tu motivación, lo importante es que has tomado la decisión correcta. Los principiantes deben empezar poco a poco a introducirse en las técnicas de musculación.
						Realizar rutinas demasiado avanzadas o consejos inadecuados puede ocasionar diversos problemas en el principiante que en el peor de los casos llevará al abandono total de la actividad.</p>
					</div>
				</article>
				<article id="parte2">
					<h3 class="pad_bot1 animate-in" data-anim-type="fade-in-down-big" data-anim-delay="0" style="padding-top: 0px;">Suplementos y Vitaminas</h3>
					<div class="wrapper animate-in" data-anim-type="fade-in-down-big" data-anim-delay="120">
					<?php

						// $imagen = getimagesize("images/rojo.jpg");
						// echo $imagen[0]."sssssssss";
						list($width, $height, $type, $attr) = getimagesize(base_url()."public/images/rojo.jpg");

						 ?>
						<figure class="left marg_right1"><img width="240px" height="140px" src="<?php echo base_url(); ?>public/images/proteina.jpg" alt=""></figure>
						<strong class="color1">Proteina de Suero</strong>
						<p class="pad_bot3">Proteína aislada del suero, un subproducto de la leche. Frecuentemente usado por los culturistas y otros atletas para acelerar el desarrollo muscular.</p>
						<!-- <a href="#" class="button right">Read More</a> -->
					</div>
					<br>
					<div class="wrapper animate-in" data-anim-type="fade-in-down-big" data-anim-delay="360">
						<figure class="left marg_right1"><img width="100px" height="160px" src="<?php echo base_url(); ?>public/images/mega.jpg" alt=""></figure>
						<strong class="color1">Megaplex</strong>
						<p class="pad_bot3">Combina en su fórmula por toma, el 50% de la recomendación diaria de proteína, con diferentes velocidades de absorción, buscando así lograr un balance positivo de nitrógeno por más tiempo. Su formula aporta tan solo el 10 % del total diario de calorías, lo cual hace de MEGAPLEX el mejor producto para un programa de baja ingesta calórica con un alto nivel de proteína</p>
						<!-- <a href="#" class="button right">Read More</a> -->
					</div>
						<div class="wrapper animate-in" data-anim-type="fade-in-down-big" data-anim-delay="480">
						<figure class="left marg_right1"><img width="100px" height="160px" src="<?php echo base_url(); ?>public/images/car1.png" alt=""></figure>
						<strong class="color1">MegaCarbs</strong>
						<p class="pad_bot3">Energia + recuperacion muscular Mega Carbs es un complemento altamente rico en carbohidratos que proporciona la energía necesaria para atletas con alto desgaste calórico.Mega Carbs cumple dos funciones principales en el organismo, las cuales son: Energéticas: aporta 4 Kcal (kilocalorias) por gramo de peso seco sin considerar el contenido de liquido en el cual se encuentra disuelto Mega Carbs.</p>
						<!-- <a href="#" class="button right">Read More</a> -->
					</div>
				</article>
       		</section>
       		<section class="col1 animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="100">

				<div class="fb-page" data-href="https://www.facebook.com/Ecstasy-Gym-341863398263/?fref=ts" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div></div>
       		</section>
		</article>
	</div>
</div>
<div class="main">

<!-- footer -->
	<footer class="animate-in" data-anim-type="fade-in-right-big" data-anim-delay="40">
		<img  width="250" height="60" src="<?php echo base_url(); ?>public/images/gym3.png" alt="">
		<!-- {%FOOTER_LINK} -->
	</footer>
<!-- / footer -->
</div>



</body>
</html>
