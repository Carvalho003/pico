-- todos os usuarios
SELECT COUNT(id) as usuarios FROM user;

-- crescimento de usuarios em relação ao ultimo mes 
select *  from porcentagem_usuarios_sob_ultimo_mes;


-- mes com mais cadastros
SELECT mes_ano  FROM usuarios_por_mes_ano
WHERE usuarios = (SELECT MAX(usuarios) FROM usuarios_por_mes_ano);


-- usuarios hoje 
SELECT COUNT(id) as usuarios FROM user WHERE created_at BETWEEN DATE_SUB(now(), INTERVAL 1 DAY) AND now();

-- grafico posts nos ultimos cinco dias 

SELECT (select * from five_days) as five,
(select * from four_days) as four,
(select * from three_days) as three,
(select * from two_days) as two, 
(select * from one_day) as one;

-- grafico media de posts por usuario nos ultimos cinco dias

select 
(select round(avg(posts), 1) from post_one_day) as one,
(select round(avg(posts), 1) from post_two_days) as two,
(select round(avg(posts), 1) from post_three) as three,
(select round(avg(posts), 1) from post_four) as four,
(select round(avg(posts), 1) from post_five) as five;

-- usuarios com mais seguidores
select * from usuarios_com_mais_seguidores;

-- posts com mais interações

SELECT * FROM posts_com_mais_interacoes;


-- usuarios com mais postagens
select * from users_com_mais_postagens;