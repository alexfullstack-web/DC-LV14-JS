use produtos;
select * from item;

select nomeprodutor
from produtor;

select nomeitem, valorunit
from item
where valorunit > 48;

select nomeprodutor
from produtor
where cidade = 'Fortaleza';

select numeronf as numero, datanf as data
from nf
where datanf = '2026-01-03';