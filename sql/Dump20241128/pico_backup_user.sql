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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  `userName` varchar(20) DEFAULT NULL,
  `dtNasc` date NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `nivel_permissao` tinyint DEFAULT '0',
  `foto` varchar(150) DEFAULT NULL,
  `fotoCapa` varchar(500) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `userName` (`userName`),
  CONSTRAINT `chkNivelPermissao` CHECK ((`nivel_permissao` in (0,1)))
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Hugo Ferreira','@carvalsk8','2003-09-30','carvalhohugo425@gmail.com','Senha123@',1,'1732840656792-195265908-perfil1.png','1732840786987-529341271-perfil1.png','2024-09-23 19:57:38'),(2,'Alice Souza','@alice.s','1995-04-15','alice.souza@example.com','senha123',0,'1732805830432-784700881-perfil2.png','1732805889431-904818616-perfil2.png','2024-09-23 19:57:38'),(3,'Bruno Silva dos Santos Gusta','@bruno.s','1992-03-22','bruno.silva@example.com','senha456',0,'1732806256901-645235351-perfil3.png','1732809224065-685996727-perfil3.png','2024-09-23 19:57:38'),(4,'Carla Oliveira','@carla.o','1998-09-18','carla.oliveira@example.com','senha789',0,'1732811790019-546647065-perfil4.png','1732811832900-543442756-perfil4.png','2024-09-23 19:57:38'),(5,'Daniel Costa','@daniel.c','2000-11-05','daniel.costa@example.com','senha321',0,'1732812172911-768036313-perfil5.png','1732812515660-764838073-perfil5.png','2024-09-23 19:57:38'),(6,'Eduardo Lima','@eduardo.l','1985-06-25','eduardo.lima@example.com','senha654',0,'1732812762327-590165866-perfil6.png','1732812827921-327114408-perfil6.png','2024-10-23 20:03:19'),(7,'Fernanda Azevedo','@fernanda.a','1993-01-17','fernanda.azevedo@example.com','senha987',0,'1732813109753-307866638-perfil7.png','1732813157498-942327252-perfil7.png','2024-10-23 20:03:19'),(8,'Gabriel Santos','@gabriel.s','1997-07-13','gabriel.santos@example.com','senha135',0,'1732813903600-332524190-perfil8.png','1732813965766-631894538-perfil8.png','2024-10-23 20:03:19'),(9,'Heloisa Martins','@heloisa.m','2002-05-30','heloisa.martins@example.com','senha246',0,'1732816091320-517265855-perfil9.png','1732816125833-502404230-perfil9.png','2024-10-23 20:03:19'),(10,'Igor Almeida','@igor.a','1991-12-21','igor.almeida@example.com','senha369',0,'1732816301667-528739674-perfil10.png','1732816378461-525274873-perfil10.png','2024-10-23 20:03:19'),(11,'Julia Ramos','@julia.r','1989-02-09','julia.ramos@example.com','senha147',0,NULL,NULL,'2024-10-23 20:03:19'),(12,'Karla Souza','@karla.s','1996-08-14','karla.souza@example.com','senha258',0,'1731712198030-120376591-perfil12.png','1731712228548-302420469-perfil12.png','2024-10-23 20:03:19'),(13,'Leonardo Mendes','@leonardo.m','1994-10-03','leonardo.mendes@example.com','senha369',0,NULL,NULL,'2024-10-23 20:03:19'),(14,'Mariana Rocha','@mariana.r','1999-07-28','mariana.rocha@example.com','senha789',0,NULL,NULL,'2024-10-23 20:03:19'),(15,'Nicolas Nunes','@nicolas.n','1988-12-06','nicolas.nunes@example.com','senha321',0,NULL,NULL,'2024-10-23 20:03:19'),(16,'Olivia Alves','@olivia.a','1993-04-23','olivia.alves@example.com','senha456',0,NULL,NULL,'2024-11-18 20:11:33'),(17,'Paulo Andrade','@paulo.a','1990-09-01','paulo.andrade@example.com','senha654',0,NULL,NULL,'2024-11-18 20:11:33'),(18,'Rafael Moreira','@rafael.m','1987-03-11','rafael.moreira@example.com','senha987',0,NULL,NULL,'2024-11-18 20:11:33'),(19,'Sofia Ferreira','@sofia.f','2001-08-08','sofia.ferreira@example.com','senha135',0,NULL,NULL,'2024-11-18 20:11:33'),(20,'Thiago Ribeiro','@thiago.r','1984-11-30','thiago.ribeiro@example.com','senha246',0,NULL,NULL,'2024-11-18 20:11:33'),(21,'Vitoria Lopes','@vitoria.l','2003-05-15','vitoria.lopes@example.com','senha369',0,NULL,NULL,'2024-11-18 20:11:33'),(28,'João Pedro de Paula','@jp','1982-07-18','jao@gmail.com','Senha123@',0,'1731524062303-493106094-perfil28.png','1732313535792-711324084-perfil28.png','2024-11-18 20:11:33'),(29,'Vitoria S','@vivi','2008-09-21','vitorinha@gmail.com','Senha123@',0,'1731463238934-248995336-perfil29.png',NULL,'2024-11-18 20:11:33'),(34,'Matuê I','@tuezinhodo085','2008-09-21','matue@gmail.com','Senha123@',0,'1732814498502-144631960-perfil34.png','1732814551009-706058644-perfil34.png','2024-11-18 20:11:33'),(35,'Luan de Oliveira','@luanomatriz','2008-09-21','guidon3@gmail.com','Senha123@',0,'1732815656802-592536841-perfil35.png','1732815721130-849858066-perfil35.png','2024-11-18 20:11:33'),(36,'Junior Ortega','@cabecinha','2008-09-21','guidon4@gmail.com','Senha123@',0,NULL,NULL,'2024-11-23 18:16:26'),(37,'Miguel Ramos Lima','@miguelito','2001-10-03','miguel@gmail.com','Senha123@',0,'1731463390112-85238173-perfil37.png',NULL,'2024-11-23 18:16:26'),(38,'Luiza Gomes','@lu','2002-05-27','luiza@gmail.com','Senha123@',0,'1731543804115-303441232-perfil38.png',NULL,'2024-11-23 18:16:26'),(39,'Victor David','@laranja','2001-05-03','victor@email.com','Senha123@',0,'1731720184003-267994982-perfil39.png','1731720220193-865420573-perfil39.png','2024-11-23 18:16:26'),(40,'Teto Silva','@tetobem','2001-02-03','tetinho@gmail.com','Senha123@',0,'1732471055632-688940500-perfil40.png','1732471096848-604784292-perfil40.png','2024-11-24 14:56:02'),(41,'Felipe Dos Santos','@felipinho','2004-08-02','felipinho@email.com','Senha123@',0,'1732546242596-798341052-perfil41.png','1732546309968-503855208-perfil41.png','2024-11-25 11:47:43'),(42,'Vitoria Moraes','@vitoradospfc','2004-12-13','vitoria@email.com','Senha123@',0,'1732559682437-352755049-perfil42.png','1732559747736-114375992-perfil42.png','2024-11-25 15:33:12'),(43,'Gabriel Santos','@gabrieusu','2004-10-16','gabriel@gmail.com','Gabriel123@',0,'1732813366932-662879062-perfil43.png','1732813613967-404287142-perfil43.png','2024-11-25 15:49:00'),(44,'Grigor Mascarenhas','@reidoflip','2002-02-01','grigor@gmail.com','Senha123@',0,'1732809759671-889357888-perfil44.png','1732809899522-204088333-perfil44.png','2024-11-28 13:01:49'),(45,'Jonathan Cafu','@cafu','2002-01-10','cafu@email.com','Senha123@',0,NULL,NULL,'2024-11-28 14:15:17'),(46,'Clara Brandao','@clara','2003-02-01','clara@email.com','Senha123@',0,NULL,NULL,'2024-11-28 21:18:26'),(47,'Ana julia','@aninha','2003-09-30','ana@email.com','Senha123@',0,'1732840230974-865893049-perfil47.png',NULL,'2024-11-28 21:28:44'),(48,'Maria F Madalena','@maria','2003-03-10','maria@gmail.com','Senha123@',0,'1732841445419-985145007-perfil48.png',NULL,'2024-11-28 21:49:09'),(49,'Joao Gabriel','@joaozino','2003-09-20','joa1@gmail.com','Senha123@',0,'1732842398333-750647871-perfil49.png',NULL,'2024-11-28 22:04:50');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
