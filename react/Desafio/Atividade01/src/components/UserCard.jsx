export default function UserCard({ name, profession, image, online }) {
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{profession}</p>
            {online ? "Online" : "Offline"}
        </div>
    );
}