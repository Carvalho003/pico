

-- todos os usuarios do mês passado
CREATE VIEW usuarios_mes_passado AS 
SELECT COUNT(id) as usuarios FROM user WHERE created_at BETWEEN DATE_SUB(now(), INTERVAL 2 MONTH) AND 
DATE_SUB(NOW(), INTERVAL 1 MONTH);

-- todos os usuarios do mês atual
CREATE VIEW usuarios_mes_atual AS 
SELECT COUNT(id) as usuarios FROM user WHERE created_at 
BETWEEN DATE_SUB(now(), INTERVAL 1 MONTH) AND now();

CREATE VIEW porcentagem_usuarios_sob_ultimo_mes AS 
select ROUND(((select (usuarios) from usuarios_mes_atual ) * 100) / (select usuarios from usuarios_mes_passado) - 100) as porcentagem;





CREATE VIEW usuarios_por_mes_ano AS 
SELECT DATE_FORMAT(created_at, '%m-%Y') AS mes_ano, COUNT(id) as usuarios FROM user
GROUP BY mes_ano;







-- GRAFICOS CONTANDO PUBLICAÇÕES POR DIA, VIEWS

CREATE VIEW five_days AS 
SELECT COUNT(id) FROM post
WHERE created_at BETWEEN DATE_SUB(now(), INTERVAL 5 DAY) AND DATE_SUB(now(), INTERVAL 4 DAY);


CREATE VIEW four_days AS 
SELECT COUNT(id) FROM post
WHERE created_at BETWEEN DATE_SUB(now(), INTERVAL 4 DAY) AND DATE_SUB(now(), INTERVAL 3 DAY);

CREATE VIEW three_days AS 
SELECT COUNT(id) FROM post
WHERE created_at BETWEEN DATE_SUB(now(), INTERVAL 3 DAY) AND DATE_SUB(now(), INTERVAL 2 DAY);

CREATE VIEW two_days AS 
SELECT COUNT(id) FROM post
WHERE created_at BETWEEN DATE_SUB(now(), INTERVAL 2 DAY) AND DATE_SUB(now(), INTERVAL 1 DAY);


CREATE VIEW one_day AS 
SELECT COUNT(id) FROM post
WHERE created_at BETWEEN DATE_SUB(now(), INTERVAL 1 DAY) AND now();





CREATE VIEW post_five AS 
SELECT u.id, COUNT(post.id) as posts FROM post
RIGHT JOIN user u 
ON u.id = post.user_id
WHERE post.created_at BETWEEN DATE_SUB(now(), INTERVAL 5 DAY) AND DATE_SUB(now(), INTERVAL 4 DAY)
group by u.id;

CREATE VIEW post_four AS 
SELECT u.id, COUNT(post.id) as posts FROM post
RIGHT JOIN user u 
ON u.id = post.user_id
WHERE post.created_at BETWEEN DATE_SUB(now(), INTERVAL 4 DAY) AND DATE_SUB(now(), INTERVAL 3 DAY)
group by u.id;

CREATE VIEW post_three AS 
SELECT u.id, COUNT(post.id) as posts FROM post
RIGHT JOIN user u 
ON u.id = post.user_id
WHERE post.created_at BETWEEN DATE_SUB(now(), INTERVAL 3 DAY) AND DATE_SUB(now(), INTERVAL 2 DAY)
group by u.id;

CREATE VIEW post_two_days AS 
SELECT u.id, COUNT(post.id) as posts FROM post
RIGHT JOIN user u 
ON u.id = post.user_id
WHERE post.created_at BETWEEN DATE_SUB(now(), INTERVAL 2 DAY) AND DATE_SUB(now(), INTERVAL 1 DAY)
group by u.id;

CREATE VIEW post_one_day AS 
SELECT u.id, COUNT(post.id) as posts FROM post
RIGHT JOIN user u 
ON u.id = post.user_id
WHERE post.created_at BETWEEN DATE_SUB(now(), INTERVAL 1 DAY) AND now()
group by u.id;



CREATE VIEW usuarios_com_mais_seguidores AS 
SELECT u.id, u.userName, DATE_FORMAT(created_at, '%d %b') as date, u.foto,
(SELECT count(s.seguido_id) FROM user 
JOIN seguidor s 
ON s.seguido_id = user.id AND user.id = u.id
WHERE s.seguidor_id <> u.id) AS seguidores FROM user as u
HAVING seguidores > 0
ORDER BY seguidores DESC
;



CREATE VIEW posts_com_mais_interacoes AS 
SELECT p.id, u.userName, u.foto, u.id as userId,  DATE_FORMAT(p.created_at, '%d %b') as date, 
(SELECT COUNT(i.id) FROM interacao as i
JOIN post as sub_p 
ON sub_p.id = i.post_id AND sub_p.id = p.id
WHERE tipo = 'like') as likes,
(SELECT COUNT(i.id) FROM interacao as i
JOIN post as sub_p 
ON sub_p.id = i.post_id AND sub_p.id = p.id
WHERE tipo = 'comentario') AS comentarios,
(SELECT COUNT(i.id) FROM interacao as i
JOIN post as sub_p 
ON sub_p.id = i.post_id AND sub_p.id = p.id
) AS total
 FROM post AS p
JOIN user u
ON u.id = p.user_id
having total > 0
ORDER BY total DESC
;


CREATE VIEW users_com_mais_postagens AS 
SELECT u.id, u.foto, u.userName, 
(SELECT COUNT(p.id) FROM post as p 
JOIN user 
ON user.id = p.user_id AND user.id = u.id) as posts FROM user as u
HAVING posts > 0
ORDER BY posts DESC;








