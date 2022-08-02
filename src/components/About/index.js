import profilePhoto from "../../assets/images/small-cat.png";

export default function About() {
    return (
        <section>
            <h1 id="about">My Story</h1>
            <img src={profilePhoto} style={{ width: "100%" }} alt="profile" />
            <p>I'm a programming newb. I study hard and build cool stuff. Watch me go!</p>
        </section>
    );
}