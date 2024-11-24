use pico_backup;

CREATE TABLE user (
  id int AUTO_INCREMENT PRIMARY KEY,
  nome varchar(80) NOT NULL,
  userName varchar(20) DEFAULT NULL UNIQUE,
  dtNasc date NOT NULL,
  email varchar(45) NOT NULL UNIQUE,
  password varchar(45) NOT NULL,
  nivel_permissao tinyint DEFAULT '0',
  foto varchar(150) DEFAULT NULL,
  fotoCapa varchar(500) DEFAULT NULL,
  created_at datetime DEFAULT now(),
  CONSTRAINT chkNivelPermissao CHECK ((nivel_permissao in (0,1)))
); 

CREATE TABLE seguidor (
  seguido_id int NOT NULL,
  seguidor_id int NOT NULL,
  status tinyint DEFAULT '1',
  dtHora datetime DEFAULT CURRENT_TIMESTAMP,
  visto datetime DEFAULT NULL,
  CONSTRAINT pkSeguidor PRIMARY KEY (seguido_id,seguidor_id),
  CONSTRAINT fkSeguido FOREIGN KEY (seguido_id) REFERENCES user(id),
  CONSTRAINT fkSeguidor FOREIGN KEY (seguidor_id) REFERENCES user (id)
);

CREATE TABLE post (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  descricao varchar(255) DEFAULT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT NULL,
  user_id int NOT NULL,
  post_compartilhado_id int DEFAULT NULL,
  CONSTRAINT fkPostCompartilhado FOREIGN KEY (post_compartilhado_id) REFERENCES post (id),
  CONSTRAINT fkUserPost FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE anexos_post (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  anexo varchar(80) NOT NULL,
  tipo varchar(20) NOT NULL,
  visibilidade tinyint DEFAULT '1',
  post_id int NOT NULL,
  CONSTRAINT fkPostAnexo FOREIGN KEY (post_id) REFERENCES post (id),
  CONSTRAINT chkTipo CHECK ((tipo in ('audio','imagem','video')))
);

CREATE TABLE interacao (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dtHora datetime DEFAULT now(),
  tipo varchar(20) DEFAULT NULL,
  descricao varchar(255) DEFAULT NULL,
  user_id int NOT NULL,
  post_id int NOT NULL,
  visto datetime DEFAULT NULL,
  CONSTRAINT fkPostInteracao FOREIGN KEY (post_id) REFERENCES post (id),
  CONSTRAINT fkUserInteracao FOREIGN KEY (user_id) REFERENCES user (id),
  CONSTRAINT chkTipoInteracao CHECK ((tipo in ('like','comentario','compartilhamento')))
); 




 



