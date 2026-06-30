create database if not exists produtos;
use produtos;

create table if not exists produtor (
    idprod int auto_increment primary key,
    nomeprodutor varchar(100) not null
);

create table if not exists item (
    iditem int auto_increment primary key,
    nomeitem varchar(100) not null,
    valorunit decimal(10,2) not null
);

create table if not exists nf (
    idnf int auto_increment primary key,
    numeronf varchar(20) not null,
    datanf date not null
);

create table if not exists venda (
    idvenda int auto_increment primary key,
    fknf int not null,
    fkitem int not null,
    fkprod int not null,
    quantidade int not null,
    desconto decimal(10,2) not null default 0.00,
    foreign key (fknf) references nf(idnf),
    foreign key (fkitem) references item(iditem),
    foreign key (fkprod) references produtor(idprod)
);

insert into produtor (nomeprodutor) values
('produtor 1'),
('produtor 2'),
('produtor 3'),
('produtor 4'),
('produtor 5');

insert into item (nomeitem, valorunit) values
('item 1',10.00),
('item 2',20.00),
('item 3',30.00),
('item 4',40.00),
('item 5',50.00);

insert into nf (numeronf, datanf) values
('1001','2026-01-01'),
('1002','2026-01-02'),
('1003','2026-01-03'),
('1004','2026-01-04'),
('1005','2026-01-05'),
('1006','2026-01-06'),
('1007','2026-01-07');

insert into venda (fknf, fkitem, fkprod, quantidade, desconto) values
(1,1,1,10,5),
(1,2,2,3,0),
(1,3,3,2,0),
(1,4,4,1,0),
(1,5,5,1,0),

(2,1,3,4,0),
(2,2,4,5,0),
(2,3,5,7,0),

(3,1,1,5,0),
(3,2,4,4,0),
(3,3,5,5,0),
(3,4,2,7,0),

(4,1,5,10,15),
(4,2,4,12,5),
(4,3,1,13,5),
(4,4,2,15,5),

(5,1,3,3,0),
(5,2,5,6,0),

(6,1,1,22,15),
(6,2,3,25,20),

(7,1,1,10,3),
(7,2,2,10,4),
(7,3,3,10,4),
(7,4,5,10,1);

update item
set valorunit = valorunit - 2
where iditem = 5;

alter table produtor
add endereco varchar(100),
add cidade varchar(50),
add uf char(2);

alter table produtor
add endereco varchar(100),
add cidade varchar(50),
add uf char(2);

