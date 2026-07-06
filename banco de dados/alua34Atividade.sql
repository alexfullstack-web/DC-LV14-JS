use escolalive14;

-- 1) mostrar todos os alunos e o nome de suas disciplinas, incluindo os que estão sem disciplina matriculada. (left join)
select
    a.nome as aluno,
    d.nome as disciplina
from alunos a
left join matriculas m
    on a.id = m.aluno_id
left join disciplinas d
    on m.disciplina_id = d.id
order by a.nome, d.nome;

-- 2) mostrar as disciplinas com os nomes dos professores. incluir apenas as disciplinas com professores. (inner join)
select
    d.nome as disciplina,
    p.nome as professor
from disciplinas d
inner join professores p
    on d.professor_id = p.id
order by d.nome;

-- 3) faça uma seleção com o nome de todos os alunos e suas médias, inclua também o nome da disciplina e a quantidade de faltas. (inner join + coluna calculada)
select
    a.nome as aluno,
    d.nome as disciplina,
    m.nota1,
    m.nota2,
    (m.nota1 + m.nota2) / 2 as media,
    m.faltas
from matriculas m
inner join alunos a
    on m.aluno_id = a.id
inner join disciplinas d
    on m.disciplina_id = d.id
order by media desc, a.nome;

-- 4) realizar a contagem de quantos alunos existem por disciplina, mostrando o nome da disciplina. (inner join + count + group by)
select
    d.nome as disciplina,
    count(m.aluno_id) as quantidade_alunos
from disciplinas d
inner join matriculas m
    on d.id = m.disciplina_id
group by d.id, d.nome
order by quantidade_alunos desc, d.nome;