-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pico_backup
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.22.04.1

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
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int NOT NULL,
  `post_compartilhado_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkPostCompartilhado` (`post_compartilhado_id`),
  KEY `fkUserPost` (`user_id`),
  CONSTRAINT `fkPostCompartilhado` FOREIGN KEY (`post_compartilhado_id`) REFERENCES `post` (`id`),
  CONSTRAINT `fkUserPost` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Sou fã desse filme!','2024-11-20 13:29:08',NULL,1,NULL),(2,'O homem quando está em paz não quer guerra com ninguém','2024-11-22 18:02:57',NULL,1,NULL),(3,'Comecei a andar de skate recentemente e tem sido uma experiência incrível, qual foi a primeira trick que vocês aprenderam?','2024-11-22 23:29:08',NULL,20,NULL),(4,'Comecei a andar de skate recentemente e tem sido uma experiência incrível, qual foi a primeira trick que vocês aprenderam?','2024-11-22 20:29:08',NULL,20,NULL),(5,'Comecei a andar de skate recentemente e tem sido uma experiência incrível, qual foi a primeira trick que vocês aprenderam?','2024-11-22 20:29:08',NULL,20,NULL),(6,'Comecei a andar de skate recentemente e tem sido uma experiência incrível, qual foi a primeira trick que vocês aprenderam?','2024-11-22 20:29:08',NULL,20,NULL),(7,'Comecei a andar de skate recentemente e tem sido uma experiência incrível, qual foi a primeira trick que vocês aprenderam?','2024-11-22 20:29:08',NULL,20,NULL),(8,'Alguém tem alguma dica sobre o hardflip? estou com dificuldades para aprender essa','2024-11-24 14:59:04',NULL,40,NULL),(9,'Esse filme é massa','2024-11-24 14:59:48',NULL,40,1),(10,'Me apaixonei hoje na pista de skate, alguém conhece essa menina?','2024-11-25 11:53:34',NULL,41,NULL),(11,'Meus skatistas favoritos!','2024-11-25 11:57:38',NULL,1,NULL),(12,'mano eu nao sei pra vocês, mas tipo pra mim é muito assim tipo tamo andando de skate tamo andando de skate ne...','2024-11-25 15:40:58',NULL,42,NULL),(13,'vai corinthiannnnnnnns','2024-11-25 15:50:36',NULL,43,NULL),(14,'é isso mesmo','2024-11-27 11:39:35',NULL,1,13),(15,'DUVIDO PEGAR NOIS','2024-11-28 11:58:59',NULL,2,13),(16,'Só gratidão por este dia <3','2024-11-28 12:00:22',NULL,2,NULL),(17,'é verdade mesmo cara','2024-11-28 12:54:35',NULL,3,12),(18,'de skate eu vim de skate eu vou ','2024-11-28 12:55:12',NULL,3,NULL),(19,'alguém tem vela pra me empresta??','2024-11-28 12:56:14',NULL,3,NULL),(20,'eu adoro meus amigos e me sinto  muito bem com eles','2024-11-28 13:00:07',NULL,42,NULL),(21,'eu ai','2024-11-28 13:05:30',NULL,44,NULL),(22,'hoje realizei meu sonho de tirar foto com o sonic','2024-11-28 13:07:39',NULL,44,20),(23,'Tenha um bom dia','2024-11-28 13:38:40',NULL,4,NULL),(24,'Meu fã','2024-11-28 13:49:38',NULL,5,NULL),(25,'fato','2024-11-28 13:54:07',NULL,6,2),(26,'Quem já viu a luta rock lee vs gaara ao som de linkin park da um like✌️??','2024-11-28 14:00:18',NULL,7,NULL),(27,'Minha história com o skate é linda','2024-11-28 14:01:08',NULL,7,NULL),(28,'Eu gosto de ir ao teatro, por isso vou a arena, porque todo jogo do coringão é um espetaculo????','2024-11-28 14:04:50',NULL,43,NULL),(29,'Mt bom','2024-11-28 14:17:51',NULL,1,20),(30,'Eu to esperto mas eu ando sincero','2024-11-28 14:23:22',NULL,34,NULL),(31,'tuesday','2024-11-28 14:25:05',NULL,34,NULL),(32,'siga luanomatriz','2024-11-28 14:43:49',NULL,35,NULL),(33,'Estou precisando de algumas dicas para mandar o flip?','2024-11-28 14:49:16',NULL,9,NULL),(34,'eu também','2024-11-28 21:19:51',NULL,46,1),(35,'muito top','2024-11-28 21:29:38',NULL,47,24),(36,'que massa','2024-11-28 21:50:13',NULL,48,27),(37,'que fantastico','2024-11-28 22:06:04',NULL,49,18);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-28 22:42:19
