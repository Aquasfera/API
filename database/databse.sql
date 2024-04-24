CREATE DATABASE  IF NOT EXISTS `aquaesfera` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `aquaesfera`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: aquaesfera
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `animal_location`
--

DROP TABLE IF EXISTS `animal_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animal_location` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `locationId` int NOT NULL,
  `animalId` int NOT NULL,
  PRIMARY KEY (`locationId`,`animalId`),
  KEY `animalId` (`animalId`),
  CONSTRAINT `animal_location_ibfk_1` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `animal_location_ibfk_2` FOREIGN KEY (`animalId`) REFERENCES `animals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal_location`
--

LOCK TABLES `animal_location` WRITE;
/*!40000 ALTER TABLE `animal_location` DISABLE KEYS */;
INSERT INTO `animal_location` VALUES ('2024-04-05 14:29:08','2024-04-05 14:29:08',1,5),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,6),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,7),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,8),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,9),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,10),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,11),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,12),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,13),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,14),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,15),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,16),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,17),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,18),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,19),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,20),('2024-04-05 14:29:08','2024-04-05 14:29:08',1,21),('2024-04-05 14:29:08','2024-04-05 14:29:08',2,5),('2024-04-05 14:29:08','2024-04-05 14:29:08',2,6),('2024-04-05 14:29:08','2024-04-05 14:29:08',2,26),('2024-04-05 14:29:08','2024-04-05 14:29:08',2,28),('2024-04-05 14:29:08','2024-04-05 14:29:08',2,29),('2024-04-05 14:29:08','2024-04-05 14:29:08',2,31),('2024-04-05 14:29:08','2024-04-05 14:29:08',2,33),('2024-04-05 14:29:08','2024-04-05 14:29:08',3,5),('2024-04-05 14:29:08','2024-04-05 14:29:08',3,6),('2024-04-05 14:29:08','2024-04-05 14:29:08',3,22),('2024-04-05 14:29:08','2024-04-05 14:29:08',3,23),('2024-04-05 14:29:08','2024-04-05 14:29:08',3,24),('2024-04-05 14:29:08','2024-04-05 14:29:08',3,25),('2024-04-05 14:29:08','2024-04-05 14:29:08',3,27),('2024-04-05 14:29:08','2024-04-05 14:29:08',3,30),('2024-04-05 14:29:08','2024-04-05 14:29:08',3,32);
/*!40000 ALTER TABLE `animal_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animals`
--

DROP TABLE IF EXISTS `animals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `specie_id` int DEFAULT NULL,
  `size` varchar(255) NOT NULL,
  `scientific_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `specie_id` (`specie_id`),
  CONSTRAINT `animals_ibfk_1` FOREIGN KEY (`specie_id`) REFERENCES `species` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animals`
--

LOCK TABLES `animals` WRITE;
/*!40000 ALTER TABLE `animals` DISABLE KEYS */;
INSERT INTO `animals` VALUES (5,'Sargo','Cuerpo ovalado y muy plano de color plateado, con una mancha negra en la raíz de su cola y encima de los ojos, su boca tiene gruesos labios, algunos tienen bandas verticales oscuras en la parte superior de su cuerpo sobre todo cuando son jóvenes, miden entre 15cm y 30 cm.','2024-04-23 16:00:18','2024-04-23 16:00:18',1,'23cm','Diplodus Sargus'),(6,'Sargo Picudo','Cuerpo ovalado y muy plano de color plateado, con una mancha negra en la raíz de su cola la cual termina en color negro, también tiene un pequeña mancha negra en la raíz de su aleta pectoral. Su boca es aguda y alargada, algunos tienen bandas verticales oscurecidas en la parte superior de su cuerpo sobre todo cuando son jóvenes, pueden llegar a medir hasta 50cm.','2024-04-23 16:00:58','2024-04-23 16:00:58',1,'18cm','Diplodus puntazzo'),(7,'Urta','Es una especie muy llamativa debido a las bandas verticales de color rojizo que atraviesan su cuerpo plateado azuloso, de perfil ovalado con una larga tira de espinas superior. Suele medir unos 40-60cm, aunque puede llegar a los 90cm de longitud.','2024-04-23 16:01:42','2024-04-23 16:01:42',1,'N/C','Pargus Auriga'),(8,'Dentón','Cuerpo ovalado y plano, mayoritariamente plateado manchado con pequeñas marcas oscuras. Tiene una cabeza grande, de morro extenso que finaliza en una boca grande cuyo labio inferior está más pronunciado y dientes afilados. Tiene una longitud de entre 30cm y 50cm.','2024-04-23 16:02:11','2024-04-23 16:02:11',1,'35cm','Dentex Dentex'),(9,'Pez Piloto','Cuerpo alargado y comprimido, especie peciforme, tiene escamas muy pequeñas, de color gris azulado, destacan 6 bandas verticales oscuras que atraviesan su cuerpo. Pueden alcanzar los 65 cm de longitud.','2024-04-23 16:02:49','2024-04-23 16:02:49',1,'N/C','Naucrates Ductor'),(10,'Sardina','Cuerpo alargado y de forma cilíndrica, sus mandíbulas tienen la misma longitud que su cabeza, no pasan de los 20 cm de longitud. El dorso tiene una coloración azul verdosa, mientras el lateral y la parte ventral es plateada, además presentas una serie de puntos oscuros alineados horizontalmente en la linea que separa la tonalidad del dorso con el resto.','2024-04-23 16:03:14','2024-04-23 16:03:14',1,'N/C','Sardina Pilchardus'),(11,'Roncador','Cuerpo oblongo y comprimido, boca en punta pequeña, cola azulada, su color es plateado-amarillento.','2024-04-23 16:03:38','2024-04-23 16:03:38',1,'N/C','Pomadasys Incisus'),(12,'Tordo de 5 Manchas','Es un pez bastante pequeño, no más de 15cm de longitud, cuerpo comprimido, tiene pequeñas manchas marrones, amarillas y azulonas que lo cubren, un vientre de color blanco y un lomo más marrón.','2024-04-23 16:04:01','2024-04-23 16:04:01',1,'N/C','Symphodus Roissali'),(13,'Porredana','Tiene el cuerpo alargado, oblongo y comprimido. Las hembras tienen colores base verdes, pardos o pardos-verdes. Los machos son más vistosos, con colores base pardo-rojos, con la cabeza decorada con líneas de color rojo. Tiene un tamaño no superior a 28cm.','2024-04-23 16:04:33','2024-04-23 16:04:33',1,'28cm','Symphodus Melops'),(14,'Castañuela','Se trata de un pequeño pez de entre 8 y 10 cm, cuerpo ovalado y aplanado, cabeza pequeña y boca pequeña, su cola está bifurcada, es de color marrón oscuro e incluso negro, su vientre es más claro.','2024-04-23 16:05:05','2024-04-23 16:05:05',1,'10cm','Seriola Dumerili'),(15,'Chucha','Cuerpo alto, comprimido y alargado, larga aleta dorsal, color de tonos azulados mezclado con grises y verdes, tiene manchas azules en cuerpo y aletas.','2024-04-23 16:05:51','2024-04-23 16:05:51',1,'10cm','Spicara maena'),(16,'Jurel','Cuerpo un poco comprimido, no mide más de 35cm de longitud, tiene 2 largas aletas laterales puntiagudas, una cabeza de forma afilada, tiene una característica línea lateral, es de color gris o verde azulado.','2024-04-23 16:06:34','2024-04-23 16:06:34',1,'15cm','Trachurus Trachurus'),(17,'Delfín Común','Es un delfín esbelto con un hocico más corto en comparación con el delfín común costero (Delphinus capensis). Su coloración es similar a Delphinus capensis, con una parte dorsal de tono gris oscuro y una parte ventral blanca, mientras que los lados muestran un tono gris claro desde la cabeza hasta la cola. Estos delfines pueden alcanzar longitudes de hasta 2.4 metros y un peso máximo de 110 kg.','2024-04-23 16:08:37','2024-04-23 16:08:37',1,'2.4m','Delphinus Delphis'),(18,'Tintorera','Es un tiburón de cuerpo alargado y hocico en forma de cono, de aletas pectorales alargadas, es de color azul intenso con panza blanca y unas manchas negras en las puntas de las aletas, su mandíbula puede proyectarse hacia adelante para facilitar su temible mordedura. Suelen medir alrededor de 2,5 metros de longitud y pesar unos 80Kg.','2024-04-23 16:09:14','2024-04-23 16:09:14',1,'2.4m','Prionace Glauca'),(19,'Merluza','Cuerpo alargado con boca grande y dientes afilados, su coloración es gris oscura, suele medir entre 40 y 70 cm, pudiendo llegar a los 120cm.','2024-04-23 16:10:03','2024-04-23 16:10:03',1,'20cm','Merluccius merluccius'),(20,'Tomate','Su tamaño es de unos 5cm a 7cm de altura y unos 6 cm de diámetro, destaca su uniforme mayormente rojizo (aunque también puede ser verde, marrón o naranja) y tiene 2 formas, su forma recogida es muy similar a la de un tomate y su forma extendida se compone de alrededor de unos 200 tentáculos cortos.','2024-04-23 16:17:06','2024-04-23 16:17:06',2,'N/C','Actinia Equina'),(21,'Anemona del Ermitaño','Anemona que se compone de una columna adhesiva con tentáculos en la parte superior. Su tamaño no suele ser mayor que 10 cm de altura. Su color suele ser pálido tirando a amarillento o grisáceo.','2024-04-23 16:17:51','2024-04-23 16:17:51',2,'N/C','Anemonia Sulcata'),(22,'Gran tiburón blanco','Carcharodon carcharias, conocido como el gran tiburón blanco, se encuentra en las aguas costeras y oceánicas de los océanos y mares templados y subtropicales en todo el mundo. Como depredador solitario, se alimenta de peces, tiburones, rayas y mamíferos marinos, y también puede aprovecharse de las carcasas de ballenas a la deriva. Con un sentido de la vista muy desarrollado, se muestra curioso y observador con respecto a objetos y actividades. En ocasiones, pueden producirse ataques a surfistas.','2024-04-23 16:26:35','2024-04-23 16:26:35',1,'450 cm',''),(23,'Atún rojo','El atún rojo es un pez grande y rápido conocido por su carne de alta calidad. Es una especie altamente migratoria que habita en aguas templadas y tropicales del Atlántico.','2024-04-23 16:34:26','2024-04-23 16:34:26',1,'Hasta 3 metros de longitud y más de 600 kg de peso','Thunnus thynnus'),(24,'Bacalao','El bacalao es un pez de agua fría que se encuentra en el Atlántico Norte. Es conocido por su carne blanca y firme, y es una especie importante para la pesca comercial.','2024-04-23 16:36:32','2024-04-23 16:36:32',1,'Hasta 1.8 metros de longitud y 45 kg de peso','Gadus morhua'),(25,'Pejeperro','El pejeperro es un pez de la familia de los carángidos que se encuentra en el Atlántico suroccidental. Es un depredador voraz que se alimenta de peces más pequeños.','2024-04-23 16:37:46','2024-04-23 16:37:46',1,'Hasta 70 cm de longitud y 5 kg de peso','Caranx crysos'),(26,'Lubina','Es un pez depredador de color plateado con rayas oscuras a lo largo del cuerpo. Habita en aguas costeras y es muy apreciado por su sabor.','2024-04-23 16:39:26','2024-04-23 16:39:26',1,'1m','Dicentrarchus labrax'),(27,'Mero','El mero es un pez de aguas profundas que se encuentra en el Atlántico tropical y subtropical. Es conocido por su gran tamaño.','2024-04-23 16:39:33','2024-04-23 16:39:33',1,'Hasta 3 metros de longitud y 400 kg de peso','Epinephelus marginatus'),(28,'Merluza','Es un pez de cuerpo alargado, con un tono grisáceo en la parte superior y plateado en la inferior. Es muy común en el mar Cantábrico y se consume ampliamente.','2024-04-23 16:40:07','2024-04-23 16:40:07',1,'1.5m','Merluccius merluccius'),(29,'Raya','Es un pez cartilaginoso con cuerpo aplanado y una cola larga. Se encuentra en fondos marinos de arena o grava.','2024-04-23 16:40:29','2024-04-23 16:40:29',1,'1m','Raja clavata'),(30,'Róbalo','El róbalo es un pez que se encuentra en aguas costeras del Atlántico. Es una especie popular entre los pescadores deportivos debido a su tamaño y habilidad para luchar.','2024-04-23 16:40:45','2024-04-23 16:40:45',1,'Hasta 1 metro de longitud y 12 kg de peso','Dicentrarchus labrax'),(31,'Bonito del Norte','Es un tipo de atún con cuerpo estilizado y aletas pectorales largas. Es conocido por su carne de alta calidad.','2024-04-23 16:40:47','2024-04-23 16:40:47',1,'1.4m','Thunnus alalunga'),(32,'Rodaballo','Es un pez plano con forma de rombo, con ojos en la parte superior del cuerpo. Es muy apreciado en la gastronomía.','2024-04-23 16:41:10','2024-04-23 16:41:10',1,'1m','Scophthalmus maximus'),(33,'Salmón atlántico','El salmón atlántico es una especie de salmón que se encuentra en el océano Atlántico y sus afluentes. Es conocido por su migración aguas arriba para desovar.','2024-04-23 16:41:52','2024-04-23 16:41:52',1,'Hasta 1.5 metros de longitud y 40 kg de peso','Salmo salar');
/*!40000 ALTER TABLE `animals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follows`
--

DROP TABLE IF EXISTS `follows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follows` (
  `id` int NOT NULL AUTO_INCREMENT,
  `followerId` int NOT NULL,
  `followedId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `followerId` (`followerId`),
  KEY `followedId` (`followedId`),
  CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`followerId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`followedId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follows`
--

LOCK TABLES `follows` WRITE;
/*!40000 ALTER TABLE `follows` DISABLE KEYS */;
INSERT INTO `follows` VALUES (53,4,4,'2024-04-24 15:07:21','2024-04-24 15:07:21'),(54,4,25,'2024-04-24 15:07:22','2024-04-24 15:07:22'),(55,4,26,'2024-04-24 15:18:39','2024-04-24 15:18:39');
/*!40000 ALTER TABLE `follows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `postId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `postId` (`postId`),
  CONSTRAINT `likes_ibfk_377` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_ibfk_378` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Mar Mediterráneo','Lorem fistrum a wan me cago en tus muelas papaar papaar apetecan de la pradera a gramenawer ese hombree la caidita diodenoo por la gloria de mi madre. ','2024-04-05 14:24:56','2024-04-05 14:24:56'),(2,'Mar Cantábrico','Lorem fistrum a wan me cago en tus muelas papaar papaar apetecan de la pradera a gramenawer ese hombree la caidita diodenoo por la gloria de mi madre. ','2024-04-05 14:25:14','2024-04-05 14:25:14'),(3,'Óceano Atlántico','Lorem fistrum a wan me cago en tus muelas papaar papaar apetecan de la pradera a gramenawer ese hombree la caidita diodenoo por la gloria de mi madre. ','2024-04-23 15:04:56','2024-04-23 15:04:56');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `animal_id` int DEFAULT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `animal_id` (`animal_id`),
  CONSTRAINT `photos_ibfk_1` FOREIGN KEY (`animal_id`) REFERENCES `animals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (3,'2024-04-08 14:06:12','2024-04-08 14:06:12',NULL,'sarpa.jpg'),(4,'2024-04-08 14:26:01','2024-04-08 14:26:01',NULL,'mojarra.jpg'),(29,'2024-04-10 17:17:10','2024-04-10 17:17:10',NULL,'espana.jpg'),(30,'2024-04-10 17:17:57','2024-04-10 17:17:57',NULL,'1712769471962espana.jpg'),(31,'2024-04-16 15:10:39','2024-04-16 15:10:39',NULL,'espana.webp'),(55,'2024-04-23 16:49:43','2024-04-23 16:49:43',20,'Actinia_equina21713890983693.webp'),(56,'2024-04-23 16:50:04','2024-04-23 16:50:04',20,'Actinia-equina1713891004703.webp'),(57,'2024-04-23 16:50:17','2024-04-23 16:50:17',20,'arc_265242_g1713891016990.webp'),(58,'2024-04-23 16:52:43','2024-04-23 16:52:43',21,'descarga1713891163756.webp'),(59,'2024-04-23 16:56:06','2024-04-23 16:56:06',22,'tiburonblanco11713891366034.webp'),(60,'2024-04-23 16:56:19','2024-04-23 16:56:19',22,'tiburon21713891379387.webp'),(61,'2024-04-23 16:56:28','2024-04-23 16:56:28',22,'tiburon31713891388653.webp'),(62,'2024-04-23 16:58:32','2024-04-23 16:58:32',23,'atun11713891511912.webp'),(63,'2024-04-23 16:58:41','2024-04-23 16:58:41',23,'atun21713891520838.webp'),(64,'2024-04-23 16:58:48','2024-04-23 16:58:48',23,'atun31713891528117.webp'),(65,'2024-04-23 17:00:41','2024-04-23 17:00:41',20,'el-cangrejo-ermitano-ocupa-las-conchas-vacias-de-los-moluscos-transportando-estas-como-casas-moviles1713891641707.webp'),(66,'2024-04-23 17:03:20','2024-04-23 17:03:20',24,'bacalao11713891800094.webp'),(67,'2024-04-23 17:03:29','2024-04-23 17:03:29',24,'bacalao21713891809419.webp'),(68,'2024-04-23 17:03:38','2024-04-23 17:03:38',24,'bacalao31713891817587.webp'),(69,'2024-04-23 17:04:44','2024-04-23 17:04:44',5,'sargo11713891884657.webp'),(70,'2024-04-23 17:04:53','2024-04-23 17:04:53',5,'sargo21713891893837.webp'),(71,'2024-04-23 17:05:02','2024-04-23 17:05:02',5,'sargo31713891902457.webp'),(72,'2024-04-23 17:05:18','2024-04-23 17:05:18',6,'saro-picudo11713891918662.webp'),(73,'2024-04-23 17:05:28','2024-04-23 17:05:28',6,'sargo-picudo21713891928558.webp'),(74,'2024-04-23 17:05:38','2024-04-23 17:05:38',6,'sargo-picudo31713891937996.webp'),(75,'2024-04-23 17:05:50','2024-04-23 17:05:50',7,'urta11713891950261.webp'),(76,'2024-04-23 17:06:00','2024-04-23 17:06:00',7,'urta21713891959940.webp'),(77,'2024-04-23 17:06:13','2024-04-23 17:06:13',8,'dente11713891972940.webp'),(78,'2024-04-23 17:06:22','2024-04-23 17:06:22',8,'denton21713891981860.webp'),(79,'2024-04-23 17:06:29','2024-04-23 17:06:29',8,'denton31713891989288.webp'),(80,'2024-04-23 17:06:36','2024-04-23 17:06:36',25,'pejeperro11713891993733.webp'),(81,'2024-04-23 17:06:44','2024-04-23 17:06:44',25,'pejeperro21713892004846.webp'),(82,'2024-04-23 17:06:53','2024-04-23 17:06:53',25,'pejeperro31713892012956.webp'),(83,'2024-04-23 17:07:20','2024-04-23 17:07:20',9,'pampoljpg1713892040377.webp'),(84,'2024-04-23 17:07:30','2024-04-23 17:07:30',9,'pampol21713892050056.webp'),(85,'2024-04-23 17:07:47','2024-04-23 17:07:47',10,'sardina11713892067658.webp'),(86,'2024-04-23 17:08:04','2024-04-23 17:08:04',10,'sardina21713892084769.webp'),(87,'2024-04-23 17:08:48','2024-04-23 17:08:48',11,'roncador11713892128679.webp'),(88,'2024-04-23 17:08:54','2024-04-23 17:08:54',11,'roncador21713892133994.webp'),(89,'2024-04-23 17:09:21','2024-04-23 17:09:21',12,'roncon5manchas11713892161894.webp'),(90,'2024-04-23 17:09:28','2024-04-23 17:09:28',12,'roncon5manchas21713892168856.webp'),(91,'2024-04-24 13:41:08','2024-04-24 13:41:08',13,'porredana11713966068179.webp'),(92,'2024-04-24 13:41:21','2024-04-24 13:41:21',13,'porredana21713966081383.webp'),(93,'2024-04-24 13:41:30','2024-04-24 13:41:30',13,'porredana31713966090748.webp'),(94,'2024-04-24 13:41:43','2024-04-24 13:41:43',14,'castaÃ±uela11713966103680.webp'),(95,'2024-04-24 13:41:56','2024-04-24 13:41:56',14,'castaÃ±uela21713966115864.webp'),(96,'2024-04-24 13:42:09','2024-04-24 13:42:09',15,'Cucha11713966129497.webp'),(97,'2024-04-24 13:42:24','2024-04-24 13:42:24',16,'jurel1713966144727.webp'),(98,'2024-04-24 13:42:39','2024-04-24 13:42:39',16,'jurel21713966159849.webp'),(99,'2024-04-24 13:42:47','2024-04-24 13:42:47',17,'delfin11713966167721.webp'),(100,'2024-04-24 13:42:55','2024-04-24 13:42:55',17,'delfin21713966175432.webp'),(101,'2024-04-24 13:43:01','2024-04-24 13:43:01',17,'delfin31713966181544.webp'),(102,'2024-04-24 13:43:12','2024-04-24 13:43:12',18,'tintorera11713966192367.webp'),(103,'2024-04-24 13:43:22','2024-04-24 13:43:22',18,'tintorera21713966202341.webp'),(104,'2024-04-24 13:43:28','2024-04-24 13:43:28',18,'tintorera31713966207936.webp'),(105,'2024-04-24 13:43:40','2024-04-24 13:43:40',19,'merluza11713966219919.webp'),(106,'2024-04-24 13:43:47','2024-04-24 13:43:47',19,'merluza21713966227372.webp'),(107,'2024-04-24 13:45:59','2024-04-24 13:45:59',26,'lubina11713966359145.webp'),(108,'2024-04-24 13:46:14','2024-04-24 13:46:14',26,'lubina21713966373744.webp'),(109,'2024-04-24 13:46:27','2024-04-24 13:46:27',26,'lubina31713966387397.webp'),(110,'2024-04-24 13:47:43','2024-04-24 13:47:43',30,'robalo-11713966463536.webp'),(111,'2024-04-24 13:48:06','2024-04-24 13:48:06',30,'robalo-21713966486611.webp'),(112,'2024-04-24 13:48:19','2024-04-24 13:48:19',30,'robalo-31713966499209.webp'),(113,'2024-04-24 13:49:11','2024-04-24 13:49:11',27,'mero11713966551108.webp'),(114,'2024-04-24 13:49:19','2024-04-24 13:49:19',27,'mero21713966559537.webp'),(115,'2024-04-24 13:49:33','2024-04-24 13:49:33',27,'mero31713966572859.webp'),(116,'2024-04-24 13:52:35','2024-04-24 13:52:35',31,'bonito-11713966755528.webp'),(117,'2024-04-24 13:52:45','2024-04-24 13:52:45',31,'bonito-21713966765031.webp'),(118,'2024-04-24 13:55:16','2024-04-24 13:55:16',28,'merluza11713966915769.webp'),(119,'2024-04-24 13:55:24','2024-04-24 13:55:24',28,'merluza21713966924211.webp'),(120,'2024-04-24 13:56:06','2024-04-24 13:56:06',32,'rodaballo-11713966966076.webp'),(121,'2024-04-24 13:56:16','2024-04-24 13:56:16',32,'rodaballo-21713966976292.webp'),(122,'2024-04-24 13:58:53','2024-04-24 13:58:53',33,'salmon-21713967133103.webp'),(123,'2024-04-24 13:59:02','2024-04-24 13:59:02',33,'salmon-31713967142466.webp'),(124,'2024-04-24 13:59:48','2024-04-24 13:59:48',29,'raya11713967188500.webp'),(125,'2024-04-24 13:59:56','2024-04-24 13:59:56',29,'raya21713967196613.webp'),(126,'2024-04-24 14:00:09','2024-04-24 14:00:09',29,'raya31713967209083.webp'),(127,'2024-04-24 14:00:31','2024-04-24 14:00:31',33,'salmon-11713967231756.webp');
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `url` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  `animal_id` int DEFAULT NULL,
  `location_id` int DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `animal_id` (`animal_id`),
  KEY `location_id` (`location_id`),
  CONSTRAINT `posts_ibfk_963` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `posts_ibfk_964` FOREIGN KEY (`animal_id`) REFERENCES `animals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `posts_ibfk_965` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (25,'2024-04-24 14:45:23','2024-04-24 14:45:23','robalo-pesca011713969923757.webp',26,30,1,'Robalo en el agua!');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `species`
--

DROP TABLE IF EXISTS `species`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `species` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `species`
--

LOCK TABLES `species` WRITE;
/*!40000 ALTER TABLE `species` DISABLE KEYS */;
INSERT INTO `species` VALUES (1,'Vertebrado','2024-04-05 14:29:08','2024-04-05 14:29:08',''),(2,'Invertebrado','2024-04-05 14:29:25','2024-04-05 14:29:25','');
/*!40000 ALTER TABLE `species` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'admin','$2b$10$DsRgTAqb5VMDQL6XVZ1C.ucd7DtaPcEbK9KUrSGHS7775SLAr.liW','4',1,'2024-04-09 14:08:22','2024-04-09 14:08:22'),(25,'mireia','$2b$10$5TegwBWcZgy1ibkCskz/ou2AkbyExJE7AAHcDbPoiWZA1cea5C/v2','8',1,'2024-04-24 14:36:40','2024-04-24 14:36:40'),(26,'Luisa','$2b$10$awMFmr/XSNSKmZWmyKlhL.ab0P5UZ.tP8IpL.ty5Efy6m.L.QEshO','0',1,'2024-04-24 14:41:31','2024-04-24 14:41:31');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-24 19:03:04
