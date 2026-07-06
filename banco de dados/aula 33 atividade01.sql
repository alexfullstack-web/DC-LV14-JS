use produtos;
-- 1) Liste o nome de todos os itens e o nome dos seus respectivos produtores

select
    i.nomeitem as item,
    p.nomeprodutor as produtor
from venda v
inner join item i
    on v.fkitem = i.iditem
inner join produtor p
    on v.fkprod = p.idprod;

-- 2) Exiba o número da nota fiscal, data de emissão e o nome dos itens vendidos nela. 
select
    n.numeronf,
    n.datanf,
    i.nomeitem as item
from venda v
inner join nf n
    on v.fknf = n.idnf
inner join item i
    on v.fkitem = i.iditem;
-- 3) Mostre o nome dos produtores e o nome dos itens que eles vendem
select
    p.nomeprodutor as produtor,
    i.nomeitem as item
from venda v
inner join produtor p
    on v.fkprod = p.idprod
inner join item i
    on v.fkitem = i.iditem;
    
-- 4)Liste todos os itens mostrando o nome do produtor (mesmo que o item ainda não tenha produtor)
select
    i.nomeitem as item,
    p.nomeprodutor as produtor
from item i
left join venda v
    on i.iditem = v.fkitem
left join produtor p
    on v.fkprod = p.idprod;
-- 5) Mostre o número da nota fiscal e o nome dos itens vendidos, mas liste também as notas que não tiveram nenhum item vendido
select
    n.numeronf,
    i.nomeitem as item
from nf n
left join venda v
    on n.idnf = v.fknf
left join item i
    on v.fkitem = i.iditem;

-- 6) Exiba o nome dos produtores e os itens que eles produzem, mostrando também os que ainda não produzem nenhum item
select
    p.nomeprodutor as produtor,
    i.nomeitem as item
from produtor p
left join venda v
    on p.idprod = v.fkprod
left join item i
    on v.fkitem = i.iditem;