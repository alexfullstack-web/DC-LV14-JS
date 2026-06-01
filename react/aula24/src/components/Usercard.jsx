/*Atividade 1 — Fácil
Card de Perfil de Usuário
Objetivo
Nesta atividade você irá praticar:

Criação de componentes
Uso de props
Renderização condicional
Renderização de listas com .map()
Enunciado
Crie uma aplicação React que exiba cards de usuários.

Cada usuário deverá possuir:

nome
profissão
imagem
status online (true ou false)
Sua aplicação deverá:

Criar um componente chamado UserCard
Passar os dados utilizando props
Exibir:
imagem
nome
profissão
Mostrar:
"Online" se o usuário estiver online
"Offline" caso contrário*/

export function UserCard({ name, profession, image, online }) {
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{profession}</p>
            {online ? "Online" : "Offline"}
        </div>
    );
}