CREATE DATABASE  IF NOT EXISTS `ecstasy` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `ecstasy`;
-- MySQL dump 10.13  Distrib 5.5.49, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: ecstasy
-- ------------------------------------------------------
-- Server version	5.5.49-0+deb8u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alertas`
--

DROP TABLE IF EXISTS `alertas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alertas` (
  `id_alerta` int(11) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `id_modulo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alertas`
--

LOCK TABLES `alertas` WRITE;
/*!40000 ALTER TABLE `alertas` DISABLE KEYS */;
/*!40000 ALTER TABLE `alertas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `almacen`
--

DROP TABLE IF EXISTS `almacen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `almacen` (
  `id_almacen` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_almacen`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `almacen`
--

LOCK TABLES `almacen` WRITE;
/*!40000 ALTER TABLE `almacen` DISABLE KEYS */;
INSERT INTO `almacen` VALUES (1,'Almacen Tarapoto','1'),(2,'Almacen Moyobamba','1'),(3,'Almacen Banda de Sh.','1'),(4,'qwe','0'),(5,'ewqeq','0'),(6,'qwe','0'),(7,'weqwe','0'),(8,'Almacen Pueblo Joven','1');
/*!40000 ALTER TABLE `almacen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `almacen_producto`
--

DROP TABLE IF EXISTS `almacen_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `almacen_producto` (
  `id_almacen` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `stock_min` int(11) DEFAULT NULL,
  `stock_max` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_almacen`,`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `almacen_producto`
--

LOCK TABLES `almacen_producto` WRITE;
/*!40000 ALTER TABLE `almacen_producto` DISABLE KEYS */;
INSERT INTO `almacen_producto` VALUES (1,14,1,2,13),(1,20,41,1,30),(2,15,1,2,25),(2,18,6,7,50),(2,21,14,3,45),(3,19,78,2,30);
/*!40000 ALTER TABLE `almacen_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amortizacion_compras`
--

DROP TABLE IF EXISTS `amortizacion_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amortizacion_compras` (
  `id_movimiento` int(11) NOT NULL,
  `id_cronograma_compras` int(11) NOT NULL,
  `monto` double DEFAULT NULL,
  PRIMARY KEY (`id_movimiento`,`id_cronograma_compras`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amortizacion_compras`
--

LOCK TABLES `amortizacion_compras` WRITE;
/*!40000 ALTER TABLE `amortizacion_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `amortizacion_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amortizacion_membresia`
--

DROP TABLE IF EXISTS `amortizacion_membresia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amortizacion_membresia` (
  `id_movimiento` int(11) NOT NULL,
  `id_cronograma_membresia` int(11) NOT NULL,
  `monto` double DEFAULT NULL,
  PRIMARY KEY (`id_movimiento`,`id_cronograma_membresia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amortizacion_membresia`
--

LOCK TABLES `amortizacion_membresia` WRITE;
/*!40000 ALTER TABLE `amortizacion_membresia` DISABLE KEYS */;
/*!40000 ALTER TABLE `amortizacion_membresia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amortizacion_ventas`
--

DROP TABLE IF EXISTS `amortizacion_ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amortizacion_ventas` (
  `id_movimiento` int(11) NOT NULL,
  `id_cronograma_ventas` int(11) NOT NULL,
  `monto` double DEFAULT NULL,
  PRIMARY KEY (`id_movimiento`,`id_cronograma_ventas`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amortizacion_ventas`
--

LOCK TABLES `amortizacion_ventas` WRITE;
/*!40000 ALTER TABLE `amortizacion_ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `amortizacion_ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asiento_contable`
--

DROP TABLE IF EXISTS `asiento_contable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asiento_contable` (
  `id_asiento` int(11) NOT NULL AUTO_INCREMENT,
  `dia` date DEFAULT NULL,
  `mes` date DEFAULT NULL,
  `annio` date DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `glosa` varchar(100) DEFAULT NULL,
  `id_transaccion` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_asiento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asiento_contable`
--

LOCK TABLES `asiento_contable` WRITE;
/*!40000 ALTER TABLE `asiento_contable` DISABLE KEYS */;
/*!40000 ALTER TABLE `asiento_contable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asiento_cuenta`
--

DROP TABLE IF EXISTS `asiento_cuenta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asiento_cuenta` (
  `id_cuenta_contable` int(11) NOT NULL,
  `id_asiento` int(11) NOT NULL,
  `debe` double DEFAULT NULL,
  `haber` double DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_cuenta_contable`,`id_asiento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asiento_cuenta`
--

LOCK TABLES `asiento_cuenta` WRITE;
/*!40000 ALTER TABLE `asiento_cuenta` DISABLE KEYS */;
/*!40000 ALTER TABLE `asiento_cuenta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `caja`
--

DROP TABLE IF EXISTS `caja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `caja` (
  `id_caja` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_caja`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caja`
--

LOCK TABLES `caja` WRITE;
/*!40000 ALTER TABLE `caja` DISABLE KEYS */;
/*!40000 ALTER TABLE `caja` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria_ejercicio`
--

DROP TABLE IF EXISTS `categoria_ejercicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria_ejercicio` (
  `id_categoria_ejercicio` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_categoria_ejercicio`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_ejercicio`
--

LOCK TABLES `categoria_ejercicio` WRITE;
/*!40000 ALTER TABLE `categoria_ejercicio` DISABLE KEYS */;
INSERT INTO `categoria_ejercicio` VALUES (1,'Gluteos','1'),(2,'posada','1');
/*!40000 ALTER TABLE `categoria_ejercicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria_producto`
--

DROP TABLE IF EXISTS `categoria_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria_producto` (
  `id_categoria_producto` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_categoria_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_producto`
--

LOCK TABLES `categoria_producto` WRITE;
/*!40000 ALTER TABLE `categoria_producto` DISABLE KEYS */;
INSERT INTO `categoria_producto` VALUES (1,'Vitaminas','1'),(2,'Gaseosas','1'),(3,'Agua','1');
/*!40000 ALTER TABLE `categoria_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido_paterno` varchar(100) DEFAULT NULL,
  `apellido_materno` varchar(100) DEFAULT NULL,
  `alias` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `celular` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` varchar(100) DEFAULT NULL,
  `ocupacion` varchar(100) DEFAULT NULL,
  `hobby` varchar(100) DEFAULT NULL,
  `seguro_medico` varchar(100) DEFAULT NULL,
  `codigo_postal` varchar(100) DEFAULT NULL,
  `fax` varchar(100) DEFAULT NULL,
  `numero_hijo` varchar(100) DEFAULT NULL,
  `sector` varchar(100) DEFAULT NULL,
  `rango_ingreso` varchar(100) DEFAULT NULL,
  `id_tipo_documento` int(11) DEFAULT NULL,
  `nro_documento` varchar(100) DEFAULT NULL,
  `id_estadocl` int(11) DEFAULT NULL,
  `id_gruposanguineo` int(11) DEFAULT NULL,
  `id_nacionalidad` int(11) DEFAULT NULL,
  `id_gradoestudio` int(11) DEFAULT NULL,
  `id_tipovivienda` int(11) DEFAULT NULL,
  `id_sexo` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  `id_ubigeo` varchar(6) DEFAULT NULL,
  `id_perfil_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Max','Hilario',NULL,NULL,NULL,'213123',NULL,'jr qeqweqeqwq',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1',NULL,NULL),(2,'Lilith','Cris',NULL,NULL,NULL,'232355',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1',NULL,NULL);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras` (
  `id_compras` int(11) NOT NULL AUTO_INCREMENT,
  `id_proveedor` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `id_modalidad_transaccion` int(11) DEFAULT NULL,
  `monto` double DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_compras`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,3,1,1,326,'2016-06-01','1'),(2,1,1,1,156,'2016-06-01','1'),(3,2,1,1,144,'2016-06-01','1'),(4,7,1,1,276,'2016-06-01','1'),(5,5,1,1,150,'2016-06-01','1'),(6,8,1,1,405,'2016-06-01','1'),(7,5,1,1,90,'2016-06-01','1'),(8,5,1,1,120,'2016-06-01','1'),(9,8,1,1,30,'2016-06-01','1'),(10,7,1,1,13.5,'2016-06-01','1'),(11,5,1,1,216,'2016-06-01','1'),(12,5,1,1,226.5,'2016-06-01','1'),(13,8,1,1,274.5,'2016-06-01','1'),(14,5,1,1,48,'2016-06-01','1'),(15,5,1,1,28,'2016-06-01','1'),(16,5,1,1,12,'2016-06-01','1'),(17,8,1,1,20,'2016-06-01','1'),(18,5,1,1,28,'2016-06-01','1'),(19,5,1,1,40,'2016-06-01','1'),(20,5,1,1,25,'2016-06-01','1'),(21,5,1,1,16,'2016-06-01','1'),(22,8,1,1,32,'2016-06-01','1'),(23,5,1,1,25,'2016-06-01','1'),(24,8,1,1,36,'2016-06-01','1'),(25,5,1,1,36,'2016-06-01','1'),(26,8,1,1,74,'2016-06-01','1'),(27,8,1,1,432,'2016-06-01','1'),(28,8,1,2,9,'2016-06-01','1'),(29,1,1,2,4,'2016-06-01','1');
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras_producto`
--

DROP TABLE IF EXISTS `compras_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras_producto` (
  `id_compras` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `igv` double DEFAULT NULL,
  `descuento` double DEFAULT NULL,
  `precio_unitario` double DEFAULT NULL,
  PRIMARY KEY (`id_compras`,`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras_producto`
--

LOCK TABLES `compras_producto` WRITE;
/*!40000 ALTER TABLE `compras_producto` DISABLE KEYS */;
INSERT INTO `compras_producto` VALUES (8,19,15,NULL,NULL,18),(9,20,72,NULL,NULL,0.069444444444444),(10,20,9,NULL,NULL,1.5),(11,19,36,NULL,NULL,2),(12,20,9,NULL,NULL,2.5),(13,19,36,NULL,NULL,1.6666666666667),(13,20,9,NULL,NULL,2.5),(13,21,24,NULL,NULL,1.5),(14,19,4,NULL,NULL,12),(15,19,4,NULL,NULL,7),(16,19,6,NULL,NULL,2),(17,19,4,NULL,NULL,5),(18,20,7,NULL,NULL,4),(19,20,8,NULL,NULL,5),(20,21,5,NULL,NULL,5),(21,21,4,NULL,NULL,4),(22,20,4,NULL,NULL,4),(23,20,5,NULL,NULL,5),(24,19,6,NULL,NULL,6),(25,21,6,NULL,NULL,6),(26,18,5,NULL,NULL,5),(26,21,7,NULL,NULL,7),(27,19,72,NULL,NULL,0.83333333333333),(27,20,36,NULL,NULL,0.66666666666667);
/*!40000 ALTER TABLE `compras_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `concepto_movimiento`
--

DROP TABLE IF EXISTS `concepto_movimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `concepto_movimiento` (
  `id_concepto_movimiento` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `id_tipomovimiento` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_concepto_movimiento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concepto_movimiento`
--

LOCK TABLES `concepto_movimiento` WRITE;
/*!40000 ALTER TABLE `concepto_movimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `concepto_movimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `concepto_triaje`
--

DROP TABLE IF EXISTS `concepto_triaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `concepto_triaje` (
  `id_conceptotriaje` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_conceptotriaje`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concepto_triaje`
--

LOCK TABLES `concepto_triaje` WRITE;
/*!40000 ALTER TABLE `concepto_triaje` DISABLE KEYS */;
INSERT INTO `concepto_triaje` VALUES (1,'Ritmo Cardiaco','1'),(2,'hola','1');
/*!40000 ALTER TABLE `concepto_triaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cronograma_compras`
--

DROP TABLE IF EXISTS `cronograma_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cronograma_compras` (
  `id_cronograma_compras` int(11) NOT NULL AUTO_INCREMENT,
  `id_compras` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `num_cuota` int(11) DEFAULT NULL,
  `monto_cuota` double DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_cronograma_compras`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cronograma_compras`
--

LOCK TABLES `cronograma_compras` WRITE;
/*!40000 ALTER TABLE `cronograma_compras` DISABLE KEYS */;
INSERT INTO `cronograma_compras` VALUES (1,6,'2016-06-01',1,405,'0'),(2,7,'2016-06-01',1,90,'0'),(3,8,'2016-06-01',1,120,'0'),(4,9,'2016-06-01',1,30,'0'),(5,10,'2016-06-01',1,13.5,'0'),(6,11,'2016-06-01',1,216,'0'),(7,12,'2016-06-01',1,226.5,'0'),(8,13,'2016-06-01',1,274.5,'0'),(9,14,'2016-06-01',1,48,'0'),(10,15,'2016-06-01',1,28,'0'),(11,16,'2016-06-01',1,12,'0'),(12,17,'2016-06-01',1,20,'0'),(13,18,'2016-06-01',1,28,'0'),(14,19,'2016-06-01',1,40,'0'),(15,20,'2016-06-01',1,25,'0'),(16,21,'2016-06-01',1,16,'0'),(17,22,'2016-06-01',1,32,'0'),(18,23,'2016-06-01',1,25,'0'),(19,24,'2016-06-01',1,36,'0'),(20,25,'2016-06-01',1,36,'0'),(21,26,'2016-06-01',1,74,'0'),(22,27,'2016-06-01',1,432,'0'),(23,28,'2016-06-03',1,5,'1'),(24,28,'2016-06-05',2,5,'1'),(25,29,'2016-06-16',1,0,'1'),(26,29,'2016-07-01',2,0,'1'),(27,29,'2016-07-16',3,0,'1'),(28,29,'2016-07-31',4,0,'1'),(29,29,'2016-08-15',5,0,'1'),(30,29,'2016-08-30',6,0,'1'),(31,29,'2016-09-14',7,0,'1'),(32,29,'2016-09-29',8,0,'1'),(33,29,'2016-10-14',9,0,'1'),(34,29,'2016-10-29',10,4,'1');
/*!40000 ALTER TABLE `cronograma_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cronograma_membresia`
--

DROP TABLE IF EXISTS `cronograma_membresia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cronograma_membresia` (
  `id_cronograma_membresia` int(11) NOT NULL AUTO_INCREMENT,
  `id_membresia` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `num_cuota` int(11) DEFAULT NULL,
  `monto_cuota` double DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_cronograma_membresia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cronograma_membresia`
--

LOCK TABLES `cronograma_membresia` WRITE;
/*!40000 ALTER TABLE `cronograma_membresia` DISABLE KEYS */;
/*!40000 ALTER TABLE `cronograma_membresia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cronograma_ventas`
--

DROP TABLE IF EXISTS `cronograma_ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cronograma_ventas` (
  `id_cronograma_ventas` int(11) NOT NULL AUTO_INCREMENT,
  `id_ventas` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `num_cuota` int(11) DEFAULT NULL,
  `monto_cuota` double DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_cronograma_ventas`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cronograma_ventas`
--

LOCK TABLES `cronograma_ventas` WRITE;
/*!40000 ALTER TABLE `cronograma_ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `cronograma_ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuenta_contable`
--

DROP TABLE IF EXISTS `cuenta_contable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuenta_contable` (
  `id_cuenta_contable` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_cuenta` varchar(100) DEFAULT NULL,
  `id_elemento` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_cuenta_contable`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuenta_contable`
--

LOCK TABLES `cuenta_contable` WRITE;
/*!40000 ALTER TABLE `cuenta_contable` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuenta_contable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejercicio`
--

DROP TABLE IF EXISTS `ejercicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ejercicio` (
  `id_ejercicio` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `id_categoriaejercicio` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_ejercicio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejercicio`
--

LOCK TABLES `ejercicio` WRITE;
/*!40000 ALTER TABLE `ejercicio` DISABLE KEYS */;
/*!40000 ALTER TABLE `ejercicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elemento`
--

DROP TABLE IF EXISTS `elemento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `elemento` (
  `id_elemento` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `id_tipo_cuenta` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_elemento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elemento`
--

LOCK TABLES `elemento` WRITE;
/*!40000 ALTER TABLE `elemento` DISABLE KEYS */;
/*!40000 ALTER TABLE `elemento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleado` (
  `id_empleado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido_paterno` varchar(100) DEFAULT NULL,
  `apellido_materno` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `celular` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` varchar(100) DEFAULT NULL,
  `hobby` varchar(100) DEFAULT NULL,
  `seguro_medico` varchar(100) DEFAULT NULL,
  `codigo_postal` varchar(100) DEFAULT NULL,
  `numero_hijo` varchar(100) DEFAULT NULL,
  `rango_ingreso` varchar(100) DEFAULT NULL,
  `id_tipo_documento` int(11) DEFAULT NULL,
  `id_tipoempleado` int(11) DEFAULT NULL,
  `id_estadocl` int(11) DEFAULT NULL,
  `id_gruposanguineo` int(11) DEFAULT NULL,
  `id_nacionalidad` int(11) DEFAULT NULL,
  `id_gradoestudio` int(11) DEFAULT NULL,
  `id_tipovivienda` int(11) DEFAULT NULL,
  `id_sexo` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  `id_perfil_usuario` int(11) DEFAULT NULL,
  `usuario` varchar(100) DEFAULT NULL,
  `clave` varchar(100) DEFAULT NULL,
  `idubigeo` varchar(6) DEFAULT NULL,
  `nro_documento` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_empleado`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (1,'Diana','Kirishima','Asakura','josmar08.31059@gmail.com','520054','957973273','jose pardo 350','04-21-1996','Estudiar',NULL,NULL,'0',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,1,'1',1,'admin','admin','110201','70996529'),(2,'Max Dino','Hilario','Arroyo','dino@gmail.com','982727','773737377','ramon juan','08-12-1994','Bailar',NULL,NULL,'0',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,1,'1',2,'pokemon','pokemon','220901','12912921'),(3,'Anthony Daylove','Rashida','Delgado','rashida@gmail.com','212182','712817217','Rashida Perfeccion 230','02-14-1995','Besar al Pierre',NULL,NULL,'2',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,1,'1',2,NULL,NULL,'220101','74868410'),(4,'Rias','Emilia','Kirisaki','qwe@gmail.com','123123','231231231','jr Miguel Angel 234','05-20-2016','234234234234',NULL,NULL,'32432432',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,2,'1',2,NULL,NULL,'220901','123456789');
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_il`
--

DROP TABLE IF EXISTS `estado_il`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado_il` (
  `id_estadocl` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_estadocl`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_il`
--

LOCK TABLES `estado_il` WRITE;
/*!40000 ALTER TABLE `estado_il` DISABLE KEYS */;
/*!40000 ALTER TABLE `estado_il` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forma_pago`
--

DROP TABLE IF EXISTS `forma_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forma_pago` (
  `id_formapago` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_formapago`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forma_pago`
--

LOCK TABLES `forma_pago` WRITE;
/*!40000 ALTER TABLE `forma_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `forma_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grado_estudio`
--

DROP TABLE IF EXISTS `grado_estudio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grado_estudio` (
  `id_gradoestudio` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_gradoestudio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grado_estudio`
--

LOCK TABLES `grado_estudio` WRITE;
/*!40000 ALTER TABLE `grado_estudio` DISABLE KEYS */;
/*!40000 ALTER TABLE `grado_estudio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupo_sanguineo`
--

DROP TABLE IF EXISTS `grupo_sanguineo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grupo_sanguineo` (
  `id_gruposanguineo` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_gruposanguineo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupo_sanguineo`
--

LOCK TABLES `grupo_sanguineo` WRITE;
/*!40000 ALTER TABLE `grupo_sanguineo` DISABLE KEYS */;
/*!40000 ALTER TABLE `grupo_sanguineo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoja_asistencia`
--

DROP TABLE IF EXISTS `hoja_asistencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hoja_asistencia` (
  `id_hojaasistencia` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_asistencia` date DEFAULT NULL,
  `hora` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  `id_membresia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_hojaasistencia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoja_asistencia`
--

LOCK TABLES `hoja_asistencia` WRITE;
/*!40000 ALTER TABLE `hoja_asistencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `hoja_asistencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marca` (
  `id_marca` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_marca`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Inca Kola','1'),(2,'Duromas','1'),(3,'Cielo','1');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membresia`
--

DROP TABLE IF EXISTS `membresia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `membresia` (
  `id_membresia` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) DEFAULT NULL,
  `id_paquete` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `id_modalidad_transaccion` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_membresia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membresia`
--

LOCK TABLES `membresia` WRITE;
/*!40000 ALTER TABLE `membresia` DISABLE KEYS */;
/*!40000 ALTER TABLE `membresia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modalidad_transaccion`
--

DROP TABLE IF EXISTS `modalidad_transaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modalidad_transaccion` (
  `id_modalidad_transaccion` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_modalidad_transaccion`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modalidad_transaccion`
--

LOCK TABLES `modalidad_transaccion` WRITE;
/*!40000 ALTER TABLE `modalidad_transaccion` DISABLE KEYS */;
INSERT INTO `modalidad_transaccion` VALUES (1,'Contado','1'),(2,'Credito','1');
/*!40000 ALTER TABLE `modalidad_transaccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modulo`
--

DROP TABLE IF EXISTS `modulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modulo` (
  `id_modulo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `orden` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `id_padre` int(11) DEFAULT NULL,
  `modulo_padre` varchar(100) DEFAULT NULL,
  `icono` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_modulo`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulo`
--

LOCK TABLES `modulo` WRITE;
/*!40000 ALTER TABLE `modulo` DISABLE KEYS */;
INSERT INTO `modulo` VALUES (1,'Mantenimiento','#',NULL,1,0,'MODULO PADRE','fa fa-globe'),(2,'Cliente','#',NULL,1,0,'MODULO PADRE','fa fa-user-plus'),(3,'Ventas','#',NULL,1,0,'MODULO PADRE','fa fa-money'),(4,'Servicios','#',NULL,1,0,'MODULO PADRE','fa fa-medkit'),(5,'Portal Web','#',NULL,1,0,'MODULO PADRE','fa fa-laptop'),(6,'Seguridad','#',NULL,1,0,'MODULO PADRE','fa fa-unlock'),(7,'Caja','#',NULL,1,0,'MODULO PADRE','fa fa-inbox'),(8,'Reportes','#',NULL,1,0,'MODULO PADRE','fa fa-file-pdf-o'),(9,'Modulo','Modulos',NULL,1,6,'SEGURIDAD',''),(10,'Categoria Ejercicio','Categoria_ejercicios_c',NULL,1,1,'MANTENIMIENTO',''),(11,'Concepto Triaje','Concepto_triaje_c',NULL,1,1,'MANTENIMIENTO',''),(12,'Estado Civil','Estado_civil_c',NULL,1,1,'MANTENIMIENTO',''),(13,'Forma Pago','Forma_pago_c',NULL,1,1,'MANTENIMIENTO',''),(14,'Grado Estudio','Grado_estudio_c',NULL,1,1,'MANTENIMIENTO',''),(15,'Grupo Sanguineo','Grupo_sanguineo_c',NULL,1,1,'MANTENIMIENTO',''),(16,'Nacionalidad','Nacionalidad_c',NULL,1,1,'MANTENIMIENTO',''),(17,'Servicio','Servicio_c',NULL,1,1,'MANTENIMIENTO',''),(18,'Sexo','Sexo_c',NULL,1,1,'MANTENIMIENTO',''),(19,'Tipo Documento','Tipo_documento_c',NULL,1,1,'MANTENIMIENTO',''),(20,'Tipo Empleado','Tipo_empleado_c',NULL,1,1,'MANTENIMIENTO',''),(21,'Tipo Movimiento','Tipo_movimiento_c',NULL,1,1,'MANTENIMIENTO',''),(22,'Tipo Vivienda','Tipo_vivienda_c',NULL,1,1,'MANTENIMIENTO',''),(23,'Registrar Cliente','Registrar_cliente_c',NULL,1,2,'SOCIO',''),(24,'Membresias','Membresias_c',NULL,1,2,'SOCIO',''),(25,'Antecedentes de Enfermedades','Antecedentes_de_enfermedades_c',NULL,1,2,'SOCIO',''),(26,'Triaje','Triaje_c',NULL,1,2,'SOCIO',''),(27,'Concepto de Movimiento','Concepto_de_movimiento',NULL,1,3,'VENTAS',''),(28,'Ventas','Ventas_c',NULL,1,3,'VENTAS',''),(29,'Productos','Productos_c',NULL,1,3,'VENTAS',''),(30,'Asistencia Socios','Asistencia_Socios_c',NULL,1,4,'SERVICIOS',''),(31,'Servicios','Servicios_c',NULL,1,4,'SERVICIOS',''),(32,'Instructores','Instructores_c',NULL,1,4,'SERVICIOS',''),(33,'Informacion','Informacion_c',NULL,1,5,'PORTAL WEB',''),(34,'Base de Datos','Cambiarbase_c',NULL,1,6,'SEGURIDAD',''),(35,'Perfil','Perfiles_c',NULL,1,6,'SEGURIDAD',''),(36,'Permisos','Permisos_c',NULL,1,6,'SEGURIDAD',''),(37,'Modulos','Modulos_c',NULL,1,6,'SEGURIDAD',''),(38,'Personal','Personal_c',NULL,1,6,'SEGURIDAD',''),(39,'Asistencia Empleado','Asistencia_empleado_c',NULL,1,6,'SEGURIDAD',''),(40,'Movimiento','Movimiento_c',NULL,1,7,'CAJA',''),(41,'Paquetes','Paquetes_c',NULL,1,4,'SERVICIOS',NULL),(42,'Membresia','Membresia_c',NULL,1,4,'SERVICIOS',NULL),(43,'Productos','Producto_c',NULL,1,44,'COMPRAS',NULL),(44,'Compras','#',NULL,1,0,'MODULO PADRE',NULL),(45,'Almacen','Almacen_c',NULL,1,44,'COMPRAS',NULL),(46,'Proveedor','Proveedor_c',NULL,1,44,'COMPRAS',NULL),(47,'Compras','compras_c',NULL,1,44,'COMPRAS',NULL);
/*!40000 ALTER TABLE `modulo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimiento`
--

DROP TABLE IF EXISTS `movimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movimiento` (
  `id_movimiento` int(11) NOT NULL AUTO_INCREMENT,
  `id_concepto_movimiento` int(11) DEFAULT NULL,
  `id_forma_pago` int(11) DEFAULT NULL,
  `id_serie_documento` int(11) DEFAULT NULL,
  `monto` double DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `extornar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_movimiento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimiento`
--

LOCK TABLES `movimiento` WRITE;
/*!40000 ALTER TABLE `movimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `movimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nacionalidad`
--

DROP TABLE IF EXISTS `nacionalidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nacionalidad` (
  `id_nacionalidad` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_nacionalidad`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nacionalidad`
--

LOCK TABLES `nacionalidad` WRITE;
/*!40000 ALTER TABLE `nacionalidad` DISABLE KEYS */;
INSERT INTO `nacionalidad` VALUES (1,'wqeweq','1');
/*!40000 ALTER TABLE `nacionalidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paquete`
--

DROP TABLE IF EXISTS `paquete`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paquete` (
  `id_paquete` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `lim_fecha` varchar(1) DEFAULT NULL,
  `fecha_ini` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `duracion` int(11) NOT NULL,
  `vigencia` varchar(100) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_paquete`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paquete`
--

LOCK TABLES `paquete` WRITE;
/*!40000 ALTER TABLE `paquete` DISABLE KEYS */;
INSERT INTO `paquete` VALUES (1,'wqwq','2016-05-27','0','2016-05-27','2016-06-02',12,'Dia',122,'0'),(2,'0','0000-00-00','0','0000-00-00','0000-00-00',0,'0',0,'0'),(3,'0','0000-00-00','0','0000-00-00','0000-00-00',0,'0',0,'0'),(4,'0','0000-00-00','0','0000-00-00','0000-00-00',0,'0',0,'0'),(5,'paquete 1','2016-05-27','0','2016-06-03','2016-06-03',2,'Dia',39,'1');
/*!40000 ALTER TABLE `paquete` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paquete_servicio`
--

DROP TABLE IF EXISTS `paquete_servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paquete_servicio` (
  `id_paquete` int(11) NOT NULL,
  `id_servicio` int(11) NOT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_paquete`,`id_servicio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paquete_servicio`
--

LOCK TABLES `paquete_servicio` WRITE;
/*!40000 ALTER TABLE `paquete_servicio` DISABLE KEYS */;
INSERT INTO `paquete_servicio` VALUES (5,3,'1'),(5,6,'1'),(5,8,'1'),(48,3,'1'),(48,8,'1'),(50,2,'1'),(50,6,'1'),(51,2,'1'),(51,3,'1'),(51,8,'1'),(53,3,'1'),(53,8,'1');
/*!40000 ALTER TABLE `paquete_servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `param`
--

DROP TABLE IF EXISTS `param`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `param` (
  `id_param` varchar(30) NOT NULL,
  `valor` varchar(30) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_param`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `param`
--

LOCK TABLES `param` WRITE;
/*!40000 ALTER TABLE `param` DISABLE KEYS */;
INSERT INTO `param` VALUES ('AUTOR','FISI','c d s e r i',1),('CAJA MINIMA','50','Monto mínimo de caja',1),('CODIGO','VALORS','DESCRIPCIONS',0),('IGV','0.18','CONTROL DEL IGV',1);
/*!40000 ALTER TABLE `param` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil_usuario`
--

DROP TABLE IF EXISTS `perfil_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfil_usuario` (
  `id_perfil_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_perfil_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil_usuario`
--

LOCK TABLES `perfil_usuario` WRITE;
/*!40000 ALTER TABLE `perfil_usuario` DISABLE KEYS */;
INSERT INTO `perfil_usuario` VALUES (1,'Administrador','1'),(2,'Secretario','1');
/*!40000 ALTER TABLE `perfil_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permisos` (
  `estado` char(1) DEFAULT NULL,
  `id_modulo` int(11) NOT NULL,
  `id_perfil_usuario` int(11) NOT NULL,
  PRIMARY KEY (`id_modulo`,`id_perfil_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
INSERT INTO `permisos` VALUES ('1',10,1),('1',11,1),('1',12,1),('1',13,1),('1',14,1),('1',15,1),('1',16,1),('1',17,1),('1',17,2),('1',18,1),('1',19,1),('1',20,1),('1',21,1),('1',22,1),('1',23,1),('1',24,1),('1',25,1),('1',25,2),('1',26,1),('1',27,1),('1',28,1),('1',28,2),('1',29,1),('1',30,1),('1',31,1),('1',32,1),('1',33,1),('1',34,1),('1',35,1),('1',36,1),('1',37,1),('1',38,1),('1',39,1),('1',40,1),('1',41,1),('1',42,1),('1',43,1),('1',45,1),('1',46,1),('1',47,1);
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `id_categoria_producto` int(11) DEFAULT NULL,
  `id_marca` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,1,1,'HOLA','2016-05-27',32.5,'0'),(2,1,1,'hola','2016-05-26',123.7,'0'),(3,2,1,'Un Paquete','2016-05-27',22,'0'),(4,1,1,'Un Paquete','2016-05-27',12,'0'),(5,2,1,'Un Paquete','2016-05-27',12,'0'),(6,1,2,'Un Servicio','2016-05-27',1234,'0'),(7,2,1,'weqew','2016-05-27',212,'0'),(8,1,1,'wreer','2016-05-27',23,'0'),(9,0,0,'0','0000-00-00',0,'0'),(10,2,2,'qwewe','2016-05-27',12,'0'),(11,2,2,'Un Servicio','2016-05-27',123,'0'),(12,2,1,'Celos','2016-05-27',2323,'0'),(13,1,1,'Celos','2016-05-27',123,'0'),(14,2,1,'Vitaminas','2016-05-30',1234,'1'),(15,2,2,'Energizante','2016-05-30',123,'1'),(16,0,0,'','2016-05-30',0,'0'),(17,0,0,'','2016-05-30',0,'0'),(18,1,2,'Dopaming','2016-05-30',34.9,'1'),(19,2,1,'Gaseosa Kola Real 2 L.','2016-06-01',2.5,'1'),(20,3,3,'Agua Cielo','2016-06-01',1.5,'1'),(21,2,1,'Gatorage','2016-06-01',3,'1');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proveedor` (
  `id_proveedor` int(11) NOT NULL AUTO_INCREMENT,
  `razon_social` varchar(100) DEFAULT NULL,
  `ruc` varchar(100) DEFAULT NULL,
  `id_ubigeo` varchar(6) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
INSERT INTO `proveedor` VALUES (1,'Creaciones Bazan','20729738369','220901','974527842','j_max_03@hotmail.com','jr Juan Vargas #43','1'),(2,'Zapateria DyD','10837828889','040410','974527842','maxdino_94@hotmail.com','jr atahualpa 324','0'),(3,'Maltin Power SAC','11111111111','070106','974527842','max.hilario351@gmail.com','jr Lamas 422','0'),(4,'Sporage Raid SRL','11111111111','080107','974527842','maxdino_94@hotmail.com','jr lima 212','0'),(5,'Inka Kola SAC','64575675757','130608','678686787','max@gmail.com','jr Juan Vargas #43','1'),(6,'Energizantes Gatorage','35531121212','030102','898654566','chicogenerador_96@hotmail.com','jr atahualpa 324','1'),(7,'Cielo EIRL','23246552222','050105','667544333','cielo@hotmail.com','jr Lamas 422','1'),(8,'Kola Real SAC','58674903722','100316','966463892','kola@gmail.com','jr Lima 1694','1');
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutina`
--

DROP TABLE IF EXISTS `rutina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rutina` (
  `id_rutina` int(11) NOT NULL AUTO_INCREMENT,
  `id_membresia` int(11) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_rutina`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutina`
--

LOCK TABLES `rutina` WRITE;
/*!40000 ALTER TABLE `rutina` DISABLE KEYS */;
/*!40000 ALTER TABLE `rutina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutina_ejercicios`
--

DROP TABLE IF EXISTS `rutina_ejercicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rutina_ejercicios` (
  `id_rutina` int(11) NOT NULL,
  `id_ejercicios` int(11) NOT NULL,
  `serie` varchar(100) DEFAULT NULL,
  `repeticiones` varchar(100) DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `peso` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_rutina`,`id_ejercicios`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutina_ejercicios`
--

LOCK TABLES `rutina_ejercicios` WRITE;
/*!40000 ALTER TABLE `rutina_ejercicios` DISABLE KEYS */;
/*!40000 ALTER TABLE `rutina_ejercicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serie_documento`
--

DROP TABLE IF EXISTS `serie_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `serie_documento` (
  `id_serie_documento` int(11) NOT NULL AUTO_INCREMENT,
  `serie` varchar(100) DEFAULT NULL,
  `numero` varchar(100) DEFAULT NULL,
  `max_numero` varchar(100) DEFAULT NULL,
  `id_sesioncaja` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  `id_tipo_comprobante` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_serie_documento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serie_documento`
--

LOCK TABLES `serie_documento` WRITE;
/*!40000 ALTER TABLE `serie_documento` DISABLE KEYS */;
/*!40000 ALTER TABLE `serie_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio`
--

DROP TABLE IF EXISTS `servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicio` (
  `id_servicio` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_servicio`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio`
--

LOCK TABLES `servicio` WRITE;
/*!40000 ALTER TABLE `servicio` DISABLE KEYS */;
INSERT INTO `servicio` VALUES (1,'sdsd','0'),(2,'Box','1'),(3,'Aerobicos','1'),(4,'Cardio','1'),(5,'Danzas','1'),(6,'Gym','1'),(7,'Badyboll','0'),(8,'Badyboll','1'),(9,'Massages','0'),(10,'Obstrucion','0');
/*!40000 ALTER TABLE `servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sesion_caja`
--

DROP TABLE IF EXISTS `sesion_caja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sesion_caja` (
  `id_sesioncaja` int(11) NOT NULL AUTO_INCREMENT,
  `id_empleado` int(11) DEFAULT NULL,
  `fecha_entrada` date DEFAULT NULL,
  `fecha_salida` date DEFAULT NULL,
  `monto_inicial` double DEFAULT NULL,
  `monto_cierre` double DEFAULT NULL,
  `id_caja` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_sesioncaja`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sesion_caja`
--

LOCK TABLES `sesion_caja` WRITE;
/*!40000 ALTER TABLE `sesion_caja` DISABLE KEYS */;
/*!40000 ALTER TABLE `sesion_caja` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexo`
--

DROP TABLE IF EXISTS `sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sexo` (
  `id_sexo` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_sexo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexo`
--

LOCK TABLES `sexo` WRITE;
/*!40000 ALTER TABLE `sexo` DISABLE KEYS */;
INSERT INTO `sexo` VALUES (1,'Masculino','1'),(2,'Femenino','1');
/*!40000 ALTER TABLE `sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_comprobante`
--

DROP TABLE IF EXISTS `tipo_comprobante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_comprobante` (
  `id_tipo_comprobante` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_tipo_comprobante`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_comprobante`
--

LOCK TABLES `tipo_comprobante` WRITE;
/*!40000 ALTER TABLE `tipo_comprobante` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_comprobante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_cuenta`
--

DROP TABLE IF EXISTS `tipo_cuenta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_cuenta` (
  `id_tipocuenta` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_tipocuenta`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_cuenta`
--

LOCK TABLES `tipo_cuenta` WRITE;
/*!40000 ALTER TABLE `tipo_cuenta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_cuenta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_documento`
--

DROP TABLE IF EXISTS `tipo_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_documento` (
  `id_tipodocumento` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_tipodocumento`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_documento`
--

LOCK TABLES `tipo_documento` WRITE;
/*!40000 ALTER TABLE `tipo_documento` DISABLE KEYS */;
INSERT INTO `tipo_documento` VALUES (1,'D.N.I','1');
/*!40000 ALTER TABLE `tipo_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_empleado`
--

DROP TABLE IF EXISTS `tipo_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_empleado` (
  `id_tipoempleado` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_tipoempleado`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_empleado`
--

LOCK TABLES `tipo_empleado` WRITE;
/*!40000 ALTER TABLE `tipo_empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_movimiento`
--

DROP TABLE IF EXISTS `tipo_movimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_movimiento` (
  `id_tipomovimiento` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_tipomovimiento`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_movimiento`
--

LOCK TABLES `tipo_movimiento` WRITE;
/*!40000 ALTER TABLE `tipo_movimiento` DISABLE KEYS */;
INSERT INTO `tipo_movimiento` VALUES (1,'Contado','1'),(2,'Credito','1');
/*!40000 ALTER TABLE `tipo_movimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_vivienda`
--

DROP TABLE IF EXISTS `tipo_vivienda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_vivienda` (
  `id_tipovivienda` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_tipovivienda`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_vivienda`
--

LOCK TABLES `tipo_vivienda` WRITE;
/*!40000 ALTER TABLE `tipo_vivienda` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_vivienda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `triaje`
--

DROP TABLE IF EXISTS `triaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `triaje` (
  `id_membresia` int(11) NOT NULL,
  `id_conceptotriaje` int(11) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_membresia`,`id_conceptotriaje`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `triaje`
--

LOCK TABLES `triaje` WRITE;
/*!40000 ALTER TABLE `triaje` DISABLE KEYS */;
/*!40000 ALTER TABLE `triaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ubigeo`
--

DROP TABLE IF EXISTS `ubigeo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ubigeo` (
  `id_ubigeo` varchar(6) NOT NULL,
  `Departamento` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  `Provincia` varchar(100) DEFAULT NULL,
  `Distrito` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_ubigeo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ubigeo`
--

LOCK TABLES `ubigeo` WRITE;
/*!40000 ALTER TABLE `ubigeo` DISABLE KEYS */;
INSERT INTO `ubigeo` VALUES ('010000','Amazonas','1',NULL,NULL),('010100','Amazonas','1','Chachapoyas',NULL),('010101','Amazonas','1','Chachapoyas','Chachapoyas'),('010102','Amazonas','1','Chachapoyas','Asunción'),('010103','Amazonas','1','Chachapoyas','Balsas'),('010104','Amazonas','1','Chachapoyas','Cheto'),('010105','Amazonas','1','Chachapoyas','Chiliquin'),('010106','Amazonas','1','Chachapoyas','Chuquibamba'),('010107','Amazonas','1','Chachapoyas','Granada'),('010108','Amazonas','1','Chachapoyas','Huancas'),('010109','Amazonas','1','Chachapoyas','La Jalca'),('010110','Amazonas','1','Chachapoyas','Leimebamba'),('010111','Amazonas','1','Chachapoyas','Levanto'),('010112','Amazonas','1','Chachapoyas','Magdalena'),('010113','Amazonas','1','Chachapoyas','Mariscal Castilla'),('010114','Amazonas','1','Chachapoyas','Molinopampa'),('010115','Amazonas','1','Chachapoyas','Montevideo'),('010116','Amazonas','1','Chachapoyas','Olleros'),('010117','Amazonas','1','Chachapoyas','Quinjalca'),('010118','Amazonas','1','Chachapoyas','San Francisco de Daguas'),('010119','Amazonas','1','Chachapoyas','San Isidro de Maino'),('010120','Amazonas','1','Chachapoyas','Soloco'),('010121','Amazonas','1','Chachapoyas','Sonche'),('010200','Amazonas','1','Bagua',NULL),('010201','Amazonas','1','Bagua','Bagua'),('010202','Amazonas','1','Bagua','Aramango'),('010203','Amazonas','1','Bagua','Copallin'),('010204','Amazonas','1','Bagua','El Parco'),('010205','Amazonas','1','Bagua','Imaza'),('010206','Amazonas','1','Bagua','La Peca'),('010300','Amazonas','1','Bongará',NULL),('010301','Amazonas','1','Bongará','Jumbilla'),('010302','Amazonas','1','Bongará','Chisquilla'),('010303','Amazonas','1','Bongará','Churuja'),('010304','Amazonas','1','Bongará','Corosha'),('010305','Amazonas','1','Bongará','Cuispes'),('010306','Amazonas','1','Bongará','Florida'),('010307','Amazonas','1','Bongará','Jazan'),('010308','Amazonas','1','Bongará','Recta'),('010309','Amazonas','1','Bongará','San Carlos'),('010310','Amazonas','1','Bongará','Shipasbamba'),('010311','Amazonas','1','Bongará','Valera'),('010312','Amazonas','1','Bongará','Yambrasbamba'),('010400','Amazonas','1','Condorcanqui',NULL),('010401','Amazonas','1','Condorcanqui','Nieva'),('010402','Amazonas','1','Condorcanqui','El Cenepa'),('010403','Amazonas','1','Condorcanqui','Río Santiago'),('010500','Amazonas','1','Luya',NULL),('010501','Amazonas','1','Luya','Lamud'),('010502','Amazonas','1','Luya','Camporredondo'),('010503','Amazonas','1','Luya','Cocabamba'),('010504','Amazonas','1','Luya','Colcamar'),('010505','Amazonas','1','Luya','Conila'),('010506','Amazonas','1','Luya','Inguilpata'),('010507','Amazonas','1','Luya','Longuita'),('010508','Amazonas','1','Luya','Lonya Chico'),('010509','Amazonas','1','Luya','Luya'),('010510','Amazonas','1','Luya','Luya Viejo'),('010511','Amazonas','1','Luya','María'),('010512','Amazonas','1','Luya','Ocalli'),('010513','Amazonas','1','Luya','Ocumal'),('010514','Amazonas','1','Luya','Pisuquia'),('010515','Amazonas','1','Luya','Providencia'),('010516','Amazonas','1','Luya','San Cristóbal'),('010517','Amazonas','1','Luya','San Francisco de Yeso'),('010518','Amazonas','1','Luya','San Jerónimo'),('010519','Amazonas','1','Luya','San Juan de Lopecancha'),('010520','Amazonas','1','Luya','Santa Catalina'),('010521','Amazonas','1','Luya','Santo Tomas'),('010522','Amazonas','1','Luya','Tingo'),('010523','Amazonas','1','Luya','Trita'),('010600','Amazonas','1','Rodríguez de Mendoza',NULL),('010601','Amazonas','1','Rodríguez de Mendoza','San Nicolás'),('010602','Amazonas','1','Rodríguez de Mendoza','Chirimoto'),('010603','Amazonas','1','Rodríguez de Mendoza','Cochamal'),('010604','Amazonas','1','Rodríguez de Mendoza','Huambo'),('010605','Amazonas','1','Rodríguez de Mendoza','Limabamba'),('010606','Amazonas','1','Rodríguez de Mendoza','Longar'),('010607','Amazonas','1','Rodríguez de Mendoza','Mariscal Benavides'),('010608','Amazonas','1','Rodríguez de Mendoza','Milpuc'),('010609','Amazonas','1','Rodríguez de Mendoza','Omia'),('010610','Amazonas','1','Rodríguez de Mendoza','Santa Rosa'),('010611','Amazonas','1','Rodríguez de Mendoza','Totora'),('010612','Amazonas','1','Rodríguez de Mendoza','Vista Alegre'),('010700','Amazonas','1','Utcubamba',NULL),('010701','Amazonas','1','Utcubamba','Bagua Grande'),('010702','Amazonas','1','Utcubamba','Cajaruro'),('010703','Amazonas','1','Utcubamba','Cumba'),('010704','Amazonas','1','Utcubamba','El Milagro'),('010705','Amazonas','1','Utcubamba','Jamalca'),('010706','Amazonas','1','Utcubamba','Lonya Grande'),('010707','Amazonas','1','Utcubamba','Yamon'),('020000','Áncash','1',NULL,NULL),('020100','Áncash','1','Huaraz',NULL),('020101','Áncash','1','Huaraz','Huaraz'),('020102','Áncash','1','Huaraz','Cochabamba'),('020103','Áncash','1','Huaraz','Colcabamba'),('020104','Áncash','1','Huaraz','Huanchay'),('020105','Áncash','1','Huaraz','Independencia'),('020106','Áncash','1','Huaraz','Jangas'),('020107','Áncash','1','Huaraz','La Libertad'),('020108','Áncash','1','Huaraz','Olleros'),('020109','Áncash','1','Huaraz','Pampas Grande'),('020110','Áncash','1','Huaraz','Pariacoto'),('020111','Áncash','1','Huaraz','Pira'),('020112','Áncash','1','Huaraz','Tarica'),('020200','Áncash','1','Aija',NULL),('020201','Áncash','1','Aija','Aija'),('020202','Áncash','1','Aija','Coris'),('020203','Áncash','1','Aija','Huacllan'),('020204','Áncash','1','Aija','La Merced'),('020205','Áncash','1','Aija','Succha'),('020300','Áncash','1','Antonio Raymondi',NULL),('020301','Áncash','1','Antonio Raymondi','Llamellin'),('020302','Áncash','1','Antonio Raymondi','Aczo'),('020303','Áncash','1','Antonio Raymondi','Chaccho'),('020304','Áncash','1','Antonio Raymondi','Chingas'),('020305','Áncash','1','Antonio Raymondi','Mirgas'),('020306','Áncash','1','Antonio Raymondi','San Juan de Rontoy'),('020400','Áncash','1','Asunción',NULL),('020401','Áncash','1','Asunción','Chacas'),('020402','Áncash','1','Asunción','Acochaca'),('020500','Áncash','1','Bolognesi',NULL),('020501','Áncash','1','Bolognesi','Chiquian'),('020502','Áncash','1','Bolognesi','Abelardo Pardo Lezameta'),('020503','Áncash','1','Bolognesi','Antonio Raymondi'),('020504','Áncash','1','Bolognesi','Aquia'),('020505','Áncash','1','Bolognesi','Cajacay'),('020506','Áncash','1','Bolognesi','Canis'),('020507','Áncash','1','Bolognesi','Colquioc'),('020508','Áncash','1','Bolognesi','Huallanca'),('020509','Áncash','1','Bolognesi','Huasta'),('020510','Áncash','1','Bolognesi','Huayllacayan'),('020511','Áncash','1','Bolognesi','La Primavera'),('020512','Áncash','1','Bolognesi','Mangas'),('020513','Áncash','1','Bolognesi','Pacllon'),('020514','Áncash','1','Bolognesi','San Miguel de Corpanqui'),('020515','Áncash','1','Bolognesi','Ticllos'),('020600','Áncash','1','Carhuaz',NULL),('020601','Áncash','1','Carhuaz','Carhuaz'),('020602','Áncash','1','Carhuaz','Acopampa'),('020603','Áncash','1','Carhuaz','Amashca'),('020604','Áncash','1','Carhuaz','Anta'),('020605','Áncash','1','Carhuaz','Ataquero'),('020606','Áncash','1','Carhuaz','Marcara'),('020607','Áncash','1','Carhuaz','Pariahuanca'),('020608','Áncash','1','Carhuaz','San Miguel de Aco'),('020609','Áncash','1','Carhuaz','Shilla'),('020610','Áncash','1','Carhuaz','Tinco'),('020611','Áncash','1','Carhuaz','Yungar'),('020700','Áncash','1','Carlos Fermín Fitzcarrald',NULL),('020701','Áncash','1','Carlos Fermín Fitzcarrald','San Luis'),('020702','Áncash','1','Carlos Fermín Fitzcarrald','San Nicolás'),('020703','Áncash','1','Carlos Fermín Fitzcarrald','Yauya'),('020800','Áncash','1','Casma',NULL),('020801','Áncash','1','Casma','Casma'),('020802','Áncash','1','Casma','Buena Vista Alta'),('020803','Áncash','1','Casma','Comandante Noel'),('020804','Áncash','1','Casma','Yautan'),('020900','Áncash','1','Corongo',NULL),('020901','Áncash','1','Corongo','Corongo'),('020902','Áncash','1','Corongo','Aco'),('020903','Áncash','1','Corongo','Bambas'),('020904','Áncash','1','Corongo','Cusca'),('020905','Áncash','1','Corongo','La Pampa'),('020906','Áncash','1','Corongo','Yanac'),('020907','Áncash','1','Corongo','Yupan'),('021000','Áncash','1','Huari',NULL),('021001','Áncash','1','Huari','Huari'),('021002','Áncash','1','Huari','Anra'),('021003','Áncash','1','Huari','Cajay'),('021004','Áncash','1','Huari','Chavin de Huantar'),('021005','Áncash','1','Huari','Huacachi'),('021006','Áncash','1','Huari','Huacchis'),('021007','Áncash','1','Huari','Huachis'),('021008','Áncash','1','Huari','Huantar'),('021009','Áncash','1','Huari','Masin'),('021010','Áncash','1','Huari','Paucas'),('021011','Áncash','1','Huari','Ponto'),('021012','Áncash','1','Huari','Rahuapampa'),('021013','Áncash','1','Huari','Rapayan'),('021014','Áncash','1','Huari','San Marcos'),('021015','Áncash','1','Huari','San Pedro de Chana'),('021016','Áncash','1','Huari','Uco'),('021100','Áncash','1','Huarmey',NULL),('021101','Áncash','1','Huarmey','Huarmey'),('021102','Áncash','1','Huarmey','Cochapeti'),('021103','Áncash','1','Huarmey','Culebras'),('021104','Áncash','1','Huarmey','Huayan'),('021105','Áncash','1','Huarmey','Malvas'),('021200','Áncash','1','Huaylas',NULL),('021201','Áncash','1','Huaylas','Caraz'),('021202','Áncash','1','Huaylas','Huallanca'),('021203','Áncash','1','Huaylas','Huata'),('021204','Áncash','1','Huaylas','Huaylas'),('021205','Áncash','1','Huaylas','Mato'),('021206','Áncash','1','Huaylas','Pamparomas'),('021207','Áncash','1','Huaylas','Pueblo Libre'),('021208','Áncash','1','Huaylas','Santa Cruz'),('021209','Áncash','1','Huaylas','Santo Toribio'),('021210','Áncash','1','Huaylas','Yuracmarca'),('021300','Áncash','1','Mariscal Luzuriaga',NULL),('021301','Áncash','1','Mariscal Luzuriaga','Piscobamba'),('021302','Áncash','1','Mariscal Luzuriaga','Casca'),('021303','Áncash','1','Mariscal Luzuriaga','Eleazar Guzmán Barron'),('021304','Áncash','1','Mariscal Luzuriaga','Fidel Olivas Escudero'),('021305','Áncash','1','Mariscal Luzuriaga','Llama'),('021306','Áncash','1','Mariscal Luzuriaga','Llumpa'),('021307','Áncash','1','Mariscal Luzuriaga','Lucma'),('021308','Áncash','1','Mariscal Luzuriaga','Musga'),('021400','Áncash','1','Ocros',NULL),('021401','Áncash','1','Ocros','Ocros'),('021402','Áncash','1','Ocros','Acas'),('021403','Áncash','1','Ocros','Cajamarquilla'),('021404','Áncash','1','Ocros','Carhuapampa'),('021405','Áncash','1','Ocros','Cochas'),('021406','Áncash','1','Ocros','Congas'),('021407','Áncash','1','Ocros','Llipa'),('021408','Áncash','1','Ocros','San Cristóbal de Rajan'),('021409','Áncash','1','Ocros','San Pedro'),('021410','Áncash','1','Ocros','Santiago de Chilcas'),('021500','Áncash','1','Pallasca',NULL),('021501','Áncash','1','Pallasca','Cabana'),('021502','Áncash','1','Pallasca','Bolognesi'),('021503','Áncash','1','Pallasca','Conchucos'),('021504','Áncash','1','Pallasca','Huacaschuque'),('021505','Áncash','1','Pallasca','Huandoval'),('021506','Áncash','1','Pallasca','Lacabamba'),('021507','Áncash','1','Pallasca','Llapo'),('021508','Áncash','1','Pallasca','Pallasca'),('021509','Áncash','1','Pallasca','Pampas'),('021510','Áncash','1','Pallasca','Santa Rosa'),('021511','Áncash','1','Pallasca','Tauca'),('021600','Áncash','1','Pomabamba',NULL),('021601','Áncash','1','Pomabamba','Pomabamba'),('021602','Áncash','1','Pomabamba','Huayllan'),('021603','Áncash','1','Pomabamba','Parobamba'),('021604','Áncash','1','Pomabamba','Quinuabamba'),('021700','Áncash','1','Recuay',NULL),('021701','Áncash','1','Recuay','Recuay'),('021702','Áncash','1','Recuay','Catac'),('021703','Áncash','1','Recuay','Cotaparaco'),('021704','Áncash','1','Recuay','Huayllapampa'),('021705','Áncash','1','Recuay','Llacllin'),('021706','Áncash','1','Recuay','Marca'),('021707','Áncash','1','Recuay','Pampas Chico'),('021708','Áncash','1','Recuay','Pararin'),('021709','Áncash','1','Recuay','Tapacocha'),('021710','Áncash','1','Recuay','Ticapampa'),('021800','Áncash','1','Santa',NULL),('021801','Áncash','1','Santa','Chimbote'),('021802','Áncash','1','Santa','Cáceres del Perú'),('021803','Áncash','1','Santa','Coishco'),('021804','Áncash','1','Santa','Macate'),('021805','Áncash','1','Santa','Moro'),('021806','Áncash','1','Santa','Nepeña'),('021807','Áncash','1','Santa','Samanco'),('021808','Áncash','1','Santa','Santa'),('021809','Áncash','1','Santa','Nuevo Chimbote'),('021900','Áncash','1','Sihuas',NULL),('021901','Áncash','1','Sihuas','Sihuas'),('021902','Áncash','1','Sihuas','Acobamba'),('021903','Áncash','1','Sihuas','Alfonso Ugarte'),('021904','Áncash','1','Sihuas','Cashapampa'),('021905','Áncash','1','Sihuas','Chingalpo'),('021906','Áncash','1','Sihuas','Huayllabamba'),('021907','Áncash','1','Sihuas','Quiches'),('021908','Áncash','1','Sihuas','Ragash'),('021909','Áncash','1','Sihuas','San Juan'),('021910','Áncash','1','Sihuas','Sicsibamba'),('022000','Áncash','1','Yungay',NULL),('022001','Áncash','1','Yungay','Yungay'),('022002','Áncash','1','Yungay','Cascapara'),('022003','Áncash','1','Yungay','Mancos'),('022004','Áncash','1','Yungay','Matacoto'),('022005','Áncash','1','Yungay','Quillo'),('022006','Áncash','1','Yungay','Ranrahirca'),('022007','Áncash','1','Yungay','Shupluy'),('022008','Áncash','1','Yungay','Yanama'),('030000','Apurímac','1',NULL,NULL),('030100','Apurímac','1','Abancay',NULL),('030101','Apurímac','1','Abancay','Abancay'),('030102','Apurímac','1','Abancay','Chacoche'),('030103','Apurímac','1','Abancay','Circa'),('030104','Apurímac','1','Abancay','Curahuasi'),('030105','Apurímac','1','Abancay','Huanipaca'),('030106','Apurímac','1','Abancay','Lambrama'),('030107','Apurímac','1','Abancay','Pichirhua'),('030108','Apurímac','1','Abancay','San Pedro de Cachora'),('030109','Apurímac','1','Abancay','Tamburco'),('030200','Apurímac','1','Andahuaylas',NULL),('030201','Apurímac','1','Andahuaylas','Andahuaylas'),('030202','Apurímac','1','Andahuaylas','Andarapa'),('030203','Apurímac','1','Andahuaylas','Chiara'),('030204','Apurímac','1','Andahuaylas','Huancarama'),('030205','Apurímac','1','Andahuaylas','Huancaray'),('030206','Apurímac','1','Andahuaylas','Huayana'),('030207','Apurímac','1','Andahuaylas','Kishuara'),('030208','Apurímac','1','Andahuaylas','Pacobamba'),('030209','Apurímac','1','Andahuaylas','Pacucha'),('030210','Apurímac','1','Andahuaylas','Pampachiri'),('030211','Apurímac','1','Andahuaylas','Pomacocha'),('030212','Apurímac','1','Andahuaylas','San Antonio de Cachi'),('030213','Apurímac','1','Andahuaylas','San Jerónimo'),('030214','Apurímac','1','Andahuaylas','San Miguel de Chaccrampa'),('030215','Apurímac','1','Andahuaylas','Santa María de Chicmo'),('030216','Apurímac','1','Andahuaylas','Talavera'),('030217','Apurímac','1','Andahuaylas','Tumay Huaraca'),('030218','Apurímac','1','Andahuaylas','Turpo'),('030219','Apurímac','1','Andahuaylas','Kaquiabamba'),('030220','Apurímac','1','Andahuaylas','José María Arguedas'),('030300','Apurímac','1','Antabamba',NULL),('030301','Apurímac','1','Antabamba','Antabamba'),('030302','Apurímac','1','Antabamba','El Oro'),('030303','Apurímac','1','Antabamba','Huaquirca'),('030304','Apurímac','1','Antabamba','Juan Espinoza Medrano'),('030305','Apurímac','1','Antabamba','Oropesa'),('030306','Apurímac','1','Antabamba','Pachaconas'),('030307','Apurímac','1','Antabamba','Sabaino'),('030400','Apurímac','1','Aymaraes',NULL),('030401','Apurímac','1','Aymaraes','Chalhuanca'),('030402','Apurímac','1','Aymaraes','Capaya'),('030403','Apurímac','1','Aymaraes','Caraybamba'),('030404','Apurímac','1','Aymaraes','Chapimarca'),('030405','Apurímac','1','Aymaraes','Colcabamba'),('030406','Apurímac','1','Aymaraes','Cotaruse'),('030407','Apurímac','1','Aymaraes','Huayllo'),('030408','Apurímac','1','Aymaraes','Justo Apu Sahuaraura'),('030409','Apurímac','1','Aymaraes','Lucre'),('030410','Apurímac','1','Aymaraes','Pocohuanca'),('030411','Apurímac','1','Aymaraes','San Juan de Chacña'),('030412','Apurímac','1','Aymaraes','Sañayca'),('030413','Apurímac','1','Aymaraes','Soraya'),('030414','Apurímac','1','Aymaraes','Tapairihua'),('030415','Apurímac','1','Aymaraes','Tintay'),('030416','Apurímac','1','Aymaraes','Toraya'),('030417','Apurímac','1','Aymaraes','Yanaca'),('030500','Apurímac','1','Cotabambas',NULL),('030501','Apurímac','1','Cotabambas','Tambobamba'),('030502','Apurímac','1','Cotabambas','Cotabambas'),('030503','Apurímac','1','Cotabambas','Coyllurqui'),('030504','Apurímac','1','Cotabambas','Haquira'),('030505','Apurímac','1','Cotabambas','Mara'),('030506','Apurímac','1','Cotabambas','Challhuahuacho'),('030600','Apurímac','1','Chincheros',NULL),('030601','Apurímac','1','Chincheros','Chincheros'),('030602','Apurímac','1','Chincheros','Anco_Huallo'),('030603','Apurímac','1','Chincheros','Cocharcas'),('030604','Apurímac','1','Chincheros','Huaccana'),('030605','Apurímac','1','Chincheros','Ocobamba'),('030606','Apurímac','1','Chincheros','Ongoy'),('030607','Apurímac','1','Chincheros','Uranmarca'),('030608','Apurímac','1','Chincheros','Ranracancha'),('030700','Apurímac','1','Grau',NULL),('030701','Apurímac','1','Grau','Chuquibambilla'),('030702','Apurímac','1','Grau','Curpahuasi'),('030703','Apurímac','1','Grau','Gamarra'),('030704','Apurímac','1','Grau','Huayllati'),('030705','Apurímac','1','Grau','Mamara'),('030706','Apurímac','1','Grau','Micaela Bastidas'),('030707','Apurímac','1','Grau','Pataypampa'),('030708','Apurímac','1','Grau','Progreso'),('030709','Apurímac','1','Grau','San Antonio'),('030710','Apurímac','1','Grau','Santa Rosa'),('030711','Apurímac','1','Grau','Turpay'),('030712','Apurímac','1','Grau','Vilcabamba'),('030713','Apurímac','1','Grau','Virundo'),('030714','Apurímac','1','Grau','Curasco'),('040000','Arequipa','1',NULL,NULL),('040100','Arequipa','1','Arequipa',NULL),('040101','Arequipa','1','Arequipa','Arequipa'),('040102','Arequipa','1','Arequipa','Alto Selva Alegre'),('040103','Arequipa','1','Arequipa','Cayma'),('040104','Arequipa','1','Arequipa','Cerro Colorado'),('040105','Arequipa','1','Arequipa','Characato'),('040106','Arequipa','1','Arequipa','Chiguata'),('040107','Arequipa','1','Arequipa','Jacobo Hunter'),('040108','Arequipa','1','Arequipa','La Joya'),('040109','Arequipa','1','Arequipa','Mariano Melgar'),('040110','Arequipa','1','Arequipa','Miraflores'),('040111','Arequipa','1','Arequipa','Mollebaya'),('040112','Arequipa','1','Arequipa','Paucarpata'),('040113','Arequipa','1','Arequipa','Pocsi'),('040114','Arequipa','1','Arequipa','Polobaya'),('040115','Arequipa','1','Arequipa','Quequeña'),('040116','Arequipa','1','Arequipa','Sabandia'),('040117','Arequipa','1','Arequipa','Sachaca'),('040118','Arequipa','1','Arequipa','San Juan de Siguas'),('040119','Arequipa','1','Arequipa','San Juan de Tarucani'),('040120','Arequipa','1','Arequipa','Santa Isabel de Siguas'),('040121','Arequipa','1','Arequipa','Santa Rita de Siguas'),('040122','Arequipa','1','Arequipa','Socabaya'),('040123','Arequipa','1','Arequipa','Tiabaya'),('040124','Arequipa','1','Arequipa','Uchumayo'),('040125','Arequipa','1','Arequipa','Vitor'),('040126','Arequipa','1','Arequipa','Yanahuara'),('040127','Arequipa','1','Arequipa','Yarabamba'),('040128','Arequipa','1','Arequipa','Yura'),('040129','Arequipa','1','Arequipa','José Luis Bustamante Y Rivero'),('040200','Arequipa','1','Camaná',NULL),('040201','Arequipa','1','Camaná','Camaná'),('040202','Arequipa','1','Camaná','José María Quimper'),('040203','Arequipa','1','Camaná','Mariano Nicolás Valcárcel'),('040204','Arequipa','1','Camaná','Mariscal Cáceres'),('040205','Arequipa','1','Camaná','Nicolás de Pierola'),('040206','Arequipa','1','Camaná','Ocoña'),('040207','Arequipa','1','Camaná','Quilca'),('040208','Arequipa','1','Camaná','Samuel Pastor'),('040300','Arequipa','1','Caravelí',NULL),('040301','Arequipa','1','Caravelí','Caravelí'),('040302','Arequipa','1','Caravelí','Acarí'),('040303','Arequipa','1','Caravelí','Atico'),('040304','Arequipa','1','Caravelí','Atiquipa'),('040305','Arequipa','1','Caravelí','Bella Unión'),('040306','Arequipa','1','Caravelí','Cahuacho'),('040307','Arequipa','1','Caravelí','Chala'),('040308','Arequipa','1','Caravelí','Chaparra'),('040309','Arequipa','1','Caravelí','Huanuhuanu'),('040310','Arequipa','1','Caravelí','Jaqui'),('040311','Arequipa','1','Caravelí','Lomas'),('040312','Arequipa','1','Caravelí','Quicacha'),('040313','Arequipa','1','Caravelí','Yauca'),('040400','Arequipa','1','Castilla',NULL),('040401','Arequipa','1','Castilla','Aplao'),('040402','Arequipa','1','Castilla','Andagua'),('040403','Arequipa','1','Castilla','Ayo'),('040404','Arequipa','1','Castilla','Chachas'),('040405','Arequipa','1','Castilla','Chilcaymarca'),('040406','Arequipa','1','Castilla','Choco'),('040407','Arequipa','1','Castilla','Huancarqui'),('040408','Arequipa','1','Castilla','Machaguay'),('040409','Arequipa','1','Castilla','Orcopampa'),('040410','Arequipa','1','Castilla','Pampacolca'),('040411','Arequipa','1','Castilla','Tipan'),('040412','Arequipa','1','Castilla','Uñon'),('040413','Arequipa','1','Castilla','Uraca'),('040414','Arequipa','1','Castilla','Viraco'),('040500','Arequipa','1','Caylloma',NULL),('040501','Arequipa','1','Caylloma','Chivay'),('040502','Arequipa','1','Caylloma','Achoma'),('040503','Arequipa','1','Caylloma','Cabanaconde'),('040504','Arequipa','1','Caylloma','Callalli'),('040505','Arequipa','1','Caylloma','Caylloma'),('040506','Arequipa','1','Caylloma','Coporaque'),('040507','Arequipa','1','Caylloma','Huambo'),('040508','Arequipa','1','Caylloma','Huanca'),('040509','Arequipa','1','Caylloma','Ichupampa'),('040510','Arequipa','1','Caylloma','Lari'),('040511','Arequipa','1','Caylloma','Lluta'),('040512','Arequipa','1','Caylloma','Maca'),('040513','Arequipa','1','Caylloma','Madrigal'),('040514','Arequipa','1','Caylloma','San Antonio de Chuca'),('040515','Arequipa','1','Caylloma','Sibayo'),('040516','Arequipa','1','Caylloma','Tapay'),('040517','Arequipa','1','Caylloma','Tisco'),('040518','Arequipa','1','Caylloma','Tuti'),('040519','Arequipa','1','Caylloma','Yanque'),('040520','Arequipa','1','Caylloma','Majes'),('040600','Arequipa','1','Condesuyos',NULL),('040601','Arequipa','1','Condesuyos','Chuquibamba'),('040602','Arequipa','1','Condesuyos','Andaray'),('040603','Arequipa','1','Condesuyos','Cayarani'),('040604','Arequipa','1','Condesuyos','Chichas'),('040605','Arequipa','1','Condesuyos','Iray'),('040606','Arequipa','1','Condesuyos','Río Grande'),('040607','Arequipa','1','Condesuyos','Salamanca'),('040608','Arequipa','1','Condesuyos','Yanaquihua'),('040700','Arequipa','1','Islay',NULL),('040701','Arequipa','1','Islay','Mollendo'),('040702','Arequipa','1','Islay','Cocachacra'),('040703','Arequipa','1','Islay','Dean Valdivia'),('040704','Arequipa','1','Islay','Islay'),('040705','Arequipa','1','Islay','Mejia'),('040706','Arequipa','1','Islay','Punta de Bombón'),('040800','Arequipa','1','La Uniòn',NULL),('040801','Arequipa','1','La Uniòn','Cotahuasi'),('040802','Arequipa','1','La Uniòn','Alca'),('040803','Arequipa','1','La Uniòn','Charcana'),('040804','Arequipa','1','La Uniòn','Huaynacotas'),('040805','Arequipa','1','La Uniòn','Pampamarca'),('040806','Arequipa','1','La Uniòn','Puyca'),('040807','Arequipa','1','La Uniòn','Quechualla'),('040808','Arequipa','1','La Uniòn','Sayla'),('040809','Arequipa','1','La Uniòn','Tauria'),('040810','Arequipa','1','La Uniòn','Tomepampa'),('040811','Arequipa','1','La Uniòn','Toro'),('050000','Ayacucho','1',NULL,NULL),('050100','Ayacucho','1','Huamanga',NULL),('050101','Ayacucho','1','Huamanga','Ayacucho'),('050102','Ayacucho','1','Huamanga','Acocro'),('050103','Ayacucho','1','Huamanga','Acos Vinchos'),('050104','Ayacucho','1','Huamanga','Carmen Alto'),('050105','Ayacucho','1','Huamanga','Chiara'),('050106','Ayacucho','1','Huamanga','Ocros'),('050107','Ayacucho','1','Huamanga','Pacaycasa'),('050108','Ayacucho','1','Huamanga','Quinua'),('050109','Ayacucho','1','Huamanga','San José de Ticllas'),('050110','Ayacucho','1','Huamanga','San Juan Bautista'),('050111','Ayacucho','1','Huamanga','Santiago de Pischa'),('050112','Ayacucho','1','Huamanga','Socos'),('050113','Ayacucho','1','Huamanga','Tambillo'),('050114','Ayacucho','1','Huamanga','Vinchos'),('050115','Ayacucho','1','Huamanga','Jesús Nazareno'),('050116','Ayacucho','1','Huamanga','Andrés Avelino Cáceres Dorregaray'),('050200','Ayacucho','1','Cangallo',NULL),('050201','Ayacucho','1','Cangallo','Cangallo'),('050202','Ayacucho','1','Cangallo','Chuschi'),('050203','Ayacucho','1','Cangallo','Los Morochucos'),('050204','Ayacucho','1','Cangallo','María Parado de Bellido'),('050205','Ayacucho','1','Cangallo','Paras'),('050206','Ayacucho','1','Cangallo','Totos'),('050300','Ayacucho','1','Huanca Sancos',NULL),('050301','Ayacucho','1','Huanca Sancos','Sancos'),('050302','Ayacucho','1','Huanca Sancos','Carapo'),('050303','Ayacucho','1','Huanca Sancos','Sacsamarca'),('050304','Ayacucho','1','Huanca Sancos','Santiago de Lucanamarca'),('050400','Ayacucho','1','Huanta',NULL),('050401','Ayacucho','1','Huanta','Huanta'),('050402','Ayacucho','1','Huanta','Ayahuanco'),('050403','Ayacucho','1','Huanta','Huamanguilla'),('050404','Ayacucho','1','Huanta','Iguain'),('050405','Ayacucho','1','Huanta','Luricocha'),('050406','Ayacucho','1','Huanta','Santillana'),('050407','Ayacucho','1','Huanta','Sivia'),('050408','Ayacucho','1','Huanta','Llochegua'),('050409','Ayacucho','1','Huanta','Canayre'),('050410','Ayacucho','1','Huanta','Uchuraccay'),('050411','Ayacucho','1','Huanta','Pucacolpa'),('050500','Ayacucho','1','La Mar',NULL),('050501','Ayacucho','1','La Mar','San Miguel'),('050502','Ayacucho','1','La Mar','Anco'),('050503','Ayacucho','1','La Mar','Ayna'),('050504','Ayacucho','1','La Mar','Chilcas'),('050505','Ayacucho','1','La Mar','Chungui'),('050506','Ayacucho','1','La Mar','Luis Carranza'),('050507','Ayacucho','1','La Mar','Santa Rosa'),('050508','Ayacucho','1','La Mar','Tambo'),('050509','Ayacucho','1','La Mar','Samugari'),('050510','Ayacucho','1','La Mar','Anchihuay'),('050600','Ayacucho','1','Lucanas',NULL),('050601','Ayacucho','1','Lucanas','Puquio'),('050602','Ayacucho','1','Lucanas','Aucara'),('050603','Ayacucho','1','Lucanas','Cabana'),('050604','Ayacucho','1','Lucanas','Carmen Salcedo'),('050605','Ayacucho','1','Lucanas','Chaviña'),('050606','Ayacucho','1','Lucanas','Chipao'),('050607','Ayacucho','1','Lucanas','Huac-Huas'),('050608','Ayacucho','1','Lucanas','Laramate'),('050609','Ayacucho','1','Lucanas','Leoncio Prado'),('050610','Ayacucho','1','Lucanas','Llauta'),('050611','Ayacucho','1','Lucanas','Lucanas'),('050612','Ayacucho','1','Lucanas','Ocaña'),('050613','Ayacucho','1','Lucanas','Otoca'),('050614','Ayacucho','1','Lucanas','Saisa'),('050615','Ayacucho','1','Lucanas','San Cristóbal'),('050616','Ayacucho','1','Lucanas','San Juan'),('050617','Ayacucho','1','Lucanas','San Pedro'),('050618','Ayacucho','1','Lucanas','San Pedro de Palco'),('050619','Ayacucho','1','Lucanas','Sancos'),('050620','Ayacucho','1','Lucanas','Santa Ana de Huaycahuacho'),('050621','Ayacucho','1','Lucanas','Santa Lucia'),('050700','Ayacucho','1','Parinacochas',NULL),('050701','Ayacucho','1','Parinacochas','Coracora'),('050702','Ayacucho','1','Parinacochas','Chumpi'),('050703','Ayacucho','1','Parinacochas','Coronel Castañeda'),('050704','Ayacucho','1','Parinacochas','Pacapausa'),('050705','Ayacucho','1','Parinacochas','Pullo'),('050706','Ayacucho','1','Parinacochas','Puyusca'),('050707','Ayacucho','1','Parinacochas','San Francisco de Ravacayco'),('050708','Ayacucho','1','Parinacochas','Upahuacho'),('050800','Ayacucho','1','Pàucar del Sara Sara',NULL),('050801','Ayacucho','1','Pàucar del Sara Sara','Pausa'),('050802','Ayacucho','1','Pàucar del Sara Sara','Colta'),('050803','Ayacucho','1','Pàucar del Sara Sara','Corculla'),('050804','Ayacucho','1','Pàucar del Sara Sara','Lampa'),('050805','Ayacucho','1','Pàucar del Sara Sara','Marcabamba'),('050806','Ayacucho','1','Pàucar del Sara Sara','Oyolo'),('050807','Ayacucho','1','Pàucar del Sara Sara','Pararca'),('050808','Ayacucho','1','Pàucar del Sara Sara','San Javier de Alpabamba'),('050809','Ayacucho','1','Pàucar del Sara Sara','San José de Ushua'),('050810','Ayacucho','1','Pàucar del Sara Sara','Sara Sara'),('050900','Ayacucho','1','Sucre',NULL),('050901','Ayacucho','1','Sucre','Querobamba'),('050902','Ayacucho','1','Sucre','Belén'),('050903','Ayacucho','1','Sucre','Chalcos'),('050904','Ayacucho','1','Sucre','Chilcayoc'),('050905','Ayacucho','1','Sucre','Huacaña'),('050906','Ayacucho','1','Sucre','Morcolla'),('050907','Ayacucho','1','Sucre','Paico'),('050908','Ayacucho','1','Sucre','San Pedro de Larcay'),('050909','Ayacucho','1','Sucre','San Salvador de Quije'),('050910','Ayacucho','1','Sucre','Santiago de Paucaray'),('050911','Ayacucho','1','Sucre','Soras'),('051000','Ayacucho','1','Víctor Fajardo',NULL),('051001','Ayacucho','1','Víctor Fajardo','Huancapi'),('051002','Ayacucho','1','Víctor Fajardo','Alcamenca'),('051003','Ayacucho','1','Víctor Fajardo','Apongo'),('051004','Ayacucho','1','Víctor Fajardo','Asquipata'),('051005','Ayacucho','1','Víctor Fajardo','Canaria'),('051006','Ayacucho','1','Víctor Fajardo','Cayara'),('051007','Ayacucho','1','Víctor Fajardo','Colca'),('051008','Ayacucho','1','Víctor Fajardo','Huamanquiquia'),('051009','Ayacucho','1','Víctor Fajardo','Huancaraylla'),('051010','Ayacucho','1','Víctor Fajardo','Huaya'),('051011','Ayacucho','1','Víctor Fajardo','Sarhua'),('051012','Ayacucho','1','Víctor Fajardo','Vilcanchos'),('051100','Ayacucho','1','Vilcas Huamán',NULL),('051101','Ayacucho','1','Vilcas Huamán','Vilcas Huaman'),('051102','Ayacucho','1','Vilcas Huamán','Accomarca'),('051103','Ayacucho','1','Vilcas Huamán','Carhuanca'),('051104','Ayacucho','1','Vilcas Huamán','Concepción'),('051105','Ayacucho','1','Vilcas Huamán','Huambalpa'),('051106','Ayacucho','1','Vilcas Huamán','Independencia'),('051107','Ayacucho','1','Vilcas Huamán','Saurama'),('051108','Ayacucho','1','Vilcas Huamán','Vischongo'),('060000','Cajamarca','1',NULL,NULL),('060100','Cajamarca','1','Cajamarca',NULL),('060101','Cajamarca','1','Cajamarca','Cajamarca'),('060102','Cajamarca','1','Cajamarca','Asunción'),('060103','Cajamarca','1','Cajamarca','Chetilla'),('060104','Cajamarca','1','Cajamarca','Cospan'),('060105','Cajamarca','1','Cajamarca','Encañada'),('060106','Cajamarca','1','Cajamarca','Jesús'),('060107','Cajamarca','1','Cajamarca','Llacanora'),('060108','Cajamarca','1','Cajamarca','Los Baños del Inca'),('060109','Cajamarca','1','Cajamarca','Magdalena'),('060110','Cajamarca','1','Cajamarca','Matara'),('060111','Cajamarca','1','Cajamarca','Namora'),('060112','Cajamarca','1','Cajamarca','San Juan'),('060200','Cajamarca','1','Cajabamba',NULL),('060201','Cajamarca','1','Cajabamba','Cajabamba'),('060202','Cajamarca','1','Cajabamba','Cachachi'),('060203','Cajamarca','1','Cajabamba','Condebamba'),('060204','Cajamarca','1','Cajabamba','Sitacocha'),('060300','Cajamarca','1','Celendín',NULL),('060301','Cajamarca','1','Celendín','Celendín'),('060302','Cajamarca','1','Celendín','Chumuch'),('060303','Cajamarca','1','Celendín','Cortegana'),('060304','Cajamarca','1','Celendín','Huasmin'),('060305','Cajamarca','1','Celendín','Jorge Chávez'),('060306','Cajamarca','1','Celendín','José Gálvez'),('060307','Cajamarca','1','Celendín','Miguel Iglesias'),('060308','Cajamarca','1','Celendín','Oxamarca'),('060309','Cajamarca','1','Celendín','Sorochuco'),('060310','Cajamarca','1','Celendín','Sucre'),('060311','Cajamarca','1','Celendín','Utco'),('060312','Cajamarca','1','Celendín','La Libertad de Pallan'),('060400','Cajamarca','1','Chota',NULL),('060401','Cajamarca','1','Chota','Chota'),('060402','Cajamarca','1','Chota','Anguia'),('060403','Cajamarca','1','Chota','Chadin'),('060404','Cajamarca','1','Chota','Chiguirip'),('060405','Cajamarca','1','Chota','Chimban'),('060406','Cajamarca','1','Chota','Choropampa'),('060407','Cajamarca','1','Chota','Cochabamba'),('060408','Cajamarca','1','Chota','Conchan'),('060409','Cajamarca','1','Chota','Huambos'),('060410','Cajamarca','1','Chota','Lajas'),('060411','Cajamarca','1','Chota','Llama'),('060412','Cajamarca','1','Chota','Miracosta'),('060413','Cajamarca','1','Chota','Paccha'),('060414','Cajamarca','1','Chota','Pion'),('060415','Cajamarca','1','Chota','Querocoto'),('060416','Cajamarca','1','Chota','San Juan de Licupis'),('060417','Cajamarca','1','Chota','Tacabamba'),('060418','Cajamarca','1','Chota','Tocmoche'),('060419','Cajamarca','1','Chota','Chalamarca'),('060500','Cajamarca','1','Contumazá',NULL),('060501','Cajamarca','1','Contumazá','Contumaza'),('060502','Cajamarca','1','Contumazá','Chilete'),('060503','Cajamarca','1','Contumazá','Cupisnique'),('060504','Cajamarca','1','Contumazá','Guzmango'),('060505','Cajamarca','1','Contumazá','San Benito'),('060506','Cajamarca','1','Contumazá','Santa Cruz de Toledo'),('060507','Cajamarca','1','Contumazá','Tantarica'),('060508','Cajamarca','1','Contumazá','Yonan'),('060600','Cajamarca','1','Cutervo',NULL),('060601','Cajamarca','1','Cutervo','Cutervo'),('060602','Cajamarca','1','Cutervo','Callayuc'),('060603','Cajamarca','1','Cutervo','Choros'),('060604','Cajamarca','1','Cutervo','Cujillo'),('060605','Cajamarca','1','Cutervo','La Ramada'),('060606','Cajamarca','1','Cutervo','Pimpingos'),('060607','Cajamarca','1','Cutervo','Querocotillo'),('060608','Cajamarca','1','Cutervo','San Andrés de Cutervo'),('060609','Cajamarca','1','Cutervo','San Juan de Cutervo'),('060610','Cajamarca','1','Cutervo','San Luis de Lucma'),('060611','Cajamarca','1','Cutervo','Santa Cruz'),('060612','Cajamarca','1','Cutervo','Santo Domingo de la Capilla'),('060613','Cajamarca','1','Cutervo','Santo Tomas'),('060614','Cajamarca','1','Cutervo','Socota'),('060615','Cajamarca','1','Cutervo','Toribio Casanova'),('060700','Cajamarca','1','Hualgayoc',NULL),('060701','Cajamarca','1','Hualgayoc','Bambamarca'),('060702','Cajamarca','1','Hualgayoc','Chugur'),('060703','Cajamarca','1','Hualgayoc','Hualgayoc'),('060800','Cajamarca','1','Jaén',NULL),('060801','Cajamarca','1','Jaén','Jaén'),('060802','Cajamarca','1','Jaén','Bellavista'),('060803','Cajamarca','1','Jaén','Chontali'),('060804','Cajamarca','1','Jaén','Colasay'),('060805','Cajamarca','1','Jaén','Huabal'),('060806','Cajamarca','1','Jaén','Las Pirias'),('060807','Cajamarca','1','Jaén','Pomahuaca'),('060808','Cajamarca','1','Jaén','Pucara'),('060809','Cajamarca','1','Jaén','Sallique'),('060810','Cajamarca','1','Jaén','San Felipe'),('060811','Cajamarca','1','Jaén','San José del Alto'),('060812','Cajamarca','1','Jaén','Santa Rosa'),('060900','Cajamarca','1','San Ignacio',NULL),('060901','Cajamarca','1','San Ignacio','San Ignacio'),('060902','Cajamarca','1','San Ignacio','Chirinos'),('060903','Cajamarca','1','San Ignacio','Huarango'),('060904','Cajamarca','1','San Ignacio','La Coipa'),('060905','Cajamarca','1','San Ignacio','Namballe'),('060906','Cajamarca','1','San Ignacio','San José de Lourdes'),('060907','Cajamarca','1','San Ignacio','Tabaconas'),('061000','Cajamarca','1','San Marcos',NULL),('061001','Cajamarca','1','San Marcos','Pedro Gálvez'),('061002','Cajamarca','1','San Marcos','Chancay'),('061003','Cajamarca','1','San Marcos','Eduardo Villanueva'),('061004','Cajamarca','1','San Marcos','Gregorio Pita'),('061005','Cajamarca','1','San Marcos','Ichocan'),('061006','Cajamarca','1','San Marcos','José Manuel Quiroz'),('061007','Cajamarca','1','San Marcos','José Sabogal'),('061100','Cajamarca','1','San Miguel',NULL),('061101','Cajamarca','1','San Miguel','San Miguel'),('061102','Cajamarca','1','San Miguel','Bolívar'),('061103','Cajamarca','1','San Miguel','Calquis'),('061104','Cajamarca','1','San Miguel','Catilluc'),('061105','Cajamarca','1','San Miguel','El Prado'),('061106','Cajamarca','1','San Miguel','La Florida'),('061107','Cajamarca','1','San Miguel','Llapa'),('061108','Cajamarca','1','San Miguel','Nanchoc'),('061109','Cajamarca','1','San Miguel','Niepos'),('061110','Cajamarca','1','San Miguel','San Gregorio'),('061111','Cajamarca','1','San Miguel','San Silvestre de Cochan'),('061112','Cajamarca','1','San Miguel','Tongod'),('061113','Cajamarca','1','San Miguel','Unión Agua Blanca'),('061200','Cajamarca','1','San Pablo',NULL),('061201','Cajamarca','1','San Pablo','San Pablo'),('061202','Cajamarca','1','San Pablo','San Bernardino'),('061203','Cajamarca','1','San Pablo','San Luis'),('061204','Cajamarca','1','San Pablo','Tumbaden'),('061300','Cajamarca','1','Santa Cruz',NULL),('061301','Cajamarca','1','Santa Cruz','Santa Cruz'),('061302','Cajamarca','1','Santa Cruz','Andabamba'),('061303','Cajamarca','1','Santa Cruz','Catache'),('061304','Cajamarca','1','Santa Cruz','Chancaybaños'),('061305','Cajamarca','1','Santa Cruz','La Esperanza'),('061306','Cajamarca','1','Santa Cruz','Ninabamba'),('061307','Cajamarca','1','Santa Cruz','Pulan'),('061308','Cajamarca','1','Santa Cruz','Saucepampa'),('061309','Cajamarca','1','Santa Cruz','Sexi'),('061310','Cajamarca','1','Santa Cruz','Uticyacu'),('061311','Cajamarca','1','Santa Cruz','Yauyucan'),('070000','Callao','1',NULL,NULL),('070100','Callao','1','Prov. Const. del Callao',NULL),('070101','Callao','1','Prov. Const. del Callao','Callao'),('070102','Callao','1','Prov. Const. del Callao','Bellavista'),('070103','Callao','1','Prov. Const. del Callao','Carmen de la Legua Reynoso'),('070104','Callao','1','Prov. Const. del Callao','La Perla'),('070105','Callao','1','Prov. Const. del Callao','La Punta'),('070106','Callao','1','Prov. Const. del Callao','Ventanilla'),('070107','Callao','1','Prov. Const. del Callao','Mi Perú'),('080000','Cusco','1',NULL,NULL),('080100','Cusco','1','Cusco',NULL),('080101','Cusco','1','Cusco','Cusco'),('080102','Cusco','1','Cusco','Ccorca'),('080103','Cusco','1','Cusco','Poroy'),('080104','Cusco','1','Cusco','San Jerónimo'),('080105','Cusco','1','Cusco','San Sebastian'),('080106','Cusco','1','Cusco','Santiago'),('080107','Cusco','1','Cusco','Saylla'),('080108','Cusco','1','Cusco','Wanchaq'),('080200','Cusco','1','Acomayo',NULL),('080201','Cusco','1','Acomayo','Acomayo'),('080202','Cusco','1','Acomayo','Acopia'),('080203','Cusco','1','Acomayo','Acos'),('080204','Cusco','1','Acomayo','Mosoc Llacta'),('080205','Cusco','1','Acomayo','Pomacanchi'),('080206','Cusco','1','Acomayo','Rondocan'),('080207','Cusco','1','Acomayo','Sangarara'),('080300','Cusco','1','Anta',NULL),('080301','Cusco','1','Anta','Anta'),('080302','Cusco','1','Anta','Ancahuasi'),('080303','Cusco','1','Anta','Cachimayo'),('080304','Cusco','1','Anta','Chinchaypujio'),('080305','Cusco','1','Anta','Huarocondo'),('080306','Cusco','1','Anta','Limatambo'),('080307','Cusco','1','Anta','Mollepata'),('080308','Cusco','1','Anta','Pucyura'),('080309','Cusco','1','Anta','Zurite'),('080400','Cusco','1','Calca',NULL),('080401','Cusco','1','Calca','Calca'),('080402','Cusco','1','Calca','Coya'),('080403','Cusco','1','Calca','Lamay'),('080404','Cusco','1','Calca','Lares'),('080405','Cusco','1','Calca','Pisac'),('080406','Cusco','1','Calca','San Salvador'),('080407','Cusco','1','Calca','Taray'),('080408','Cusco','1','Calca','Yanatile'),('080500','Cusco','1','Canas',NULL),('080501','Cusco','1','Canas','Yanaoca'),('080502','Cusco','1','Canas','Checca'),('080503','Cusco','1','Canas','Kunturkanki'),('080504','Cusco','1','Canas','Langui'),('080505','Cusco','1','Canas','Layo'),('080506','Cusco','1','Canas','Pampamarca'),('080507','Cusco','1','Canas','Quehue'),('080508','Cusco','1','Canas','Tupac Amaru'),('080600','Cusco','1','Canchis',NULL),('080601','Cusco','1','Canchis','Sicuani'),('080602','Cusco','1','Canchis','Checacupe'),('080603','Cusco','1','Canchis','Combapata'),('080604','Cusco','1','Canchis','Marangani'),('080605','Cusco','1','Canchis','Pitumarca'),('080606','Cusco','1','Canchis','San Pablo'),('080607','Cusco','1','Canchis','San Pedro'),('080608','Cusco','1','Canchis','Tinta'),('080700','Cusco','1','Chumbivilcas',NULL),('080701','Cusco','1','Chumbivilcas','Santo Tomas'),('080702','Cusco','1','Chumbivilcas','Capacmarca'),('080703','Cusco','1','Chumbivilcas','Chamaca'),('080704','Cusco','1','Chumbivilcas','Colquemarca'),('080705','Cusco','1','Chumbivilcas','Livitaca'),('080706','Cusco','1','Chumbivilcas','Llusco'),('080707','Cusco','1','Chumbivilcas','Quiñota'),('080708','Cusco','1','Chumbivilcas','Velille'),('080800','Cusco','1','Espinar',NULL),('080801','Cusco','1','Espinar','Espinar'),('080802','Cusco','1','Espinar','Condoroma'),('080803','Cusco','1','Espinar','Coporaque'),('080804','Cusco','1','Espinar','Ocoruro'),('080805','Cusco','1','Espinar','Pallpata'),('080806','Cusco','1','Espinar','Pichigua'),('080807','Cusco','1','Espinar','Suyckutambo'),('080808','Cusco','1','Espinar','Alto Pichigua'),('080900','Cusco','1','La Convención',NULL),('080901','Cusco','1','La Convención','Santa Ana'),('080902','Cusco','1','La Convención','Echarate'),('080903','Cusco','1','La Convención','Huayopata'),('080904','Cusco','1','La Convención','Maranura'),('080905','Cusco','1','La Convención','Ocobamba'),('080906','Cusco','1','La Convención','Quellouno'),('080907','Cusco','1','La Convención','Kimbiri'),('080908','Cusco','1','La Convención','Santa Teresa'),('080909','Cusco','1','La Convención','Vilcabamba'),('080910','Cusco','1','La Convención','Pichari'),('080911','Cusco','1','La Convención','Inkawasi'),('080912','Cusco','1','La Convención','Villa Virgen'),('080913','Cusco','1','La Convención','Villa Kintiarina'),('081000','Cusco','1','Paruro',NULL),('081001','Cusco','1','Paruro','Paruro'),('081002','Cusco','1','Paruro','Accha'),('081003','Cusco','1','Paruro','Ccapi'),('081004','Cusco','1','Paruro','Colcha'),('081005','Cusco','1','Paruro','Huanoquite'),('081006','Cusco','1','Paruro','Omacha'),('081007','Cusco','1','Paruro','Paccaritambo'),('081008','Cusco','1','Paruro','Pillpinto'),('081009','Cusco','1','Paruro','Yaurisque'),('081100','Cusco','1','Paucartambo',NULL),('081101','Cusco','1','Paucartambo','Paucartambo'),('081102','Cusco','1','Paucartambo','Caicay'),('081103','Cusco','1','Paucartambo','Challabamba'),('081104','Cusco','1','Paucartambo','Colquepata'),('081105','Cusco','1','Paucartambo','Huancarani'),('081106','Cusco','1','Paucartambo','Kosñipata'),('081200','Cusco','1','Quispicanchi',NULL),('081201','Cusco','1','Quispicanchi','Urcos'),('081202','Cusco','1','Quispicanchi','Andahuaylillas'),('081203','Cusco','1','Quispicanchi','Camanti'),('081204','Cusco','1','Quispicanchi','Ccarhuayo'),('081205','Cusco','1','Quispicanchi','Ccatca'),('081206','Cusco','1','Quispicanchi','Cusipata'),('081207','Cusco','1','Quispicanchi','Huaro'),('081208','Cusco','1','Quispicanchi','Lucre'),('081209','Cusco','1','Quispicanchi','Marcapata'),('081210','Cusco','1','Quispicanchi','Ocongate'),('081211','Cusco','1','Quispicanchi','Oropesa'),('081212','Cusco','1','Quispicanchi','Quiquijana'),('081300','Cusco','1','Urubamba',NULL),('081301','Cusco','1','Urubamba','Urubamba'),('081302','Cusco','1','Urubamba','Chinchero'),('081303','Cusco','1','Urubamba','Huayllabamba'),('081304','Cusco','1','Urubamba','Machupicchu'),('081305','Cusco','1','Urubamba','Maras'),('081306','Cusco','1','Urubamba','Ollantaytambo'),('081307','Cusco','1','Urubamba','Yucay'),('090000','Huancavelica','1',NULL,NULL),('090100','Huancavelica','1','Huancavelica',NULL),('090101','Huancavelica','1','Huancavelica','Huancavelica'),('090102','Huancavelica','1','Huancavelica','Acobambilla'),('090103','Huancavelica','1','Huancavelica','Acoria'),('090104','Huancavelica','1','Huancavelica','Conayca'),('090105','Huancavelica','1','Huancavelica','Cuenca'),('090106','Huancavelica','1','Huancavelica','Huachocolpa'),('090107','Huancavelica','1','Huancavelica','Huayllahuara'),('090108','Huancavelica','1','Huancavelica','Izcuchaca'),('090109','Huancavelica','1','Huancavelica','Laria'),('090110','Huancavelica','1','Huancavelica','Manta'),('090111','Huancavelica','1','Huancavelica','Mariscal Cáceres'),('090112','Huancavelica','1','Huancavelica','Moya'),('090113','Huancavelica','1','Huancavelica','Nuevo Occoro'),('090114','Huancavelica','1','Huancavelica','Palca'),('090115','Huancavelica','1','Huancavelica','Pilchaca'),('090116','Huancavelica','1','Huancavelica','Vilca'),('090117','Huancavelica','1','Huancavelica','Yauli'),('090118','Huancavelica','1','Huancavelica','Ascensión'),('090119','Huancavelica','1','Huancavelica','Huando'),('090200','Huancavelica','1','Acobamba',NULL),('090201','Huancavelica','1','Acobamba','Acobamba'),('090202','Huancavelica','1','Acobamba','Andabamba'),('090203','Huancavelica','1','Acobamba','Anta'),('090204','Huancavelica','1','Acobamba','Caja'),('090205','Huancavelica','1','Acobamba','Marcas'),('090206','Huancavelica','1','Acobamba','Paucara'),('090207','Huancavelica','1','Acobamba','Pomacocha'),('090208','Huancavelica','1','Acobamba','Rosario'),('090300','Huancavelica','1','Angaraes',NULL),('090301','Huancavelica','1','Angaraes','Lircay'),('090302','Huancavelica','1','Angaraes','Anchonga'),('090303','Huancavelica','1','Angaraes','Callanmarca'),('090304','Huancavelica','1','Angaraes','Ccochaccasa'),('090305','Huancavelica','1','Angaraes','Chincho'),('090306','Huancavelica','1','Angaraes','Congalla'),('090307','Huancavelica','1','Angaraes','Huanca-Huanca'),('090308','Huancavelica','1','Angaraes','Huayllay Grande'),('090309','Huancavelica','1','Angaraes','Julcamarca'),('090310','Huancavelica','1','Angaraes','San Antonio de Antaparco'),('090311','Huancavelica','1','Angaraes','Santo Tomas de Pata'),('090312','Huancavelica','1','Angaraes','Secclla'),('090400','Huancavelica','1','Castrovirreyna',NULL),('090401','Huancavelica','1','Castrovirreyna','Castrovirreyna'),('090402','Huancavelica','1','Castrovirreyna','Arma'),('090403','Huancavelica','1','Castrovirreyna','Aurahua'),('090404','Huancavelica','1','Castrovirreyna','Capillas'),('090405','Huancavelica','1','Castrovirreyna','Chupamarca'),('090406','Huancavelica','1','Castrovirreyna','Cocas'),('090407','Huancavelica','1','Castrovirreyna','Huachos'),('090408','Huancavelica','1','Castrovirreyna','Huamatambo'),('090409','Huancavelica','1','Castrovirreyna','Mollepampa'),('090410','Huancavelica','1','Castrovirreyna','San Juan'),('090411','Huancavelica','1','Castrovirreyna','Santa Ana'),('090412','Huancavelica','1','Castrovirreyna','Tantara'),('090413','Huancavelica','1','Castrovirreyna','Ticrapo'),('090500','Huancavelica','1','Churcampa',NULL),('090501','Huancavelica','1','Churcampa','Churcampa'),('090502','Huancavelica','1','Churcampa','Anco'),('090503','Huancavelica','1','Churcampa','Chinchihuasi'),('090504','Huancavelica','1','Churcampa','El Carmen'),('090505','Huancavelica','1','Churcampa','La Merced'),('090506','Huancavelica','1','Churcampa','Locroja'),('090507','Huancavelica','1','Churcampa','Paucarbamba'),('090508','Huancavelica','1','Churcampa','San Miguel de Mayocc'),('090509','Huancavelica','1','Churcampa','San Pedro de Coris'),('090510','Huancavelica','1','Churcampa','Pachamarca'),('090511','Huancavelica','1','Churcampa','Cosme'),('090600','Huancavelica','1','Huaytará',NULL),('090601','Huancavelica','1','Huaytará','Huaytara'),('090602','Huancavelica','1','Huaytará','Ayavi'),('090603','Huancavelica','1','Huaytará','Córdova'),('090604','Huancavelica','1','Huaytará','Huayacundo Arma'),('090605','Huancavelica','1','Huaytará','Laramarca'),('090606','Huancavelica','1','Huaytará','Ocoyo'),('090607','Huancavelica','1','Huaytará','Pilpichaca'),('090608','Huancavelica','1','Huaytará','Querco'),('090609','Huancavelica','1','Huaytará','Quito-Arma'),('090610','Huancavelica','1','Huaytará','San Antonio de Cusicancha'),('090611','Huancavelica','1','Huaytará','San Francisco de Sangayaico'),('090612','Huancavelica','1','Huaytará','San Isidro'),('090613','Huancavelica','1','Huaytará','Santiago de Chocorvos'),('090614','Huancavelica','1','Huaytará','Santiago de Quirahuara'),('090615','Huancavelica','1','Huaytará','Santo Domingo de Capillas'),('090616','Huancavelica','1','Huaytará','Tambo'),('090700','Huancavelica','1','Tayacaja',NULL),('090701','Huancavelica','1','Tayacaja','Pampas'),('090702','Huancavelica','1','Tayacaja','Acostambo'),('090703','Huancavelica','1','Tayacaja','Acraquia'),('090704','Huancavelica','1','Tayacaja','Ahuaycha'),('090705','Huancavelica','1','Tayacaja','Colcabamba'),('090706','Huancavelica','1','Tayacaja','Daniel Hernández'),('090707','Huancavelica','1','Tayacaja','Huachocolpa'),('090709','Huancavelica','1','Tayacaja','Huaribamba'),('090710','Huancavelica','1','Tayacaja','Ñahuimpuquio'),('090711','Huancavelica','1','Tayacaja','Pazos'),('090713','Huancavelica','1','Tayacaja','Quishuar'),('090714','Huancavelica','1','Tayacaja','Salcabamba'),('090715','Huancavelica','1','Tayacaja','Salcahuasi'),('090716','Huancavelica','1','Tayacaja','San Marcos de Rocchac'),('090717','Huancavelica','1','Tayacaja','Surcubamba'),('090718','Huancavelica','1','Tayacaja','Tintay Puncu'),('090719','Huancavelica','1','Tayacaja','Quichuas'),('090720','Huancavelica','1','Tayacaja','Andaymarca'),('100000','Huánuco','1',NULL,NULL),('100100','Huánuco','1','Huánuco',NULL),('100101','Huánuco','1','Huánuco','Huanuco'),('100102','Huánuco','1','Huánuco','Amarilis'),('100103','Huánuco','1','Huánuco','Chinchao'),('100104','Huánuco','1','Huánuco','Churubamba'),('100105','Huánuco','1','Huánuco','Margos'),('100106','Huánuco','1','Huánuco','Quisqui (Kichki)'),('100107','Huánuco','1','Huánuco','San Francisco de Cayran'),('100108','Huánuco','1','Huánuco','San Pedro de Chaulan'),('100109','Huánuco','1','Huánuco','Santa María del Valle'),('100110','Huánuco','1','Huánuco','Yarumayo'),('100111','Huánuco','1','Huánuco','Pillco Marca'),('100112','Huánuco','1','Huánuco','Yacus'),('100200','Huánuco','1','Ambo',NULL),('100201','Huánuco','1','Ambo','Ambo'),('100202','Huánuco','1','Ambo','Cayna'),('100203','Huánuco','1','Ambo','Colpas'),('100204','Huánuco','1','Ambo','Conchamarca'),('100205','Huánuco','1','Ambo','Huacar'),('100206','Huánuco','1','Ambo','San Francisco'),('100207','Huánuco','1','Ambo','San Rafael'),('100208','Huánuco','1','Ambo','Tomay Kichwa'),('100300','Huánuco','1','Dos de Mayo',NULL),('100301','Huánuco','1','Dos de Mayo','La Unión'),('100307','Huánuco','1','Dos de Mayo','Chuquis'),('100311','Huánuco','1','Dos de Mayo','Marías'),('100313','Huánuco','1','Dos de Mayo','Pachas'),('100316','Huánuco','1','Dos de Mayo','Quivilla'),('100317','Huánuco','1','Dos de Mayo','Ripan'),('100321','Huánuco','1','Dos de Mayo','Shunqui'),('100322','Huánuco','1','Dos de Mayo','Sillapata'),('100323','Huánuco','1','Dos de Mayo','Yanas'),('100400','Huánuco','1','Huacaybamba',NULL),('100401','Huánuco','1','Huacaybamba','Huacaybamba'),('100402','Huánuco','1','Huacaybamba','Canchabamba'),('100403','Huánuco','1','Huacaybamba','Cochabamba'),('100404','Huánuco','1','Huacaybamba','Pinra'),('100500','Huánuco','1','Huamalíes',NULL),('100501','Huánuco','1','Huamalíes','Llata'),('100502','Huánuco','1','Huamalíes','Arancay'),('100503','Huánuco','1','Huamalíes','Chavín de Pariarca'),('100504','Huánuco','1','Huamalíes','Jacas Grande'),('100505','Huánuco','1','Huamalíes','Jircan'),('100506','Huánuco','1','Huamalíes','Miraflores'),('100507','Huánuco','1','Huamalíes','Monzón'),('100508','Huánuco','1','Huamalíes','Punchao'),('100509','Huánuco','1','Huamalíes','Puños'),('100510','Huánuco','1','Huamalíes','Singa'),('100511','Huánuco','1','Huamalíes','Tantamayo'),('100600','Huánuco','1','Leoncio Prado',NULL),('100601','Huánuco','1','Leoncio Prado','Rupa-Rupa'),('100602','Huánuco','1','Leoncio Prado','Daniel Alomía Robles'),('100603','Huánuco','1','Leoncio Prado','Hermílio Valdizan'),('100604','Huánuco','1','Leoncio Prado','José Crespo y Castillo'),('100605','Huánuco','1','Leoncio Prado','Luyando'),('100606','Huánuco','1','Leoncio Prado','Mariano Damaso Beraun'),('100700','Huánuco','1','Marañón',NULL),('100701','Huánuco','1','Marañón','Huacrachuco'),('100702','Huánuco','1','Marañón','Cholon'),('100703','Huánuco','1','Marañón','San Buenaventura'),('100800','Huánuco','1','Pachitea',NULL),('100801','Huánuco','1','Pachitea','Panao'),('100802','Huánuco','1','Pachitea','Chaglla'),('100803','Huánuco','1','Pachitea','Molino'),('100804','Huánuco','1','Pachitea','Umari'),('100900','Huánuco','1','Puerto Inca',NULL),('100901','Huánuco','1','Puerto Inca','Puerto Inca'),('100902','Huánuco','1','Puerto Inca','Codo del Pozuzo'),('100903','Huánuco','1','Puerto Inca','Honoria'),('100904','Huánuco','1','Puerto Inca','Tournavista'),('100905','Huánuco','1','Puerto Inca','Yuyapichis'),('101000','Huánuco','1','Lauricocha ',NULL),('101001','Huánuco','1','Lauricocha ','Jesús'),('101002','Huánuco','1','Lauricocha ','Baños'),('101003','Huánuco','1','Lauricocha ','Jivia'),('101004','Huánuco','1','Lauricocha ','Queropalca'),('101005','Huánuco','1','Lauricocha ','Rondos'),('101006','Huánuco','1','Lauricocha ','San Francisco de Asís'),('101007','Huánuco','1','Lauricocha ','San Miguel de Cauri'),('101100','Huánuco','1','Yarowilca ',NULL),('101101','Huánuco','1','Yarowilca ','Chavinillo'),('101102','Huánuco','1','Yarowilca ','Cahuac'),('101103','Huánuco','1','Yarowilca ','Chacabamba'),('101104','Huánuco','1','Yarowilca ','Aparicio Pomares'),('101105','Huánuco','1','Yarowilca ','Jacas Chico'),('101106','Huánuco','1','Yarowilca ','Obas'),('101107','Huánuco','1','Yarowilca ','Pampamarca'),('101108','Huánuco','1','Yarowilca ','Choras'),('110000','Ica','1',NULL,NULL),('110100','Ica','1','Ica ',NULL),('110101','Ica','1','Ica ','Ica'),('110102','Ica','1','Ica ','La Tinguiña'),('110103','Ica','1','Ica ','Los Aquijes'),('110104','Ica','1','Ica ','Ocucaje'),('110105','Ica','1','Ica ','Pachacutec'),('110106','Ica','1','Ica ','Parcona'),('110107','Ica','1','Ica ','Pueblo Nuevo'),('110108','Ica','1','Ica ','Salas'),('110109','Ica','1','Ica ','San José de Los Molinos'),('110110','Ica','1','Ica ','San Juan Bautista'),('110111','Ica','1','Ica ','Santiago'),('110112','Ica','1','Ica ','Subtanjalla'),('110113','Ica','1','Ica ','Tate'),('110114','Ica','1','Ica ','Yauca del Rosario'),('110200','Ica','1','Chincha ',NULL),('110201','Ica','1','Chincha ','Chincha Alta'),('110202','Ica','1','Chincha ','Alto Laran'),('110203','Ica','1','Chincha ','Chavin'),('110204','Ica','1','Chincha ','Chincha Baja'),('110205','Ica','1','Chincha ','El Carmen'),('110206','Ica','1','Chincha ','Grocio Prado'),('110207','Ica','1','Chincha ','Pueblo Nuevo'),('110208','Ica','1','Chincha ','San Juan de Yanac'),('110209','Ica','1','Chincha ','San Pedro de Huacarpana'),('110210','Ica','1','Chincha ','Sunampe'),('110211','Ica','1','Chincha ','Tambo de Mora'),('110300','Ica','1','Nazca ',NULL),('110301','Ica','1','Nazca ','Nasca'),('110302','Ica','1','Nazca ','Changuillo'),('110303','Ica','1','Nazca ','El Ingenio'),('110304','Ica','1','Nazca ','Marcona'),('110305','Ica','1','Nazca ','Vista Alegre'),('110400','Ica','1','Palpa ',NULL),('110401','Ica','1','Palpa ','Palpa'),('110402','Ica','1','Palpa ','Llipata'),('110403','Ica','1','Palpa ','Río Grande'),('110404','Ica','1','Palpa ','Santa Cruz'),('110405','Ica','1','Palpa ','Tibillo'),('110500','Ica','1','Pisco ',NULL),('110501','Ica','1','Pisco ','Pisco'),('110502','Ica','1','Pisco ','Huancano'),('110503','Ica','1','Pisco ','Humay'),('110504','Ica','1','Pisco ','Independencia'),('110505','Ica','1','Pisco ','Paracas'),('110506','Ica','1','Pisco ','San Andrés'),('110507','Ica','1','Pisco ','San Clemente'),('110508','Ica','1','Pisco ','Tupac Amaru Inca'),('120000','Junín','1',NULL,NULL),('120100','Junín','1','Huancayo ',NULL),('120101','Junín','1','Huancayo ','Huancayo'),('120104','Junín','1','Huancayo ','Carhuacallanga'),('120105','Junín','1','Huancayo ','Chacapampa'),('120106','Junín','1','Huancayo ','Chicche'),('120107','Junín','1','Huancayo ','Chilca'),('120108','Junín','1','Huancayo ','Chongos Alto'),('120111','Junín','1','Huancayo ','Chupuro'),('120112','Junín','1','Huancayo ','Colca'),('120113','Junín','1','Huancayo ','Cullhuas'),('120114','Junín','1','Huancayo ','El Tambo'),('120116','Junín','1','Huancayo ','Huacrapuquio'),('120117','Junín','1','Huancayo ','Hualhuas'),('120119','Junín','1','Huancayo ','Huancan'),('120120','Junín','1','Huancayo ','Huasicancha'),('120121','Junín','1','Huancayo ','Huayucachi'),('120122','Junín','1','Huancayo ','Ingenio'),('120124','Junín','1','Huancayo ','Pariahuanca'),('120125','Junín','1','Huancayo ','Pilcomayo'),('120126','Junín','1','Huancayo ','Pucara'),('120127','Junín','1','Huancayo ','Quichuay'),('120128','Junín','1','Huancayo ','Quilcas'),('120129','Junín','1','Huancayo ','San Agustín'),('120130','Junín','1','Huancayo ','San Jerónimo de Tunan'),('120132','Junín','1','Huancayo ','Saño'),('120133','Junín','1','Huancayo ','Sapallanga'),('120134','Junín','1','Huancayo ','Sicaya'),('120135','Junín','1','Huancayo ','Santo Domingo de Acobamba'),('120136','Junín','1','Huancayo ','Viques'),('120200','Junín','1','Concepción ',NULL),('120201','Junín','1','Concepción ','Concepción'),('120202','Junín','1','Concepción ','Aco'),('120203','Junín','1','Concepción ','Andamarca'),('120204','Junín','1','Concepción ','Chambara'),('120205','Junín','1','Concepción ','Cochas'),('120206','Junín','1','Concepción ','Comas'),('120207','Junín','1','Concepción ','Heroínas Toledo'),('120208','Junín','1','Concepción ','Manzanares'),('120209','Junín','1','Concepción ','Mariscal Castilla'),('120210','Junín','1','Concepción ','Matahuasi'),('120211','Junín','1','Concepción ','Mito'),('120212','Junín','1','Concepción ','Nueve de Julio'),('120213','Junín','1','Concepción ','Orcotuna'),('120214','Junín','1','Concepción ','San José de Quero'),('120215','Junín','1','Concepción ','Santa Rosa de Ocopa'),('120300','Junín','1','Chanchamayo ',NULL),('120301','Junín','1','Chanchamayo ','Chanchamayo'),('120302','Junín','1','Chanchamayo ','Perene'),('120303','Junín','1','Chanchamayo ','Pichanaqui'),('120304','Junín','1','Chanchamayo ','San Luis de Shuaro'),('120305','Junín','1','Chanchamayo ','San Ramón'),('120306','Junín','1','Chanchamayo ','Vitoc'),('120400','Junín','1','Jauja ',NULL),('120401','Junín','1','Jauja ','Jauja'),('120402','Junín','1','Jauja ','Acolla'),('120403','Junín','1','Jauja ','Apata'),('120404','Junín','1','Jauja ','Ataura'),('120405','Junín','1','Jauja ','Canchayllo'),('120406','Junín','1','Jauja ','Curicaca'),('120407','Junín','1','Jauja ','El Mantaro'),('120408','Junín','1','Jauja ','Huamali'),('120409','Junín','1','Jauja ','Huaripampa'),('120410','Junín','1','Jauja ','Huertas'),('120411','Junín','1','Jauja ','Janjaillo'),('120412','Junín','1','Jauja ','Julcán'),('120413','Junín','1','Jauja ','Leonor Ordóñez'),('120414','Junín','1','Jauja ','Llocllapampa'),('120415','Junín','1','Jauja ','Marco'),('120416','Junín','1','Jauja ','Masma'),('120417','Junín','1','Jauja ','Masma Chicche'),('120418','Junín','1','Jauja ','Molinos'),('120419','Junín','1','Jauja ','Monobamba'),('120420','Junín','1','Jauja ','Muqui'),('120421','Junín','1','Jauja ','Muquiyauyo'),('120422','Junín','1','Jauja ','Paca'),('120423','Junín','1','Jauja ','Paccha'),('120424','Junín','1','Jauja ','Pancan'),('120425','Junín','1','Jauja ','Parco'),('120426','Junín','1','Jauja ','Pomacancha'),('120427','Junín','1','Jauja ','Ricran'),('120428','Junín','1','Jauja ','San Lorenzo'),('120429','Junín','1','Jauja ','San Pedro de Chunan'),('120430','Junín','1','Jauja ','Sausa'),('120431','Junín','1','Jauja ','Sincos'),('120432','Junín','1','Jauja ','Tunan Marca'),('120433','Junín','1','Jauja ','Yauli'),('120434','Junín','1','Jauja ','Yauyos'),('120500','Junín','1','Junín ',NULL),('120501','Junín','1','Junín ','Junin'),('120502','Junín','1','Junín ','Carhuamayo'),('120503','Junín','1','Junín ','Ondores'),('120504','Junín','1','Junín ','Ulcumayo'),('120600','Junín','1','Satipo ',NULL),('120601','Junín','1','Satipo ','Satipo'),('120602','Junín','1','Satipo ','Coviriali'),('120603','Junín','1','Satipo ','Llaylla'),('120604','Junín','1','Satipo ','Mazamari'),('120605','Junín','1','Satipo ','Pampa Hermosa'),('120606','Junín','1','Satipo ','Pangoa'),('120607','Junín','1','Satipo ','Río Negro'),('120608','Junín','1','Satipo ','Río Tambo'),('120609','Junín','1','Satipo ','Vizcatan del Ene'),('120700','Junín','1','Tarma ',NULL),('120701','Junín','1','Tarma ','Tarma'),('120702','Junín','1','Tarma ','Acobamba'),('120703','Junín','1','Tarma ','Huaricolca'),('120704','Junín','1','Tarma ','Huasahuasi'),('120705','Junín','1','Tarma ','La Unión'),('120706','Junín','1','Tarma ','Palca'),('120707','Junín','1','Tarma ','Palcamayo'),('120708','Junín','1','Tarma ','San Pedro de Cajas'),('120709','Junín','1','Tarma ','Tapo'),('120800','Junín','1','Yauli ',NULL),('120801','Junín','1','Yauli ','La Oroya'),('120802','Junín','1','Yauli ','Chacapalpa'),('120803','Junín','1','Yauli ','Huay-Huay'),('120804','Junín','1','Yauli ','Marcapomacocha'),('120805','Junín','1','Yauli ','Morococha'),('120806','Junín','1','Yauli ','Paccha'),('120807','Junín','1','Yauli ','Santa Bárbara de Carhuacayan'),('120808','Junín','1','Yauli ','Santa Rosa de Sacco'),('120809','Junín','1','Yauli ','Suitucancha'),('120810','Junín','1','Yauli ','Yauli'),('120900','Junín','1','Chupaca ',NULL),('120901','Junín','1','Chupaca ','Chupaca'),('120902','Junín','1','Chupaca ','Ahuac'),('120903','Junín','1','Chupaca ','Chongos Bajo'),('120904','Junín','1','Chupaca ','Huachac'),('120905','Junín','1','Chupaca ','Huamancaca Chico'),('120906','Junín','1','Chupaca ','San Juan de Iscos'),('120907','Junín','1','Chupaca ','San Juan de Jarpa'),('120908','Junín','1','Chupaca ','Tres de Diciembre'),('120909','Junín','1','Chupaca ','Yanacancha'),('130000','La Libertad','1',NULL,NULL),('130100','La Libertad','1','Trujillo ',NULL),('130101','La Libertad','1','Trujillo ','Trujillo'),('130102','La Libertad','1','Trujillo ','El Porvenir'),('130103','La Libertad','1','Trujillo ','Florencia de Mora'),('130104','La Libertad','1','Trujillo ','Huanchaco'),('130105','La Libertad','1','Trujillo ','La Esperanza'),('130106','La Libertad','1','Trujillo ','Laredo'),('130107','La Libertad','1','Trujillo ','Moche'),('130108','La Libertad','1','Trujillo ','Poroto'),('130109','La Libertad','1','Trujillo ','Salaverry'),('130110','La Libertad','1','Trujillo ','Simbal'),('130111','La Libertad','1','Trujillo ','Victor Larco Herrera'),('130200','La Libertad','1','Ascope ',NULL),('130201','La Libertad','1','Ascope ','Ascope'),('130202','La Libertad','1','Ascope ','Chicama'),('130203','La Libertad','1','Ascope ','Chocope'),('130204','La Libertad','1','Ascope ','Magdalena de Cao'),('130205','La Libertad','1','Ascope ','Paijan'),('130206','La Libertad','1','Ascope ','Rázuri'),('130207','La Libertad','1','Ascope ','Santiago de Cao'),('130208','La Libertad','1','Ascope ','Casa Grande'),('130300','La Libertad','1','Bolívar ',NULL),('130301','La Libertad','1','Bolívar ','Bolívar'),('130302','La Libertad','1','Bolívar ','Bambamarca'),('130303','La Libertad','1','Bolívar ','Condormarca'),('130304','La Libertad','1','Bolívar ','Longotea'),('130305','La Libertad','1','Bolívar ','Uchumarca'),('130306','La Libertad','1','Bolívar ','Ucuncha'),('130400','La Libertad','1','Chepén ',NULL),('130401','La Libertad','1','Chepén ','Chepen'),('130402','La Libertad','1','Chepén ','Pacanga'),('130403','La Libertad','1','Chepén ','Pueblo Nuevo'),('130500','La Libertad','1','Julcán ',NULL),('130501','La Libertad','1','Julcán ','Julcan'),('130502','La Libertad','1','Julcán ','Calamarca'),('130503','La Libertad','1','Julcán ','Carabamba'),('130504','La Libertad','1','Julcán ','Huaso'),('130600','La Libertad','1','Otuzco ',NULL),('130601','La Libertad','1','Otuzco ','Otuzco'),('130602','La Libertad','1','Otuzco ','Agallpampa'),('130604','La Libertad','1','Otuzco ','Charat'),('130605','La Libertad','1','Otuzco ','Huaranchal'),('130606','La Libertad','1','Otuzco ','La Cuesta'),('130608','La Libertad','1','Otuzco ','Mache'),('130610','La Libertad','1','Otuzco ','Paranday'),('130611','La Libertad','1','Otuzco ','Salpo'),('130613','La Libertad','1','Otuzco ','Sinsicap'),('130614','La Libertad','1','Otuzco ','Usquil'),('130700','La Libertad','1','Pacasmayo ',NULL),('130701','La Libertad','1','Pacasmayo ','San Pedro de Lloc'),('130702','La Libertad','1','Pacasmayo ','Guadalupe'),('130703','La Libertad','1','Pacasmayo ','Jequetepeque'),('130704','La Libertad','1','Pacasmayo ','Pacasmayo'),('130705','La Libertad','1','Pacasmayo ','San José'),('130800','La Libertad','1','Pataz ',NULL),('130801','La Libertad','1','Pataz ','Tayabamba'),('130802','La Libertad','1','Pataz ','Buldibuyo'),('130803','La Libertad','1','Pataz ','Chillia'),('130804','La Libertad','1','Pataz ','Huancaspata'),('130805','La Libertad','1','Pataz ','Huaylillas'),('130806','La Libertad','1','Pataz ','Huayo'),('130807','La Libertad','1','Pataz ','Ongon'),('130808','La Libertad','1','Pataz ','Parcoy'),('130809','La Libertad','1','Pataz ','Pataz'),('130810','La Libertad','1','Pataz ','Pias'),('130811','La Libertad','1','Pataz ','Santiago de Challas'),('130812','La Libertad','1','Pataz ','Taurija'),('130813','La Libertad','1','Pataz ','Urpay'),('130900','La Libertad','1','Sánchez Carrión ',NULL),('130901','La Libertad','1','Sánchez Carrión ','Huamachuco'),('130902','La Libertad','1','Sánchez Carrión ','Chugay'),('130903','La Libertad','1','Sánchez Carrión ','Cochorco'),('130904','La Libertad','1','Sánchez Carrión ','Curgos'),('130905','La Libertad','1','Sánchez Carrión ','Marcabal'),('130906','La Libertad','1','Sánchez Carrión ','Sanagoran'),('130907','La Libertad','1','Sánchez Carrión ','Sarin'),('130908','La Libertad','1','Sánchez Carrión ','Sartimbamba'),('131000','La Libertad','1','Santiago de Chuco ',NULL),('131001','La Libertad','1','Santiago de Chuco ','Santiago de Chuco'),('131002','La Libertad','1','Santiago de Chuco ','Angasmarca'),('131003','La Libertad','1','Santiago de Chuco ','Cachicadan'),('131004','La Libertad','1','Santiago de Chuco ','Mollebamba'),('131005','La Libertad','1','Santiago de Chuco ','Mollepata'),('131006','La Libertad','1','Santiago de Chuco ','Quiruvilca'),('131007','La Libertad','1','Santiago de Chuco ','Santa Cruz de Chuca'),('131008','La Libertad','1','Santiago de Chuco ','Sitabamba'),('131100','La Libertad','1','Gran Chimú ',NULL),('131101','La Libertad','1','Gran Chimú ','Cascas'),('131102','La Libertad','1','Gran Chimú ','Lucma'),('131103','La Libertad','1','Gran Chimú ','Marmot'),('131104','La Libertad','1','Gran Chimú ','Sayapullo'),('131200','La Libertad','1','Virú ',NULL),('131201','La Libertad','1','Virú ','Viru'),('131202','La Libertad','1','Virú ','Chao'),('131203','La Libertad','1','Virú ','Guadalupito'),('140000','Lambayeque','1',NULL,NULL),('140100','Lambayeque','1','Chiclayo ',NULL),('140101','Lambayeque','1','Chiclayo ','Chiclayo'),('140102','Lambayeque','1','Chiclayo ','Chongoyape'),('140103','Lambayeque','1','Chiclayo ','Eten'),('140104','Lambayeque','1','Chiclayo ','Eten Puerto'),('140105','Lambayeque','1','Chiclayo ','José Leonardo Ortiz'),('140106','Lambayeque','1','Chiclayo ','La Victoria'),('140107','Lambayeque','1','Chiclayo ','Lagunas'),('140108','Lambayeque','1','Chiclayo ','Monsefu'),('140109','Lambayeque','1','Chiclayo ','Nueva Arica'),('140110','Lambayeque','1','Chiclayo ','Oyotun'),('140111','Lambayeque','1','Chiclayo ','Picsi'),('140112','Lambayeque','1','Chiclayo ','Pimentel'),('140113','Lambayeque','1','Chiclayo ','Reque'),('140114','Lambayeque','1','Chiclayo ','Santa Rosa'),('140115','Lambayeque','1','Chiclayo ','Saña'),('140116','Lambayeque','1','Chiclayo ','Cayalti'),('140117','Lambayeque','1','Chiclayo ','Patapo'),('140118','Lambayeque','1','Chiclayo ','Pomalca'),('140119','Lambayeque','1','Chiclayo ','Pucala'),('140120','Lambayeque','1','Chiclayo ','Tuman'),('140200','Lambayeque','1','Ferreñafe ',NULL),('140201','Lambayeque','1','Ferreñafe ','Ferreñafe'),('140202','Lambayeque','1','Ferreñafe ','Cañaris'),('140203','Lambayeque','1','Ferreñafe ','Incahuasi'),('140204','Lambayeque','1','Ferreñafe ','Manuel Antonio Mesones Muro'),('140205','Lambayeque','1','Ferreñafe ','Pitipo'),('140206','Lambayeque','1','Ferreñafe ','Pueblo Nuevo'),('140300','Lambayeque','1','Lambayeque ',NULL),('140301','Lambayeque','1','Lambayeque ','Lambayeque'),('140302','Lambayeque','1','Lambayeque ','Chochope'),('140303','Lambayeque','1','Lambayeque ','Illimo'),('140304','Lambayeque','1','Lambayeque ','Jayanca'),('140305','Lambayeque','1','Lambayeque ','Mochumi'),('140306','Lambayeque','1','Lambayeque ','Morrope'),('140307','Lambayeque','1','Lambayeque ','Motupe'),('140308','Lambayeque','1','Lambayeque ','Olmos'),('140309','Lambayeque','1','Lambayeque ','Pacora'),('140310','Lambayeque','1','Lambayeque ','Salas'),('140311','Lambayeque','1','Lambayeque ','San José'),('140312','Lambayeque','1','Lambayeque ','Tucume'),('150000','Lima','1',NULL,NULL),('150100','Lima','1','Lima ',NULL),('150101','Lima','1','Lima ','Lima'),('150102','Lima','1','Lima ','Ancón'),('150103','Lima','1','Lima ','Ate'),('150104','Lima','1','Lima ','Barranco'),('150105','Lima','1','Lima ','Breña'),('150106','Lima','1','Lima ','Carabayllo'),('150107','Lima','1','Lima ','Chaclacayo'),('150108','Lima','1','Lima ','Chorrillos'),('150109','Lima','1','Lima ','Cieneguilla'),('150110','Lima','1','Lima ','Comas'),('150111','Lima','1','Lima ','El Agustino'),('150112','Lima','1','Lima ','Independencia'),('150113','Lima','1','Lima ','Jesús María'),('150114','Lima','1','Lima ','La Molina'),('150115','Lima','1','Lima ','La Victoria'),('150116','Lima','1','Lima ','Lince'),('150117','Lima','1','Lima ','Los Olivos'),('150118','Lima','1','Lima ','Lurigancho'),('150119','Lima','1','Lima ','Lurin'),('150120','Lima','1','Lima ','Magdalena del Mar'),('150121','Lima','1','Lima ','Pueblo Libre'),('150122','Lima','1','Lima ','Miraflores'),('150123','Lima','1','Lima ','Pachacamac'),('150124','Lima','1','Lima ','Pucusana'),('150125','Lima','1','Lima ','Puente Piedra'),('150126','Lima','1','Lima ','Punta Hermosa'),('150127','Lima','1','Lima ','Punta Negra'),('150128','Lima','1','Lima ','Rímac'),('150129','Lima','1','Lima ','San Bartolo'),('150130','Lima','1','Lima ','San Borja'),('150131','Lima','1','Lima ','San Isidro'),('150132','Lima','1','Lima ','San Juan de Lurigancho'),('150133','Lima','1','Lima ','San Juan de Miraflores'),('150134','Lima','1','Lima ','San Luis'),('150135','Lima','1','Lima ','San Martín de Porres'),('150136','Lima','1','Lima ','San Miguel'),('150137','Lima','1','Lima ','Santa Anita'),('150138','Lima','1','Lima ','Santa María del Mar'),('150139','Lima','1','Lima ','Santa Rosa'),('150140','Lima','1','Lima ','Santiago de Surco'),('150141','Lima','1','Lima ','Surquillo'),('150142','Lima','1','Lima ','Villa El Salvador'),('150143','Lima','1','Lima ','Villa María del Triunfo'),('150200','Lima','1','Barranca ',NULL),('150201','Lima','1','Barranca ','Barranca'),('150202','Lima','1','Barranca ','Paramonga'),('150203','Lima','1','Barranca ','Pativilca'),('150204','Lima','1','Barranca ','Supe'),('150205','Lima','1','Barranca ','Supe Puerto'),('150300','Lima','1','Cajatambo ',NULL),('150301','Lima','1','Cajatambo ','Cajatambo'),('150302','Lima','1','Cajatambo ','Copa'),('150303','Lima','1','Cajatambo ','Gorgor'),('150304','Lima','1','Cajatambo ','Huancapon'),('150305','Lima','1','Cajatambo ','Manas'),('150400','Lima','1','Canta ',NULL),('150401','Lima','1','Canta ','Canta'),('150402','Lima','1','Canta ','Arahuay'),('150403','Lima','1','Canta ','Huamantanga'),('150404','Lima','1','Canta ','Huaros'),('150405','Lima','1','Canta ','Lachaqui'),('150406','Lima','1','Canta ','San Buenaventura'),('150407','Lima','1','Canta ','Santa Rosa de Quives'),('150500','Lima','1','Cañete ',NULL),('150501','Lima','1','Cañete ','San Vicente de Cañete'),('150502','Lima','1','Cañete ','Asia'),('150503','Lima','1','Cañete ','Calango'),('150504','Lima','1','Cañete ','Cerro Azul'),('150505','Lima','1','Cañete ','Chilca'),('150506','Lima','1','Cañete ','Coayllo'),('150507','Lima','1','Cañete ','Imperial'),('150508','Lima','1','Cañete ','Lunahuana'),('150509','Lima','1','Cañete ','Mala'),('150510','Lima','1','Cañete ','Nuevo Imperial'),('150511','Lima','1','Cañete ','Pacaran'),('150512','Lima','1','Cañete ','Quilmana'),('150513','Lima','1','Cañete ','San Antonio'),('150514','Lima','1','Cañete ','San Luis'),('150515','Lima','1','Cañete ','Santa Cruz de Flores'),('150516','Lima','1','Cañete ','Zúñiga'),('150600','Lima','1','Huaral ',NULL),('150601','Lima','1','Huaral ','Huaral'),('150602','Lima','1','Huaral ','Atavillos Alto'),('150603','Lima','1','Huaral ','Atavillos Bajo'),('150604','Lima','1','Huaral ','Aucallama'),('150605','Lima','1','Huaral ','Chancay'),('150606','Lima','1','Huaral ','Ihuari'),('150607','Lima','1','Huaral ','Lampian'),('150608','Lima','1','Huaral ','Pacaraos'),('150609','Lima','1','Huaral ','San Miguel de Acos'),('150610','Lima','1','Huaral ','Santa Cruz de Andamarca'),('150611','Lima','1','Huaral ','Sumbilca'),('150612','Lima','1','Huaral ','Veintisiete de Noviembre'),('150700','Lima','1','Huarochirí ',NULL),('150701','Lima','1','Huarochirí ','Matucana'),('150702','Lima','1','Huarochirí ','Antioquia'),('150703','Lima','1','Huarochirí ','Callahuanca'),('150704','Lima','1','Huarochirí ','Carampoma'),('150705','Lima','1','Huarochirí ','Chicla'),('150706','Lima','1','Huarochirí ','Cuenca'),('150707','Lima','1','Huarochirí ','Huachupampa'),('150708','Lima','1','Huarochirí ','Huanza'),('150709','Lima','1','Huarochirí ','Huarochiri'),('150710','Lima','1','Huarochirí ','Lahuaytambo'),('150711','Lima','1','Huarochirí ','Langa'),('150712','Lima','1','Huarochirí ','Laraos'),('150713','Lima','1','Huarochirí ','Mariatana'),('150714','Lima','1','Huarochirí ','Ricardo Palma'),('150715','Lima','1','Huarochirí ','San Andrés de Tupicocha'),('150716','Lima','1','Huarochirí ','San Antonio'),('150717','Lima','1','Huarochirí ','San Bartolomé'),('150718','Lima','1','Huarochirí ','San Damian'),('150719','Lima','1','Huarochirí ','San Juan de Iris'),('150720','Lima','1','Huarochirí ','San Juan de Tantaranche'),('150721','Lima','1','Huarochirí ','San Lorenzo de Quinti'),('150722','Lima','1','Huarochirí ','San Mateo'),('150723','Lima','1','Huarochirí ','San Mateo de Otao'),('150724','Lima','1','Huarochirí ','San Pedro de Casta'),('150725','Lima','1','Huarochirí ','San Pedro de Huancayre'),('150726','Lima','1','Huarochirí ','Sangallaya'),('150727','Lima','1','Huarochirí ','Santa Cruz de Cocachacra'),('150728','Lima','1','Huarochirí ','Santa Eulalia'),('150729','Lima','1','Huarochirí ','Santiago de Anchucaya'),('150730','Lima','1','Huarochirí ','Santiago de Tuna'),('150731','Lima','1','Huarochirí ','Santo Domingo de Los Olleros'),('150732','Lima','1','Huarochirí ','Surco'),('150800','Lima','1','Huaura ',NULL),('150801','Lima','1','Huaura ','Huacho'),('150802','Lima','1','Huaura ','Ambar'),('150803','Lima','1','Huaura ','Caleta de Carquin'),('150804','Lima','1','Huaura ','Checras'),('150805','Lima','1','Huaura ','Hualmay'),('150806','Lima','1','Huaura ','Huaura'),('150807','Lima','1','Huaura ','Leoncio Prado'),('150808','Lima','1','Huaura ','Paccho'),('150809','Lima','1','Huaura ','Santa Leonor'),('150810','Lima','1','Huaura ','Santa María'),('150811','Lima','1','Huaura ','Sayan'),('150812','Lima','1','Huaura ','Vegueta'),('150900','Lima','1','Oyón ',NULL),('150901','Lima','1','Oyón ','Oyon'),('150902','Lima','1','Oyón ','Andajes'),('150903','Lima','1','Oyón ','Caujul'),('150904','Lima','1','Oyón ','Cochamarca'),('150905','Lima','1','Oyón ','Navan'),('150906','Lima','1','Oyón ','Pachangara'),('151000','Lima','1','Yauyos ',NULL),('151001','Lima','1','Yauyos ','Yauyos'),('151002','Lima','1','Yauyos ','Alis'),('151003','Lima','1','Yauyos ','Allauca'),('151004','Lima','1','Yauyos ','Ayaviri'),('151005','Lima','1','Yauyos ','Azángaro'),('151006','Lima','1','Yauyos ','Cacra'),('151007','Lima','1','Yauyos ','Carania'),('151008','Lima','1','Yauyos ','Catahuasi'),('151009','Lima','1','Yauyos ','Chocos'),('151010','Lima','1','Yauyos ','Cochas'),('151011','Lima','1','Yauyos ','Colonia'),('151012','Lima','1','Yauyos ','Hongos'),('151013','Lima','1','Yauyos ','Huampara'),('151014','Lima','1','Yauyos ','Huancaya'),('151015','Lima','1','Yauyos ','Huangascar'),('151016','Lima','1','Yauyos ','Huantan'),('151017','Lima','1','Yauyos ','Huañec'),('151018','Lima','1','Yauyos ','Laraos'),('151019','Lima','1','Yauyos ','Lincha'),('151020','Lima','1','Yauyos ','Madean'),('151021','Lima','1','Yauyos ','Miraflores'),('151022','Lima','1','Yauyos ','Omas'),('151023','Lima','1','Yauyos ','Putinza'),('151024','Lima','1','Yauyos ','Quinches'),('151025','Lima','1','Yauyos ','Quinocay'),('151026','Lima','1','Yauyos ','San Joaquín'),('151027','Lima','1','Yauyos ','San Pedro de Pilas'),('151028','Lima','1','Yauyos ','Tanta'),('151029','Lima','1','Yauyos ','Tauripampa'),('151030','Lima','1','Yauyos ','Tomas'),('151031','Lima','1','Yauyos ','Tupe'),('151032','Lima','1','Yauyos ','Viñac'),('151033','Lima','1','Yauyos ','Vitis'),('160000','Loreto','1',NULL,NULL),('160100','Loreto','1','Maynas ',NULL),('160101','Loreto','1','Maynas ','Iquitos'),('160102','Loreto','1','Maynas ','Alto Nanay'),('160103','Loreto','1','Maynas ','Fernando Lores'),('160104','Loreto','1','Maynas ','Indiana'),('160105','Loreto','1','Maynas ','Las Amazonas'),('160106','Loreto','1','Maynas ','Mazan'),('160107','Loreto','1','Maynas ','Napo'),('160108','Loreto','1','Maynas ','Punchana'),('160110','Loreto','1','Maynas ','Torres Causana'),('160112','Loreto','1','Maynas ','Belén'),('160113','Loreto','1','Maynas ','San Juan Bautista'),('160200','Loreto','1','Alto Amazonas ',NULL),('160201','Loreto','1','Alto Amazonas ','Yurimaguas'),('160202','Loreto','1','Alto Amazonas ','Balsapuerto'),('160205','Loreto','1','Alto Amazonas ','Jeberos'),('160206','Loreto','1','Alto Amazonas ','Lagunas'),('160210','Loreto','1','Alto Amazonas ','Santa Cruz'),('160211','Loreto','1','Alto Amazonas ','Teniente Cesar López Rojas'),('160300','Loreto','1','Loreto ',NULL),('160301','Loreto','1','Loreto ','Nauta'),('160302','Loreto','1','Loreto ','Parinari'),('160303','Loreto','1','Loreto ','Tigre'),('160304','Loreto','1','Loreto ','Trompeteros'),('160305','Loreto','1','Loreto ','Urarinas'),('160400','Loreto','1','Mariscal Ramón Castilla ',NULL),('160401','Loreto','1','Mariscal Ramón Castilla ','Ramón Castilla'),('160402','Loreto','1','Mariscal Ramón Castilla ','Pebas'),('160403','Loreto','1','Mariscal Ramón Castilla ','Yavari'),('160404','Loreto','1','Mariscal Ramón Castilla ','San Pablo'),('160500','Loreto','1','Requena ',NULL),('160501','Loreto','1','Requena ','Requena'),('160502','Loreto','1','Requena ','Alto Tapiche'),('160503','Loreto','1','Requena ','Capelo'),('160504','Loreto','1','Requena ','Emilio San Martín'),('160505','Loreto','1','Requena ','Maquia'),('160506','Loreto','1','Requena ','Puinahua'),('160507','Loreto','1','Requena ','Saquena'),('160508','Loreto','1','Requena ','Soplin'),('160509','Loreto','1','Requena ','Tapiche'),('160510','Loreto','1','Requena ','Jenaro Herrera'),('160511','Loreto','1','Requena ','Yaquerana'),('160600','Loreto','1','Ucayali ',NULL),('160601','Loreto','1','Ucayali ','Contamana'),('160602','Loreto','1','Ucayali ','Inahuaya'),('160603','Loreto','1','Ucayali ','Padre Márquez'),('160604','Loreto','1','Ucayali ','Pampa Hermosa'),('160605','Loreto','1','Ucayali ','Sarayacu'),('160606','Loreto','1','Ucayali ','Vargas Guerra'),('160700','Loreto','1','Datem del Marañón ',NULL),('160701','Loreto','1','Datem del Marañón ','Barranca'),('160702','Loreto','1','Datem del Marañón ','Cahuapanas'),('160703','Loreto','1','Datem del Marañón ','Manseriche'),('160704','Loreto','1','Datem del Marañón ','Morona'),('160705','Loreto','1','Datem del Marañón ','Pastaza'),('160706','Loreto','1','Datem del Marañón ','Andoas'),('160800','Loreto','1','Putumayo',NULL),('160801','Loreto','1','Putumayo','Putumayo'),('160802','Loreto','1','Putumayo','Rosa Panduro'),('160803','Loreto','1','Putumayo','Teniente Manuel Clavero'),('160804','Loreto','1','Putumayo','Yaguas'),('170000','Madre de Dios','1',NULL,NULL),('170100','Madre de Dios','1','Tambopata ',NULL),('170101','Madre de Dios','1','Tambopata ','Tambopata'),('170102','Madre de Dios','1','Tambopata ','Inambari'),('170103','Madre de Dios','1','Tambopata ','Las Piedras'),('170104','Madre de Dios','1','Tambopata ','Laberinto'),('170200','Madre de Dios','1','Manu ',NULL),('170201','Madre de Dios','1','Manu ','Manu'),('170202','Madre de Dios','1','Manu ','Fitzcarrald'),('170203','Madre de Dios','1','Manu ','Madre de Dios'),('170204','Madre de Dios','1','Manu ','Huepetuhe'),('170300','Madre de Dios','1','Tahuamanu ',NULL),('170301','Madre de Dios','1','Tahuamanu ','Iñapari'),('170302','Madre de Dios','1','Tahuamanu ','Iberia'),('170303','Madre de Dios','1','Tahuamanu ','Tahuamanu'),('180000','Moquegua','1',NULL,NULL),('180100','Moquegua','1','Mariscal Nieto ',NULL),('180101','Moquegua','1','Mariscal Nieto ','Moquegua'),('180102','Moquegua','1','Mariscal Nieto ','Carumas'),('180103','Moquegua','1','Mariscal Nieto ','Cuchumbaya'),('180104','Moquegua','1','Mariscal Nieto ','Samegua'),('180105','Moquegua','1','Mariscal Nieto ','San Cristóbal'),('180106','Moquegua','1','Mariscal Nieto ','Torata'),('180200','Moquegua','1','General Sánchez Cerro ',NULL),('180201','Moquegua','1','General Sánchez Cerro ','Omate'),('180202','Moquegua','1','General Sánchez Cerro ','Chojata'),('180203','Moquegua','1','General Sánchez Cerro ','Coalaque'),('180204','Moquegua','1','General Sánchez Cerro ','Ichuña'),('180205','Moquegua','1','General Sánchez Cerro ','La Capilla'),('180206','Moquegua','1','General Sánchez Cerro ','Lloque'),('180207','Moquegua','1','General Sánchez Cerro ','Matalaque'),('180208','Moquegua','1','General Sánchez Cerro ','Puquina'),('180209','Moquegua','1','General Sánchez Cerro ','Quinistaquillas'),('180210','Moquegua','1','General Sánchez Cerro ','Ubinas'),('180211','Moquegua','1','General Sánchez Cerro ','Yunga'),('180300','Moquegua','1','Ilo ',NULL),('180301','Moquegua','1','Ilo ','Ilo'),('180302','Moquegua','1','Ilo ','El Algarrobal'),('180303','Moquegua','1','Ilo ','Pacocha'),('190000','Pasco','1',NULL,NULL),('190100','Pasco','1','Pasco ',NULL),('190101','Pasco','1','Pasco ','Chaupimarca'),('190102','Pasco','1','Pasco ','Huachon'),('190103','Pasco','1','Pasco ','Huariaca'),('190104','Pasco','1','Pasco ','Huayllay'),('190105','Pasco','1','Pasco ','Ninacaca'),('190106','Pasco','1','Pasco ','Pallanchacra'),('190107','Pasco','1','Pasco ','Paucartambo'),('190108','Pasco','1','Pasco ','San Francisco de Asís de Yarusyacan'),('190109','Pasco','1','Pasco ','Simon Bolívar'),('190110','Pasco','1','Pasco ','Ticlacayan'),('190111','Pasco','1','Pasco ','Tinyahuarco'),('190112','Pasco','1','Pasco ','Vicco'),('190113','Pasco','1','Pasco ','Yanacancha'),('190200','Pasco','1','Daniel Alcides Carrión ',NULL),('190201','Pasco','1','Daniel Alcides Carrión ','Yanahuanca'),('190202','Pasco','1','Daniel Alcides Carrión ','Chacayan'),('190203','Pasco','1','Daniel Alcides Carrión ','Goyllarisquizga'),('190204','Pasco','1','Daniel Alcides Carrión ','Paucar'),('190205','Pasco','1','Daniel Alcides Carrión ','San Pedro de Pillao'),('190206','Pasco','1','Daniel Alcides Carrión ','Santa Ana de Tusi'),('190207','Pasco','1','Daniel Alcides Carrión ','Tapuc'),('190208','Pasco','1','Daniel Alcides Carrión ','Vilcabamba'),('190300','Pasco','1','Oxapampa ',NULL),('190301','Pasco','1','Oxapampa ','Oxapampa'),('190302','Pasco','1','Oxapampa ','Chontabamba'),('190303','Pasco','1','Oxapampa ','Huancabamba'),('190304','Pasco','1','Oxapampa ','Palcazu'),('190305','Pasco','1','Oxapampa ','Pozuzo'),('190306','Pasco','1','Oxapampa ','Puerto Bermúdez'),('190307','Pasco','1','Oxapampa ','Villa Rica'),('190308','Pasco','1','Oxapampa ','Constitución'),('200000','Piura','1',NULL,NULL),('200100','Piura','1','Piura ',NULL),('200101','Piura','1','Piura ','Piura'),('200104','Piura','1','Piura ','Castilla'),('200105','Piura','1','Piura ','Atacaos'),('200107','Piura','1','Piura ','Cura Mori'),('200108','Piura','1','Piura ','El Tallan'),('200109','Piura','1','Piura ','La Arena'),('200110','Piura','1','Piura ','La Unión'),('200111','Piura','1','Piura ','Las Lomas'),('200114','Piura','1','Piura ','Tambo Grande'),('200115','Piura','1','Piura ','Veintiseis de Octubre'),('200200','Piura','1','Ayabaca ',NULL),('200201','Piura','1','Ayabaca ','Ayabaca'),('200202','Piura','1','Ayabaca ','Frias'),('200203','Piura','1','Ayabaca ','Jilili'),('200204','Piura','1','Ayabaca ','Lagunas'),('200205','Piura','1','Ayabaca ','Montero'),('200206','Piura','1','Ayabaca ','Pacaipampa'),('200207','Piura','1','Ayabaca ','Paimas'),('200208','Piura','1','Ayabaca ','Sapillica'),('200209','Piura','1','Ayabaca ','Sicchez'),('200210','Piura','1','Ayabaca ','Suyo'),('200300','Piura','1','Huancabamba ',NULL),('200301','Piura','1','Huancabamba ','Huancabamba'),('200302','Piura','1','Huancabamba ','Canchaque'),('200303','Piura','1','Huancabamba ','El Carmen de la Frontera'),('200304','Piura','1','Huancabamba ','Huarmaca'),('200305','Piura','1','Huancabamba ','Lalaquiz'),('200306','Piura','1','Huancabamba ','San Miguel de El Faique'),('200307','Piura','1','Huancabamba ','Sondor'),('200308','Piura','1','Huancabamba ','Sondorillo'),('200400','Piura','1','Morropón ',NULL),('200401','Piura','1','Morropón ','Chulucanas'),('200402','Piura','1','Morropón ','Buenos Aires'),('200403','Piura','1','Morropón ','Chalaco'),('200404','Piura','1','Morropón ','La Matanza'),('200405','Piura','1','Morropón ','Morropon'),('200406','Piura','1','Morropón ','Salitral'),('200407','Piura','1','Morropón ','San Juan de Bigote'),('200408','Piura','1','Morropón ','Santa Catalina de Mossa'),('200409','Piura','1','Morropón ','Santo Domingo'),('200410','Piura','1','Morropón ','Yamango'),('200500','Piura','1','Paita ',NULL),('200501','Piura','1','Paita ','Paita'),('200502','Piura','1','Paita ','Amotape'),('200503','Piura','1','Paita ','Arenal'),('200504','Piura','1','Paita ','Colan'),('200505','Piura','1','Paita ','La Huaca'),('200506','Piura','1','Paita ','Tamarindo'),('200507','Piura','1','Paita ','Vichayal'),('200600','Piura','1','Sullana ',NULL),('200601','Piura','1','Sullana ','Sullana'),('200602','Piura','1','Sullana ','Bellavista'),('200603','Piura','1','Sullana ','Ignacio Escudero'),('200604','Piura','1','Sullana ','Lancones'),('200605','Piura','1','Sullana ','Marcavelica'),('200606','Piura','1','Sullana ','Miguel Checa'),('200607','Piura','1','Sullana ','Querecotillo'),('200608','Piura','1','Sullana ','Salitral'),('200700','Piura','1','Talara ',NULL),('200701','Piura','1','Talara ','Pariñas'),('200702','Piura','1','Talara ','El Alto'),('200703','Piura','1','Talara ','La Brea'),('200704','Piura','1','Talara ','Lobitos'),('200705','Piura','1','Talara ','Los Organos'),('200706','Piura','1','Talara ','Mancora'),('200800','Piura','1','Sechura ',NULL),('200801','Piura','1','Sechura ','Sechura'),('200802','Piura','1','Sechura ','Bellavista de la Unión'),('200803','Piura','1','Sechura ','Bernal'),('200804','Piura','1','Sechura ','Cristo Nos Valga'),('200805','Piura','1','Sechura ','Vice'),('200806','Piura','1','Sechura ','Rinconada Llicuar'),('210000','Puno','1',NULL,NULL),('210100','Puno','1','Puno ',NULL),('210101','Puno','1','Puno ','Puno'),('210102','Puno','1','Puno ','Acora'),('210103','Puno','1','Puno ','Amantani'),('210104','Puno','1','Puno ','Atuncolla'),('210105','Puno','1','Puno ','Capachica'),('210106','Puno','1','Puno ','Chucuito'),('210107','Puno','1','Puno ','Coata'),('210108','Puno','1','Puno ','Huata'),('210109','Puno','1','Puno ','Mañazo'),('210110','Puno','1','Puno ','Paucarcolla'),('210111','Puno','1','Puno ','Pichacani'),('210112','Puno','1','Puno ','Plateria'),('210113','Puno','1','Puno ','San Antonio'),('210114','Puno','1','Puno ','Tiquillaca'),('210115','Puno','1','Puno ','Vilque'),('210200','Puno','1','Azángaro ',NULL),('210201','Puno','1','Azángaro ','Azángaro'),('210202','Puno','1','Azángaro ','Achaya'),('210203','Puno','1','Azángaro ','Arapa'),('210204','Puno','1','Azángaro ','Asillo'),('210205','Puno','1','Azángaro ','Caminaca'),('210206','Puno','1','Azángaro ','Chupa'),('210207','Puno','1','Azángaro ','José Domingo Choquehuanca'),('210208','Puno','1','Azángaro ','Muñani'),('210209','Puno','1','Azángaro ','Potoni'),('210210','Puno','1','Azángaro ','Saman'),('210211','Puno','1','Azángaro ','San Anton'),('210212','Puno','1','Azángaro ','San José'),('210213','Puno','1','Azángaro ','San Juan de Salinas'),('210214','Puno','1','Azángaro ','Santiago de Pupuja'),('210215','Puno','1','Azángaro ','Tirapata'),('210300','Puno','1','Carabaya ',NULL),('210301','Puno','1','Carabaya ','Macusani'),('210302','Puno','1','Carabaya ','Ajoyani'),('210303','Puno','1','Carabaya ','Ayapata'),('210304','Puno','1','Carabaya ','Coasa'),('210305','Puno','1','Carabaya ','Corani'),('210306','Puno','1','Carabaya ','Crucero'),('210307','Puno','1','Carabaya ','Ituata'),('210308','Puno','1','Carabaya ','Ollachea'),('210309','Puno','1','Carabaya ','San Gaban'),('210310','Puno','1','Carabaya ','Usicayos'),('210400','Puno','1','Chucuito ',NULL),('210401','Puno','1','Chucuito ','Juli'),('210402','Puno','1','Chucuito ','Desaguadero'),('210403','Puno','1','Chucuito ','Huacullani'),('210404','Puno','1','Chucuito ','Kelluyo'),('210405','Puno','1','Chucuito ','Pisacoma'),('210406','Puno','1','Chucuito ','Pomata'),('210407','Puno','1','Chucuito ','Zepita'),('210500','Puno','1','El Collao ',NULL),('210501','Puno','1','El Collao ','Ilave'),('210502','Puno','1','El Collao ','Capazo'),('210503','Puno','1','El Collao ','Pilcuyo'),('210504','Puno','1','El Collao ','Santa Rosa'),('210505','Puno','1','El Collao ','Conduriri'),('210600','Puno','1','Huancané ',NULL),('210601','Puno','1','Huancané ','Huancane'),('210602','Puno','1','Huancané ','Cojata'),('210603','Puno','1','Huancané ','Huatasani'),('210604','Puno','1','Huancané ','Inchupalla'),('210605','Puno','1','Huancané ','Pusi'),('210606','Puno','1','Huancané ','Rosaspata'),('210607','Puno','1','Huancané ','Taraco'),('210608','Puno','1','Huancané ','Vilque Chico'),('210700','Puno','1','Lampa ',NULL),('210701','Puno','1','Lampa ','Lampa'),('210702','Puno','1','Lampa ','Cabanilla'),('210703','Puno','1','Lampa ','Calapuja'),('210704','Puno','1','Lampa ','Nicasio'),('210705','Puno','1','Lampa ','Ocuviri'),('210706','Puno','1','Lampa ','Palca'),('210707','Puno','1','Lampa ','Paratia'),('210708','Puno','1','Lampa ','Pucara'),('210709','Puno','1','Lampa ','Santa Lucia'),('210710','Puno','1','Lampa ','Vilavila'),('210800','Puno','1','Melgar ',NULL),('210801','Puno','1','Melgar ','Ayaviri'),('210802','Puno','1','Melgar ','Antauta'),('210803','Puno','1','Melgar ','Cupi'),('210804','Puno','1','Melgar ','Llalli'),('210805','Puno','1','Melgar ','Macari'),('210806','Puno','1','Melgar ','Nuñoa'),('210807','Puno','1','Melgar ','Orurillo'),('210808','Puno','1','Melgar ','Santa Rosa'),('210809','Puno','1','Melgar ','Umachiri'),('210900','Puno','1','Moho ',NULL),('210901','Puno','1','Moho ','Moho'),('210902','Puno','1','Moho ','Conima'),('210903','Puno','1','Moho ','Huayrapata'),('210904','Puno','1','Moho ','Tilali'),('211000','Puno','1','San Antonio de Putina ',NULL),('211001','Puno','1','San Antonio de Putina ','Putina'),('211002','Puno','1','San Antonio de Putina ','Ananea'),('211003','Puno','1','San Antonio de Putina ','Pedro Vilca Apaza'),('211004','Puno','1','San Antonio de Putina ','Quilcapuncu'),('211005','Puno','1','San Antonio de Putina ','Sina'),('211100','Puno','1','San Román ',NULL),('211101','Puno','1','San Román ','Juliaca'),('211102','Puno','1','San Román ','Cabana'),('211103','Puno','1','San Román ','Cabanillas'),('211104','Puno','1','San Román ','Caracoto'),('211200','Puno','1','Sandia ',NULL),('211201','Puno','1','Sandia ','Sandia'),('211202','Puno','1','Sandia ','Cuyocuyo'),('211203','Puno','1','Sandia ','Limbani'),('211204','Puno','1','Sandia ','Patambuco'),('211205','Puno','1','Sandia ','Phara'),('211206','Puno','1','Sandia ','Quiaca'),('211207','Puno','1','Sandia ','San Juan del Oro'),('211208','Puno','1','Sandia ','Yanahuaya'),('211209','Puno','1','Sandia ','Alto Inambari'),('211210','Puno','1','Sandia ','San Pedro de Putina Punco'),('211300','Puno','1','Yunguyo ',NULL),('211301','Puno','1','Yunguyo ','Yunguyo'),('211302','Puno','1','Yunguyo ','Anapia'),('211303','Puno','1','Yunguyo ','Copani'),('211304','Puno','1','Yunguyo ','Cuturapi'),('211305','Puno','1','Yunguyo ','Ollaraya'),('211306','Puno','1','Yunguyo ','Tinicachi'),('211307','Puno','1','Yunguyo ','Unicachi'),('220000','San Martín','1',NULL,NULL),('220100','San Martín','1','Moyobamba ',NULL),('220101','San Martín','1','Moyobamba ','Moyobamba'),('220102','San Martín','1','Moyobamba ','Calzada'),('220103','San Martín','1','Moyobamba ','Habana'),('220104','San Martín','1','Moyobamba ','Jepelacio'),('220105','San Martín','1','Moyobamba ','Soritor'),('220106','San Martín','1','Moyobamba ','Yantalo'),('220200','San Martín','1','Bellavista ',NULL),('220201','San Martín','1','Bellavista ','Bellavista'),('220202','San Martín','1','Bellavista ','Alto Biavo'),('220203','San Martín','1','Bellavista ','Bajo Biavo'),('220204','San Martín','1','Bellavista ','Huallaga'),('220205','San Martín','1','Bellavista ','San Pablo'),('220206','San Martín','1','Bellavista ','San Rafael'),('220300','San Martín','1','El Dorado ',NULL),('220301','San Martín','1','El Dorado ','San José de Sisa'),('220302','San Martín','1','El Dorado ','Agua Blanca'),('220303','San Martín','1','El Dorado ','San Martín'),('220304','San Martín','1','El Dorado ','Santa Rosa'),('220305','San Martín','1','El Dorado ','Shatoja'),('220400','San Martín','1','Huallaga ',NULL),('220401','San Martín','1','Huallaga ','Saposoa'),('220402','San Martín','1','Huallaga ','Alto Saposoa'),('220403','San Martín','1','Huallaga ','El Eslabón'),('220404','San Martín','1','Huallaga ','Piscoyacu'),('220405','San Martín','1','Huallaga ','Sacanche'),('220406','San Martín','1','Huallaga ','Tingo de Saposoa'),('220500','San Martín','1','Lamas ',NULL),('220501','San Martín','1','Lamas ','Lamas'),('220502','San Martín','1','Lamas ','Alonso de Alvarado'),('220503','San Martín','1','Lamas ','Barranquita'),('220504','San Martín','1','Lamas ','Caynarachi'),('220505','San Martín','1','Lamas ','Cuñumbuqui'),('220506','San Martín','1','Lamas ','Pinto Recodo'),('220507','San Martín','1','Lamas ','Rumisapa'),('220508','San Martín','1','Lamas ','San Roque de Cumbaza'),('220509','San Martín','1','Lamas ','Shanao'),('220510','San Martín','1','Lamas ','Tabalosos'),('220511','San Martín','1','Lamas ','Zapatero'),('220600','San Martín','1','Mariscal Cáceres ',NULL),('220601','San Martín','1','Mariscal Cáceres ','Juanjuí'),('220602','San Martín','1','Mariscal Cáceres ','Campanilla'),('220603','San Martín','1','Mariscal Cáceres ','Huicungo'),('220604','San Martín','1','Mariscal Cáceres ','Pachiza'),('220605','San Martín','1','Mariscal Cáceres ','Pajarillo'),('220700','San Martín','1','Picota ',NULL),('220701','San Martín','1','Picota ','Picota'),('220702','San Martín','1','Picota ','Buenos Aires'),('220703','San Martín','1','Picota ','Caspisapa'),('220704','San Martín','1','Picota ','Pilluana'),('220705','San Martín','1','Picota ','Pucacaca'),('220706','San Martín','1','Picota ','San Cristóbal'),('220707','San Martín','1','Picota ','San Hilarión'),('220708','San Martín','1','Picota ','Shamboyacu'),('220709','San Martín','1','Picota ','Tingo de Ponasa'),('220710','San Martín','1','Picota ','Tres Unidos'),('220800','San Martín','1','Rioja ',NULL),('220801','San Martín','1','Rioja ','Rioja'),('220802','San Martín','1','Rioja ','Awajun'),('220803','San Martín','1','Rioja ','Elías Soplin Vargas'),('220804','San Martín','1','Rioja ','Nueva Cajamarca'),('220805','San Martín','1','Rioja ','Pardo Miguel'),('220806','San Martín','1','Rioja ','Posic'),('220807','San Martín','1','Rioja ','San Fernando'),('220808','San Martín','1','Rioja ','Yorongos'),('220809','San Martín','1','Rioja ','Yuracyacu'),('220900','San Martín','1','San Martín ',NULL),('220901','San Martín','1','San Martín ','Tarapoto'),('220902','San Martín','1','San Martín ','Alberto Leveau'),('220903','San Martín','1','San Martín ','Cacatachi'),('220904','San Martín','1','San Martín ','Chazuta'),('220905','San Martín','1','San Martín ','Chipurana'),('220906','San Martín','1','San Martín ','El Porvenir'),('220907','San Martín','1','San Martín ','Huimbayoc'),('220908','San Martín','1','San Martín ','Juan Guerra'),('220909','San Martín','1','San Martín ','La Banda de Shilcayo'),('220910','San Martín','1','San Martín ','Morales'),('220911','San Martín','1','San Martín ','Papaplaya'),('220912','San Martín','1','San Martín ','San Antonio'),('220913','San Martín','1','San Martín ','Sauce'),('220914','San Martín','1','San Martín ','Shapaja'),('221000','San Martín','1','Tocache ',NULL),('221001','San Martín','1','Tocache ','Tocache'),('221002','San Martín','1','Tocache ','Nuevo Progreso'),('221003','San Martín','1','Tocache ','Polvora'),('221004','San Martín','1','Tocache ','Shunte'),('221005','San Martín','1','Tocache ','Uchiza'),('230000','Tacna','1',NULL,NULL),('230100','Tacna','1','Tacna ',NULL),('230101','Tacna','1','Tacna ','Tacna'),('230102','Tacna','1','Tacna ','Alto de la Alianza'),('230103','Tacna','1','Tacna ','Calana'),('230104','Tacna','1','Tacna ','Ciudad Nueva'),('230105','Tacna','1','Tacna ','Inclan'),('230106','Tacna','1','Tacna ','Pachia'),('230107','Tacna','1','Tacna ','Palca'),('230108','Tacna','1','Tacna ','Pocollay'),('230109','Tacna','1','Tacna ','Sama'),('230110','Tacna','1','Tacna ','Coronel Gregorio Albarracín Lanchipa'),('230200','Tacna','1','Candarave ',NULL),('230201','Tacna','1','Candarave ','Candarave'),('230202','Tacna','1','Candarave ','Cairani'),('230203','Tacna','1','Candarave ','Camilaca'),('230204','Tacna','1','Candarave ','Curibaya'),('230205','Tacna','1','Candarave ','Huanuara'),('230206','Tacna','1','Candarave ','Quilahuani'),('230300','Tacna','1','Jorge Basadre ',NULL),('230301','Tacna','1','Jorge Basadre ','Locumba'),('230302','Tacna','1','Jorge Basadre ','Ilabaya'),('230303','Tacna','1','Jorge Basadre ','Ite'),('230400','Tacna','1','Tarata ',NULL),('230401','Tacna','1','Tarata ','Tarata'),('230402','Tacna','1','Tarata ','Héroes Albarracín'),('230403','Tacna','1','Tarata ','Estique'),('230404','Tacna','1','Tarata ','Estique-Pampa'),('230405','Tacna','1','Tarata ','Sitajara'),('230406','Tacna','1','Tarata ','Susapaya'),('230407','Tacna','1','Tarata ','Tarucachi'),('230408','Tacna','1','Tarata ','Ticaco'),('240000','Tumbes','1',NULL,NULL),('240100','Tumbes','1','Tumbes ',NULL),('240101','Tumbes','1','Tumbes ','Tumbes'),('240102','Tumbes','1','Tumbes ','Corrales'),('240103','Tumbes','1','Tumbes ','La Cruz'),('240104','Tumbes','1','Tumbes ','Pampas de Hospital'),('240105','Tumbes','1','Tumbes ','San Jacinto'),('240106','Tumbes','1','Tumbes ','San Juan de la Virgen'),('240200','Tumbes','1','Contralmirante Villar ',NULL),('240201','Tumbes','1','Contralmirante Villar ','Zorritos'),('240202','Tumbes','1','Contralmirante Villar ','Casitas'),('240203','Tumbes','1','Contralmirante Villar ','Canoas de Punta Sal'),('240300','Tumbes','1','Zarumilla ',NULL),('240301','Tumbes','1','Zarumilla ','Zarumilla'),('240302','Tumbes','1','Zarumilla ','Aguas Verdes'),('240303','Tumbes','1','Zarumilla ','Matapalo'),('240304','Tumbes','1','Zarumilla ','Papayal'),('250000','Ucayali','1',NULL,NULL),('250100','Ucayali','1','Coronel Portillo ',NULL),('250101','Ucayali','1','Coronel Portillo ','Calleria'),('250102','Ucayali','1','Coronel Portillo ','Campoverde'),('250103','Ucayali','1','Coronel Portillo ','Iparia'),('250104','Ucayali','1','Coronel Portillo ','Masisea'),('250105','Ucayali','1','Coronel Portillo ','Yarinacocha'),('250106','Ucayali','1','Coronel Portillo ','Nueva Requena'),('250107','Ucayali','1','Coronel Portillo ','Manantay'),('250200','Ucayali','1','Atalaya ',NULL),('250201','Ucayali','1','Atalaya ','Raymondi'),('250202','Ucayali','1','Atalaya ','Sepahua'),('250203','Ucayali','1','Atalaya ','Tahuania'),('250204','Ucayali','1','Atalaya ','Yurua'),('250300','Ucayali','1','Padre Abad ',NULL),('250301','Ucayali','1','Padre Abad ','Padre Abad'),('250302','Ucayali','1','Padre Abad ','Irazola'),('250303','Ucayali','1','Padre Abad ','Curimana'),('250304','Ucayali','1','Padre Abad ','Neshuya'),('250305','Ucayali','1','Padre Abad ','Alexander Von Humboldt'),('250400','Ucayali','1','Purús',NULL),('250401','Ucayali','1','Purús','Purus');
/*!40000 ALTER TABLE `ubigeo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas` (
  `id_ventas` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `id_modalidadtransaccion` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_ventas`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_producto`
--

DROP TABLE IF EXISTS `ventas_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas_producto` (
  `id_ventas` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `igv` double DEFAULT NULL,
  `descuento` double DEFAULT NULL,
  `precio_unitario` double DEFAULT NULL,
  PRIMARY KEY (`id_ventas`,`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_producto`
--

LOCK TABLES `ventas_producto` WRITE;
/*!40000 ALTER TABLE `ventas_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas_producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-06-01 23:09:18
