create database if not exists projetoBTS;
use projetoBTS;
-- drop database projetoBTS;

create table membros_bts (
    idMembro int primary key auto_increment,
    nome varchar(45) not null
);

insert into membros_bts 
values	(null, 'Kim Namjoon'),
		(null, 'Kim Seokjin'),
		(null, 'Min Yoongi'),
        (null, 'Jung Hoseok'),
		(null, 'Park Jimin'),
		(null, 'Kim Taehyung'),
		(null, 'Jeon Jungkook');
-- drop table membros_bts;

create table usuarios (
    idUsuario int primary key auto_increment,
    nomeUsuario varchar(100) not null unique,
    email varchar(100) not null unique,
    senha varchar(100) not null,
    fkMembro_fav int,
    foreign key (fkMembro_fav) references membros_bts(idMembro)
);
-- drop table usuarios;

create table musicas (
    idMusica int primary key auto_increment,
    titulo varchar(100) not null
);
-- drop table musicas;

insert into musicas 
values	(null, 'Magic Shop'),
		(null, 'The Truth Untold'),
		(null, 'Mikrokosmos');
-- drop table musicas;

create table comentarios (
    idComentarios int primary key auto_increment,
    comentario text,
    nota int,
    dtComentario datetime,
    fkUsuario int not null,
    fkMusica int,
    foreign key (fkUsuario) references usuarios(idUsuario),
    foreign key (fkMusica) references musicas(idMusica)
);
-- drop table comentarios;

-- select da tabela usuarios
select us.idUsuario as ID,
	   us.nomeUsuario as 'Nome de Usuário',
       us.fkMembro_fav as 'Membro favorito',
       us.email as Email,
       us.senha as Senha
from usuarios as us;

-- para ver a quantidade de usuários cadastrados
select count(idUsuario) as 'Quantidade de usuários' from usuarios;

select us.nomeUsuario as 'Nome de Usuário',
       us.fkMembro_fav as 'Membro favorito'
from usuarios as us where fkMembro_fav = 5;

select us.nomeUsuario as 'Nome de Usuário',
       us.fkMembro_fav as 'Membro favorito'
from usuarios as us where fkMembro_fav = 7;

select * from membros_bts;
select * from musicas;
select * from comentarios;

-- opções de selects para o gráfico de membros
select	membts.nome as 'Membro do BTS',
		count(us.fkMembro_fav) as 'Quantidade que ele foi escolhido pelos usuários'
from membros_bts as membts
left join usuarios as us on membts.idMembro = us.fkMembro_fav
group by membts.nome;

select membts.nome as 'Membro do BTS', 
               count(us.fkMembro_fav) AS 'Quantidade de votos'
        from membros_bts as membts
        left join usuarios as us on membts.idMembro = us.fkMembro_fav
        group by membts.nome;