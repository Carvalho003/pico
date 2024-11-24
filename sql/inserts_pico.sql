INSERT INTO user VALUES 
(1,'Hugo Ferreira','@carvalsk7','2003-09-30','carvalhohugo425@gmail.com','Senha123@',1,'1732119580720-871508167-perfil1.png','1732328157459-325039388-perfil1.png',(DATE_SUB(NOW(), INTERVAL 2 MONTH))),

(2,'Alice Souza','@alice.s','1995-04-15','alice.souza@example.com','senha123',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 2 MONTH))),

(3,'Bruno Silva','@bruno.s','1992-03-22','bruno.silva@example.com','senha456',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 2 MONTH))),

(4,'Carla Oliveira','@carla.o','1998-09-18','carla.oliveira@example.com','senha789',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 2 MONTH))),

(5,'Daniel Costa','@daniel.c','2000-11-05','daniel.costa@example.com','senha321',0,NULL,NULL,DATE_SUB(NOW(), INTERVAL 2 MONTH));


INSERT INTO user VALUES 

(6,'Eduardo Lima','@eduardo.l','1985-06-25','eduardo.lima@example.com','senha654',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 1 MONTH))),

(7,'Fernanda Azevedo','@fernanda.a','1993-01-17','fernanda.azevedo@example.com','senha987',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 1 MONTH))),

(8,'Gabriel Santos','@gabriel.s','1997-07-13','gabriel.santos@example.com','senha135',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 1 MONTH))),
(9,'Heloisa Martins','@heloisa.m','2002-05-30','heloisa.martins@example.com','senha246',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 1 MONTH))),

(10,'Igor Almeida','@igor.a','1991-12-21','igor.almeida@example.com','senha369',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 1 MONTH))),
(11,'Julia Ramos','@julia.r','1989-02-09','julia.ramos@example.com','senha147',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 1 MONTH))),
(12,'Karla Souza','@karla.s','1996-08-14','karla.souza@example.com','senha258',0,'1731712198030-120376591-perfil12.png','1731712228548-302420469-perfil12.png',(DATE_SUB(NOW(), INTERVAL 1 MONTH))),
(13,'Leonardo Mendes','@leonardo.m','1994-10-03','leonardo.mendes@example.com','senha369',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 1 MONTH))),
(14,'Mariana Rocha','@mariana.r','1999-07-28','mariana.rocha@example.com','senha789',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 1 MONTH))),
(15,'Nicolas Nunes','@nicolas.n','1988-12-06','nicolas.nunes@example.com','senha321',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 1 MONTH)));


INSERT INTO user VALUES 

(16,'Olivia Alves','@olivia.a','1993-04-23','olivia.alves@example.com','senha456',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 5 DAY))),
(17,'Paulo Andrade','@paulo.a','1990-09-01','paulo.andrade@example.com','senha654',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 5 DAY))),
(18,'Rafael Moreira','@rafael.m','1987-03-11','rafael.moreira@example.com','senha987',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 5 DAY))),
(19,'Sofia Ferreira','@sofia.f','2001-08-08','sofia.ferreira@example.com','senha135',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 5 DAY))),
(20,'Thiago Ribeiro','@thiago.r','1984-11-30','thiago.ribeiro@example.com','senha246',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 5 DAY))),
(21,'Vitoria Lopes','@vitoria.l','2003-05-15','vitoria.lopes@example.com','senha369',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 5 DAY))),
(28,'João Pedro de Paula','@jp','1982-07-18','jao@gmail.com','Senha123@',0,'1731524062303-493106094-perfil28.png','1732313535792-711324084-perfil28.png',(DATE_SUB(NOW(), INTERVAL 5 DAY))),
(29,'Vitoria S','@vivi','2008-09-21','vitorinha@gmail.com','Senha123@',0,'1731463238934-248995336-perfil29.png',NULL,(DATE_SUB(NOW(), INTERVAL 5 DAY))),
(34,'Matuê I','@tuezinhodo085','2008-09-21','matue@gmail.com','Senha123@',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 5 DAY))),
(35,'Luan de Oliveira','@luanskt','2008-09-21','guidon3@gmail.com','Senha123@',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 5 DAY)));



INSERT INTO user VALUES 
(36,'Junior Ortega','@cabecinha','2008-09-21','guidon4@gmail.com','Senha123@',0,NULL,NULL,(DATE_SUB(NOW(), INTERVAL 2 HOUR))),
(37,'Miguel Ramos Lima','@miguelito','2001-10-03','miguel@gmail.com','Senha123@',0,'1731463390112-85238173-perfil37.png',NULL,(DATE_SUB(NOW(), INTERVAL 2 HOUR))),
(38,'Luiza Gomes','@lu','2002-05-27','luiza@gmail.com','Senha123@',0,'1731543804115-303441232-perfil38.png',NULL,(DATE_SUB(NOW(), INTERVAL 2 HOUR))),
(39,'Victor David','@laranja','2001-05-03','victor@email.com','Senha123@',0,'1731720184003-267994982-perfil39.png','1731720220193-865420573-perfil39.png',(DATE_SUB(NOW(), INTERVAL 2 HOUR)));


INSERT INTO `seguidor` VALUES (1,1,1,'2024-11-13 15:00:00',NULL),
(1,2,1,'2024-10-31 17:17:36','2024-11-22 23:22:27'),
(1,12,1,'2024-11-15 16:39:50','2024-11-22 19:07:29'),
(1,28,0,'2024-10-31 10:43:57','2024-11-22 23:22:33'),
(1,29,1,'2024-11-11 10:17:29','2024-11-22 19:07:52'),
(1,37,1,'2024-11-12 23:24:07','2024-11-22 19:07:58'),
(1,38,1,'2024-11-13 21:19:04','2024-11-22 19:08:01'),
(1,39,1,'2024-11-15 22:24:37','2024-11-22 18:05:31'),
(2,1,1,'2024-10-30 14:26:44',NULL),
(2,12,1,'2024-11-15 20:08:15',NULL),
(2,28,1,'2024-10-31 11:29:48',NULL),
(2,29,1,'2024-11-10 15:32:39',NULL),
(2,36,1,'2024-11-12 12:53:17',NULL),
(2,37,1,'2024-11-12 23:24:08',NULL),
(2,38,1,'2024-11-13 21:19:27',NULL),
(3,1,1,'2024-11-13 13:47:56',NULL),
(3,2,0,'2024-10-31 17:17:49',NULL),
(3,28,1,'2024-11-13 15:51:33',NULL),
(3,38,1,'2024-11-13 21:40:50',NULL),
(4,1,1,'2024-10-30 14:26:58',NULL),
(4,39,1,'2024-11-15 22:26:52',NULL),
(5,1,1,'2024-10-30 14:29:33',NULL),
(5,12,1,'2024-11-15 20:08:11',NULL),
(6,1,1,'2024-10-30 14:30:56',NULL),
(7,1,1,'2024-10-30 14:33:57',NULL),
(7,28,1,'2024-11-05 14:11:09',NULL),
(8,1,1,'2024-11-13 10:01:32',NULL),
(8,28,0,'2024-10-31 11:30:11',NULL),
(9,1,1,'2024-10-30 14:45:59',NULL),
(9,2,1,'2024-10-31 17:17:38',NULL),
(9,28,0,'2024-10-31 11:29:30',NULL),
(10,1,1,'2024-10-30 15:21:34',NULL),
(10,29,1,'2024-11-12 22:57:30',NULL),
(11,1,1,'2024-11-13 15:09:35',NULL),
(11,28,1,'2024-10-31 12:42:12',NULL),
(12,1,1,'2024-11-20 14:28:35',NULL),
(12,28,1,'2024-10-31 12:42:15',NULL),
(12,39,1,'2024-11-15 22:25:54',NULL),
(13,1,1,'2024-11-22 23:14:04',NULL),
(14,1,1,'2024-11-13 15:31:39',NULL),
(14,2,1,'2024-10-31 17:17:39',NULL),
(14,28,1,'2024-10-31 11:33:03',NULL),
(15,1,1,'2024-11-13 15:31:38',NULL),
(20,1,1,'2024-10-30 14:31:02',NULL),
(20,2,1,'2024-10-31 17:17:39',NULL),
(20,28,1,'2024-10-31 11:33:05',NULL),
(21,28,1,'2024-11-04 12:05:31',NULL),
(28,1,1,'2024-11-04 12:38:30',NULL),
(28,29,1,'2024-11-12 20:27:41',NULL),
(28,36,1,'2024-11-12 10:27:46',NULL),
(28,38,1,'2024-11-13 21:19:44',NULL),
(29,1,1,'2024-11-22 16:26:33',NULL),
(29,37,1,'2024-11-12 23:25:38',NULL),
(29,38,1,'2024-11-13 21:18:30',NULL),
(29,39,1,'2024-11-15 22:23:51',NULL),
(36,29,1,'2024-11-12 22:58:23',NULL),
(39,1,1,'2024-11-22 23:14:28',NULL);

INSERT INTO `post` VALUES (1,'Sou fã desse filme!','2024-11-20 13:29:08',NULL,1,NULL),
(2,'O homem quando está em paz não quer guerra com ninguém','2024-11-22 18:02:57',NULL,1,NULL);

INSERT INTO `post` VALUES (7,'Comecei a andar de skate recentemente e tem sido uma experiência incrível, qual foi a primeira trick que vocês aprenderam?','2024-11-22 20:29:08',NULL,20,NULL);


INSERT INTO `anexos_post` VALUES (1,'1732120148939-461011068-mids.jpg','imagem',1,1);


INSERT INTO `interacao` VALUES (1,'2024-11-20 15:21:29','like',NULL,1,1,NULL),
(2,'2024-11-22 16:01:17','comentario','toppen',1,1,NULL),
(3,'2024-11-22 16:03:02','like',NULL,2,1,'2024-11-22 19:07:20'),
(4,'2024-11-22 17:53:35','like',NULL,3,1,'2024-11-22 23:13:51'),
(5,'2024-11-22 18:06:38','like',NULL,1,2,NULL),
(6,'2024-11-22 23:13:07','comentario','Ta midia',1,2,NULL);










select * from user;