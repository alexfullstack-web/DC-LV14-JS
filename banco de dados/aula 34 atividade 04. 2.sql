use produtos;

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

update produtor
set endereco = 'Av. das Nações Unidas, 12901',
    cidade = 'São Paulo',
    uf = 'SP'
where idprod = 1;

update produtor
set endereco = 'Rua Gomes de Carvalho, 1609',
    cidade = 'São Paulo',
    uf = 'SP'
where idprod = 2;

update produtor
set endereco = 'Av. Paulista, 2000',
    cidade = 'São Paulo',
    uf = 'SP'
where idprod = 3;

update produtor
set endereco = 'Av. Presidente Vargas, 620',
    cidade = 'Rio de Janeiro',
    uf = 'RJ'
where idprod = 4;

update produtor
set endereco = 'Rua das Palmeiras, 50',
    cidade = 'Campinas',
    uf = 'SP'
where idprod = 5;

update venda
set desconto = 10
where fknf = 3
and fkitem = 3;