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
-- Table structure for table `interacao`
--

DROP TABLE IF EXISTS `interacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dtHora` datetime DEFAULT CURRENT_TIMESTAMP,
  `tipo` varchar(20) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `user_id` int NOT NULL,
  `post_id` int NOT NULL,
  `visto` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkPostInteracao` (`post_id`),
  KEY `fkUserInteracao` (`user_id`),
  CONSTRAINT `fkPostInteracao` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  CONSTRAINT `fkUserInteracao` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `chkTipoInteracao` CHECK ((`tipo` in (_utf8mb4'like',_utf8mb4'comentario',_utf8mb4'compartilhamento')))
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interacao`
--

LOCK TABLES `interacao` WRITE;
/*!40000 ALTER TABLE `interacao` DISABLE KEYS */;
INSERT INTO `interacao` VALUES (1,'2024-11-20 15:21:29','like',NULL,1,1,NULL),(2,'2024-11-22 16:01:17','comentario','toppen',1,1,NULL),(3,'2024-11-22 16:03:02','like',NULL,2,1,'2024-11-22 19:07:20'),(4,'2024-11-22 17:53:35','like',NULL,3,1,'2024-11-22 23:13:51'),(5,'2024-11-22 18:06:38','like',NULL,1,2,NULL),(6,'2024-11-22 23:13:07','comentario','Ta midia',1,2,NULL),(7,'2024-11-23 22:49:10','like',NULL,1,3,NULL),(8,'2024-11-23 22:49:33','comentario','varialzinho no solo',1,3,NULL),(9,'2024-11-24 14:59:08','like',NULL,40,8,NULL),(10,'2024-11-24 14:59:12','like',NULL,40,2,NULL),(11,'2024-11-24 14:59:14','like',NULL,40,1,'2024-11-24 15:04:05'),(12,'2024-11-24 14:59:25','comentario','Eu gosto muito desse filme também',40,1,'2024-11-24 15:03:53'),(13,'2024-11-24 14:59:53','like',NULL,40,9,NULL),(14,'2024-11-24 15:03:43','like',NULL,1,8,NULL),(15,'2024-11-25 11:48:24','like',NULL,41,1,'2024-11-25 12:01:54'),(16,'2024-11-25 11:48:26','like',NULL,41,2,'2024-11-25 12:01:48'),(17,'2024-11-25 11:54:32','like',NULL,41,10,NULL),(18,'2024-11-25 11:55:10','like',NULL,1,10,NULL),(19,'2024-11-25 14:47:00','comentario','VAI SE FUDE KKKKKKKKKKKKK',1,10,NULL),(20,'2024-11-25 15:36:41','like',NULL,42,10,NULL),(22,'2024-11-25 15:41:14','like',NULL,42,1,NULL),(23,'2024-11-25 15:41:26','like',NULL,42,12,NULL),(24,'2024-11-25 15:50:40','like',NULL,43,13,NULL),(25,'2024-11-25 15:50:53','comentario','eu gostuuun',43,1,'2024-11-27 11:50:54'),(26,'2024-11-27 11:35:30','like',NULL,1,12,NULL),(27,'2024-11-27 11:39:41','like',NULL,1,14,NULL),(28,'2024-11-27 11:47:14','like',NULL,1,13,NULL),(29,'2024-11-27 11:49:18','comentario','namo do ranier ?',1,10,NULL),(30,'2024-11-28 11:58:21','like',NULL,2,11,NULL),(31,'2024-11-28 11:58:36','comentario','mc ig anda muito mesmo',2,11,NULL),(32,'2024-11-28 12:56:59','like',NULL,3,17,NULL),(33,'2024-11-28 13:00:49','like',NULL,42,20,NULL),(34,'2024-11-28 13:05:43','like',NULL,44,21,NULL),(35,'2024-11-28 13:06:12','comentario','tem mulher que nao depende de homem problema delas!',44,11,NULL),(36,'2024-11-28 13:06:41','like',NULL,44,20,NULL),(37,'2024-11-28 13:07:04','comentario','a amizade é tudo irmão !',44,20,NULL),(38,'2024-11-28 13:28:57','like',NULL,44,16,NULL),(39,'2024-11-28 13:39:07','like',NULL,4,23,NULL),(40,'2024-11-28 13:39:55','like',NULL,4,20,NULL),(41,'2024-11-28 13:40:09','comentario','você esta linda amigars',4,20,NULL),(42,'2024-11-28 13:40:41','comentario','??',4,20,NULL),(43,'2024-11-28 13:48:47','like',NULL,5,23,NULL),(44,'2024-11-28 14:12:52','like',NULL,8,27,NULL),(45,'2024-11-28 14:12:56','like',NULL,8,26,NULL),(46,'2024-11-28 14:13:18','comentario','??',8,26,NULL),(47,'2024-11-28 14:17:26','like',NULL,1,20,NULL),(48,'2024-11-28 14:17:41','comentario','Divos??',1,20,NULL),(49,'2024-11-28 14:23:28','like',NULL,34,30,NULL),(50,'2024-11-28 14:23:49','like',NULL,34,20,NULL),(51,'2024-11-28 14:24:54','comentario','quem não é tue é carta fora do baralho✌️',34,20,NULL),(52,'2024-11-28 14:43:51','like',NULL,35,32,NULL),(53,'2024-11-28 14:49:22','like',NULL,9,33,NULL),(54,'2024-11-28 14:49:35','like',NULL,9,20,NULL),(55,'2024-11-28 14:53:26','like',NULL,10,33,NULL),(56,'2024-11-28 14:53:41','comentario','chuta mais na ponta?',10,33,NULL),(57,'2024-11-28 14:53:50','like',NULL,10,20,NULL),(58,'2024-11-28 14:53:52','like',NULL,10,29,NULL),(59,'2024-11-28 14:54:32','like',NULL,10,24,NULL),(60,'2024-11-28 21:19:23','like',NULL,46,20,NULL),(61,'2024-11-28 21:19:24','like',NULL,46,29,NULL),(62,'2024-11-28 21:19:31','comentario','que legal',46,29,NULL),(63,'2024-11-28 21:21:31','like',NULL,1,31,NULL),(64,'2024-11-28 21:29:20','like',NULL,47,20,NULL),(65,'2024-11-28 21:29:21','like',NULL,47,29,NULL),(66,'2024-11-28 21:29:30','comentario','Like like',47,29,'2024-11-28 21:31:02'),(67,'2024-11-28 21:29:58','like',NULL,47,12,NULL),(68,'2024-11-28 21:49:52','like',NULL,48,20,NULL),(69,'2024-11-28 21:50:03','comentario','que legal',48,20,NULL),(70,'2024-11-28 21:50:20','like',NULL,48,36,NULL),(72,'2024-11-28 21:51:13','like',NULL,1,33,NULL),(73,'2024-11-28 22:05:34','like',NULL,49,20,NULL),(74,'2024-11-28 22:05:52','comentario','ok',49,19,NULL);
/*!40000 ALTER TABLE `interacao` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-28 22:42:18
