<!DOCTYPE html>
<html lang="en">
<head>
	<title>Dietas</title>
	<meta charset="utf-8">
	<?php include("includes/css_portal.inc"); ?>
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/estilos_galery.css">
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
				<h1><img class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="30" style="position:absolute; left:210px; top:20px;" id="logo"src="<?php echo base_url(); ?>public/images/gym3.png" alt=""></h1>
				<nav>
					<ul id="menu">
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="130"><a href="<?php echo site_url("portal_c"); ?>"><span><span >Inicio</span></span></a></li>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="230" class="nav3"><a href="<?php echo site_url("portal_c/vistas/nosotros"); ?>"><span><span>Nosotros</span></span></a></li>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="330"><a href="<?php echo site_url("portal_c/vistas/dietas"); ?>"><span><span>Dietas</span></span></a></li>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="430" id="menu_active" class="nav5"><a href="<?php echo site_url("portal_c/vistas/galeria"); ?>"><span><span>Galeria</span></span></a></li>
						<?php if(isset($_SESSION["user"])){ ?>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="530"><a href="<?php echo site_url("Principal_c"); ?>"><span><span>Sistema</span></span></a></li>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="630"><a href="#"><span><span><i style="padding-top:15px !important;" id="candado" class="fa fa-unlock-alt fa-2x"></i></span></span></a></li>
						<?php }else{ ?>
						<li class="animate-in" data-anim-type="bounce-in-down-large" data-anim-delay="530"><a href="#"><span><span><i style="padding-top:15px !important;" id="candado" class="fa fa-unlock-alt fa-2x"></i></span></span></a></li>
						<?php } ?>

					</ul>
				</nav>
			</div>
		</header>
<!-- content -->
		<article id="content" >
			<center><h3><span>Galeria de Fotos</span></h3></center>
			  <nav>
                    <ul>
                        <li>
                            <a href="#" >
                                <img height="220" width="315" src="<?php echo base_url(); ?>public/images/delicioso.jpg"/>
                                <div class="tapa ancha">
                                    <h3 style="color:white">Apartado segundo</h3>
                                    <p>Cillum nostrud do aute legam non a velit quibusdam e ne ipsum laboris, minim
                                        appellat quo praetermissum. </p>
                                </div>

                            </a>
                        </li>
                        <li>
                            <a href="#" >
                                <img height="220" width="315" src="<?php echo base_url(); ?>public/images/comida.jpeg"/>
                                <div class="tapa  ancha">
                                    <h3 style="color:white">Apartado quinto</h3>
                                    <p>Deserunt irure
                                        iudicem cupidatat. Ullamco varias litteris ubi velit an consequat. Iudicem e
                                        quibusdam, se malis fabulas admodum.</p>
                                </div>

                            </a>
                        </li>
                         <li>
                            <a href="#" >
                                <img height="220" width="315" src="<?php echo base_url(); ?>public/images/desayuno.jpg"/>
                                <div class="tapa ancha">
                                    <h3 style="color:white">Apartado noveno</h3>
                                    <p>O noster malis ubi
                                        mandaremus, hic officia do offendit ea illum nostrud singulis ab non sint quae
                                        id probant. </p>
                                </div>

                            </a>
                        </li>



                        <li>
                            <a href="#" >
                                <img height="220" width="315" src="<?php echo base_url(); ?>public/images/vita.jpg"/>
                                <div class="tapa  ancha">
                                    <h3 style="color:white">Apartado cuarto</h3>
                                    <p>Ex aliqua officia possumus, est ad esse tempor est ullamco relinqueret nam
                                        probant qui non nulla amet ex tempor, ingeniis duis multos ubi dolor, est ipsum
                                        expetendis consequat, nescius ne esse et quo fabulas sempiternum. </p>
                                </div>

                            </a>
                        </li>
                        <li>
                            <a href="#" >
                                <img height="220" width="315" src="<?php echo base_url(); ?>public/images/rojo.jpg"/>
                                <div class="tapa ancha">
                                    <h3 style="color:white">Apartado sexto</h3>
                                    <p>Mandaremus sempiternum iis occaecat, illum te doctrina hic fugiat, aute te
                                        cernantur et labore, si tamen mentitum litteris. </p>
                                </div>

                            </a>
                        </li>
                        <li>
                            <a href="#" >
                                <img height="220" width="315" src="<?php echo base_url(); ?>public/images/desayuno.jpg"/>
                                <div class="tapa ancha">
                                    <h3 style="color:white">Apartado séptimo</h3>
                                    <p>Elit ubi possumus, ne noster
                                        appellat coniunctione si fabulas comprehenderit aut consequat ita ita summis
                                        appellat laboris, id lorem si velit, te anim distinguantur hic id duis
                                        incurreret arbitror, fugiat deserunt nescius. </p>
                                </div>

                            </a>
                        </li>
                        <li>
                            <a href="#" >
                                <img height="220" width="315" src="<?php echo base_url(); ?>public/images/rojo.jpg"/>
                                <div class="tapa ancha">
                                    <h3 style="color:white">Apartado octavo</h3>
                                    <p>Ad singulis exquisitaque. Vidisse
                                        in quamquam qui in esse ab irure an tamen vidisse ita probant, ad ad fugiat
                                        magna quae, laborum lorem ullamco, possumus velit offendit possumus de vidisse
                                        sed consequat sed arbitror minim ea laborum fidelissimae. </p>
                                </div>

                            </a>
                        </li>
                         <li >
                                <img height="220" width="315" src="<?php echo base_url(); ?>public/images/vita.jpg"/>
                                <div class="tapa ancha">
                                    <h3 style="color:white">Apartado primero</h3>
                                    <p>Quae e an culpa ullamco, quo elit fabulas do iis qui domesticarum, culpa
                                    singulis efflorescere ne sed velit doctrina ab elit quamquam ex veniam quem aut
                                    proident si noster est fore proident hic admodum. </p>
                                </div>

                        </li>
                        <li>
                            <a href="#" >
                                <img height="220" width="315" src="<?php echo base_url(); ?>public/images/vita.jpg"/>
                                <div class="tapa ancha">
                                    <h3 style="color:white">Apartado tercero</h3>
                                    <p>Quem iudicem e senserit. Dolore quamquam aliquip,
                                        quamquam anim excepteur, o an minim fugiat noster, varias iudicem non possumus.
                                        </p>
                                </div>

                            </a>
                        </li>


                    </ul>
                </nav>
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