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
-- Temporary view structure for view `usuarios_mes_passado`
--

DROP TABLE IF EXISTS `usuarios_mes_passado`;
/*!50001 DROP VIEW IF EXISTS `usuarios_mes_passado`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `usuarios_mes_passado` AS SELECT 
 1 AS `usuarios`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `usuarios_mes_atual`
--

DROP TABLE IF EXISTS `usuarios_mes_atual`;
/*!50001 DROP VIEW IF EXISTS `usuarios_mes_atual`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `usuarios_mes_atual` AS SELECT 
 1 AS `usuarios`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `post_three`
--

DROP TABLE IF EXISTS `post_three`;
/*!50001 DROP VIEW IF EXISTS `post_three`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `post_three` AS SELECT 
 1 AS `id`,
 1 AS `posts`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `post_five`
--

DROP TABLE IF EXISTS `post_five`;
/*!50001 DROP VIEW IF EXISTS `post_five`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `post_five` AS SELECT 
 1 AS `id`,
 1 AS `posts`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `post_two_days`
--

DROP TABLE IF EXISTS `post_two_days`;
/*!50001 DROP VIEW IF EXISTS `post_two_days`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `post_two_days` AS SELECT 
 1 AS `id`,
 1 AS `posts`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `users_com_mais_postagens`
--

DROP TABLE IF EXISTS `users_com_mais_postagens`;
/*!50001 DROP VIEW IF EXISTS `users_com_mais_postagens`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `users_com_mais_postagens` AS SELECT 
 1 AS `id`,
 1 AS `foto`,
 1 AS `userName`,
 1 AS `posts`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `four_days`
--

DROP TABLE IF EXISTS `four_days`;
/*!50001 DROP VIEW IF EXISTS `four_days`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `four_days` AS SELECT 
 1 AS `COUNT(id)`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `one_day`
--

DROP TABLE IF EXISTS `one_day`;
/*!50001 DROP VIEW IF EXISTS `one_day`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `one_day` AS SELECT 
 1 AS `COUNT(id)`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `posts_com_mais_interacoes`
--

DROP TABLE IF EXISTS `posts_com_mais_interacoes`;
/*!50001 DROP VIEW IF EXISTS `posts_com_mais_interacoes`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `posts_com_mais_interacoes` AS SELECT 
 1 AS `id`,
 1 AS `userName`,
 1 AS `foto`,
 1 AS `userId`,
 1 AS `date`,
 1 AS `likes`,
 1 AS `comentarios`,
 1 AS `total`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `three_days`
--

DROP TABLE IF EXISTS `three_days`;
/*!50001 DROP VIEW IF EXISTS `three_days`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `three_days` AS SELECT 
 1 AS `COUNT(id)`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `usuarios_com_mais_seguidores`
--

DROP TABLE IF EXISTS `usuarios_com_mais_seguidores`;
/*!50001 DROP VIEW IF EXISTS `usuarios_com_mais_seguidores`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `usuarios_com_mais_seguidores` AS SELECT 
 1 AS `id`,
 1 AS `userName`,
 1 AS `date`,
 1 AS `foto`,
 1 AS `seguidores`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `two_days`
--

DROP TABLE IF EXISTS `two_days`;
/*!50001 DROP VIEW IF EXISTS `two_days`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `two_days` AS SELECT 
 1 AS `COUNT(id)`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `five_days`
--

DROP TABLE IF EXISTS `five_days`;
/*!50001 DROP VIEW IF EXISTS `five_days`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `five_days` AS SELECT 
 1 AS `COUNT(id)`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `porcentagem_usuarios_sob_ultimo_mes`
--

DROP TABLE IF EXISTS `porcentagem_usuarios_sob_ultimo_mes`;
/*!50001 DROP VIEW IF EXISTS `porcentagem_usuarios_sob_ultimo_mes`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `porcentagem_usuarios_sob_ultimo_mes` AS SELECT 
 1 AS `porcentagem`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `post_four`
--

DROP TABLE IF EXISTS `post_four`;
/*!50001 DROP VIEW IF EXISTS `post_four`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `post_four` AS SELECT 
 1 AS `id`,
 1 AS `posts`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `usuarios_por_mes_ano`
--

DROP TABLE IF EXISTS `usuarios_por_mes_ano`;
/*!50001 DROP VIEW IF EXISTS `usuarios_por_mes_ano`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `usuarios_por_mes_ano` AS SELECT 
 1 AS `mes_ano`,
 1 AS `usuarios`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `post_one_day`
--

DROP TABLE IF EXISTS `post_one_day`;
/*!50001 DROP VIEW IF EXISTS `post_one_day`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `post_one_day` AS SELECT 
 1 AS `id`,
 1 AS `posts`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `usuarios_mes_passado`
--

/*!50001 DROP VIEW IF EXISTS `usuarios_mes_passado`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `usuarios_mes_passado` AS select count(`user`.`id`) AS `usuarios` from `user` where (`user`.`created_at` between (now() - interval 2 month) and (now() - interval 1 month)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `usuarios_mes_atual`
--

/*!50001 DROP VIEW IF EXISTS `usuarios_mes_atual`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `usuarios_mes_atual` AS select count(`user`.`id`) AS `usuarios` from `user` where (`user`.`created_at` between (now() - interval 1 month) and now()) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `post_three`
--

/*!50001 DROP VIEW IF EXISTS `post_three`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `post_three` AS select `u`.`id` AS `id`,count(`post`.`id`) AS `posts` from (`user` `u` left join `post` on((`u`.`id` = `post`.`user_id`))) where (`post`.`created_at` between (now() - interval 3 day) and (now() - interval 2 day)) group by `u`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `post_five`
--

/*!50001 DROP VIEW IF EXISTS `post_five`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `post_five` AS select `u`.`id` AS `id`,count(`post`.`id`) AS `posts` from (`user` `u` left join `post` on((`u`.`id` = `post`.`user_id`))) where (`post`.`created_at` between (now() - interval 5 day) and (now() - interval 4 day)) group by `u`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `post_two_days`
--

/*!50001 DROP VIEW IF EXISTS `post_two_days`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `post_two_days` AS select `u`.`id` AS `id`,count(`post`.`id`) AS `posts` from (`user` `u` left join `post` on((`u`.`id` = `post`.`user_id`))) where (`post`.`created_at` between (now() - interval 2 day) and (now() - interval 1 day)) group by `u`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `users_com_mais_postagens`
--

/*!50001 DROP VIEW IF EXISTS `users_com_mais_postagens`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `users_com_mais_postagens` AS select `u`.`id` AS `id`,`u`.`foto` AS `foto`,`u`.`userName` AS `userName`,(select count(`p`.`id`) from (`post` `p` join `user` on(((`user`.`id` = `p`.`user_id`) and (`user`.`id` = `u`.`id`))))) AS `posts` from `user` `u` having (`posts` > 0) order by `posts` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `four_days`
--

/*!50001 DROP VIEW IF EXISTS `four_days`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `four_days` AS select count(`post`.`id`) AS `COUNT(id)` from `post` where (`post`.`created_at` between (now() - interval 4 day) and (now() - interval 3 day)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `one_day`
--

/*!50001 DROP VIEW IF EXISTS `one_day`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `one_day` AS select count(`post`.`id`) AS `COUNT(id)` from `post` where (`post`.`created_at` between (now() - interval 1 day) and now()) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `posts_com_mais_interacoes`
--

/*!50001 DROP VIEW IF EXISTS `posts_com_mais_interacoes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `posts_com_mais_interacoes` AS select `p`.`id` AS `id`,`u`.`userName` AS `userName`,`u`.`foto` AS `foto`,`u`.`id` AS `userId`,date_format(`p`.`created_at`,'%d %b') AS `date`,(select count(`i`.`id`) from (`interacao` `i` join `post` `sub_p` on(((`sub_p`.`id` = `i`.`post_id`) and (`sub_p`.`id` = `p`.`id`)))) where (`i`.`tipo` = 'like')) AS `likes`,(select count(`i`.`id`) from (`interacao` `i` join `post` `sub_p` on(((`sub_p`.`id` = `i`.`post_id`) and (`sub_p`.`id` = `p`.`id`)))) where (`i`.`tipo` = 'comentario')) AS `comentarios`,(select count(`i`.`id`) from (`interacao` `i` join `post` `sub_p` on(((`sub_p`.`id` = `i`.`post_id`) and (`sub_p`.`id` = `p`.`id`))))) AS `total` from (`post` `p` join `user` `u` on((`u`.`id` = `p`.`user_id`))) having (`total` > 0) order by `total` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `three_days`
--

/*!50001 DROP VIEW IF EXISTS `three_days`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `three_days` AS select count(`post`.`id`) AS `COUNT(id)` from `post` where (`post`.`created_at` between (now() - interval 3 day) and (now() - interval 2 day)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `usuarios_com_mais_seguidores`
--

/*!50001 DROP VIEW IF EXISTS `usuarios_com_mais_seguidores`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `usuarios_com_mais_seguidores` AS select `u`.`id` AS `id`,`u`.`userName` AS `userName`,date_format(`u`.`created_at`,'%d %b') AS `date`,`u`.`foto` AS `foto`,(select count(`s`.`seguido_id`) from (`user` join `seguidor` `s` on(((`s`.`seguido_id` = `user`.`id`) and (`user`.`id` = `u`.`id`)))) where (`s`.`seguidor_id` <> `u`.`id`)) AS `seguidores` from `user` `u` having (`seguidores` > 0) order by `seguidores` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `two_days`
--

/*!50001 DROP VIEW IF EXISTS `two_days`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `two_days` AS select count(`post`.`id`) AS `COUNT(id)` from `post` where (`post`.`created_at` between (now() - interval 2 day) and (now() - interval 1 day)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `five_days`
--

/*!50001 DROP VIEW IF EXISTS `five_days`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `five_days` AS select count(`post`.`id`) AS `COUNT(id)` from `post` where (`post`.`created_at` between (now() - interval 5 day) and (now() - interval 4 day)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `porcentagem_usuarios_sob_ultimo_mes`
--

/*!50001 DROP VIEW IF EXISTS `porcentagem_usuarios_sob_ultimo_mes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `porcentagem_usuarios_sob_ultimo_mes` AS select round(((((select `usuarios_mes_atual`.`usuarios` from `usuarios_mes_atual`) * 100) / (select `usuarios_mes_passado`.`usuarios` from `usuarios_mes_passado`)) - 100),0) AS `porcentagem` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `post_four`
--

/*!50001 DROP VIEW IF EXISTS `post_four`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `post_four` AS select `u`.`id` AS `id`,count(`post`.`id`) AS `posts` from (`user` `u` left join `post` on((`u`.`id` = `post`.`user_id`))) where (`post`.`created_at` between (now() - interval 4 day) and (now() - interval 3 day)) group by `u`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `usuarios_por_mes_ano`
--

/*!50001 DROP VIEW IF EXISTS `usuarios_por_mes_ano`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `usuarios_por_mes_ano` AS select date_format(`user`.`created_at`,'%m-%Y') AS `mes_ano`,count(`user`.`id`) AS `usuarios` from `user` group by `mes_ano` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `post_one_day`
--

/*!50001 DROP VIEW IF EXISTS `post_one_day`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`hugo`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `post_one_day` AS select `u`.`id` AS `id`,count(`post`.`id`) AS `posts` from (`user` `u` left join `post` on((`u`.`id` = `post`.`user_id`))) where (`post`.`created_at` between (now() - interval 1 day) and now()) group by `u`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-28 22:42:22
