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
-- Table structure for table `anexos_post`
--

DROP TABLE IF EXISTS `anexos_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anexos_post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `anexo` varchar(80) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `visibilidade` tinyint DEFAULT '1',
  `post_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkPostAnexo` (`post_id`),
  CONSTRAINT `fkPostAnexo` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  CONSTRAINT `chkTipo` CHECK ((`tipo` in (_utf8mb4'audio',_utf8mb4'imagem',_utf8mb4'video')))
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anexos_post`
--

LOCK TABLES `anexos_post` WRITE;
/*!40000 ALTER TABLE `anexos_post` DISABLE KEYS */;
INSERT INTO `anexos_post` VALUES (1,'1732120148939-461011068-mids.jpg','imagem',1,1),(2,'1732546414681-903114399-menina.jpg','imagem',1,10),(3,'1732546658652-690552573-ab6761610000517465cdcae2cae45e4b774c51af.jpg','imagem',1,11),(4,'1732546658657-865714356-images.jpg','imagem',1,11),(5,'1732546658760-735253253-rayssa.jpg','imagem',1,11),(6,'1732546658655-198316621-images (1).jpg','imagem',1,11),(7,'1732546658658-199511154-tiago.jpg','imagem',1,11),(8,'1732806022911-930561633-Captura de tela 2024-11-28 115956.png','imagem',1,16),(9,'1732809313017-605674335-Captura de tela 2024-11-28 120324.png','imagem',1,18),(10,'1732809374577-425091665-Captura de tela 2024-11-28 120324.png','imagem',1,19),(11,'1732809608115-511954360-WhatsApp Image 2024-11-28 at 12.59.28.jpeg','imagem',1,20),(12,'1732809608108-513176753-WhatsApp Image 2024-11-28 at 12.59.29.jpeg','imagem',1,20),(13,'vitoria.jpeg','imagem',1,20),(14,'1732809608156-817103364-WhatsApp Image 2024-11-28 at 12.59.22.jpeg','imagem',1,20),(15,'1732809931055-677495060-anos00.jpg','imagem',1,21),(16,'1732811921589-750079960','imagem',1,23),(17,'1732812579566-311374460','imagem',1,24),(18,'1732813269034-761215030','imagem',1,27),(19,'1732813491079-102494054','imagem',1,28),(20,'1732814603300-732138415','imagem',1,30),(21,'1732814705646-397503306','imagem',1,31),(22,'1732815829823-126004390','imagem',1,32);
/*!40000 ALTER TABLE `anexos_post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-28 22:42:20
