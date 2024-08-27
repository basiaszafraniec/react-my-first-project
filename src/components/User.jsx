export default function User({ name, mail, image }) {
    return (
        <div className="user-card">
            <h2>hi {name}</h2>
            <p>cool email -  {mail}</p>
            <img src={image} alt={name} />
        </div>
    )

}